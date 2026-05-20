# AGENTS Instructions - euracciai-modern-site

## Project Summary
- Bilingual corporate website for EURACCIAI (`it` / `en`).
- Stack: Node.js + Express + EJS + TypeScript.
- Can run as dynamic server and can be exported as fully static site (`dist/`) for GitHub Pages or other static hosting.

## Current Architecture
- Runtime entry: `server.ts`
- Static generator: `build-static.ts`
- Content and i18n source of truth: `site-data.ts`
- Templates: `views/`
  - Shared partials: `views/partials/`
  - Pages: `views/pages/`
- Assets: `public/` (`css`, `js`, `img`)
- Generated output:
  - `build/` is TypeScript compiler output.
  - `dist/` is the static export output.
  - Do not edit generated files directly; change source files and rebuild.

## Commands
- Install: `npm install`
- TypeScript build: `npm run build`
- Dev server: `npm run dev`
- Production server: `npm start`
- Static export: `npm run build:static`

## i18n Rules (Important)
- All user-facing strings must come from i18n (`site-data.ts`) or data structures, not hardcoded in EJS.
- Italian and English routes are mapped via `routeMap`.
- Language switch must keep the same logical page when switching locale.
- Accessibility labels are localized in `t.common`:
  - `homeAria`
  - `mainNavAria`
  - `langSelectorAria`
  - `mobileMenuLabel`
  - `openMenuLabel`
  - `closeMenuLabel`

## Routing and URL Strategy
- Dynamic routes:
  - `/it/...`
  - `/en/...`
  - `/` redirects to `/it`
- `Prodotti` is a dedicated catalog page (`prodotti` / `products`) grouped by division.
- Single product sheets are generated under `prodotti/:id` / `products/:id`.
- Product ids are currently derived from division id + position (for example `mdu-1`, `macsi-2`); keep them stable or migrate carefully if adding explicit slugs later.
- `Divisioni` remains a separate structural page (`divisioni` / `divisions`) and division detail routes live under it.
- Static mode uses relative links everywhere.
- Helpers in render context:
  - `url(...)` for internal page links
  - `asset(...)` for static assets (`/css`, `/js`, `/img`)
- Static pages are generated as folder routes with `index.html`.

## Static Hosting Notes
- `dist/` is generated, not source-authored.
- `build/` is generated, not source-authored.
- For GitHub Pages via Actions, do **not** commit `dist/`.
- GitHub Pages deployment is expected to run `npm ci` and `npm run build:static`.
- Root `dist/index.html` handles redirect to locale.
- Directory-path normalization script exists in shared `<head>` so URLs without trailing slash are normalized.

## Mobile Navigation
- Desktop nav is hidden on small widths.
- Mobile menu is implemented in header:
  - Toggle button (`.mobile-menu-toggle`)
  - Collapsible nav (`#mobile-nav`)
  - JS behavior in `public/js/main.js`
- Keep aria attributes and open/close labels localized.

## Styling Conventions
- Main stylesheet: `public/css/styles.css` (single file, mostly compressed style blocks + appended overrides).
- Existing visual language is industrial/corporate with strong contrast, dark header/footer, blue accent, photographic industrial imagery.
- Preserve the current look unless the user asks for a redesign.
- Partner and division product cards are intentionally unified:
  - `partners-grid`
  - `partner-card`
- Contact email links have enhanced contrast.

## Content and Data Conventions
- Company/division/applications/partners copy is stored in `site-data.ts`.
- Imported long-form product sheet copy, product images, and product attachments are stored in `product-details.ts`.
- Import helper scripts live in `scripts/`; they can regenerate product details from cached original HTML when needed.
- Keep Italian copy in Italian and English copy in English; avoid mixed-language leftovers such as `Italy` in Italian pages.
- Email addresses shown in templates should be clickable `mailto:` links.
- Division detail page content:
  - Hero + paragraphs
  - Product/partner card list
- Contact page includes:
  - Company contacts
  - Per-division email links (`mailto:`)
  - Directions split into metro/car blocks per language.

## Known Decisions Already Taken
- Placeholder SVGs were replaced by PNG assets in `public/img/`.
- Old JS source files were removed after TS migration.
- TS config uses:
  - `"module": "NodeNext"`
  - `"moduleResolution": "NodeNext"`
- `build-static.ts` and `server.ts` resolve project paths from `process.cwd()` to keep build/runtime stable.

## QA Checklist Before Release
- `npm run build` passes.
- `npm run build:static` passes.
- Verify both locales in `dist/it/...` and `dist/en/...`.
- Check mobile menu behavior on small viewport.
- Check no unintended hardcoded UI strings in templates.
- Check links/images/css/js are valid when hosted in subdirectory.
- Search Italian static output for obvious English leftovers before final release.
- Spot-check punctuation and spacing in visible copy.

## Editing Guidance for Future Agents
- Prefer editing `site-data.ts` for content/i18n changes.
- Prefer editing partials for global UI behavior (`head`, `header`, `footer`).
- After any navigation/link/i18n update, regenerate static build and verify relative links.
- Avoid reintroducing absolute-root paths for internal site links/assets in static pages.
- Use `url(...)` for internal page links and `asset(...)` for assets in EJS templates.
- If mobile navigation changes, update both `views/partials/header.ejs` and `public/js/main.js`.
