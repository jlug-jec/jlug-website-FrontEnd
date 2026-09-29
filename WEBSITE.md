# JLUG Website — Complete System & Architecture Specification

## 1. Executive Summary

- **Organization:** JEC Linux Users Group (JLUG)
- **Institution:** Jabalpur Engineering College, Jabalpur, Madhya Pradesh, India
- **Established:** 2019
- **Tagline:** *"Where Culture Meets Code"*
- **Core Identity:** A dark digital clubhouse for students who build things — not an AI startup, SaaS product, or generic college club template.
- **Official Mascot:** Pingu Tiwari

---

## 2. Page Specifications & Content Matrix

| Route | Title | Status | Primary Components & Sections |
| :--- | :--- | :--- | :--- |
| `/` | **Home** | Production | • Top metadata strip (`JLUG / 001`, `EST. 2019`)<br>• Interactive Falling Block Hero Canvas (`FallingBlockScene`)<br>• Bottom metadata ribbon (`WHERE CULTURE MEETS CODE`)<br>• 01 // Manifesto (`LEARN. BUILD. SHARE.`)<br>• 02 // Directory (`LS -LA /DOMAINS`: Open Source, Dev, Robotics, AI/ML, Design, Events, Community)<br>• 03 // Sections (`CD /`: Navigation grid to 4 rooms)<br>• 04 // Personnel (`THE BUILDERS`: Asymmetric ID Cards)<br>• 05 // Event Archive (`CODEKUMBH` 2026 feature)<br>• Recruitment Terminal CTA (`EXECUTE /JOIN`, `PORT 8080 IS OPEN`)<br>• System Footer |
| `/events` | **Event Log** | Scaffolded | • Chronological archive of workshops, install fests, talks, and hackathons<br>• Academic year grouping<br>• Planned sub-routes at `/events/[slug]` |
| `/hall-of-fame` | **Hall of Fame** | Production | • Presidential chronicle documenting leadership from 2019 to present<br>• Term years, branches, portraits, and core team acknowledgements |
| `/members` | **Members** | Scaffolded | • Directory of active student developers & designers across 1st to 4th year<br>• Domain filtering and batch groupings using the ID Card design system |
| `/join` | **Recruitment** | Scaffolded | • Portal for incoming freshmen batch applications<br>• Timeline, open/closed window status, guidelines, and form integration |

---

## 3. Design System Summary

### Hard Visual Constraints
- **Prohibited:** Purple gradients, aurora backgrounds, glassmorphism, rounded pill buttons everywhere, emoji as icons, generic stock photos, fake terminal Matrix rain.
- **Mandated:** Dark theme, intentional typography, 1px lines (`--color-jlug-line`), sparse electric lime accents (`--color-jlug-accent`), monospace metadata labels.

### Color Tokens
```css
--color-jlug-black: #070707;          /* Canvas Base */
--color-jlug-ink: #0B0B0B;            /* Section Panels */
--color-jlug-surface: #111111;        /* Inset containers */
--color-jlug-surface-raised: #171717; /* Typographic depth */
--color-jlug-white: #F2F0E8;          /* Primary Text */
--color-jlug-white-soft: #D7D5CE;     /* Sub-headings */
--color-jlug-gray-1: #A3A29C;         /* Secondary Labels */
--color-jlug-gray-2: #777770;         /* Metadata & Mono */
--color-jlug-gray-3: #494944;         /* Subtle Tags */
--color-jlug-line: #292926;           /* Structural 1px Lines */
--color-jlug-accent: #B7F34A;         /* Sparse Electric Lime */
```

### Typography Hierarchy
- **Body & Headlines:** Geist Sans (variable font loaded via `next/font/google`)
- **Metadata & Technical Copy:** Geist Mono (variable font loaded via `next/font/google`)

---

## 4. Software Engineering & Modularity Rules

Adhering to `AGENTS.md` and standard clean architecture:
- **`UI ≠ Physics ≠ Data`**: Simulation logic lives in `src/features/hero/engine/`, configuration in `src/features/hero/data/`, and rendering in `src/features/hero/components/`.
- **Single Source of Truth**: Site routes, titles, descriptions, and todo items are strictly centralized in `src/lib/navigation.ts`.
- **Reusable Scaffolding**: Unimplemented routes leverage `src/components/PlaceholderPage.tsx` to display pending tasks directly in development.

---

## 5. Build & Development Commands

```bash
# Navigate to the web application directory
cd JLUG-2026

# Install project dependencies
npm install

# Start local dev server (port 3000)
npm run dev

# Run lint checks
npm run lint

# Create production build
npm run build

# Run production server
npm run start
```
