# Hall of Fame — Scroll Effect (Build Spec v2, corrected)

> **Correction note:** the first version of this guide misread the reference recording
> as 8 different profiles cycling through a stepper. The clip was saved rotated 90° —
> once upright, it's actually **one** portfolio hero (single person), scrolling normally.
> This version replaces the stepper/carousel approach with what's actually in the source:
> a sticky/pinned photo, an ambient particle background, and a one-shot scramble reveal.

Goal: bring that hero's real mechanics — particle ambience, glow-blob photo, scramble-in
text, sticky-pinned portrait while content scrolls past it — into your JLUG dark/lime
theme, repeated once per president for all 8 terms:
**2026‑27 → 2025‑26 → 2024‑25 → 2023‑24 → 2022‑23 → 2021‑22 → 2020‑21 → 2019‑20.**

---

## 1. What the reference actually does

Frame-by-frame, upright:

1. **Hero**: the person's name is static. The line beneath it (their job title) auto-cycles
   through several strings on a timer, using a character-scramble decode transition
   (random glyphs settle into real letters) — e.g. "Web Developer" → glitch → "Frontend
   Developer". This loop runs on its own; scrolling doesn't drive it.
2. A soft, blurred color blob glows behind the photo. A field of small particles drifts
   across the *entire* dark background continuously — not per-section, it's one ambient
   layer behind everything, plus a soft glowing dot that trails the cursor.
3. Scrolling past the hero, the photo goes **sticky** and holds its position on screen for
   a long stretch while the rest of the page scrolls underneath it.
4. A pull-quote ("Creativity Is My Passion") then fades in beside the still-pinned photo,
   with a short paragraph and a button.
5. Finally a heading gives way to a row of project cards.

No stepper dots, no multi-subject carousel, no discrete scroll-snapped panels anywhere in
the source — that structure was invented in the previous draft. Dropped below.

---

## 2. Design tokens (unchanged from v1 — still correct, sampled from your screenshot)

```css
:root {
  --bg: #070707;
  --bg-nav: #0f0f0f;
  --fg: #f2f0e8;
  --fg-dim: #8a8a85;
  --accent: #b7f34a;
  --accent-dim: #24301a;
  --border: #1c1c1c;

  --font-display: 'Neue Machina', 'Space Grotesk', 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', 'IBM Plex Mono', monospace;
}
```

---

## 3. Mapping onto Hall of Fame (honest version)

The reference is a **single-subject** hero — it was never built to hold 8 people. The
faithful translation isn't "cycle 8 names through one hero slot," it's: repeat the
reference's per-subject pattern once per president, stacked down the page.

```
[particle canvas — one continuous layer behind the ENTIRE page, all 8 blocks]

┌───────────────────────────────────────────────┐
│ TERM 05 / 08                        2022–23    │ ← plain mono tag, scrolls normally
│                                                 │
│   SNEHA KULKARNI                ┌───────────┐  │
│   (scrambles in ONCE, the       │  photo +  │  │ ← sticky WITHIN this block only,
│    first time this block        │  lime     │  │   releases when the block ends
│    enters view)                 │  glow     │  │
│                                  └───────────┘  │
│   "Formalised the club's domain structure."     │
│   (fades in, same beat as the reference quote)  │
└───────────────────────────────────────────────┘
  ...repeat for each of the 8 terms, tallest section = most scroll room for the pin...
```

Key differences from v1, and why:

- **Name scrambles in once**, when its block first enters view — not a repeating cycle.
  The reference's cycling only makes sense for one hero rotating through several titles;
  8 different people don't share a slot to cycle through.
- **Photo is `position: sticky` inside its own block** (not the whole page), so it holds
  still while that president's text scrolls past, then lets go as the next block begins —
  this is the actual "long pinned scroll" from the source, just given real content instead
  of empty space.
- **One particle canvas behind the whole page**, recolored to lime, not per-panel.
- **No stepper dots, no "closest panel" JS** — removed. Nothing in the source uses them.

---

## 4. Data (unchanged)

```js
// hall-of-fame-data.js
export const HALL_OF_FAME = [
  { term: "2026–27", name: "TBD", role: "President", quote: "", photo: "/img/hof/2026.jpg" },
  { term: "2025–26", name: "TBD", role: "President", quote: "", photo: "/img/hof/2025.jpg" },
  { term: "2024–25", name: "TBD", role: "President", quote: "", photo: "/img/hof/2024.jpg" },
  { term: "2023–24", name: "TBD", role: "President", quote: "", photo: "/img/hof/2023.jpg" },
  { term: "2022–23", name: "TBD", role: "President", quote: "", photo: "/img/hof/2022.jpg" },
  { term: "2021–22", name: "TBD", role: "President", quote: "", photo: "/img/hof/2021.jpg" },
  { term: "2020–21", name: "TBD", role: "President", quote: "", photo: "/img/hof/2020.jpg" },
  { term: "2019–20", name: "TBD", role: "Founding President", quote: "", photo: "/img/hof/2019.jpg" },
];
```

---

## 5. HTML

```html
<section id="hall-of-fame" class="hof">
  <canvas class="hof-particles" data-particles></canvas>

  <header class="hof-header">
    <span class="hof-eyebrow">02 // HALL OF FAME</span>
  </header>

  <!-- one block per term — generate with .map() over HALL_OF_FAME, or hand-write 8 -->
  <article class="hof-block" data-term="2022–23">
    <div class="hof-text">
      <p class="hof-term-tag">TERM 05 / 08 &nbsp;·&nbsp; 2022–23</p>
      <h2 class="hof-name" data-scramble-once data-target="SNEHA KULKARNI">SNEHA KULKARNI</h2>
      <p class="hof-role">President</p>
      <p class="hof-quote">"Formalised the club's domain structure."</p>
    </div>
    <div class="hof-photo-wrap">
      <div class="hof-glow"></div>
      <img src="/img/hof/2022.jpg" alt="Sneha Kulkarni" />
    </div>
  </article>
  <!-- ...repeat for all 8 terms... -->
</section>
```

---

## 6. CSS

```css
.hof {
  position: relative;
  background: var(--bg);
  color: var(--fg);
  overflow: clip;              /* so sticky children don't leak past the section */
}

.hof-particles {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.hof-header {
  position: sticky;
  top: 2rem;
  z-index: 5;
  padding: 0 4rem;
}
.hof-eyebrow {
  font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: 0.15em;
  color: var(--fg-dim); text-transform: uppercase;
}

.hof-block {
  position: relative;
  z-index: 1;
  min-height: 160vh;           /* extra height = more scroll room for the pin to hold */
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3rem;
  padding: 0 4rem;
  border-top: 1px solid var(--border);
}

.hof-text { padding-top: 22vh; }
.hof-term-tag {
  font-family: var(--font-mono); color: var(--fg-dim); font-size: 0.8rem;
  letter-spacing: 0.1em; margin-bottom: 1rem;
}
.hof-name {
  font-family: var(--font-display); font-size: clamp(2.5rem, 6vw, 5rem);
  line-height: 0.95; text-transform: uppercase; color: var(--fg);
}
.hof-role { color: var(--accent); font-family: var(--font-mono); margin-top: 0.75rem; }
.hof-quote {
  color: var(--fg-dim); margin-top: 1.5rem; max-width: 32ch; font-style: italic;
  opacity: 0; transform: translateY(12px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.hof-block.in-view .hof-quote { opacity: 1; transform: translateY(0); }

/* the actual "sticky pin" from the reference — scoped to ONE block at a time */
.hof-photo-wrap {
  position: sticky;
  top: 15vh;
  height: 70vh;
  align-self: start;
  justify-self: center;
}
.hof-photo-wrap img {
  width: min(320px, 80%); border-radius: 4px; position: relative; z-index: 1;
}
.hof-glow {
  position: absolute; inset: -20%; z-index: 0;
  background: radial-gradient(circle, var(--accent-dim) 0%, transparent 70%);
  filter: blur(40px);
}

@media (max-width: 768px) {
  .hof-block { grid-template-columns: 1fr; }
  .hof-photo-wrap { position: static; height: auto; margin-top: 2rem; }
}
```

---

## 7. JavaScript

Two independent pieces — particles run continuously and don't care about scroll; the
scramble fires once per block the first time it's seen.

```js
// particles.js — ambient drifting dots, one canvas behind the whole section
function initParticles(canvas) {
  const ctx = canvas.getContext('2d');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let dots = [];

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const count = Math.floor((canvas.width * canvas.height) / 18000); // density
    dots = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      a: Math.random() * 0.5 + 0.2,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#b7f34a';
    for (const d of dots) {
      d.x += d.vx; d.y += d.vy;
      if (d.x < 0) d.x = canvas.width; if (d.x > canvas.width) d.x = 0;
      if (d.y < 0) d.y = canvas.height; if (d.y > canvas.height) d.y = 0;
      ctx.globalAlpha = d.a;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (!reduceMotion) requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw(); // draws one static frame even if reduceMotion is true, then stops
}

// text-scramble.js — same decode effect as the reference, fired ONCE per element
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
  }
  setText(newText) {
    const oldText = this.el.textContent;
    const length = Math.max(oldText.length, newText.length);
    let frame = 0;
    const queue = Array.from({ length }, (_, i) => {
      const start = Math.floor(Math.random() * 20);
      return { from: oldText[i] || '', to: newText[i] || '', start, end: start + Math.floor(Math.random() * 20) };
    });
    const update = () => {
      let output = '', complete = 0;
      for (const { from, to, start, end } of queue) {
        if (frame >= end) { complete++; output += to; }
        else if (frame >= start) output += this.chars[Math.floor(Math.random() * this.chars.length)];
        else output += from;
      }
      this.el.textContent = output;
      if (complete < queue.length) { frame++; requestAnimationFrame(update); }
    };
    update();
  }
}

// hall-of-fame.js — wire both up
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('[data-particles]');
  if (canvas) initParticles(canvas);

  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const block = entry.target;
        block.classList.add('in-view');           // fades the quote in (CSS handles it)

        const nameEl = block.querySelector('[data-scramble-once]');
        if (nameEl && !nameEl.dataset.done) {
          nameEl.dataset.done = 'true';
          const target = nameEl.dataset.target || nameEl.textContent;
          if (reduceMotion) nameEl.textContent = target;
          else new TextScramble(nameEl).setText(target);
        }
        obs.unobserve(block);                      // one-shot — never re-trigger
      });
    },
    { threshold: 0.35 }
  );

  document.querySelectorAll('.hof-block').forEach((b) => observer.observe(b));
});
```

---

## 8. Integration checklist

- [ ] Confirm `--font-display` / `--font-mono` against your live nav and headline.
- [ ] Drop 8 headshots into `/img/hof/`, fill in `hall-of-fame-data.js`.
- [ ] Render the 8 `.hof-block` articles from `HALL_OF_FAME` via `.map()` in whatever
      templating you use, rather than hand-writing 8 copies of the markup in section 5.
- [ ] Particle density in `resize()` is tuned for a roomy hero; if it looks too busy across
      8 tall stacked blocks, lower the divisor (`18000` → higher number = fewer dots).
- [ ] `.hof-block { min-height: 160vh }` is what gives the sticky photo room to actually
      hold still — shrink it and the pin will barely last a moment; stretch it for longer.

## 9. Accessibility

- Both effects already check `prefers-reduced-motion`: particles draw one static frame
  and stop; the scramble resolves straight to the final text instead of decoding.
- The real name (`data-target`) is also the element's actual starting `textContent`, so
  it's present in the DOM before any script runs — nothing depends on JS for content.