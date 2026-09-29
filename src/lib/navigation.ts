/**
 * Single source of truth for site sections.
 *
 * Consumed by the navbar, the landing-page section grid and the footer, so a
 * route only ever has to be declared once.
 */

export type NavItem = {
  /** Route path. Matches the folder under src/app. */
  href: string;
  /** Short label used in the navbar. */
  label: string;
  /** Two-digit ordinal used by the terminal-style numbering. */
  index: string;
  /** Page heading, also used as the landing-card headline. */
  title: string;
  /** One-line description shown on the landing page. */
  blurb: string;
  /** Small mono detail rendered next to the card. */
  meta: string;
  /** Notes for whoever builds the page out. */
  todo: string[];
};

export const NAV_ITEMS: NavItem[] = [
  {
    href: "/events",
    label: "EVENTS",
    index: "01",
    title: "EVENT LOG",
    blurb:
      "Everything the group has run so far — talks, hackathons, workshops and install fests.",
    meta: "ARCHIVE",
    todo: [
      "Event data source (MDX, CMS or a local JSON/TS collection)",
      "Card or timeline list grouped by academic year",
      "Per-event detail route at /events/[slug]",
      "Poster and gallery images",
    ],
  },
  {
    href: "/members",
    label: "MEMBERS",
    index: "02",
    title: "MEMBERS",
    blurb:
      "The whole group across every year — first years through final years.",
    meta: "ALL YEARS",
    todo: [
      "Member directory data source",
      "Filter or grouping by year and by domain",
      "Reuse the ID-card treatment from the landing page",
    ],
  },
  {
    href: "/hall-of-fame",
    label: "HALL OF FAME",
    index: "03",
    title: "HALL OF FAME",
    blurb:
      "Every president who has led JLUG, from the first term in 2019 to the current one.",
    meta: "SINCE 2019",
    todo: [
      "Presidents list with term year, branch and photo",
      "Ordering: most recent term first",
      "Optional: core-team credits per term",
    ],
  },
  {
    href: "/jec-sc",
    label: "JEC SC",
    index: "04",
    title: "JLUG JEC STUDENT COMMITTEE",
    blurb:
      "The student committee representatives and members of Jabalpur Engineering College.",
    meta: "JEC SC",
    todo: [
      "Member roster with variable config file",
      "Dynamic filtering and spotlight view",
    ],
  },
  {
    href: "/join",
    label: "JOIN",
    index: "05",
    title: "RECRUITMENT",
    blurb:
      "Applications for the incoming 2030 batch. Open a form, tell us what you want to build.",
    meta: "2030 FRESHERS",
    todo: [
      "Google Form URL (embed via iframe, or link out)",
      "Recruitment window dates and current open/closed state",
      "What we look for / what to expect after applying",
    ],
  },
];

/** Marks the current route and its children as active. */
export function isActivePath(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}
