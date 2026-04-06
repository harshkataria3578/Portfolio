(function () {
  const cfg = window.PORTFOLIO_CONFIG;
  if (!cfg) return;

  const site = cfg.site || {};
  const page = document.body.getAttribute("data-page") || "";

  const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initReveal() {
    const nodes = document.querySelectorAll("[data-reveal]");
    if (prefersReducedMotion()) {
      document.documentElement.classList.add("reduced-motion");
      nodes.forEach((el) => el.classList.add("is-inview"));
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-inview");
          obs.unobserve(entry.target);
        });
      },
      {
        root: null,
        rootMargin: "0px 0px 12% 0px",
        threshold: [0, 0.02, 0.06],
      }
    );

    nodes.forEach((el) => io.observe(el));
  }

  function initHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    let ticking = false;
    function update() {
      header.classList.toggle("is-scrolled", window.scrollY > 40);
      ticking = false;
    }
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
    update();
  }

  function initHeroParallax() {
    if (prefersReducedMotion()) return;
    const root = document.getElementById("hero-parallax-root");
    const hero = document.getElementById("hero-root");
    if (!root || !hero) return;
    const factor = 0.14;
    let ticking = false;
    function update() {
      ticking = false;
      const scrollY = window.scrollY;
      const heroTop = hero.offsetTop;
      const heroH = hero.offsetHeight;
      const vh = window.innerHeight;
      if (scrollY + vh < heroTop || scrollY > heroTop + heroH) {
        root.style.transform = "translate3d(0,0,0)";
        return;
      }
      const y = Math.min(scrollY, 160) * factor;
      root.style.transform = `translate3d(0, ${y}px, 0)`;
    }
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
    update();
  }

  function initFxCanvas() {
    if (prefersReducedMotion()) return;
    const canvas = document.getElementById("fx-canvas");
    const hero = document.getElementById("hero-root");
    if (!canvas || !hero) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const coarse =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(pointer: coarse)").matches;
    const fx = cfg.fx || {};
    const count = Math.min(
      120,
      Math.max(40, Number(fx.particleCount) || 72)
    );

    const particles = [];
    const colors = ["rgba(143,245,255,", "rgba(172,137,255,"];
    let trail = [];
    let mx = 0;
    let my = 0;
    let pendingPointer = false;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let running = true;

    function resize() {
      const r = hero.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      if (w < 1 || h < 1) return;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seedParticles() {
      if (w < 8 || h < 8) return;
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          r: Math.random() * 1.6 + 0.35,
          a: Math.random() * 0.32 + 0.12,
          ci: i % 2,
        });
      }
    }

    resize();
    seedParticles();

    if (typeof ResizeObserver !== "undefined") {
      new ResizeObserver(() => {
        resize();
        seedParticles();
      }).observe(hero);
    }

    if (!coarse) {
      window.addEventListener(
        "pointermove",
        (e) => {
          const r = canvas.getBoundingClientRect();
          if (
            e.clientX < r.left ||
            e.clientX > r.right ||
            e.clientY < r.top ||
            e.clientY > r.bottom
          ) {
            return;
          }
          mx = e.clientX - r.left;
          my = e.clientY - r.top;
          pendingPointer = true;
        },
        { passive: true }
      );
    }

    document.addEventListener("visibilitychange", () => {
      running = !document.hidden;
    });

    function step() {
      requestAnimationFrame(step);
      if (!running || document.hidden) return;
      if (w < 8 || h < 8) return;
      if (particles.length === 0) seedParticles();
      if (particles.length === 0) return;

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.fillStyle = colors[p.ci] + p.a + ")";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!coarse && pendingPointer) {
        trail.push({ x: mx, y: my, life: 1 });
        pendingPointer = false;
      }
      trail = trail
        .map((t) => ({ x: t.x, y: t.y, life: t.life - 0.035 }))
        .filter((t) => t.life > 0);
      if (trail.length > 12) trail = trail.slice(-12);

      if (trail.length > 1) {
        ctx.lineWidth = 1.75;
        ctx.lineCap = "round";
        for (let i = 1; i < trail.length; i++) {
          const a = trail[i - 1];
          const b = trail[i];
          ctx.strokeStyle = `rgba(143,245,255,${b.life * 0.4})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(step);
  }

  function initArticleFxCanvas() {
    if (prefersReducedMotion()) return;
    const canvas = document.getElementById("fx-canvas-article");
    const article = document.querySelector(".article-body-live");
    if (!canvas || !article) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const coarse =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(pointer: coarse)").matches;
    const fx = cfg.fx || {};
    const base = Math.min(
      90,
      Math.max(28, Math.floor((Number(fx.particleCount) || 72) * 0.45))
    );

    const particles = [];
    const colors = [
      "rgba(143,245,255,",
      "rgba(172,137,255,",
      "rgba(255,107,152,",
    ];
    let trail = [];
    let mx = 0;
    let my = 0;
    let pendingPointer = false;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let running = true;

    function resize() {
      const r = article.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      if (w < 1 || h < 1) return;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seedParticles() {
      if (w < 8 || h < 8) return;
      particles.length = 0;
      for (let i = 0; i < base; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.32,
          vy: (Math.random() - 0.5) * 0.32,
          r: Math.random() * 1.35 + 0.25,
          a: Math.random() * 0.22 + 0.08,
          ci: i % 3,
        });
      }
    }

    resize();
    seedParticles();

    if (typeof ResizeObserver !== "undefined") {
      new ResizeObserver(() => {
        resize();
        seedParticles();
      }).observe(article);
    }

    if (!coarse) {
      window.addEventListener(
        "pointermove",
        (e) => {
          const r = canvas.getBoundingClientRect();
          if (
            e.clientX < r.left ||
            e.clientX > r.right ||
            e.clientY < r.top ||
            e.clientY > r.bottom
          ) {
            return;
          }
          mx = e.clientX - r.left;
          my = e.clientY - r.top;
          pendingPointer = true;
        },
        { passive: true }
      );
    }

    document.addEventListener("visibilitychange", () => {
      running = !document.hidden;
    });

    function step() {
      requestAnimationFrame(step);
      if (!running || document.hidden) return;
      if (w < 8 || h < 8) return;
      if (particles.length === 0) seedParticles();
      if (particles.length === 0) return;

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.fillStyle = colors[p.ci] + p.a + ")";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!coarse && pendingPointer) {
        trail.push({ x: mx, y: my, life: 1 });
        pendingPointer = false;
      }
      trail = trail
        .map((t) => ({ x: t.x, y: t.y, life: t.life - 0.04 }))
        .filter((t) => t.life > 0);
      if (trail.length > 10) trail = trail.slice(-10);

      if (trail.length > 1) {
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        for (let i = 1; i < trail.length; i++) {
          const a = trail[i - 1];
          const b = trail[i];
          ctx.strokeStyle = `rgba(172,137,255,${b.life * 0.35})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(step);
  }

  function initLottieIfConfigured() {
    if (prefersReducedMotion()) return;
    const fx = cfg.fx || {};
    const url = fx.lottieUrl && String(fx.lottieUrl).trim();
    if (!url) return;
    const slot = document.getElementById("lottie-slot");
    if (!slot) return;

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/lottie-web@5.12.2/build/player/lottie.min.js";
    script.async = true;
    script.onload = () => {
      const Lottie = window.lottie || window.bodymovin;
      if (
        typeof Lottie !== "object" ||
        typeof Lottie.loadAnimation !== "function"
      )
        return;
      Lottie.loadAnimation({
        container: slot,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: url,
      });
    };
    document.head.appendChild(script);
  }

  function embedUrl(provider, id) {
    if (provider === "vimeo") {
      return `https://player.vimeo.com/video/${id}?dnt=1`;
    }
    return `https://www.youtube-nocookie.com/embed/${id}?rel=0`;
  }

  function escapeHtml(s) {
    const d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function slugify(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  }

  function setDocumentMeta(title, description) {
    if (title) document.title = title;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
  }

  function setMetaFromEntry(e, titleSuffix) {
    const author = e.author || "Animator";
    const suffix = titleSuffix || site.titleSuffix || "Portfolio";
    setDocumentMeta(
      `${e.title || "Work"} — ${author}`,
      e.excerpt || site.defaultDescription || ""
    );

    const badge = document.getElementById("entry-badge");
    const title = document.getElementById("entry-title");
    const excerpt = document.getElementById("entry-excerpt");
    const by = document.getElementById("entry-byline");

    if (badge) badge.textContent = e.badge || "Portfolio";
    if (title) title.textContent = e.title || "Portfolio";
    if (excerpt) excerpt.textContent = e.excerpt || "";

    if (by) {
      const hasByline = !!(
        (e.author && String(e.author).trim()) ||
        e.authorUrl ||
        (e.context && String(e.context).trim()) ||
        e.date
      );
      if (!hasByline) {
        by.innerHTML = "";
      } else {
        const parts = [];
        if (e.author || e.authorUrl) {
          parts.push("by ");
          if (e.authorUrl) {
            parts.push(
              `<a href="${escapeHtml(e.authorUrl)}" class="font-semibold text-primary hover:text-primary-fixed" rel="noopener noreferrer">${escapeHtml(e.author || "")}</a>`
            );
          } else {
            parts.push(escapeHtml(e.author || ""));
          }
        }
        if (e.context) {
          if (parts.length) parts.push(" · ");
          if (e.contextUrl) {
            parts.push(
              `<a href="${escapeHtml(e.contextUrl)}" class="font-semibold text-primary hover:text-primary-fixed" rel="noopener noreferrer">${escapeHtml(e.context)}</a>`
            );
          } else {
            parts.push(escapeHtml(e.context));
          }
        }
        if (e.date) {
          parts.push(`${parts.length ? " · " : ""}${escapeHtml(e.date)}`);
        }
        by.innerHTML = parts.join("");
      }

      const cats = document.getElementById("entry-categories");
      if (cats) {
        if (e.categories && e.categories.length) {
          cats.innerHTML = e.categories
            .map(
              (c) =>
                `<span class="cat rounded-md border border-outline-variant bg-surface-container-high px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-400 transition-colors duration-300 hover:border-primary/40 hover:text-primary">${escapeHtml(c)}</span>`
            )
            .join("");
        } else {
          cats.innerHTML = "";
        }
      }
    }
  }

  function setHeroFromSlice(slice) {
    const h = slice.hero;
    const wrap = document.getElementById("hero-slot");
    const frame = document.getElementById("hero-iframe");
    if (!h || !h.id) {
      if (wrap) wrap.hidden = true;
      return;
    }
    if (frame) {
      frame.src = embedUrl(h.provider || "youtube", h.id);
      frame.title = h.title || "Video";
    }
    if (wrap) {
      wrap.hidden = false;
      wrap.setAttribute("data-reveal", "");
      wrap.style.setProperty("--reveal-delay", "330ms");
    }
  }

  function renderParagraphs(list) {
    return (list || [])
      .map(
        (p) =>
          `<p class="prose-p mb-4 text-lg leading-relaxed text-on-surface-variant last:mb-0">${escapeHtml(p)}</p>`
      )
      .join("");
  }

  function renderEmbedBlock(embed) {
    if (!embed || !embed.id) return "";
    const src = embedUrl(embed.provider || "youtube", embed.id);
    const cap = embed.caption
      ? `<figcaption class="media-cap mx-auto mt-3 max-w-2xl px-6 text-center text-sm text-zinc-500">${escapeHtml(embed.caption)}</figcaption>`
      : "";
    return `
      <figure class="media-bleed relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] my-12 w-screen max-w-[100vw]">
        <div class="frame media-frame relative mx-auto aspect-video max-w-[1200px] overflow-hidden border-y border-outline-variant/30 bg-black">
          <iframe
            class="embed absolute inset-0 h-full w-full border-0"
            src="${src}"
            title="${escapeHtml(embed.caption || "Video")}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
        ${cap}
      </figure>
    `;
  }

  function renderTech(items) {
    if (!items || !items.length) return "";
    return items
      .map((t) => {
        const img =
          t.image &&
          String(t.image).trim() &&
          `<div class="tech-fig my-3 overflow-hidden rounded-md border border-outline-variant/30 bg-surface-container-low"><img class="block h-auto w-full" src="${escapeHtml(t.image)}" alt="${escapeHtml(t.imageAlt || "")}" loading="lazy" decoding="async" /></div>`;
        const link =
          t.link &&
          String(t.link).trim() &&
          `<p class="tech-link-wrap mt-3 mb-0"><a href="${escapeHtml(t.link)}" class="font-headline text-sm font-semibold text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:text-primary-fixed" rel="noopener noreferrer">${escapeHtml(t.linkLabel || "Open link")}</a></p>`;
        return `
          <div class="tech-block glass-panel rounded-lg border border-outline-variant/10 p-5">
            <h4 class="tech-title mb-2 text-xs font-bold uppercase tracking-widest text-zinc-500">${escapeHtml(t.title)}</h4>
            ${img || ""}
            <p class="tech-cap m-0 text-sm leading-relaxed text-on-surface-variant">${escapeHtml(t.caption || "")}</p>
            ${link || ""}
          </div>
        `;
      })
      .join("");
  }

  function renderReferenceLinks(links) {
    if (!links || !links.length) return "";
    const items = links
      .filter((x) => x && x.url && String(x.url).trim())
      .map(
        (x) =>
          `<li><a href="${escapeHtml(x.url)}" class="font-headline text-sm font-semibold text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:text-primary-fixed" rel="noopener noreferrer">${escapeHtml(x.label || x.url)}</a>${x.note ? ` <span class="text-on-surface-variant font-body font-normal">${escapeHtml(x.note)}</span>` : ""}</li>`
      )
      .join("");
    if (!items) return "";
    return `
      <div class="reference-links mt-8 border-t border-outline-variant/20 pt-6">
        <h3 class="reference-links-heading mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500">Links & references</h3>
        <ul class="reference-links-list m-0 list-none space-y-3 p-0">${items}</ul>
      </div>
    `;
  }

  function renderMediaGrid(grid) {
    if (!grid || !grid.items || !grid.items.length) return "";
    const intro = grid.intro
      ? `<p class="media-grid-intro prose-p mb-6 text-lg leading-relaxed text-on-surface-variant">${escapeHtml(grid.intro)}</p>`
      : "";
    const cells = grid.items
      .filter((it) => it && it.src)
      .map((it) => {
        const capBelow = it.caption
          ? `<p class="media-grid-cap mt-2 text-center text-xs text-zinc-500">${escapeHtml(it.caption)}</p>`
          : "";
        const capFig = it.caption
          ? `<figcaption class="media-grid-cap mt-2 text-center text-xs text-zinc-500">${escapeHtml(it.caption)}</figcaption>`
          : "";
        const img = `<img class="media-grid-img block h-auto w-full rounded-md border border-outline-variant/25 bg-black/40" src="${escapeHtml(it.src)}" alt="${escapeHtml(it.alt || it.caption || "")}" loading="lazy" decoding="async" />`;
        const inner =
          it.href && String(it.href).trim()
            ? `<div class="media-grid-card m-0"><a class="block transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" href="${escapeHtml(it.href)}" rel="noopener noreferrer">${img}</a>${capBelow}</div>`
            : `<figure class="media-grid-figure m-0">${img}${capFig}</figure>`;
        return `<div class="media-grid-cell">${inner}</div>`;
      })
      .join("");
    const title = grid.title
      ? `<h3 class="media-grid-title mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500">${escapeHtml(grid.title)}</h3>`
      : "";
    return `
      <div class="media-grid-wrap mt-8">
        ${title}
        ${intro}
        <div class="media-grid">${cells}</div>
      </div>
    `;
  }

  function renderSection(sec, index) {
    const id = sec.slug || slugify(sec.heading) || `section-${index}`;
    let html = `<section class="article-section reveal-section mb-12 scroll-mt-28 rounded-xl border border-outline-variant/20 bg-surface-container-low/40 p-8 md:p-10" id="${escapeHtml(id)}" aria-labelledby="h-${index}" data-reveal>`;
    html += `<h2 class="article-h2 mb-4 font-headline text-3xl font-bold uppercase tracking-tighter text-white md:text-4xl" id="h-${index}">${escapeHtml(sec.heading)}</h2>`;
    if (sec.ornament) {
      html += `<p class="ornament mb-6 text-center text-sm tracking-widest text-zinc-500" aria-hidden="true">${escapeHtml(sec.ornament)}</p>`;
    }
    html += `<div class="prose mb-6">${renderParagraphs(sec.paragraphs)}</div>`;
    const linkBlock = renderReferenceLinks(sec.referenceLinks);
    const mediaGrids = Array.isArray(sec.mediaGrid)
      ? sec.mediaGrid
      : sec.mediaGrid
        ? [sec.mediaGrid]
        : [];
    const gridBlock = mediaGrids.map(renderMediaGrid).join("");
    if (sec.referenceLinksPosition === "after") {
      html += gridBlock + linkBlock;
    } else {
      html += linkBlock + gridBlock;
    }
    html += renderEmbedBlock(sec.embed);
    if (sec.afterEmbedParagraphs && sec.afterEmbedParagraphs.length) {
      html += `<div class="prose mb-6">${renderParagraphs(sec.afterEmbedParagraphs)}</div>`;
    }
    if (sec.bts && sec.bts.paragraphs && sec.bts.paragraphs.length) {
      html += `<h3 class="article-h3 mt-10 font-headline text-xl font-semibold text-primary md:text-2xl">${escapeHtml(sec.bts.title || "Behind the scenes")}</h3>`;
      if (sec.bts.ornament) {
        html += `<p class="ornament sm mb-4 text-center text-xs tracking-widest text-zinc-500" aria-hidden="true">${escapeHtml(sec.bts.ornament)}</p>`;
      }
      html += `<div class="prose">${renderParagraphs(sec.bts.paragraphs)}</div>`;
    }
    const tech = renderTech(sec.tech);
    if (tech) html += `<div class="tech-grid mt-8 flex flex-col gap-6">${tech}</div>`;
    html += `</section>`;
    return html;
  }

  function renderArticleSections(slice) {
    const host = document.getElementById("article-sections");
    if (!host) return;
    const sections = slice.sections || [];
    host.innerHTML = sections.length ? sections.map(renderSection).join("") : "";
  }

  function renderFinalThoughts(slice) {
    const ft = slice.finalThoughts;
    const el = document.getElementById("final-thoughts");
    if (!el) return;
    if (!ft || !ft.paragraphs || !ft.paragraphs.length) {
      el.hidden = true;
      el.innerHTML = "";
      return;
    }
    el.hidden = false;
    let html = `<h2 class="article-h2 mb-4 font-headline text-3xl font-bold uppercase tracking-tighter text-white md:text-4xl">${escapeHtml(ft.heading || "Final thoughts")}</h2>`;
    if (ft.ornament) {
      html += `<p class="ornament mb-6 text-center text-sm tracking-widest text-zinc-500" aria-hidden="true">${escapeHtml(ft.ornament)}</p>`;
    }
    html += `<div class="prose">${renderParagraphs(ft.paragraphs)}</div>`;
    el.innerHTML = html;
  }

  function renderThanksBlock(slice) {
    const t = slice.thanks;
    const el = document.getElementById("thanks-block");
    if (!el) return;
    if (!t || !t.items || !t.items.length) {
      el.hidden = true;
      el.innerHTML = "";
      return;
    }
    el.hidden = false;
    const items = t.items
      .map((item) => {
        const name = item.url
          ? `<a href="${escapeHtml(item.url)}" class="font-semibold text-primary hover:text-primary-fixed" rel="noopener noreferrer">${escapeHtml(item.name)}</a>`
          : `<span class="font-medium text-white">${escapeHtml(item.name)}</span>`;
        return `<li class="thanks-li text-lg leading-relaxed">${name}${item.detail ? `, ${escapeHtml(item.detail)}` : ""}</li>`;
      })
      .join("");
    el.innerHTML = `
      <h2 class="article-h2 mb-6 font-headline text-3xl font-bold uppercase tracking-tighter text-white md:text-4xl">${escapeHtml(t.heading || "Thanks")}</h2>
      <ul class="thanks-list m-0 list-disc space-y-3 pl-6 text-on-surface-variant">${items}</ul>
    `;
  }

  function renderTagsRow(slice) {
    const host = document.getElementById("tags-row");
    const section = host && host.closest("section");
    if (!host) return;
    const tags = slice.tags || [];
    if (!tags.length) {
      if (section) section.hidden = true;
      host.innerHTML = "";
      return;
    }
    if (section) section.hidden = false;
    host.innerHTML = tags
      .map(
        (tag) =>
          `<span class="tag rounded-md border border-outline-variant bg-surface-container-high px-3 py-2 text-xs font-bold uppercase tracking-wide text-zinc-400 transition-colors duration-300 hover:border-secondary/50 hover:text-secondary">${escapeHtml(tag)}</span>`
      )
      .join("");
  }

  function buildTocNav(slice) {
    const nav = document.getElementById("toc-nav");
    if (!nav) return;
    const sections = slice.sections || [];
    const links = [];

    sections.forEach((sec, i) => {
      const id = sec.slug || slugify(sec.heading) || `section-${i}`;
      const label = sec.heading.replace(/[⋆｡✩₊˚✧･ﾟ⊹࣪˖⭒๋࣭⭑·]/g, "").trim();
      links.push(
        `<a class="toc-link border-b-2 border-transparent pb-1 font-headline text-sm uppercase tracking-tighter text-zinc-400 transition-colors duration-300 hover:border-primary hover:text-white" href="#${escapeHtml(id)}">${escapeHtml(label || sec.heading)}</a>`
      );
    });

    if (slice.finalThoughts && slice.finalThoughts.paragraphs?.length) {
      links.push(
        `<a class="toc-link border-b-2 border-transparent pb-1 font-headline text-sm uppercase tracking-tighter text-zinc-400 transition-colors duration-300 hover:border-primary hover:text-white" href="#final-thoughts">Final thoughts</a>`
      );
    }
    if (slice.thanks && slice.thanks.items?.length) {
      links.push(
        `<a class="toc-link border-b-2 border-transparent pb-1 font-headline text-sm uppercase tracking-tighter text-zinc-400 transition-colors duration-300 hover:border-primary hover:text-white" href="#thanks-block">Thanks</a>`
      );
    }
    links.push(
      `<a class="toc-link border-b-2 border-transparent pb-1 font-headline text-sm uppercase tracking-tighter text-zinc-400 transition-colors duration-300 hover:border-primary hover:text-white" href="#contact">Contact</a>`
    );

    nav.innerHTML = links.join("");
    nav.classList.toggle("toc-loaded", links.length > 1);
  }

  function setContactLinks() {
    const L = cfg.links || {};
    [
      ["link-artstation", L.artstation],
      ["link-linkedin", L.linkedin],
      ["link-email", L.email],
    ].forEach(([id, href]) => {
      const a = document.getElementById(id);
      if (a && href) a.href = href;
    });

    const emailPlain = document.getElementById("footer-email");
    if (emailPlain && L.email) {
      const raw = String(L.email).replace(/^mailto:/i, "");
      emailPlain.textContent = raw;
      if (emailPlain.tagName === "A") emailPlain.href = L.email;
    }
  }

  function setFooter() {
    const lineEl = document.getElementById("footer-tagline");
    if (lineEl && site.footerLine) lineEl.textContent = site.footerLine;

    const cv = document.getElementById("footer-cv");
    if (cv) {
      if (site.cvUrl && String(site.cvUrl).trim()) {
        cv.hidden = false;
        cv.href = site.cvUrl;
      } else {
        cv.hidden = true;
      }
    }
  }

  function shareLink() {
    const url = window.location.href;
    const btn = document.getElementById("share-btn");
    if (!btn) return;
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(url);
        const old = btn.textContent;
        btn.textContent = "Link copied";
        setTimeout(() => {
          btn.textContent = old;
        }, 2000);
      } catch {
        window.prompt("Copy this link:", url);
      }
    });
  }

  function initLogoBrand() {
    const logos = document.querySelectorAll("[data-site-brand]");
    const text = site.name || "Portfolio";
    logos.forEach((el) => {
      el.textContent = text;
    });
  }

  function initSiteNav() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    const srOnly = toggle.querySelector(".sr-only");
    const icon = toggle.querySelector(".material-symbols-outlined");

    function setMenuOpen(open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (srOnly) srOnly.textContent = open ? "Close menu" : "Open menu";
      if (icon) icon.textContent = open ? "close" : "menu";
    }

    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      setMenuOpen(open);
    });

    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        setMenuOpen(false);
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        nav.classList.remove("is-open");
        setMenuOpen(false);
      }
    });

    window.addEventListener(
      "resize",
      () => {
        if (window.matchMedia("(min-width: 768px)").matches) {
          nav.classList.remove("is-open");
          setMenuOpen(false);
        }
      },
      { passive: true }
    );

    const map = {
      "hub-portfolio": 'a[data-nav="portfolio"]',
      "hub-games": 'a[data-nav="games"]',
      "hub-about": 'a[data-nav="about"]',
    };
    const sel = map[page];
    if (sel) {
      const cur = nav.querySelector(sel);
      if (cur) cur.setAttribute("aria-current", "page");
    }
  }

  function bindInPageHashLinks() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href").slice(1);
        if (!id) return;
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({
            behavior: prefersReducedMotion() ? "auto" : "smooth",
            block: "start",
          });
        }
      });
    });
  }

  function renderFullEntry(slice) {
    const entry = slice.entry || {};
    setMetaFromEntry(entry, site.titleSuffix);
    setHeroFromSlice(slice);
    buildTocNav(slice);
    renderArticleSections(slice);
    renderFinalThoughts(slice);
    renderThanksBlock(slice);
    renderTagsRow(slice);
  }

  function initHubPortfolio() {
    const hub = cfg.portfolioHub || {};
    setDocumentMeta(
      `${hub.hubTitle || "Portfolio"} — ${site.name || "Portfolio"}`,
      site.defaultDescription || ""
    );

    const hubTitle = document.getElementById("hub-page-title");
    if (hubTitle)
      hubTitle.textContent = hub.worksHeading || "Portfolio pieces";

    const hubIntro = document.getElementById("hub-intro");
    if (hubIntro) {
      if (hub.hubIntro && String(hub.hubIntro).trim()) {
        hubIntro.textContent = hub.hubIntro;
        hubIntro.hidden = false;
      } else {
        hubIntro.textContent = "";
        hubIntro.hidden = true;
      }
    }

    const badge = document.getElementById("entry-badge");
    if (badge) badge.textContent = site.role || "Animator";

    const title = document.getElementById("entry-title");
    if (title) title.textContent = hub.hubTitle || "Portfolio";

    const excerpt = document.getElementById("entry-excerpt");
    if (excerpt && hub.hubIntro) excerpt.textContent = hub.hubIntro;

    const by = document.getElementById("entry-byline");
    if (by) by.innerHTML = "";

    const cats = document.getElementById("entry-categories");
    if (cats) cats.innerHTML = "";

    const reel = hub.reel;
    const wrap = document.getElementById("hero-slot");
    const frame = document.getElementById("hero-iframe");
    if (reel && reel.id && frame && wrap) {
      frame.src = embedUrl(reel.provider || "youtube", reel.id);
      frame.title = reel.title || "Showreel";
      wrap.hidden = false;
      wrap.setAttribute("data-reveal", "");
      wrap.style.setProperty("--reveal-delay", "330ms");
    }

    const listHost = document.getElementById("portfolio-work-list");
    if (listHost) {
      const items = hub.items || [];
      listHost.innerHTML = items
        .map((item) => {
          const href =
            item.detailPage && String(item.detailPage).trim()
              ? String(item.detailPage).trim()
              : `detail.html?kind=portfolio&slug=${encodeURIComponent(item.slug)}`;
          const title = item.listTitle || item.entry?.title || item.slug;
          const sub = item.listSubtitle
            ? `<p class="portfolio-piece-sub">${escapeHtml(item.listSubtitle)}</p>`
            : "";
          const thumbUrl =
            item.thumbnail && String(item.thumbnail).trim()
              ? escapeHtml(item.thumbnail.trim())
              : "";
          const thumbInner = thumbUrl
            ? `<img src="${thumbUrl}" alt="${escapeHtml(title)}" class="portfolio-piece-thumb" loading="lazy" />`
            : `<div class="portfolio-piece-thumb portfolio-piece-thumb--placeholder" aria-hidden="true"></div>`;
          return `
            <li class="portfolio-piece" data-reveal>
              <a class="portfolio-piece-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background" href="${href}">
                <div class="portfolio-piece-visual">
                  <div class="portfolio-piece-frame">${thumbInner}</div>
                </div>
                <h3 class="portfolio-piece-label">${escapeHtml(title)}</h3>
                ${sub}
              </a>
            </li>`;
        })
        .join("");
    }

    const toc = document.getElementById("toc-nav");
    if (toc) {
      toc.innerHTML = "";
      toc.classList.remove("toc-loaded");
    }
  }

  function initHubGames() {
    const hub = cfg.gamesHub || {};
    setDocumentMeta(
      `${hub.hubTitle || "Games"} — ${site.name || "Portfolio"}`,
      hub.hubIntro || site.defaultDescription || ""
    );

    const hubTitle = document.getElementById("hub-page-title");
    if (hubTitle) hubTitle.textContent = hub.hubTitle || "Games";

    const hubIntro = document.getElementById("hub-intro");
    if (hubIntro && hub.hubIntro) hubIntro.textContent = hub.hubIntro;

    const grid = document.getElementById("games-grid");
    if (grid) {
      const items = hub.items || [];
      grid.innerHTML = items
        .map((item) => {
          const href = `detail.html?kind=game&slug=${encodeURIComponent(item.slug)}`;
          const cover =
            item.coverImage &&
            String(item.coverImage).trim() &&
            `<div class="aspect-video w-full overflow-hidden bg-black"><img class="h-full w-full object-cover" src="${escapeHtml(item.coverImage)}" alt="" loading="lazy" /></div>`;
          const ph = `<div class="flex aspect-video w-full items-center justify-center bg-surface-container-high text-zinc-600"><span class="material-symbols-outlined text-4xl" aria-hidden="true">sports_esports</span></div>`;
          return `
            <a class="game-card group block overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-low/40 transition-all hover:border-primary/35 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background" href="${href}" data-reveal>
              ${cover || ph}
              <div class="p-5">
                <h2 class="font-headline text-lg font-bold uppercase tracking-tight text-white group-hover:text-primary">${escapeHtml(item.listTitle || item.entry?.title || item.slug)}</h2>
                ${item.listSubtitle ? `<p class="mt-1 text-sm text-zinc-500">${escapeHtml(item.listSubtitle)}</p>` : ""}
              </div>
            </a>`;
        })
        .join("");
    }
  }

  function initAbout() {
    const about = cfg.about || {};
    setDocumentMeta(
      `${about.pageTitle || "About"} — ${site.name || "Portfolio"}`,
      about.metaDescription || site.defaultDescription || ""
    );

    const host = document.getElementById("about-root");
    if (!host) return;

    const portrait =
      about.portraitImage &&
      String(about.portraitImage).trim() &&
      `<div class="about-portrait mb-8 overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-low sm:float-right sm:ml-10 sm:mb-4 sm:max-w-xs"><img src="${escapeHtml(about.portraitImage)}" alt="${escapeHtml(about.portraitAlt || "")}" class="block h-auto w-full" loading="lazy" /></div>`;

    const skills =
      about.skills &&
      about.skills.length &&
      `<ul class="about-skills mt-8 flex flex-wrap gap-2">${about.skills.map((s) => `<li class="rounded-md border border-outline-variant bg-surface-container-high px-3 py-1 text-xs font-bold uppercase tracking-wide text-zinc-400">${escapeHtml(s)}</li>`).join("")}</ul>`;

    host.innerHTML = `
      ${portrait || ""}
      <h1 class="mb-4 font-headline text-4xl font-bold uppercase tracking-tighter text-white md:text-5xl">${escapeHtml(about.heading || "About me")}</h1>
      ${about.lead ? `<p class="mb-6 text-xl text-primary">${escapeHtml(about.lead)}</p>` : ""}
      <div class="about-prose space-y-4 text-lg leading-relaxed text-on-surface-variant">${renderParagraphs(about.paragraphs || [])}</div>
      ${skills || ""}
    `;
  }

  function normalizeSlug(s) {
    return String(s || "")
      .trim()
      .replace(/\+/g, " ")
      .replace(/\u2013|\u2014|\u2212/g, "-");
  }

  /** Query args may live in the hash if the host strips search params or bookmarks use #slug=… */
  function mergeDetailParams() {
    const fromSearch = new URLSearchParams(window.location.search);
    let kind = (fromSearch.get("kind") || "").toLowerCase().trim();
    let slug = normalizeSlug(fromSearch.get("slug"));

    if (!slug && window.location.hash) {
      const raw = window.location.hash.replace(/^#/, "").trim();
      if (raw.includes("=")) {
        const rawQ = raw.startsWith("?") ? raw.slice(1) : raw;
        const hp = new URLSearchParams(rawQ);
        slug = normalizeSlug(hp.get("slug"));
        if (!kind) kind = (hp.get("kind") || "").toLowerCase().trim();
      } else if (raw && !raw.includes("=")) {
        slug = normalizeSlug(raw.split(/[?&]/)[0]);
      }
    }
    return { kind, slug };
  }

  function itemMatchesSlug(item, slugNorm) {
    if (!item || !slugNorm) return false;
    const key = slugNorm.toLowerCase();
    const primary = (item.slug || "").toLowerCase();
    if (primary === key) return true;
    const aliases = item.slugAliases || [];
    return aliases.some((a) => String(a).toLowerCase() === key);
  }

  function findDetailItem(kind, slug) {
    const slugNeedle = normalizeSlug(slug);
    if (!slugNeedle) return null;
    const list =
      kind === "game"
        ? cfg.gamesHub?.items || []
        : cfg.portfolioHub?.items || [];
    return list.find((i) => itemMatchesSlug(i, slugNeedle)) || null;
  }

  /** Dedicated HTML pages set data-detail-slug (+ optional data-detail-kind) on body — no ?slug= required. */
  function resolveDetailFromBodyDataset() {
    const fixedSlug = normalizeSlug(
      document.body.getAttribute("data-detail-slug")
    );
    if (!fixedSlug) return null;
    const fixedKind = (
      document.body.getAttribute("data-detail-kind") || ""
    ).toLowerCase().trim();

    if (fixedKind === "game") {
      const item = findDetailItem("game", fixedSlug);
      if (item) return { item, kind: "game" };
    } else if (fixedKind === "portfolio") {
      const item = findDetailItem("portfolio", fixedSlug);
      if (item) return { item, kind: "portfolio" };
    }
    const fromPortfolio = findDetailItem("portfolio", fixedSlug);
    if (fromPortfolio) return { item: fromPortfolio, kind: "portfolio" };
    const fromGames = findDetailItem("game", fixedSlug);
    if (fromGames) return { item: fromGames, kind: "game" };
    return { item: null, kind: fixedKind || "portfolio" };
  }

  /** Resolve from URL query (and hash fallback): supports missing/wrong `kind` and slugAliases on items. */
  function resolveDetailFromQuery() {
    const { kind: kindRaw, slug: slugRaw } = mergeDetailParams();

    if (!slugRaw) {
      if (typeof console !== "undefined" && console.warn) {
        console.warn(
          "[portfolio] detail.html needs ?slug=… or use a dedicated page (see config detailPage).",
          window.location.href
        );
      }
      return { item: null, kind: kindRaw };
    }

    if (kindRaw === "game") {
      const item = findDetailItem("game", slugRaw);
      if (item) return { item, kind: "game" };
      const fallback = findDetailItem("portfolio", slugRaw);
      if (fallback) return { item: fallback, kind: "portfolio" };
      return { item: null, kind: kindRaw };
    }

    if (kindRaw === "portfolio") {
      const item = findDetailItem("portfolio", slugRaw);
      if (item) return { item, kind: "portfolio" };
      const fallback = findDetailItem("game", slugRaw);
      if (fallback) return { item: fallback, kind: "game" };
      return { item: null, kind: kindRaw };
    }

    const fromPortfolio = findDetailItem("portfolio", slugRaw);
    if (fromPortfolio) return { item: fromPortfolio, kind: "portfolio" };
    const fromGames = findDetailItem("game", slugRaw);
    if (fromGames) return { item: fromGames, kind: "game" };
    return { item: null, kind: kindRaw || "portfolio" };
  }

  function resolveDetailPageItem() {
    const fromBody = resolveDetailFromBodyDataset();
    if (fromBody && fromBody.item) return fromBody;
    if (fromBody && !fromBody.item) return fromBody;
    return resolveDetailFromQuery();
  }

  function initDetail() {
    const { item } = resolveDetailPageItem();

    if (!item) {
      setDocumentMeta(`Not found — ${site.name || "Portfolio"}`, "");
      renderFullEntry({
        entry: {
          badge: "404",
          title: "Page not found",
          author: site.name || "",
          excerpt:
            "This work or game does not exist. Return to Portfolio or Games.",
          categories: [],
        },
        hero: null,
        sections: [],
        finalThoughts: null,
        thanks: null,
        tags: [],
      });
      const host = document.getElementById("article-sections");
      if (host) {
        const example = "hybrid-action-combat-system.html";
        const example2 =
          "detail.html?kind=portfolio&slug=hybrid-action-combat-system";
        host.innerHTML = `<p class="text-on-surface-variant"><a class="font-bold text-primary hover:underline" href="index.html">Back to Portfolio</a> · <a class="font-bold text-primary hover:underline" href="games.html">Games</a></p>
          <p class="mt-6 max-w-xl text-sm text-zinc-500">Open the piece from the Portfolio hub, or try <a class="break-all font-medium text-primary hover:underline" href="${example}">${example}</a> (dedicated page) or <a class="break-all font-medium text-primary hover:underline" href="${example2}">${example2}</a>.</p>
          <p class="mt-3 max-w-xl text-sm text-zinc-500">Write-ups are driven from <code class="rounded bg-zinc-900 px-1 text-zinc-300">docs/js/config.js</code> (search for the project slug).</p>`;
      }
      return;
    }

    const entry = item.entry || {};
    setDocumentMeta(
      `${entry.title || "Work"} — ${site.name || "Portfolio"}`,
      entry.excerpt || site.defaultDescription || ""
    );

    renderFullEntry(item);
  }

  function bindSmoothScrollForCurrentPage() {
    bindInPageHashLinks();
  }

  initLogoBrand();
  initSiteNav();
  setContactLinks();
  setFooter();
  shareLink();

  if (page === "hub-portfolio") {
    initHubPortfolio();
    initReveal();
    initHeaderScroll();
    initHeroParallax();
    initFxCanvas();
    initLottieIfConfigured();
  } else if (page === "hub-games") {
    initHubGames();
    initReveal();
    initHeaderScroll();
  } else if (page === "hub-about") {
    initAbout();
    initReveal();
    initHeaderScroll();
  } else if (page === "detail") {
    initDetail();
    initReveal();
    initHeaderScroll();
    const simpleArticle =
      document.body.getAttribute("data-article-layout") === "simple";
    if (!simpleArticle) {
      initHeroParallax();
      initFxCanvas();
      initArticleFxCanvas();
      initLottieIfConfigured();
    }
    bindSmoothScrollForCurrentPage();
  }

})();
