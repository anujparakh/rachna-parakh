# Phone Frame Border for Fallout Theater Phone Menu

**Date:** 2026-05-22

## Goal

Make it visually clear to portfolio visitors that the embedded Canva menu is designed for a phone screen. The current embed (an `<iframe>`) has no framing, so viewers may not understand the context.

## Design

Wrap the Phone Menu iframe in a CSS-only dark phone frame shell. The Printed Menu sub-section is unaffected.

### Phone Frame Shell

- **Outer body:** `#1a1a1a` background, `border-radius: 36px`, padding to create bezels (top ~16px, sides ~12px, bottom ~20px)
- **Side buttons:** Absolute-positioned thin dark rectangles — two volume buttons on the left, one power button on the right
- **Notch:** Small dark rounded pill centered at the top of the bezel
- **Screen area:** The iframe sits here, filling the inner rounded rectangle
- **Home indicator:** A short wide pill at the bottom of the bottom bezel
- **Shadow:** Subtle drop shadow for depth (`box-shadow: 0 16px 48px rgba(0,0,0,0.4)`)
- **Max width:** `360px`, centered horizontally
- **Iframe height:** `70vh` (slightly reduced from current `80vh` to account for bezel height)
- **Note:** When `phoneFrame` is true, the sub-section's `imageClass` is ignored — the phone shell controls all sizing

### Data Layer Change

Add `phoneFrame?: boolean` to the `EmbedSubSection` interface in `src/components/portfolio/types.ts`.

Set `phoneFrame: true` on the Phone Menu sub-section in `src/data/portfolio/fallout-theater.ts`.

### Component Change

In `src/components/portfolio/PortfolioEmbedGroup.tsx`, when `sub.phoneFrame` is true, render the iframe wrapped in the phone frame shell div instead of bare.

## Scope

- `src/components/portfolio/types.ts` — add `phoneFrame` field
- `src/components/portfolio/PortfolioEmbedGroup.tsx` — conditional phone frame wrapper
- `src/data/portfolio/fallout-theater.ts` — set `phoneFrame: true` on Phone Menu sub-section

No other pages or components are affected.
