/**
 * Hall of Fame — Presidents data
 *
 * ─────────────────────────────────────────────────────────────────────────
 * HOW TO EDIT
 * ─────────────────────────────────────────────────────────────────────────
 * This is the only file you need to touch to add, remove or update presidents.
 *
 * photo   → path relative to /public, e.g. "/assets/presidents/name.jpg"
 *           Leave as "" to show a monochrome placeholder block.
 * note    → One punchy sentence about their term. Keep it short.
 * socials → Optional. Remove any key you don't have a link for.
 * ─────────────────────────────────────────────────────────────────────────
 */

export interface President {
  year: string;
  name: string;
  photo: string;
  branch?: string;
  note?: string;
  /** Optional short tag, e.g. "Founder" or "Co-founder", shown next to the name. */
  tag?: string;

}

export const PRESIDENTS: President[] = [
  {
    year: "2019–20",
    name: "Ayushman Parchoria",
    photo: "/assets/presidents/ayushman_parchoria.jpg",
    branch: "B.Tech — Information Technology",
    tag: "Founder",


  },
  {
    year: "2020–21",
    name: "Pranshu Mishra",
    photo: "/assets/presidents/pranshu_mishra.jpg",
    branch: "B.Tech — Computer Science Engineering",
    tag: "Co-founder",


  },
  {
    year: "2021–22",
    name: "Mohammad Usaid",
    photo: "/assets/presidents/mohammad_usaid.png",
    branch: "B.Tech — Electronics & Communication",
    tag: "Co-founder",


  },
  {
    year: "2022–23",
    name: "Samveg Shandilya",
    photo: "/assets/presidents/samveg_shandilya.jpg",


  },
  {
    year: "2023–24",
    name: "Mustkeem Arsh",
    photo: "/assets/presidents/mustkeem_arsh.jpg",


  },
  {
    year: "2024–25",
    name: "Harshit Solanki",
    photo: "/assets/presidents/harshit_solanki.jpg",


  },
  {
    year: "2025–26",
    name: "Prince Dwivedi",
    photo: "/assets/presidents/aarav_mehta.png",


  },
  {
    year: "2026–27",
    name: "Akshat Tiwari",
    photo: "/assets/presidents/akshat_tiwari.jpeg",

  },
];
