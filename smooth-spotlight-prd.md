# PRD — Smooth Spotlight Motion + Penguin Mascot

**Extends:** `team-members/` (`index.html`, `style.css`, `script.js`, `team.json`)
**Target agent:** Google Antigravity (or any coding agent), executing against the existing team-members codebase
**Reference:** user-supplied recording of cosmos.so's marketing site ("How smooth is this website!")

---

## 1. What the reference is actually doing

Breaking the recording down into distinct effects, since only some of it is a
good fit for a members page:

| Effect in the reference | Feasible here? | Decision |
|---|---|---|
| Bento tiles cross-fade smoothly as headline copy changes on scroll | Yes | Adapt as an **enhanced scroll-reveal**: stagger, spring-like easing, subtle parallax drift instead of a flat fade. |
| One tile smoothly grows, centers itself, and dims everything behind it | Yes | Adapt as a **spotlight expand**: replaces the current small in-card bio toggle with a full "lightbox-style" enlarge for the selected member. |
| Tiles idle with a very faint floating motion before interaction | Yes | Small CSS keyframe bob, staggered per card so they don't move in unison. |
| Particle "dust" settling into place | Partial | Out of scope as literal particles (needs canvas/WebGL to look good, not "vanilla" territory for a 3-person team grid). Cut, but its *purpose* — signal that something is "arriving" — is already covered by the scroll-reveal. |
| Floating 3D asteroids in the footer (WebGL) | No | Cut entirely — wrong tool for a club members page, real 3D rendering cost, way outside a data-driven vanilla page. |

So the brief below covers two additions — **spotlight expand** and
**refined ambient motion** — plus the requested **penguin mascot**. It does
not attempt 3D or particle systems.

## 2. Design tokens — unchanged

Reuse the exact tokens already defined in `style.css`. Do not introduce new
hues; the "smooth" quality in the reference comes from motion curves and
timing, not new color.

```
--void:  #0A1324   --steel: #1F3A52   --mist:  #8EB0C9
--navy:  #16273B   --slate: #4D718E   --frost: #CADBE9
```

Add one motion token to `:root`:

```css
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* slight overshoot, reads as "smooth" */
```

Reserve the existing `--ease` for exits/dimming (no overshoot on the way
out — only on the way in).

## 3. Feature A — Spotlight expand (replaces the small bio toggle)

Currently, clicking a card's `+` button expands a short panel in place.
Upgrade this to match the reference's "tile grows and centers itself":

- On activate (click, or Enter/Space when the card is focused): the selected
  card animates from its grid position/size to a larger, centered overlay
  card — same rounded-corner language, same content (photo, name, role,
  bio, socials), just bigger and elevated above a dimmed backdrop.
- Implement with the **FLIP technique** (First, Last, Invert, Play): record
  the card's current `getBoundingClientRect()`, move it to its expanded
  position/size, then animate the inverse transform back to identity so the
  motion is a single continuous `transform` — this is what makes it read as
  "smooth" rather than a jump-cut, and keeps the animation on
  `transform`/`opacity` only (no layout thrashing).
- A backdrop (`--void` at ~70% opacity, `backdrop-filter: blur(6px)`) fades
  in behind it; the rest of the grid keeps the existing dim/grayscale
  treatment from the current hover state.
- Dismiss on: click on the backdrop, click the same toggle (now a `×`),
  or `Escape`. Reverses the same FLIP transform back to the card's original
  grid slot.
- Only one card may be expanded at a time.
- Use `--ease-spring` for the expand, `--ease` (no overshoot) for the
  collapse — expanding should feel eager, closing should feel calm.

**Accessibility:** move focus into the expanded card on open (e.g. onto its
close button) and return focus to the originating card's toggle on close;
trap `Tab` within the expanded card while open; keep the underlying grid
`aria-hidden="true"` and `inert` while expanded so screen reader/keyboard
users don't land on dimmed content.

## 4. Feature B — Ambient motion refinements

Two small additions, both purely decorative and both required to respect
`prefers-reduced-motion: reduce` (skip entirely, static end-state only):

1. **Idle float:** each card gets a slow (6–9s), tiny (±4px), staggered
   `translateY` keyframe loop while at rest — never while expanded or
   hovered. Stagger via `animation-delay` derived from the card's index so
   the grid doesn't bob in lockstep.
2. **Scroll-reveal easing:** swap the current reveal transition's easing to
   `--ease-spring` and stagger each card's `transition-delay` by ~60ms ×
   index (capped, so a long roster doesn't produce a multi-second cascade).

## 5. Feature C — Penguin mascot

Linux's own mascot is a penguin, so this doubles as a quiet nod to what the
club is about, not just decoration.

- A small (~72px), simple line-art penguin SVG, colored from the existing
  palette (`--frost` body, `--slate` outline, `--steel` beak/feet accents —
  no new hues), placed near the header, e.g. tucked beside or just behind
  the page title.
- **Idle state:** a very subtle sway/blink loop (few-degree rotation on the
  head or a quick blink every several seconds) — same
  `prefers-reduced-motion` rule as Feature B; static (no animation) when
  reduced motion is set.
- **Reacts to the spotlight state:** when a card is expanded (Feature A),
  the penguin ducks/slides off to the side (a short transform, not a
  layout change) so it never overlaps the dimmed backdrop or the expanded
  card, then slides back on close. This is the one moment it's allowed to
  move quickly — it's responding to the person's action, consistent with
  how the rest of the page only animates in response to something the user
  did.
- Marked `aria-hidden="true"` / `role="presentation"` — it's decoration,
  not content, and must not be the only carrier of any information.
- Optional, low priority: a click on the penguin does something small and
  self-contained (e.g. a one-off waddle or a flipper-wave keyframe) purely
  for delight — skip this first if time is short; it's not load-bearing.

## 6. File changes

No new files. Everything lands in the existing four:

| File | Change |
|---|---|
| `style.css` | Add `--ease-spring` token, spotlight/backdrop styles, idle-float keyframes, updated reveal easing/stagger, penguin styles + keyframes. |
| `script.js` | Add FLIP-based expand/collapse logic, focus trap + `inert` toggling on the grid, escape/backdrop-click handlers, per-card stagger delay assignment, penguin duck/return trigger tied to expand state. |
| `index.html` | Add the penguin SVG (inline, once) near the header; add an empty backdrop element for the spotlight overlay. |
| `team.json` | No schema change required. |

## 7. Acceptance Criteria

- [ ] Activating a card smoothly grows it into a centered, larger view of
      the same content — no jump-cut, no layout reflow visible mid-animation.
- [ ] Only one card can be expanded at a time; opening a second closes the
      first.
- [ ] Escape, backdrop click, and the toggle button all close the expanded
      card, animating back to its exact original grid position.
- [ ] Keyboard focus moves into the expanded card on open and back to the
      trigger on close; background grid is `inert` while expanded.
- [ ] With `prefers-reduced-motion: reduce` active: no idle float, no
      spring overshoot, no penguin sway — content still fully usable, cards
      still expand/collapse but as an instant or linear-fade state change.
- [ ] The penguin is visible near the header, does not overlap or obscure
      any text or card at any viewport width from 320px up, and moves out
      of the way whenever a card is expanded.
- [ ] No new colors introduced outside the six existing tokens.
- [ ] All added motion runs on `transform`/`opacity` only (verify in
      DevTools' Performance/Rendering paint-flashing tool — no
      layout/paint storms).

## 8. Non-goals

- No WebGL, canvas particles, or 3D assets — cut from the reference for the
  reasons in §1.
- No new fonts, colors, or layout system beyond what §2 lists.
- No change to how members are added/edited — `team.json` stays the only
  file a non-developer needs to touch.

## 9. Execution notes for the agent

1. Build and test Feature A first in isolation (it's the highest-value,
   highest-risk piece); layer in B and C once it's solid.
2. Verify the FLIP animation using real `getBoundingClientRect()` values,
   not hard-coded pixel guesses — the whole point of FLIP is that it works
   regardless of where the card sits in the grid or what viewport size
   you're on.
3. Test with three members (current dataset) and with a temporarily
   expanded dataset (8–10 entries) to confirm the scroll stagger cap in
   §4.2 actually prevents a slow cascade on a bigger roster.
4. Test keyboard-only and with `prefers-reduced-motion` emulated in
   DevTools before calling this done — both are acceptance criteria, not
   optional polish.