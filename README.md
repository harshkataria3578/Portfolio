# Game animation portfolio (GitHub Pages)

Static portfolio for **Maya** and **Unreal Engine 5** work, with a **long-form “contest entry” layout** similar in spirit to [The Rookies](https://www.therookies.co/) portfolio pages: title block, featured reel, narrative sections, optional behind-the-scenes copy, technical callouts, credits, and tag chips. The site is not affiliated with The Rookies.

The site lives in [`docs/`](docs/) so you can enable GitHub Pages without a build step.

## Video hosting (do not commit large MP4s)

| Approach | Use for |
|----------|---------|
| **YouTube** (default) | Reels, breakdowns, in-engine captures |
| **Vimeo** | Alternative embeds; set `provider: "vimeo"` |
| **ArtStation** | Discovery; link from Contact |

Configure everything in [`docs/js/config.js`](docs/js/config.js):

- **`entry`** — title, author, context line, date, categories, excerpt.
- **`hero`** — top full-width reel (`provider` + `id`).
- **`sections[]`** — each chapter: `heading`, optional `ornament`, `paragraphs`, optional `embed` + `caption`, `afterEmbedParagraphs`, optional `bts`, optional `tech[]` (title, caption, optional `image` URL for blueprint screenshots).
- **`finalThoughts`**, **`thanks`**, **`tags`**, **`links`**.

YouTube ID: from `https://www.youtube.com/watch?v=VIDEO_ID`  
Vimeo ID: the number in `https://vimeo.com/123456789`

## Enable GitHub Pages

1. Push this repository to GitHub.
2. **Settings** → **Pages** → **Source**: **Deploy from a branch**.
3. Branch: `main`, folder: **`/docs`**, Save.

**Project site:** `https://<username>.github.io/<repository>/`

### Optional: GitHub Actions

See [`.github/workflows/pages.yml`](.github/workflows/pages.yml). Set Pages **Source** to **GitHub Actions** — do not use both branch deploy and this workflow.

## Custom domain (optional)

Add a `CNAME` in [`docs/`](docs/) and set the domain under Pages settings. See [GitHub’s docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Local preview

```bash
npx --yes serve docs
```

Use `http://localhost` (not `file://`) so embeds load.

## Files

| File | Purpose |
|------|---------|
| [`docs/js/config.js`](docs/js/config.js) | All copy, media IDs, credits, tags |
| [`docs/index.html`](docs/index.html) | Page shell |
| [`docs/css/styles.css`](docs/css/styles.css) | Editorial styling |
| [`docs/js/main.js`](docs/js/main.js) | Renders entry from config, share button |
