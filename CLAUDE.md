# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:4004 (uses Turbopack)
npm run build      # Build static export to ./out/
npm run lint       # Run ESLint
npm run format     # Format with Prettier
npm run format:check  # Check formatting without writing
```

No test suite exists — verify changes by running the dev server.

## Architecture

This is a **Next.js 15 static-export site** (portfolio for designer Rachna Parakh). `next build` outputs to `./out/` and is deployed to Cloudflare Pages on push to `main`. A secondary GitHub Pages workflow deploys with `GITHUB_PAGES=true` (adds `/rachna-parakh` basePath).

### Page Structure

```
src/app/
  (home)/page.tsx          # Landing page
  about/page.tsx
  contact/page.tsx
  portfolio/page.tsx       # Portfolio grid
  portfolio/<project>/page.tsx  # Individual project pages
```

### Data-Driven Portfolio System

Each portfolio project is defined purely as data — no custom JSX per project. The flow is:

1. **Data file** (`src/data/portfolio/<project>.ts`) — exports a `PortfolioProjectData` object with hero, summary, and typed sections array
2. **Page** (`src/app/portfolio/<project>/page.tsx`) — imports data and passes it to `<PortfolioLayout>`
3. **Components** (`src/components/portfolio/`) — render each section type

Section types: `text-only`, `image-text`, `full-image`, `image-with-sidebar`, `image-grid`, `pdf-viewer`, `figma-prototype`. All options are in `src/components/portfolio/types.ts`.

See `src/components/portfolio/README.md` for the full guide to adding a new project.

### Image Imports

Images in `src/img/` must be imported statically (for Next.js optimization metadata) and passed as the `data` field of `ImageData`. The `src` field is the public path string used as a fallback.

```typescript
import HeroImage from '@img/projects/myproject/hero.png';
// then: { src: '/projects/myproject/hero.png', alt: '...', data: HeroImage }
```

Path aliases: `@/*` → `src/*`, `@img/*` → `src/img/*`.

### Site Content

Non-portfolio content (profile, navigation, about text, philosophy items) lives in `src/data/` and is typed in `src/data/types.ts`. Common content shared across pages is in `src/data/common-content.ts`.
