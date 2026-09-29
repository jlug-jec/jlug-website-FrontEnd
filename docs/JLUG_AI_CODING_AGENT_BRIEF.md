# JLUG Website --- AI Coding Agent Brief

## Role

You are implementing the JLUG website.

Do not improvise a generic "modern tech" website.

The design system in `JLUG_DESIGN_SYSTEM.md` is authoritative.

The information architecture in `JLUG_WEBSITE_ARCHITECTURE.md` is
authoritative.

When a visual decision is not explicitly specified, choose the option
that is:

1.  more intentional
2.  more typographic
3.  more editorial
4.  less generic
5.  less decorative
6.  more connected to JLUG's actual identity

------------------------------------------------------------------------

# 1. First Principle

Build a website that feels like:

> **a dark digital clubhouse for students who build things.**

Not:

-   AI startup
-   SaaS dashboard
-   gaming website
-   cyberpunk portfolio
-   generic coding bootcamp
-   generic college society template

------------------------------------------------------------------------

# 2. Hard Visual Constraints

## DO NOT use

-   purple gradients
-   blue/purple blurred backgrounds
-   aurora gradients
-   glassmorphism
-   excessive rounded cards
-   emoji as visual decoration
-   random sparkles
-   generic 3D abstract shapes
-   Matrix rain
-   excessive glitch
-   random neon
-   stock programmer imagery
-   meaningless terminal commands

If you think one of these is necessary, stop and reconsider the design.

------------------------------------------------------------------------

# 3. Color

Start from:

``` css
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

--jlug-accent: #B7F34A;
```

The accent is sparse.

Do not turn the site green.

------------------------------------------------------------------------

# 4. Typography

Typography is the primary visual tool.

Use:

### Primary

One of:

-   Space Grotesk
-   Geist Sans
-   Satoshi
-   General Sans

### Mono

One of:

-   IBM Plex Mono
-   JetBrains Mono

Do not use five fonts.

Do not make all text uppercase.

Do not make everything monospace.

------------------------------------------------------------------------

# 5. Typography Rules

The hero wordmark must be enormous.

Target:

``` css
font-size: clamp(5rem, 16vw, 15rem);
line-height: 0.8;
letter-spacing: -0.07em;
```

Adjust responsively.

Use dramatic scale differences.

Example:

``` text
JLUG                         ← huge

JEC LINUX USERS GROUP       ← tiny mono

WHERE CULTURE MEETS CODE    ← medium
```

The typography must remain compelling even if all animation is disabled.

------------------------------------------------------------------------

# 6. Hero --- Highest Priority

The hero is the first thing to implement and polish.

The supplied visual reference shows a large bitmap-style wordmark in a
framed technical composition.

Create a JLUG-specific interpretation.

## Required

-   giant `JLUG`
-   bitmap / ASCII visual treatment
-   dark background
-   thin frame
-   technical metadata
-   interactive distortion
-   Pingu Tiwari
-   subtle grid/background

------------------------------------------------------------------------

# 7. Interactive JLUG

Implement the wordmark as an interactive visual object.

Preferred behavior:

``` text
IDLE
  ↓
CURSOR APPROACHES
  ↓
LOCAL PIXELS MOVE
  ↓
CURSOR CROSSES
  ↓
ASCII / PIXEL DISPLACEMENT
  ↓
CURSOR LEAVES
  ↓
SMOOTH RECONSTRUCTION
```

The interaction should be:

-   responsive
-   smooth
-   low-latency
-   restrained

Do not make the letters explode.

------------------------------------------------------------------------

# 8. Pingu Tiwari

Pingu is the official mascot.

Treat him as a character, not decoration.

Use the provided 3D asset if available.

Preferred implementation:

``` text
React Three Fiber
Three.js
Drei
```

if the existing project supports them.

Otherwise use an optimized static/rendered fallback.

------------------------------------------------------------------------

# 9. Pingu Animation

Idle:

-   subtle breathing
-   occasional blink

Interaction:

-   subtle cursor tracking
-   tiny head movement
-   contextual reaction

Do not:

-   constantly rotate him
-   make him bounce
-   make him dance
-   add unnecessary particles around him

------------------------------------------------------------------------

# 10. Background

Create depth with:

-   subtle grid
-   sparse ASCII fragments
-   tiny technical labels
-   very light grain
-   occasional cursor-reactive displacement

No generic gradient blob.

No giant glow.

------------------------------------------------------------------------

# 11. Homepage

Implement in this order:

``` text
Hero
↓
About
↓
What We Do
↓
People
↓
Events
↓
Legacy
↓
Recruitment
↓
Footer
```

The visual hierarchy should become progressively more human.

Hero = identity.

Middle = community.

End = invitation.

------------------------------------------------------------------------

# 12. About

Use large editorial text.

Example:

``` text
WE LEARN
TOGETHER.

WE BUILD
TOGETHER.

WE SHARE
WHAT WE KNOW.
```

Then concise real JLUG copy.

Do not invent achievements, member counts, sponsors, statistics, or
history.

If content is missing, use a clearly marked content placeholder rather
than hallucinating.

------------------------------------------------------------------------

# 13. Events

Use real images.

Design events as visual memories.

Prioritize:

``` text
PHOTO
TITLE
YEAR
DESCRIPTION
```

Avoid card grids where every event looks like a SaaS feature.

------------------------------------------------------------------------

# 14. Hall of Fame

Make it feel archival.

Use:

-   large years
-   portraits
-   timeline
-   monochrome images
-   thin rules
-   subtle scan/print treatment

This page should feel calmer than the homepage.

------------------------------------------------------------------------

# 15. Members

Use identity-card-like member cards.

Example:

``` text
JLUG / 026

[PHOTO]

NAME
BRANCH / YEAR

CODE · DESIGN · AI

GITHUB →
```

Avoid:

``` text
rounded-2xl + shadow + glass + avatar
```

for every member.

------------------------------------------------------------------------

# 16. Recruitment

The recruitment page must be optimistic.

Use direct copy:

``` text
CURIOUS?

GOOD.

COME BUILD
WITH US.
```

or:

``` text
YOU COULD
BE HERE.
```

Then a clear Google Form CTA.

Pingu should be especially expressive here.

------------------------------------------------------------------------

# 17. Interaction Philosophy

Every interaction must answer one of these:

### Does it communicate state?

### Does it reveal information?

### Does it reinforce JLUG's identity?

### Does it make navigation clearer?

### Does it create a memorable moment?

If none apply, remove it.

------------------------------------------------------------------------

# 18. Performance

Do not sacrifice performance for visual effects.

Prioritize:

1.  fast first paint
2.  typography
3.  content
4.  images
5.  Pingu
6.  effects

Use lazy loading for:

-   3D
-   below-fold images
-   heavy animations

Support a static fallback for 3D.

------------------------------------------------------------------------

# 19. Accessibility

Implement:

-   keyboard navigation
-   focus states
-   accessible links/buttons
-   alt text
-   reduced motion
-   touch-friendly interactions
-   no hover-only information

The site must remain usable without animation.

------------------------------------------------------------------------

# 20. Code Quality

Before implementing:

1.  inspect the existing project
2.  understand its routing
3.  inspect installed dependencies
4.  inspect current assets
5.  identify existing data/content
6.  avoid replacing working infrastructure unnecessarily

Do not rewrite the project just to introduce a new framework.

------------------------------------------------------------------------

# 21. Asset Rule

Before generating a new graphic:

**check whether the repository already contains the correct asset.**

For Pingu:

-   inspect all existing Pingu assets
-   inspect turnaround sheets
-   inspect textures
-   inspect GLB/GLTF files
-   inspect PNG/WebP renders

Do not generate a replacement if the correct asset already exists.

------------------------------------------------------------------------

# 22. Content Rule

Never hallucinate:

-   presidents
-   members
-   dates
-   event statistics
-   sponsors
-   awards
-   social accounts
-   historical claims

Use verified content from the existing JLUG website/repository/content
source.

------------------------------------------------------------------------

# 23. Design QA

After implementation, inspect every page at:

### Desktop

1440px 1280px 1024px

### Mobile

390px 375px 320px

Check:

-   no horizontal overflow
-   typography does not clip
-   Pingu does not cover content
-   ASCII remains readable
-   navigation works
-   CTA is obvious
-   contrast is sufficient

------------------------------------------------------------------------

# 24. Final Visual QA

Ask:

### Does the hero immediately feel like JLUG?

### Is `JLUG` the dominant visual object?

### Does the typography have character?

### Is the accent color restrained?

### Is there any accidental purple/blue AI gradient?

### Are there unnecessary cards?

### Are there unnecessary icons?

### Are there unnecessary animations?

### Does Pingu feel like a character?

### Do real people/events make the site feel authentic?

### Does the recruitment section make joining feel exciting?

------------------------------------------------------------------------

# 25. Final Rule

When choosing between:

``` text
MORE EFFECTS
```

and

``` text
BETTER TYPOGRAPHY + BETTER COMPOSITION
```

always choose:

> **BETTER TYPOGRAPHY + BETTER COMPOSITION**

When choosing between:

``` text
GENERIC MODERN DESIGN
```

and

``` text
STRONG JLUG-SPECIFIC VISUAL LANGUAGE
```

always choose:

> **STRONG JLUG-SPECIFIC VISUAL LANGUAGE**

The site should look like something **JLUG itself could have invented**,
not something an AI website generator could have produced for any random
technology club.
