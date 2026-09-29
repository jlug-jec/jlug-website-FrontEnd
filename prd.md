# PRD — Team Members Section

**Feature:** Data-driven "Team Members" grid
**Stack:** Semantic HTML5, vanilla CSS3, vanilla JavaScript (ES2020+) — no framework, no build step
**Target agent:** Google Antigravity (or any coding agent) executing this as a self-contained task

---

## 1. Problem & Goal

The club needs a Team Members section that non-developers can update by editing a
JSON file — no HTML editing required to add, remove, or re-order members. The
layout must read as a deliberate, dark, modern editorial page (not a generic
SaaS-card template), and the cards must reveal a short bio and social links on
interaction rather than showing everything at once.

## 2. Deliverables

| File | Responsibility |
|---|---|
| `team.json` | All member data. Sole source of truth. |
| `index.html` | Semantic structure + one `<template>` defining the card markup once. |
| `style.css` | All visual styling, design tokens, responsive rules, motion. |
| `script.js` | Fetches `team.json`, clones the template per member, wires up interactions. |

No other files are required. No React, Vue, Tailwind, Bootstrap, or bundler.

## 3. Data Schema (`team.json`)

Array of member objects:

```json
{
  "id": 1,
  "name": "string, required",
  "role": "string, required",
  "image": "string (URL), required",
  "bio": "string, required, ~1–2 sentences",
  "socials": {
    "github": "string (URL), optional",
    "linkedin": "string (URL), optional"
  }
}
```

`socials` is optional per member and per platform — a card with no `socials`
key must render cleanly with no icon row. Adding a new member requires only a
new object in this array; no other file changes.

## 4. Layout & Interaction Spec

### 4.1 Structure
- `<header>` — club mark, page title, one-line subtitle.
- `<main><section class="team">` — heading (visually hidden, for screen
  readers) + `#team-grid` container populated at runtime.
- `<template id="member-card-template">` — the single reusable card layout,
  cloned via `content.cloneNode(true)` once per member. The layout must never
  be duplicated as a literal string in JS.

### 4.2 Grid
- CSS Grid, `repeat(auto-fit, minmax(260px, 1fr))`.
- Collapses to a single column under 480px.

### 4.3 Card — default state
- Portrait photo (4:5 ratio, `object-fit: cover`, large rounded corners —
  **not** a circular avatar; see Design Tokens for radius).
- Name + role visible below the photo, always.
- Bio and social links are hidden by default (`max-height: 0`).

### 4.4 Card — "toggle" behavior
This is the primary interaction, modeled on the reference recordings:
- **Hover or keyboard focus** (desktop): the card lifts slightly, its photo
  desaturation lifts to full color, and the bio panel expands to reveal the
  bio text + social icons. This must work with **pure CSS** (`:hover`,
  `:focus-within`) — no JS required for this path.
- **Click / tap** (touch, or desktop for a pinned-open state): toggles a
  persistent `.is-active` state via a dedicated `+` button in the card's
  corner (not the whole card, so links inside the bio remain clickable once
  open). The button becomes a `×` (45° rotation) when active, and
  `aria-expanded` reflects state.
- **Focus effect on siblings**: while one card is hovered or active, the
  other cards in the grid dim (`opacity` + `grayscale`) to draw attention to
  the active one, matching the reference site's blur/focus behavior.

### 4.5 "Scroll" behavior
- Cards fade + slide into place the first time they scroll into the
  viewport, via `IntersectionObserver` (one-shot per card, then unobserved).
- This must be skipped entirely (cards visible immediately, no motion) when
  `prefers-reduced-motion: reduce` is set, or when `IntersectionObserver` is
  unavailable.

### 4.6 Accessibility requirements
- Every card's toggle is a real `<button>` with `aria-expanded` and
  `aria-controls` pointing at the bio panel's id.
- Visible focus ring (`:focus-visible`) distinct from the hover state.
- All interaction states (hover, focus, active) are reachable by keyboard
  alone.
- Images carry the member's name as `alt` text.
- Motion respects `prefers-reduced-motion`.

## 5. Design Tokens

Colors were sampled directly from the pixel values of the supplied swatch
(two of the source labels were duplicated/incorrect, so these are the actual
rendered colors, darkest to lightest):

| Token | Hex | Usage |
|---|---|---|
| `--void` | `#0A1324` | Page background |
| `--navy` | `#16273B` | Card surface |
| `--steel` | `#1F3A52` | Borders, dividers |
| `--slate` | `#4D718E` | Muted text, hover states |
| `--mist` | `#8EB0C9` | Secondary text |
| `--frost` | `#CADBE9` | Headings, high-contrast text, focus ring |

No accent hue outside this palette is introduced — `--frost` (the lightest
step) doubles as the interactive highlight against the dark surfaces.

**Type:** `Space Grotesk` (display/headings) + `Inter` (body), loaded via
Google Fonts with a system-font fallback stack so the page still renders
correctly offline.

**Radius:** `20px` on cards and photos (soft, editorial — not a pill, not a
circle).

## 6. Explicit Non-Goals

- No pagination, search, or filtering — three members is the seed dataset;
  the grid must simply reflow correctly for more.
- No CMS or backend — `team.json` is static and hand-edited.
- No animation library — all motion is CSS transitions + one
  `IntersectionObserver`.
- No integration into any existing framework-based site in this pass (the
  files are framework-agnostic on purpose so they can be dropped into a
  React/Next.js component later as plain markup + copy-pasted CSS/JS logic
  if needed).

## 7. Acceptance Criteria

- [ ] Opening `index.html` through a local server (not `file://`) renders
      three member cards populated entirely from `team.json`.
- [ ] Editing, adding, or removing an object in `team.json` changes the
      rendered grid with zero HTML/JS edits.
- [ ] Hovering a card reveals its bio and social icons without JS (CSS-only
      path verified with JS disabled).
- [ ] Tapping a card's `+` button on a touch-width viewport toggles the bio
      open/closed and updates `aria-expanded`.
- [ ] Non-active cards visibly dim when another card is hovered/active.
- [ ] Cards animate in on scroll on first load, and do **not** when
      `prefers-reduced-motion: reduce` is emulated in devtools.
- [ ] Layout is a single column ≤480px, and a multi-column grid above it,
      with no horizontal overflow at any width from 320px up.
- [ ] Removing a member's `socials` key entirely does not break that card
      or leave an empty icon row with visible gaps.
- [ ] Lighthouse/axe: no missing alt text, no unlabeled buttons, visible
      focus indicators on every interactive element.

## 8. Execution Notes for the Agent

1. Serve the folder locally before testing — `fetch("team.json")` will fail
   under `file://` due to browser CORS restrictions on local file reads.
   (`npx serve`, `python3 -m http.server`, or the IDE's built-in preview all
   work.)
2. Treat `team.json` as the only file a non-technical club member should
   ever need to touch — if a future task requires touching `index.html` or
   `script.js` just to add a member, that's a regression against §1.
3. Keep `style.css` the single source of visual truth; don't introduce
   inline styles or a second stylesheet.