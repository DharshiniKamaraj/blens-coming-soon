# BLENS — Coming Soon

A cinematic "Coming Soon" landing page for **BLENS**, the photography & film
brand by **Barath Kumar .G**. Built with React + Vite, styled with plain
modular CSS (no framework), ready to deploy on Netlify with a custom domain
(`blens.in`).

## Project structure

```
blens-coming-soon/
├── index.html              # Vite HTML entry (fonts, meta tags, favicon)
├── netlify.toml             # Netlify build settings
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx             # React root
    ├── App.jsx              # Composes all sections
    ├── content.js            # ALL editable copy + links live here
    ├── components/
    │   ├── GrainOverlay.jsx  # Shared film-grain texture
    │   ├── FocusVisual.jsx   # Abstract camera-focus SVG (hero)
    │   ├── Hero.jsx          # Hero section
    │   ├── NextFrame.jsx     # "Next Frame" + 3 category cards
    │   └── Footer.jsx        # Footer
    └── styles/
        ├── index.css         # Imports every stylesheet below
        ├── tokens.css        # Colors, fonts — re-theme here
        ├── base.css          # Reset + shared animations
        ├── hero.css
        ├── next.css
        └── footer.css
```

Everything is intentionally split by section so the full portfolio site can
later replace one component/stylesheet at a time without touching the rest.

## Quick edits

- **Copy, CTA link, category cards:** edit `src/content.js` only.
- **Colors / fonts:** edit `src/styles/tokens.css` only.
- **Replace "Enter Soon" destination:** change `CTA_LINK` in `src/content.js`.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

Output goes to `dist/`.

## Deploy to Netlify

### Option A — Git-based (recommended)
1. Push this project to a GitHub repository.
2. In Netlify: **Add new site → Import an existing project → GitHub** and
   pick the repo.
3. Build settings (auto-detected from `netlify.toml`, but confirm):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy. Netlify gives you a temporary `*.netlify.app` URL.

### Option B — Drag and drop
1. Run `npm run build` locally.
2. Drag the generated `dist` folder onto the Netlify dashboard.

### Connect your GoDaddy domain (`blens.in`)
1. In Netlify: **Site settings → Domain management → Add a domain** → enter
   `blens.in`.
2. Netlify shows DNS records (an A record and/or CNAME).
3. In GoDaddy: **My Domains → DNS Management** for `blens.in`, and add the
   records Netlify gave you.
4. Wait for DNS to propagate (usually minutes, sometimes up to 24–48h).
5. Once live, point your QR code at `https://blens.in` — it will always show
   whatever is currently deployed, so it keeps working when the full
   portfolio site replaces this page.

## Tech stack

- React 18
- Vite 5
- Plain modular CSS (CSS variables, no Tailwind/UI library)
- Google Fonts: Fraunces (display) + Inter (body)
