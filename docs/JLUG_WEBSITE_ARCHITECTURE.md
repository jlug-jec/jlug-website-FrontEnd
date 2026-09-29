# JLUG Website --- Information Architecture & Page Specification

## Purpose

This document translates the JLUG design system into the actual website
structure.

The site should feel like one connected experience rather than five
unrelated pages.

------------------------------------------------------------------------

# 1. Pages

Required:

1.  Home
2.  Events
3.  Hall of Fame
4.  Members
5.  Join / Recruitment

Optional supporting routes:

-   `/events/[slug]`
-   `/members/[id]`
-   `/404`

------------------------------------------------------------------------

# 2. Global Experience

Every page shares:

-   dark JLUG visual system
-   typography-led layout
-   subtle grid
-   ASCII accents
-   Pingu Tiwari
-   minimal navigation
-   warm off-white text
-   restrained lime accent
-   thin borders
-   no generic gradients

------------------------------------------------------------------------

# 3. Home

## Hero

Large interactive bitmap/ASCII:

``` text
JLUG
```

Supporting:

``` text
JEC LINUX USERS GROUP
WHERE CULTURE MEETS CODE
EST. 2019
```

Pingu appears as a secondary character.

### Interaction

-   cursor proximity affects the JLUG wordmark
-   cells/characters displace subtly
-   pointer leaves → reconstruction
-   click/tap → short transformation

### Background

-   subtle grid
-   sparse ASCII fragments
-   small metadata labels
-   very subtle noise

------------------------------------------------------------------------

## About

Use editorial typography.

``` text
WE LEARN
TOGETHER.

WE BUILD
TOGETHER.

WE SHARE
WHAT WE KNOW.
```

Then explain JLUG in concise human language.

Avoid corporate paragraphs.

------------------------------------------------------------------------

## What We Do

Large list:

``` text
01 OPEN SOURCE
02 DEVELOPMENT
03 ROBOTICS
04 DESIGN
05 AI / ML
06 EVENTS
07 COMMUNITY
```

Each item can reveal:

-   photograph
-   short description
-   ASCII illustration

No icon grid.

------------------------------------------------------------------------

## People

Heading:

``` text
PEOPLE
WHO BUILD
```

Show selected current members.

Each card:

-   portrait
-   name
-   year
-   branch
-   interests
-   optional GitHub/LinkedIn

Hover/tap can introduce Pingu or a subtle visual reaction.

------------------------------------------------------------------------

## Events / Moments

Use real photographs.

The visual priority:

``` text
IMAGE
EVENT NAME
YEAR
SHORT DESCRIPTION
```

Avoid database-like tables.

------------------------------------------------------------------------

## Legacy

Preview the Hall of Fame.

``` text
2019 ── 2020 ── 2021 ── 2022 ── ... ── 2026
```

Show one or two presidents as a teaser.

CTA:

``` text
EXPLORE THE HALL OF FAME →
```

------------------------------------------------------------------------

## Recruitment CTA

Final section:

``` text
YOU COULD
BE HERE.
```

Then:

``` text
JOIN JLUG →
```

Pingu appears here.

This should be the emotional climax.

------------------------------------------------------------------------

# 4. Events Page

Route:

`/events`

Hero:

``` text
EVENTS
```

Supporting:

``` text
THE THINGS
WE BUILD,
LEARN,
AND REMEMBER.
```

------------------------------------------------------------------------

## Event archive

Group by year.

Each event is a large visual block.

Example:

``` text
2026

CODEKUMBH 2.0
24H HACKATHON

[PHOTO]

200+ PARTICIPANTS
45+ TEAMS
```

------------------------------------------------------------------------

## Event detail

Potential structure:

``` text
EVENT NAME
YEAR / DATE

HERO IMAGE

ABOUT

MOMENTS

NUMBERS

PEOPLE

LINKS
```

Don't turn event detail into a conventional corporate case study.

------------------------------------------------------------------------

# 5. Hall of Fame

Route:

`/hall-of-fame`

Hero:

``` text
HALL
OF
FAME
```

Supporting:

``` text
THE PEOPLE
WHO CARRIED
JLUG FORWARD.
```

------------------------------------------------------------------------

## Timeline

2019 → current year.

Each year:

``` text
2021

PRESIDENT
NAME

[PORTRAIT]

SHORT NOTE
```

Use large years as design elements.

------------------------------------------------------------------------

## Visual treatment

More archival than the homepage.

Use:

-   monochrome portraits
-   thin lines
-   scan/print texture
-   technical labels
-   subtle transitions

Avoid flashy 3D.

This page is about legacy.

------------------------------------------------------------------------

# 6. Members

Route:

`/members`

Hero:

``` text
THE PEOPLE
OF JLUG
```

Supporting:

``` text
A COMMUNITY OF
BUILDERS, DESIGNERS,
LEARNERS AND MAKERS.
```

------------------------------------------------------------------------

## Filters

Simple:

``` text
ALL
TECH
DESIGN
MEDIA
OPERATIONS
```

No giant filter UI.

------------------------------------------------------------------------

## Cards

Each card should feel like an identity badge.

``` text
JLUG / 026

[PHOTO]

NAME
BRANCH / YEAR

INTERESTS

GITHUB →
```

Cards can vary slightly while following the same visual grammar.

------------------------------------------------------------------------

# 7. Recruitment

Route:

`/join`

Hero:

``` text
YOU LOOK
LIKE YOU
BELONG HERE.
```

Alternative:

``` text
CURIOUS?

GOOD.

COME BUILD
WITH US.
```

------------------------------------------------------------------------

## Reasons to join

Do not use generic marketing cards.

Use direct statements:

``` text
LEARN FROM PEOPLE
WHO ARE BUILDING.

BUILD THINGS
THAT ACTUALLY SHIP.

MEET PEOPLE
WHO ARE CURIOUS.

TRY SOMETHING
YOU HAVE NEVER DONE.
```

------------------------------------------------------------------------

## Recruitment status

If recruitment is open:

``` text
RECRUITMENT / 2030
OPEN
```

Then:

``` text
APPLICATION →
```

which opens the official Google Form.

Do not hide the form behind unnecessary steps.

------------------------------------------------------------------------

# 8. 404

Make it part of the brand.

``` text
404

THIS PAGE
ISN'T HERE.

PINGU LOOKED.
HE COULDN'T FIND IT.
```

Pingu appears in a small scene.

CTA:

``` text
BACK TO JLUG →
```

------------------------------------------------------------------------

# 9. Global Footer

Minimal.

``` text
JLUG

WHERE CULTURE
MEETS CODE.

JEC / JABALPUR
EST. 2019

HOME
EVENTS
HALL OF FAME
MEMBERS
JOIN

GITHUB
LINKEDIN
INSTAGRAM
```

Potential final micro-animation:

Pingu walks slowly across the footer.

Keep it subtle.

------------------------------------------------------------------------

# 10. Component Architecture

Suggested reusable components:

``` text
JlugWordmark
AsciiField
TechnicalLabel
SectionHeading
CursorInteraction
PinguScene
PinguModel
PinguFallback
EventCard
EventArchive
MemberCard
MemberGrid
HallOfFameTimeline
RecruitmentCTA
SiteNavigation
SiteFooter
ImageReveal
ArchiveYear
```

------------------------------------------------------------------------

# 11. Component Rules

Components should be reusable but NOT visually identical.

For example, `MemberCard` can have variants:

``` text
default
featured
compact
archive
```

But all variants must belong to the same design system.

------------------------------------------------------------------------

# 12. Data Architecture

Keep content separate from presentation.

Example:

``` ts
type Member = {
  id: string;
  name: string;
  branch: string;
  year: string;
  role?: string;
  interests: string[];
  image: string;
  github?: string;
  linkedin?: string;
};

type Event = {
  id: string;
  title: string;
  year: number;
  date?: string;
  category: string;
  description: string;
  image: string;
  stats?: {
    label: string;
    value: string;
  }[];
};

type President = {
  year: number;
  name: string;
  image: string;
  note?: string;
};
```

This makes the site maintainable.

------------------------------------------------------------------------

# 13. Content Philosophy

Write like students talking to students.

Avoid:

> "JLUG is a dynamic ecosystem empowering aspiring innovators..."

Prefer:

> "We learn things, build things, break things, and teach each other
> what we figured out."

Shorter is better.

------------------------------------------------------------------------

# 14. Image Philosophy

Prioritize real JLUG material.

Order:

1.  real event photography
2.  real member portraits
3.  real campus imagery
4.  Pingu
5.  designed graphics
6.  decorative visuals

Do not fill empty sections with stock photography.

------------------------------------------------------------------------

# 15. Animation Hierarchy

### Level 1 --- Always

-   hover transitions
-   link movement
-   border changes

### Level 2 --- Interactive

-   JLUG distortion
-   image reveal
-   Pingu reaction

### Level 3 --- Page transitions

-   typography transformation
-   archive transition

### Level 4 --- Ambient

-   tiny ASCII movement
-   subtle grid movement

Level 4 must never distract from Levels 1--3.

------------------------------------------------------------------------

# 16. Mobile

Mobile should preserve:

-   giant typography
-   strong contrast
-   Pingu
-   ASCII identity
-   photography

Reduce:

-   particle count
-   WebGL complexity
-   background animation
-   decorative elements

Never simply scale the desktop layout down.

------------------------------------------------------------------------

# 17. Success Criteria

A successful visitor journey:

``` text
LAND
 ↓
WOW
 ↓
INTERACT
 ↓
DISCOVER
 ↓
SEE PEOPLE
 ↓
SEE EVENTS
 ↓
UNDERSTAND JLUG
 ↓
WANT TO JOIN
```

The website is successful when the visitor wants to explore **the people
and community**, not merely admire the animation.
