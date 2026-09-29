# JLUG Website --- Design System

## 0. North Star

JLUG should feel like a **real student technology community with a
strong visual identity**, not a template, startup landing page, SaaS
dashboard, or "AI website."

The visitor reaction we want:

> **"What is this?" → "This is JLUG?" → "These people are cool." → "I
> want to join."**

JLUG's identity is rooted in Linux, open source, peer learning,
building, experimentation, creativity, and campus culture. The current
positioning, **"Where Culture Meets Code,"** should remain the
conceptual anchor.

### Design equation

``` text
OPEN SOURCE
     +
TECHNOLOGY
     +
STUDENT CULTURE
     +
EXPERIMENTATION
     +
COMMUNITY
     +
PINGU TIWARI
     =
JLUG
```

The visual system should therefore be:

-   dark
-   optimistic
-   experimental
-   precise
-   playful without being childish
-   technical without becoming cyberpunk cliché
-   editorial rather than corporate
-   expressive without being noisy

------------------------------------------------------------------------

# 1. The Anti-Generic Rule

This is the most important section.

## JLUG must NOT look like an AI-generated website.

Avoid all of the following unless there is a very specific, documented
reason:

-   purple/blue "AI" gradients
-   blurred aurora backgrounds
-   glowing glassmorphism
-   excessive rounded cards
-   excessive shadows
-   floating gradient blobs
-   random sparkles
-   emoji used as icons
-   generic "AI" illustrations
-   stock photos of programmers
-   giant pill-shaped buttons everywhere
-   excessive use of Inter/Poppins with no typographic character
-   every section centered
-   identical cards repeated 20 times
-   meaningless terminal commands
-   fake hacker copy
-   Matrix rain
-   random glitch effects
-   excessive parallax
-   decorative noise that has no relationship to the design
-   gradients added simply because a section feels empty

### Principle

> **Every visual element needs a reason to exist.**

If removing an effect makes the design clearer, remove the effect.

If an animation does not communicate hierarchy, state, interaction,
history, or personality, remove it.

If a color does not communicate hierarchy or interaction, remove it.

------------------------------------------------------------------------

# 2. Visual Personality

JLUG should feel like a **digital clubhouse / experimental poster
archive**.

Think:

-   old-school computer graphics
-   bitmap typography
-   printed technical manuals
-   campus posters
-   open-source culture
-   engineering diagrams
-   modern editorial design
-   experimental web typography
-   monochrome interfaces
-   physical stickers / labels translated into digital form

Do NOT interpret this as retro nostalgia.

The goal is:

> **Old technical visual language + contemporary web interaction.**

------------------------------------------------------------------------

# 3. Color System

## 3.1 Primary palette

The foundation should be almost entirely monochrome.

``` css
:root {
  --jlug-black: #070707;
  --jlug-ink: #0B0B0B;
  --jlug-surface: #111111;
  --jlug-surface-raised: #171717;

  --jlug-white: #F2F0E8;
  --jlug-white-soft: #D7D5CE;

  --jlug-gray-1: #A3A29C;
  --jlug-gray-2: #777770;
  --jlug-gray-3: #494944;

  --jlug-line: #292926;
}
```

### Why warm off-white?

Do not use pure white everywhere.

`#F2F0E8` gives the interface a slightly physical/editorial quality. It
feels less like a default software dashboard.

Pure white may still be used for occasional high-contrast emphasis, but
it should not be the default text color.

------------------------------------------------------------------------

## 3.2 Accent color

Use **one strong accent**.

Recommended starting point:

``` css
--jlug-accent: #B7F34A;
```

This is an energetic yellow-green/lime rather than a stereotypical
terminal green.

Use it for:

-   active navigation
-   selected states
-   small status indicators
-   interactive typography
-   links on hover
-   important metadata
-   tiny Pingu details
-   event status
-   cursor interactions
-   recruitment CTA

Do NOT use it as a large background.

Do NOT make the entire site green.

Do NOT put a lime gradient behind every section.

### Accent rule

> **The accent should feel earned.**

When everything is accent-colored, nothing is highlighted.

------------------------------------------------------------------------

## 3.3 Optional secondary colors

Only introduce secondary colors when content requires categorization.

Potential restrained palette:

``` text
Warm red      #FF625C
Blue          #6E9BFF
Yellow        #F2C94C
```

These are **content colors**, not general decoration.

For example:

-   event category
-   archive year
-   project type

Do not use all of them simultaneously.

------------------------------------------------------------------------

# 4. Color Ratios

Target approximately:

``` text
70–80%  near-black / dark surfaces
15–20%  warm white / neutral text
 3–8%   gray infrastructure
 1–3%   accent
```

The exact percentage can vary, but the principle is strict:

> **JLUG is a dark site with a bright accent, not a neon site.**

------------------------------------------------------------------------

# 5. No Gradient Policy

Gradients are **not banned**, but they must be rare.

Do NOT use:

``` text
purple → blue
pink → purple
blue → cyan
```

especially with blur.

Those combinations immediately produce the generic AI/SaaS aesthetic.

If a gradient is ever used, it should be:

-   extremely subtle
-   monochrome or accent-to-transparent
-   tied to a specific interaction
-   visually necessary

Default assumption:

> **No gradient.**

------------------------------------------------------------------------

# 6. Typography --- THE CORE OF THE DESIGN

Typography is more important than effects.

If the site still looks good with all animations disabled, the
typography is doing its job.

## 6.1 Font architecture

Use two primary families.

### Display / UI

Choose one strong contemporary grotesk:

**Preferred candidates:** - Space Grotesk - Geist Sans - Satoshi -
General Sans

Do not use multiple display fonts.

### Technical / metadata

Use:

**IBM Plex Mono** or **JetBrains Mono**

for:

-   metadata
-   labels
-   coordinates
-   archive numbers
-   dates
-   technical information
-   small navigation utilities
-   ASCII
-   system-like annotations

------------------------------------------------------------------------

# 7. Typography Hierarchy

The typography should have a dramatic scale.

## Display XL

Used for:

-   JLUG hero
-   major section statements

Characteristics:

``` text
font-size: clamp(5rem, 16vw, 15rem);
font-weight: 600–700;
line-height: 0.78–0.9;
letter-spacing: -0.07em;
```

The exact size should be responsive.

### Important

Do NOT simply make text huge because "modern websites have huge text."

The huge typography must form the visual composition.

------------------------------------------------------------------------

## Display L

Used for:

-   page titles
-   major statements

``` text
font-size: clamp(3.5rem, 9vw, 9rem);
line-height: 0.85–0.95;
letter-spacing: -0.055em;
```

------------------------------------------------------------------------

## Heading

Used for:

-   cards
-   subsections
-   event titles

``` text
font-size: clamp(1.75rem, 3vw, 3.5rem);
line-height: 0.95–1.05;
letter-spacing: -0.035em;
```

------------------------------------------------------------------------

## Body

``` text
font-size: 1rem–1.125rem;
line-height: 1.5–1.65;
```

Body copy should be easy to read.

Do not make paragraphs microscopic just because the site is "technical."

------------------------------------------------------------------------

## Mono Label

``` text
font-family: IBM Plex Mono;
font-size: 0.68rem–0.82rem;
text-transform: uppercase;
letter-spacing: 0.08em;
```

Example:

``` text
JLUG / 001
JEC / JABALPUR
EST. 2019
```

------------------------------------------------------------------------

# 8. Bitmap / ASCII Typography

The supplied Facebook reference establishes the right visual direction:

**large bitmap-like lettering + framed composition + technical label.**

JLUG should develop its own version rather than copying the reference.

### Hero wordmark

The giant `JLUG` should have a bitmap / ASCII treatment.

Possible implementation:

1.  SVG-based bitmap letterforms
2.  CSS grid of square cells
3.  Canvas/WebGL particle typography
4.  character-based ASCII rendering
5.  pre-rendered SVG for the fallback

### Preferred approach

Use an actual vector/bitmap representation for predictable rendering,
then layer interaction on top.

Do not depend entirely on a webfont that may fail to load.

------------------------------------------------------------------------

# 9. Hero Typography Treatment

The word:

# JLUG

is the hero's primary visual object.

It should occupy a large portion of the first viewport.

Supporting information should remain small.

Example hierarchy:

``` text
JLUG

JEC LINUX USERS GROUP
JABALPUR / INDIA
EST. 2019

WHERE CULTURE MEETS CODE
```

The supporting text should **not compete** with JLUG.

------------------------------------------------------------------------

# 10. Interactive JLUG Wordmark

The hero wordmark should react to the visitor.

## Idle

Clean bitmap/ASCII composition.

## Cursor proximity

Characters/cells subtly shift.

## Cursor crossing letters

Nearby cells distort or displace.

## Leaving the wordmark

The letters smoothly reconstruct.

## Click/tap

Trigger a short, satisfying transformation.

Possible sequence:

``` text
JLUG
 ↓
J L U G
 ↓
ASCII fragments
 ↓
JLUG
```

Keep it under approximately 700ms.

### Never make it chaotic.

The visitor should understand that they caused the effect.

------------------------------------------------------------------------

# 11. ASCII Language

ASCII is a **visual language**, not the entire UI.

Use it for:

-   section transitions
-   decorative diagrams
-   labels
-   background fragments
-   archive markers
-   loading states
-   page transitions
-   Pingu-related moments
-   technical annotations

Example:

``` text
+--------------------------------+
| JLUG / ARCHIVE                 |
|                                |
| 2019 ─── 2020 ─── 2021 ───>   |
+--------------------------------+
```

Or:

``` text
0101  01
  01 0101
0101      1
```

Keep ASCII compositions intentional and sparse.

------------------------------------------------------------------------

# 12. Grid System

Use a visible but subtle grid.

The grid should feel inspired by:

-   engineering drawings
-   editorial layouts
-   technical documentation

not a futuristic HUD.

Suggested:

``` css
grid line opacity: 0.04–0.08;
```

Grid lines can become slightly more visible on hover or during
transitions.

------------------------------------------------------------------------

# 13. Background Effects

Backgrounds should create **depth**, not distraction.

## Approved

### 1. Fine grid

Almost invisible.

### 2. Grain/noise

Extremely subtle.

### 3. Slow ASCII fragments

Tiny characters moving slowly.

### 4. Radial light

Very subtle and neutral.

### 5. Cursor-reactive field

Small displacement around the cursor.

### 6. Section-specific technical drawings

For example:

-   circuit-like lines
-   pixel maps
-   abstract system diagrams

Only when related to the section.

------------------------------------------------------------------------

# 14. Background Effects --- Forbidden

Do not use:

-   purple blurred blobs
-   animated aurora
-   constant RGB glow
-   full-screen particle explosions
-   Matrix rain
-   random stars
-   excessive lens flares
-   fake holograms
-   random floating cubes
-   generic neural-network graphics

These make the site look like an AI-generated "tech landing page."

------------------------------------------------------------------------

# 15. Borders and Shapes

Use mostly:

-   square corners
-   slightly rounded corners only where appropriate
-   thin borders
-   hard-edged frames
-   cropped images
-   asymmetric compositions

Avoid making every component:

``` text
rounded-2xl
shadow-xl
glass
backdrop-blur
```

JLUG should have **physical structure**.

Think:

> poster / label / card / document / screen

rather than:

> floating SaaS card.

------------------------------------------------------------------------

# 16. Pingu Tiwari --- Mascot System

Pingu Tiwari is the site's character.

He should not be an emoji.

He should not look like a generic 3D startup mascot.

He should have:

-   consistent proportions
-   recognizable silhouette
-   consistent materials
-   controlled expressions
-   a restrained JLUG accent
-   a small number of signature accessories

## Character philosophy

Pingu is:

> **curious, slightly mischievous, technical, friendly, and always
> building something.**

Not:

> corporate brand ambassador.

------------------------------------------------------------------------

# 17. Pingu Interaction

Pingu should respond to the website.

### Home

Idle animation / subtle breathing / blinking.

### Cursor

Head or eyes can very subtly track the cursor.

### Scroll

Small positional reactions.

### Event page

Different prop or pose.

### Hall of Fame

More restrained / archival presentation.

### Recruitment

Pingu becomes more expressive and welcoming.

### 404

Pingu can be humorous.

Example:

``` text
404

Pingu couldn't find this page.

He probably moved it.
```

Use typography, not an emoji.

------------------------------------------------------------------------

# 18. Pingu Motion Rules

Animations should be:

-   smooth
-   slightly physical
-   low amplitude
-   responsive
-   short when interactive
-   slower when ambient

Avoid:

-   constant spinning
-   infinite bouncing
-   exaggerated squash/stretch
-   random movement
-   attention-seeking animation

The user should discover Pingu rather than be attacked by him.

------------------------------------------------------------------------

# 19. Photography

Real JLUG photography is one of the strongest anti-AI signals.

Use:

-   real members
-   real events
-   real workshops
-   real campus
-   real hackathons
-   real behind-the-scenes moments

Photography should not be overly color-graded.

Possible treatments:

-   monochrome
-   high contrast
-   slightly desaturated
-   cropped editorially
-   framed with technical labels

Example:

``` text
CODEKUMBH / 2026
24 HOURS
JEC / JABALPUR
```

This gives the site authenticity.

------------------------------------------------------------------------

# 20. Homepage Composition

## Section 01 --- HERO

Primary object:

**JLUG**

Secondary:

``` text
JEC LINUX USERS GROUP
WHERE CULTURE MEETS CODE
EST. 2019
```

Pingu is present but does not compete with the wordmark.

Background:

-   grid
-   subtle ASCII
-   tiny technical labels

Interaction:

-   JLUG reacts to cursor
-   Pingu reacts subtly

------------------------------------------------------------------------

## Section 02 --- WHAT IS JLUG?

Large editorial statement:

``` text
WE LEARN
TOGETHER.

WE BUILD
TOGETHER.

WE SHARE
WHAT WE KNOW.
```

Then a concise explanation.

------------------------------------------------------------------------

## Section 03 --- WHAT WE DO

Use a large typographic list rather than icon cards.

``` text
01  OPEN SOURCE
02  DEVELOPMENT
03  ROBOTICS
04  DESIGN
05  AI / ML
06  EVENTS
07  COMMUNITY
```

Hovering a category can reveal a related image or ASCII fragment.

------------------------------------------------------------------------

## Section 04 --- PEOPLE

Title:

``` text
PEOPLE
WHO
BUILD
```

Use actual member portraits.

------------------------------------------------------------------------

## Section 05 --- EVENTS / MOMENTS

Large photography.

Events should feel like memories, not database rows.

------------------------------------------------------------------------

## Section 06 --- LEGACY

Introduce Hall of Fame.

``` text
2019 ──────────────── 2026
```

Show the continuity of JLUG leadership.

------------------------------------------------------------------------

## Section 07 --- PINGU

A small character-focused interaction.

Do not make this a childish "meet our mascot" section.

Make it feel like a discovery.

------------------------------------------------------------------------

## Section 08 --- JOIN

Final emotional message:

``` text
YOU COULD
BE HERE.
```

Then:

``` text
JOIN JLUG →
```

------------------------------------------------------------------------

# 21. Navigation

Minimal.

Desktop:

``` text
JLUG                         MENU
```

Opening the menu:

``` text
HOME
EVENTS
HALL OF FAME
MEMBERS
JOIN
```

Secondary:

``` text
GITHUB
LINKEDIN
INSTAGRAM
```

The navigation itself should feel editorial and technical.

------------------------------------------------------------------------

# 22. Interaction Design

The site should have **micro-interactions**, not gimmicks.

Good:

-   text displacement
-   image reveal
-   cursor labels
-   line drawing
-   subtle character movement
-   number counters where the number is meaningful
-   archive transitions
-   hover cropping
-   masked image reveals
-   typography morphing

Bad:

-   spinning cards
-   excessive 3D
-   random glitching
-   bouncing buttons
-   constant cursor trails
-   fake loading bars everywhere

------------------------------------------------------------------------

# 23. Buttons

Avoid giant pill buttons.

Prefer:

``` text
[ JOIN JLUG → ]
```

or:

``` text
JOIN JLUG  →
───────────
```

Button styling can be:

-   outlined
-   text-based
-   rectangular
-   slightly asymmetric

The CTA should feel like a **command / invitation**, not a SaaS
conversion button.

------------------------------------------------------------------------

# 24. Cards

Cards should be used only when they create useful grouping.

Possible visual structure:

``` text
┌─────────────────────────────┐
│ JLUG / 026                 │
│                             │
│       MEMBER PHOTO          │
│                             │
│ GARVIT DAYAL               │
│ IT / 2028                  │
│                             │
│ CODE · AI · OPEN SOURCE    │
└─────────────────────────────┘
```

Cards should have distinct visual identities but share a system.

Do not make 15 identical rounded glass cards.

------------------------------------------------------------------------

# 25. Hall of Fame Visual Direction

This page should feel more archival than futuristic.

Use:

-   large years
-   portraits
-   thin timeline lines
-   old photographs
-   technical labels
-   monochrome treatment
-   subtle paper/scan texture

Concept:

> **JLUG's memory preserved as a digital archive.**

------------------------------------------------------------------------

# 26. Members Visual Direction

Members should feel like a living directory.

Filters can be:

``` text
ALL
TECH
DESIGN
MEDIA
OPERATIONS
```

Member cards can use:

-   portraits
-   year
-   branch
-   interests
-   links

Do not over-engineer the filtering UI.

------------------------------------------------------------------------

# 27. Events Visual Direction

Events should prioritize:

1.  photograph
2.  event name
3.  short description
4.  year/date
5.  useful metadata

Example:

``` text
CODEKUMBH 2.0

24H HACKATHON

200+ PARTICIPANTS
45+ TEAMS

JEC / 2026
```

------------------------------------------------------------------------

# 28. Recruitment Visual Direction

Recruitment is where the site should become most optimistic.

Avoid corporate copy like:

> "Unlock your potential with our amazing community."

Use direct language.

Example:

``` text
CURIOUS?

BUILD THINGS?

WANT TO LEARN?

GOOD.

COME BUILD WITH US.
```

Pingu can appear here.

The CTA should be impossible to misunderstand.

------------------------------------------------------------------------

# 29. Responsive Design

Mobile is not a compressed desktop.

On mobile:

-   JLUG wordmark remains huge
-   typography remains the primary visual
-   ASCII compositions reflow
-   Pingu becomes smaller but remains present
-   background effects are reduced
-   navigation becomes a compact menu
-   cards become single-column
-   photography becomes more prominent
-   interactions must work with touch

Do not depend on hover.

------------------------------------------------------------------------

# 30. Performance Rules

The visual system should remain fast.

### Priorities

1.  Typography
2.  layout
3.  real images
4.  Pingu
5.  interaction
6.  decorative effects

If performance suffers:

**remove effects before removing content.**

### 3D

Use lazy loading where possible.

Do not load a massive WebGL scene before the user can interact with it.

Provide a high-quality static fallback.

------------------------------------------------------------------------

# 31. Accessibility

Technical aesthetics do not justify poor accessibility.

Ensure:

-   readable contrast
-   visible focus states
-   keyboard navigation
-   touch-friendly targets
-   reduced-motion support
-   meaningful image alt text
-   no essential information hidden behind hover
-   no text rendered only as canvas without accessible fallback

------------------------------------------------------------------------

# 32. Motion Accessibility

Respect:

``` css
@media (prefers-reduced-motion: reduce)
```

In reduced-motion mode:

-   disable large displacement
-   disable continuous background animation
-   reduce Pingu animation
-   remove complex page transitions
-   preserve the static design

The site must still look intentional.

------------------------------------------------------------------------

# 33. The "Wow" Test

Before shipping a section, ask:

### 1. Is the typography distinctive?

### 2. Is there a reason for the visual effect?

### 3. Does it communicate something about JLUG?

### 4. Does it work without the animation?

### 5. Does it feel like a human-designed website?

### 6. Would this look generic if the JLUG logo were removed?

If the answer to #6 is yes, redesign it.

------------------------------------------------------------------------

# 34. The "AI Website Detector" Test

The website should NOT contain the following visual fingerprint:

``` text
dark background
+
purple gradient
+
glass cards
+
blurred circles
+
white Inter typography
+
floating 3D object
+
sparkles
+
"AI-powered" style copy
```

If a section resembles that combination, it is wrong for JLUG.

------------------------------------------------------------------------

# 35. Final Design Principle

> **Effects should decorate the identity. They should never become the
> identity.**

The identity is:

``` text
JLUG
OPEN SOURCE
PEOPLE
BUILDING
CULTURE
JEC
PINGU
```

Everything else supports that.
