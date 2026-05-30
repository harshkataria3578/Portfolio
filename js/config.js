/**
 * Site config — hubs, detail items, and shared links.
 * YouTube ID: from watch?v=___  ·  Vimeo: numeric ID from vimeo.com/___
 */
window.PORTFOLIO_CONFIG = {
  site: {
    name: "Harsh Kataria",
    role: "Game animator",
    titleSuffix: "Animator",
    defaultDescription:
      "Student combat animation portfolio — Maya and Unreal Engine 5.",
    cvUrl: "",
    footerLine: "Feel free to reach out if you enjoyed my portfolio!",
  },
  portfolioHub: {
    reel: {
      title: "Showreel",
      provider: "youtube",
      id: "_pvvrN6xMog",
    },
    hubTitle: "Portfolio",
    worksHeading: "Portfolio pieces",
    hubIntro:
      "Selected animation work — click a piece for breakdowns and embedded clips.",
    items: [
      {
        slug: "hybrid-action-combat-system",
        slugAliases: ["combat-game-animation"],
        /** Dedicated page (no query string). Keep in sync with data-detail-slug on that HTML file. */
        detailPage: "hybrid-action-combat-system.html",
        listTitle: "Hybrid Action Combat System — Maya & UE5",
        listSubtitle: "Souls-like weight meets hack-and-slash flow",
        /** Thumbnail URL for portfolio card (wide image over taupe plate). Add when ready. */
        thumbnail: "",
        entry: {
          badge: "Artefact report",
          title: "Hybrid Action Combat System",
          author: "Harsh Kataria",
          authorUrl: "",
          context: "Showcase · Maya & Unreal Engine 5",
          contextUrl: "",
          date: "2026",
          categories: [
            "Hybrid combat",
            "Unreal Engine 5",
            "Behaviour trees",
            "Maya",
          ],
          excerpt:
            "A student combat artefact that merges the deliberate weight of Souls-like encounters with the responsive, combo-friendly feel of hack-and-slash action. Built in UE5 with Animation Blueprints, montages, AI behaviour trees, and a full Maya-to-engine animation pipeline — gameplay and motion are shown in the video above.",
        },
        hero: {
          title: "Gameplay showcase — hybrid combat prototype",
          provider: "youtube",
          id: "dQw4w9WgXcQ",
        },
        sections: [
          {
            slug: "project-goal",
            heading: "Project goal & research gap",
            ornament: "",
            paragraphs: [
              "The aim was to design and implement a combat system that merges the deliberate weight of Souls-like games with the high-octane fluidity of hack-and-slash titles: tactical commitment and stamina-aware actions on one side, and expressive responsiveness and state flow on the other.",
              "FromSoftware-style references foreground stamina-gated actions, high lethality, and grounded stance for readability. Hack-and-slash references foreground fluid state movement, combo chains, and strong audiovisual feedback. The objective was to synthesise those opposing philosophies into one coherent hybrid loop that addresses the gap between slow, punishing combat and fast, cancel-heavy combat.",
            ],
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [],
          },
          {
            slug: "reference-elden",
            heading: "Design reference — weight & precision (Elden Ring)",
            ornament: "",
            paragraphs: [
              "Elden Ring (FromSoftware) was used as the primary reference for weight: stamina management, high lethality, and deliberate timing. Takeaways carried into the project include respecting startup and recovery commitment so attacks feel grounded, and anchoring the character to the environment so encounters read as tactical rather than arcade-only.",
            ],
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [
              {
                title: "Analysis board (development report)",
                caption:
                  "Stamina management, lethality, startup/recovery frames, and grounded stance — carried forward into the hybrid spec.",
                image: "img/hybrid-report/image2.jpeg",
                imageAlt: "Elden Ring reference notes and still",
              },
            ],
          },
          {
            slug: "reference-dmc",
            heading: "Design reference — flow & spectacle (Devil May Cry 5)",
            ornament: "",
            paragraphs: [
              "Devil May Cry 5 (Capcom) informed the hack-and-slash side: animation-aware canceling, extended combos, and spectacle through clear feedback. Input buffering and smoother state transitions were priorities so the hybrid still feels responsive when the player chains actions.",
            ],
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [
              {
                title: "Analysis board (development report)",
                caption:
                  "Canceling, combo flow, input buffering, and VFX-forward feedback informed the responsiveness pillar.",
                image: "img/hybrid-report/image3.png",
                imageAlt: "Devil May Cry 5 reference notes",
              },
            ],
          },
          {
            slug: "reference-wukong",
            heading: "Hybrid case study — Black Myth: Wukong",
            ornament: "",
            paragraphs: [
              "Black Myth: Wukong was used as a contemporary example of hybrid combat: grounded movement paired with fast attack cadence and explicit resource rules (stamina and similar systems). It supported the target feel that scale, speed, and weight can coexist in one production-style action framework.",
            ],
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [
              {
                title: "Case study board (development report)",
                caption:
                  "Grounded locomotion vs fast cadence and explicit resources — the primary “target feel” reference for this artefact.",
                image: "img/hybrid-report/image4.jpeg",
                imageAlt: "Black Myth Wukong hybrid reference",
              },
            ],
          },
          {
            slug: "motion-references",
            heading: "Combat & motion reference boards",
            ornament: "",
            paragraphs: [
              "Greatsword swings, finisher beats, and attack timing were planned against motion boards and YouTube reference collections before blocking anything in Maya. Locomotion and light-attack excerpts below are taken directly from the development report slides (lazy-loaded GIFs). Heavy, charged, hit-react, and enemy suites follow the same layout in the deck.",
            ],
            referenceLinks: [
              {
                label: "Greatsword swing references",
                url: "https://www.youtube.com/watch?v=V6O_sMDWxDQ",
              },
              {
                label: "Finisher / execution references",
                url: "https://www.youtube.com/watch?v=R_oxj_oayYE",
              },
              {
                label: "Attack timing references",
                url: "https://www.youtube.com/watch?v=wodFkPrFUag",
              },
            ],
            mediaGrid: [
              {
                title: "Locomotion cycles",
                intro:
                  "Idle, walk, run, and stops — excerpted from the report’s player animation board.",
                items: [
                  {
                    src: "img/hybrid-report/image5.gif",
                    alt: "Idle locomotion",
                    caption: "Idle",
                  },
                  {
                    src: "img/hybrid-report/image6.gif",
                    alt: "Walk",
                    caption: "Walk",
                  },
                  {
                    src: "img/hybrid-report/image7.gif",
                    alt: "Run",
                    caption: "Run",
                  },
                  {
                    src: "img/hybrid-report/image8.gif",
                    alt: "Walk stop",
                    caption: "Walk stop",
                  },
                  {
                    src: "img/hybrid-report/image9.gif",
                    alt: "Run stop",
                    caption: "Run stop",
                  },
                ],
              },
              {
                title: "Light attack chain",
                intro: "First four steps of the light combo (report slide).",
                items: [
                  {
                    src: "img/hybrid-report/image10.gif",
                    alt: "Light attack 1",
                    caption: "Light 1",
                  },
                  {
                    src: "img/hybrid-report/image11.gif",
                    alt: "Light attack 2",
                    caption: "Light 2",
                  },
                  {
                    src: "img/hybrid-report/image12.gif",
                    alt: "Light attack 3",
                    caption: "Light 3",
                  },
                  {
                    src: "img/hybrid-report/image13.gif",
                    alt: "Light attack 4",
                    caption: "Light 4",
                  },
                ],
              },
            ],
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [],
          },
          {
            slug: "pipeline",
            heading: "Technical pipeline — Maya to Unreal Engine 5",
            ornament: "",
            paragraphs: [
              "The content path is Maya exports to FBX, then integration in Unreal Engine 5. Characters were brought in rigged; Maya was used to define bones and animation controls. Motion study leaned on references from Elden Ring, Sekiro, and Where Winds Meet to keep attacks, hit reactions, and locomotion coherent for a third-person action camera.",
            ],
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [],
          },
          {
            slug: "ue-learning",
            heading: "Unreal Engine — combat architecture foundation",
            ornament: "",
            paragraphs: [
              "Implementation learning included a structured UE5 third-person combat tutorial series that covered how to layer Animation Blueprints, montages, notifies, and character Blueprint calls into a single playable loop. That foundation was extended with project-specific rules for stamina, targeting, and AI-driven opponents.",
            ],
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [
              {
                title: "Combat system tutorial series",
                caption:
                  "Playlist followed for the core UE5 wiring shown in the development report (AnimBP structure, montages, notifies, Character BP). Still below is the slide capture from the artefact deck.",
                image: "img/hybrid-report/image33.png",
                imageAlt: "Unreal Engine combat tutorial reference slide",
                link: "https://www.youtube.com/watch?v=srpHq7n9iQI&list=PL7fuubrGZdmzA_64A5n_qddbgT71w9MV-",
                linkLabel: "Open playlist on YouTube",
              },
              {
                title: "AnimBP vs montages (project split)",
                caption:
                  "Locomotion and continuous states live in the Animation Blueprint; attacks, hit reactions, dodge, finisher, and death play as montages driven from the character Blueprint with anim notifies firing gameplay logic.",
                image: "",
              },
            ],
          },
          {
            slug: "player-systems",
            heading: "Player systems & logic",
            ornament: "",
            paragraphs: [
              "Light and heavy ladders use anim notifies to advance or reset combos and to steer rotation during anticipation. Dodge is gated so it only fires after an attack finishes, preserving commitment while still offering escape windows; dodge includes invincibility frames.",
              "Charged attacks use an upper-body animation slot so the lower body can keep moving while the charge winds. A stamina stat gates actions that need it, keeping resource tension aligned with the Souls-like pillar of the design.",
            ],
            referenceLinksPosition: "after",
            referenceLinks: [
              {
                label: "Light attack & dodge mechanic (capture walkthrough)",
                url: "https://youtu.be/BK8TcOFWYV8",
              },
              {
                label: "Heavy attack mechanic",
                url: "https://youtu.be/1f9_9WSieZc",
              },
              {
                label: "Charged attack & stamina",
                url: "https://youtu.be/1k0Jh_Y3tBU",
              },
            ],
            mediaGrid: {
              title: "Blueprint & logic (report stills)",
              items: [
                {
                  src: "img/hybrid-report/image34.png",
                  alt: "Light attack and combo notifies",
                  caption: "Light / combo notifies",
                },
                {
                  src: "img/hybrid-report/image35.png",
                  alt: "Heavy attack setup",
                  caption: "Heavy",
                },
                {
                  src: "img/hybrid-report/image36.png",
                  alt: "Dodge gating and rotation",
                  caption: "Dodge / rotation",
                },
                {
                  src: "img/hybrid-report/image37.png",
                  alt: "Charged attack upper body slot",
                  caption: "Charged attack",
                },
                {
                  src: "img/hybrid-report/image38.png",
                  alt: "Stamina stat wiring",
                  caption: "Stamina",
                },
              ],
            },
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [],
          },
          {
            slug: "enemy-systems",
            heading: "Enemy systems & logic",
            ornament: "",
            paragraphs: [
              "Enemies mirror the split architecture: Animation Blueprints handle locomotion and death states, while montages carry attacks, hit reactions, and execution moments with notifies calling into a shared enemy base Blueprint.",
              "Directional hit reactions vary with attack type; the enemy reorients toward the player on hit. Health drives when UI elements appear—widgets only show while the player is inside engagement range.",
              "A targeting and soft-lock layer drops lock when the player is out of range, keeps the camera constrained while locked, and rotates the player toward the tracked foe for readable engagements.",
              "Finishers require low enemy health, close range, and alignment: the enemy turns toward the player, a dedicated finisher camera boosts intensity, and the state grants invincibility frames so the beat resolves cleanly.",
              "AI runs through Behaviour Trees and an AI controller: pursue the player, strafe to a random orbit, attack, then relocate before repeating. A spawner controls enemy counts. An overlay material flashes on attack telegraphs so players get a fair reaction window.",
            ],
            referenceLinksPosition: "after",
            referenceLinks: [
              {
                label: "Enemy damage, hit react & UI range",
                url: "https://youtu.be/zejEFXykQBk",
              },
              {
                label: "Targeting & soft lock",
                url: "https://youtu.be/UPpRlvW1h5A",
              },
              {
                label: "Finisher / execution",
                url: "https://youtu.be/zK4F95EKb9k",
              },
              {
                label: "Enemy AI & behaviour tree",
                url: "https://youtu.be/UgGz2QPRgHA",
              },
            ],
            mediaGrid: {
              title: "Enemy implementation (report stills)",
              items: [
                {
                  src: "img/hybrid-report/image39.png",
                  alt: "Enemy montages and base blueprint",
                  caption: "Montages / base BP",
                },
                {
                  src: "img/hybrid-report/image40.png",
                  alt: "Hit react and health UI",
                  caption: "Hit react & UI",
                },
                {
                  src: "img/hybrid-report/image41.png",
                  alt: "Targeting camera and soft lock",
                  caption: "Targeting",
                },
                {
                  src: "img/hybrid-report/image42.png",
                  alt: "Finisher sequence",
                  caption: "Finisher",
                },
                {
                  src: "img/hybrid-report/image43.png",
                  alt: "Behaviour tree overview",
                  caption: "AI / BT",
                },
              ],
            },
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [],
          },
          {
            slug: "scene-systems",
            heading: "Environment, VFX, lighting & respawn",
            ornament: "",
            paragraphs: [
              "The arena uses curated environment art, VFX, and lighting to sell an ancient combat space that matches the fantasy of the characters instead of reading as a greybox. A respawn system resets the player after death so iteration stays fast during combat tuning — aligned with the ambience and respawn notes in the development report.",
            ],
            referenceLinksPosition: "after",
            referenceLinks: [
              {
                label: "VFX, environment & respawn (capture)",
                url: "https://youtu.be/uqMdYPPcY0k",
              },
            ],
            mediaGrid: {
              title: "Scene passes (report stills)",
              items: [
                {
                  src: "img/hybrid-report/image44.png",
                  alt: "Arena layout",
                  caption: "Arena",
                },
                {
                  src: "img/hybrid-report/image45.png",
                  alt: "Materials and dressing",
                  caption: "Materials",
                },
                {
                  src: "img/hybrid-report/image46.png",
                  alt: "Lighting",
                  caption: "Lighting",
                },
                {
                  src: "img/hybrid-report/image47.png",
                  alt: "VFX elements",
                  caption: "VFX",
                },
                {
                  src: "img/hybrid-report/image48.png",
                  alt: "Respawn flow",
                  caption: "Respawn",
                },
              ],
            },
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [],
          },
          {
            slug: "technical-challenges",
            heading: "Technical challenges & solutions",
            ornament: "",
            paragraphs: [
              "Enemy AI occasionally locked inside strafe animations while chasing; the fix was to correct how the Behaviour Tree service refreshed animation state so blends stayed in sync with locomotion intent.",
              "Charged attacks were originally intended to share a hold-to-charge binding with heavy attacks; when that input layering proved unreliable, a dedicated input channel was introduced so charge remained dependable.",
              "Destroying the player pawn on death broke downstream UI updates even though damage still registered; respawn instead resets health and teleports the character back to the start so widgets and attributes stay bound to a persistent actor.",
            ],
            mediaGrid: {
              title: "Playtest notes (report)",
              intro:
                "Snapshots from polishing & testing slides: issues called out during playtests before iteration.",
              items: [
                {
                  src: "img/hybrid-report/image49.png",
                  alt: "Playtest feedback notes 1",
                  caption: "Notes",
                },
                {
                  src: "img/hybrid-report/image50.png",
                  alt: "Playtest feedback notes 2",
                  caption: "Notes",
                },
                {
                  src: "img/hybrid-report/image51.png",
                  alt: "Playtest feedback notes 3",
                  caption: "Notes",
                },
                {
                  src: "img/hybrid-report/image52.png",
                  alt: "Playtest feedback notes 4",
                  caption: "Notes",
                },
              ],
            },
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [],
          },
          {
            slug: "gameplay-video",
            heading: "Gameplay & motion on video",
            ornament: "",
            paragraphs: [
              "Combat animations, enemy behaviours, and finisher moments are demonstrated in the gameplay video at the top of this page rather than as frame-by-frame breakdowns here.",
            ],
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [],
          },
        ],
        finalThoughts: {
          heading: "Outcome",
          ornament: "",
          paragraphs: [
            "The artefact delivers a playable hybrid combat loop: Souls-like commitment (stamina, recovery, I-frames, execution rules) working alongside hack-and-slash flow (combos, buffering, camera-assisted targeting).",
            "It establishes a solid technical and design foundation in UE5; further scope can build on this prototype without redoing the core systems architecture.",
          ],
        },
        thanks: {
          heading: "Credits",
          ornament: "",
          items: [
            {
              name: "Staffordshire University — Showcase",
              detail: "artefact submission & brief.",
              url: "",
            },
            {
              name: "Character rigs & marketplace assets",
              detail: "base meshes, environment packs, and reference material used under their licenses.",
              url: "",
            },
          ],
        },
        tags: [
          "Hybrid combat",
          "Unreal Engine 5",
          "Behaviour trees",
          "Maya",
          "Animation Blueprints",
          "Souls-like",
          "Hack-and-slash",
        ],
      },
    ],
  },
  gamesHub: {
    hubTitle: "Games",
    hubIntro: "Projects I contributed animation to — click through for details.",
    items: [
      {
        slug: "sample-team-project",
        listTitle: "Sample Team Project",
        listSubtitle: "Animator · Unreal Engine 5 · 2025",
        coverImage: "",
        entry: {
          badge: "Team project",
          title: "Sample Team Project",
          author: "Harsh Kataria",
          authorUrl: "",
          context: "Third-person action prototype",
          contextUrl: "",
          date: "2025",
          categories: ["Gameplay", "Combat"],
          excerpt:
            "Placeholder game page — replace with your shipped or school project: elevator pitch, your animation scope, and a trailer or gameplay capture.",
        },
        hero: {
          title: "Gameplay trailer",
          provider: "youtube",
          id: "dQw4w9WgXcQ",
        },
        sections: [
          {
            slug: "overview",
            heading: "Overview",
            ornament: "",
            paragraphs: [
              "Describe the game in one paragraph: genre, team size, engine, and milestone (jam, semester game, indie release).",
              "Clarify your role: which characters, which sets of moves, and how you collaborated with design and programming.",
            ],
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [],
          },
          {
            slug: "animation-scope",
            heading: "Animation scope",
            ornament: "",
            paragraphs: [
              "List what you owned: e.g. player light attacks, staggers, boss wind-ups. Mention constraints (rig, timeline, multiplayer).",
            ],
            embed: {
              provider: "youtube",
              id: "dQw4w9WgXcQ",
              caption: "Replace with your in-game capture or montage.",
            },
            afterEmbedParagraphs: [],
            bts: null,
            tech: [],
          },
        ],
        finalThoughts: {
          heading: "Takeaways",
          ornament: "",
          paragraphs: [
            "What you learned shipping animations in this project — iteration with code, read tests, or scope tradeoffs.",
          ],
        },
        thanks: null,
        tags: ["Unreal Engine 5", "Team", "Gameplay"],
      },
    ],
  },
  about: {
    pageTitle: "About",
    metaDescription:
      "About me — animation background, tools, and how to get in touch.",
    portraitImage: "",
    portraitAlt: "",
    heading: "About me",
    lead: "I’m a student animator focused on combat and gameplay motion in real-time engines.",
    paragraphs: [
      "Edit this page with your story: training, favorite references, and what you want to work on next.",
      "Keep it concise — recruiters skim. Pair with your reel on the Portfolio page.",
    ],
    skills: ["Autodesk Maya", "Unreal Engine 5", "Gameplay animation"],
  },
  links: {
    artstation: "https://www.artstation.com/",
    linkedin: "https://www.linkedin.com/",
    email: "mailto:you@example.com",
  },
  fx: {
    lottieUrl: "",
    particleCount: 72,
  },
};
