# Figma Make Export Cleanup Summary

## Stats

| Metric | Before | After | Removed |
|--------|--------|-------|---------|
| Source files (.tsx/.ts) | 100 | 24 | **76** |
| PNG assets | 69 | 44 | **25** |
| npm dependencies | 53 | 5 | **48** |
| CSS theme variables | ~40 | 8 | **~32** |
| Total files (src/) | 173 | 71 | **102** |

## What Was Removed

### Unused UI Components (48 files)
**Entire `src/app/components/ui/` folder** — shadcn/radix-ui component library scaffolding.
Zero imports outside the folder. Safe: project uses Tailwind inline classes + motion.

### Unused Figma Imports (45 files)
37 component files + 13 SVG asset modules from `src/imports/` — old Figma node iterations
(e.g., `HeroMainPage-38-96.tsx`, `Frame15-44-365.tsx`, `Ewrew.tsx`, `PorjectPage.tsx`).
Only referenced internally or not at all. 13 used files retained.

### Orphaned App Components (3 files)
- `CaseStudyPage.tsx` — never imported
- `BitPhoneSlideshow.tsx` — never imported
- `figma/ImageWithFallback.tsx` — never imported

### Orphaned PNG Assets (25 files)
Hash-named PNGs in `src/assets/` only referenced by deleted import files.

### Unused npm Dependencies (48 packages)
All `@radix-ui/*` (26), `@emotion/*`, `@mui/*`, `react-dnd`, `recharts`, `react-hook-form`,
`react-slick`, `react-responsive-masonry`, `sonner`, `vaul`, `cmdk`, `date-fns`,
`react-day-picker`, `embla-carousel-react`, `input-otp`, `next-themes`, `react-popper`,
`@popperjs/core`, `react-resizable-panels`, `class-variance-authority`, `clsx`, `tailwind-merge`.

### Dead CSS Tokens
- Dark mode theme (`.dark {}` block) — no dark mode toggle exists
- Sidebar tokens (`--sidebar-*`) — no sidebar component used
- Chart tokens (`--chart-*`) — no chart component used
- Unused semantic tokens (card, popover, primary, secondary, muted, accent, destructive, input, switch)
- Unused font: (none — Instrument Sans was re-added after finding 40+ references in content files)

### Dead Code in Components
- `mobileMenuOpen` / `useState` in all 5 case study wrappers (declared, never used)
- `onReadCaseStudy` prop on `ProjectCard` (defined, never passed)
- `imgBehalf` import in `App.tsx` (imported, never rendered)

## What Was Consolidated

### CaseStudyLayout (new: `src/app/components/CaseStudyLayout.tsx`)
5 identical case study wrapper components shared the same header/back-button layout
(~54 lines each, ~270 lines total). Extracted into a single `CaseStudyLayout` component.
Each wrapper is now ~14 lines.

**Canonical location:** `src/app/components/CaseStudyLayout.tsx`

## Conventions Adopted

| Category | Convention |
|----------|-----------|
| Export style | Named exports (`export function X`) everywhere |
| Import paths | `@/` alias for `src/` (absolute), relative for siblings |
| Styling | Tailwind CSS v4 (inline classes) |
| Component naming | PascalCase files, PascalCase components |
| CSS tokens | Minimal set in `src/styles/theme.css` (background, foreground, border, ring) |
| Fonts | Poppins (primary), Instrument Sans (section headers), Inter (charts) |

## Build Support

Added `figmaAssetResolver()` Vite plugin so the project builds standalone
(outside Figma Make environment). Maps `figma:asset/<hash>.png` → `src/assets/<hash>.png`.

Moved `react`/`react-dom` from peerDependencies to regular dependencies.

## Remaining TODOs

- [ ] **Typos in Figma-generated filenames**: `CaseStuty` (should be CaseStudy), `Conent` (should be Content), `XreamioContent` (should be XtreamIOContent). These are in the large Figma-generated content files — renaming requires updating import paths. Low risk to defer.
- [ ] **No router**: App uses `useState` for page switching — no URL-based navigation. Consider adding `react-router` if deep linking is needed.
- [ ] **Large JS bundle**: 844 kB gzipped to 261 kB. Consider code-splitting case study pages with `React.lazy()`.
- [ ] **No tests**: Consider adding basic render smoke tests for key pages.
- [ ] **Instrument Sans font** uses Figma's `font-['Instrument_Sans:Bold',sans-serif]` syntax in Tailwind classes — works but is unconventional. Consider mapping to a proper `@font-face` declaration if customization is needed.

## Commit History

```
008d935 refactor: consolidate components, remove dead code, add build support
ae0c688 chore: strip unused dependencies and CSS tokens
185381d chore: delete unused files (88 files removed)
d8373af chore: baseline commit of Figma Make export
```

## Final Folder Structure

```
src/
  main.tsx                              # Entry point
  app/
    App.tsx                             # Root component (state-based routing + hero page)
    components/
      CaseStudyLayout.tsx               # Shared case study header/back-button layout
      ProjectCard.tsx                   # Reusable project card for home page
      AboutPage.tsx                     # About page with mobile nav
      ContactPage.tsx                   # Contact form page with mobile nav
      FundguardCaseStudy.tsx            # Thin wrapper → CaseStudyLayout + content
      BitCaseStudy.tsx                  # Thin wrapper → CaseStudyLayout + content
      XtreamIOCaseStudy.tsx             # Thin wrapper → CaseStudyLayout + content
      MondayCaseStudy.tsx               # Thin wrapper → CaseStudyLayout + content
      BluevineCaseStudy.tsx             # Thin wrapper → CaseStudyLayout + content
  imports/                              # Figma Make generated content (13 used files)
    CaseStutyFundguardContent.tsx       # Fundguard case study body
    CaseStutyBitContent.tsx             # Bit case study body
    CaseStutyXreamioContent.tsx         # XtreamIO case study body
    CaseStutyMondayConent.tsx           # Monday case study body
    CaseStutyBluevineConent.tsx         # Bluevine case study body
    FundguardStudyCaseText.tsx          # Fundguard text content
    svg-*.ts / svg-*.tsx                # SVG data used by content files (7 files)
  assets/                               # PNG images (44 files, hash-named)
  styles/
    index.css                           # CSS entry (imports fonts, tailwind, theme)
    fonts.css                           # Google Fonts: Poppins, Inter
    tailwind.css                        # Tailwind v4 config
    theme.css                           # CSS custom properties + base typography
```
