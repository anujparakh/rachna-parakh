# Phone Frame Border Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Wrap the Fallout Theater "Phone Menu" Canva embed in a CSS-only dark phone frame shell so viewers immediately understand they're looking at a phone-formatted menu.

**Architecture:** Add a `phoneFrame` boolean flag to `EmbedSubSection`. In `PortfolioEmbedGroup`, render a CSS phone shell div around the iframe when the flag is set. Enable the flag on the Phone Menu sub-section in the Fallout Theater data file. No new files needed.

**Tech Stack:** Next.js 15, Tailwind CSS (inline styles for the shell to avoid purge issues with dynamic values), TypeScript

---

### Task 1: Add `phoneFrame` to `EmbedSubSection` type

**Files:**
- Modify: `src/components/portfolio/types.ts`

- [ ] **Step 1: Add the field**

In `src/components/portfolio/types.ts`, update the `EmbedSubSection` interface from:

```typescript
export interface EmbedSubSection {
  title: string;
  figmaSrc: string;
  imageClass?: string;
  description?: string;
}
```

to:

```typescript
export interface EmbedSubSection {
  title: string;
  figmaSrc: string;
  imageClass?: string;
  description?: string;
  phoneFrame?: boolean;
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npm run build 2>&1 | tail -20
```

Expected: build succeeds (or only pre-existing errors, none about `EmbedSubSection`).

- [ ] **Step 3: Commit**

```bash
git add src/components/portfolio/types.ts
git commit -m "feat: add phoneFrame flag to EmbedSubSection type"
```

---

### Task 2: Implement phone frame wrapper in `PortfolioEmbedGroup`

**Files:**
- Modify: `src/components/portfolio/PortfolioEmbedGroup.tsx`

- [ ] **Step 1: Replace the component body**

Replace the full content of `src/components/portfolio/PortfolioEmbedGroup.tsx` with:

```typescript
import PortfolioSection from './PortfolioSection';
import { EmbedSubSection } from './types';

interface PortfolioEmbedGroupProps {
  title: string;
  subSections: EmbedSubSection[];
  titleSize?: 'text-2xl' | 'text-3xl' | 'text-4xl';
  className?: string;
}

function PhoneFrame({ src }: { src: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          position: 'relative',
          background: '#1a1a1a',
          borderRadius: '36px',
          padding: '16px 12px 20px',
          width: '100%',
          maxWidth: '360px',
          boxShadow: '0 16px 48px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.07)',
        }}
      >
        {/* Left volume buttons */}
        <div style={{ position: 'absolute', left: '-3px', top: '72px', width: '3px', height: '28px', background: '#2a2a2a', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: '-3px', top: '110px', width: '3px', height: '28px', background: '#2a2a2a', borderRadius: '2px 0 0 2px' }} />
        {/* Right power button */}
        <div style={{ position: 'absolute', right: '-3px', top: '96px', width: '3px', height: '40px', background: '#2a2a2a', borderRadius: '0 2px 2px 0' }} />
        {/* Notch */}
        <div style={{ width: '60px', height: '10px', background: '#1a1a1a', borderRadius: '0 0 10px 10px', margin: '0 auto 8px', position: 'relative', zIndex: 1 }} />
        {/* Screen */}
        <iframe
          src={src}
          allowFullScreen
          style={{ display: 'block', width: '100%', height: '70vh', borderRadius: '18px', border: 'none' }}
        />
        {/* Home indicator */}
        <div style={{ width: '60px', height: '4px', background: '#444', borderRadius: '2px', margin: '10px auto 0' }} />
      </div>
    </div>
  );
}

export default function PortfolioEmbedGroup({
  title,
  subSections,
  titleSize,
  className,
}: PortfolioEmbedGroupProps) {
  return (
    <PortfolioSection title={title} titleSize={titleSize} className={className}>
      <div className="space-y-12">
        {subSections.map((sub) => (
          <div key={sub.title}>
            <h4 className="text-xl font-medium text-foreground mb-4 text-center">
              {sub.title}
            </h4>
            {sub.phoneFrame ? (
              <PhoneFrame src={sub.figmaSrc} />
            ) : (
              <iframe
                className={`rounded-lg ${sub.imageClass ?? 'w-full h-[80vh]'}`}
                src={sub.figmaSrc}
                allowFullScreen
              />
            )}
            {sub.description && (
              <p className="text-center text-sm text-foreground/60 mt-3">
                {sub.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </PortfolioSection>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npm run build 2>&1 | tail -20
```

Expected: build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/portfolio/PortfolioEmbedGroup.tsx
git commit -m "feat: render CSS phone frame shell when phoneFrame flag is set"
```

---

### Task 3: Enable the phone frame on the Fallout Theater Phone Menu

**Files:**
- Modify: `src/data/portfolio/fallout-theater.ts`

- [ ] **Step 1: Set `phoneFrame: true` on the Phone Menu sub-section**

In `src/data/portfolio/fallout-theater.ts`, update the Phone Menu sub-section from:

```typescript
{
  title: 'Phone Menu',
  figmaSrc:
    'https://www.canva.com/design/DAHJNO1-ijY/l3xHmv-f8EIRgXw6-5ABcw/view?embed',
  imageClass: 'max-w-[500px] w-full h-[80vh] mx-auto block',
  description: 'Designed and embedded from Canva.',
},
```

to:

```typescript
{
  title: 'Phone Menu',
  figmaSrc:
    'https://www.canva.com/design/DAHJNO1-ijY/l3xHmv-f8EIRgXw6-5ABcw/view?embed',
  phoneFrame: true,
  description: 'Designed and embedded from Canva.',
},
```

(Remove `imageClass` — it is ignored when `phoneFrame` is true.)

- [ ] **Step 2: Start the dev server and verify visually**

```bash
npm run dev
```

Open http://localhost:4004/portfolio/fallout-theater and scroll to the Menu section. Confirm:
- The Phone Menu shows inside a dark phone shell with rounded corners, side buttons, notch, and home indicator
- The Printed Menu below it is unaffected (renders as a plain iframe)
- The phone frame is centered on desktop and stacks correctly on mobile

- [ ] **Step 3: Commit**

```bash
git add src/data/portfolio/fallout-theater.ts
git commit -m "feat: enable phone frame on Fallout Theater Phone Menu embed"
```
