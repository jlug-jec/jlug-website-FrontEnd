export type AfterMovie = {
  id: string;
  title: string;
  description: string;
  src: string;
  orientation: "portrait" | "landscape";
};

/**
 * Reels and after-movies from past JLUG events, rendered on the
 * events page. The flagship club introduction video is shown
 * separately on the landing page (see ClubIntroSection).
 *
 * Order is curated (not alphabetical/chronological) — keep as-is
 * unless asked to resequence.
 */
export const AFTER_MOVIES: AfterMovie[] = [
  {
    id: "inicio-2-trailer",
    title: "INICIO 2.0 — TRAILER",
    description: "Trailer for Inicio 2.0, JLUG's induction event for new recruits.",
    src: "/assets/after-movie/Inicio2.0Trailer.mp4",
    orientation: "portrait",
  },
  {
    id: "code-kumbh-2",
    title: "CODE KUMBH 2.0",
    description: "After-movie recap of Code Kumbh 2.0, JLUG's flagship hackathon.",
    src: "/assets/after-movie/CodeKumbh2.0.mp4",
    orientation: "landscape",
  },
  {
    id: "lenscape",
    title: "LENSCAPE",
    description: "After-movie recap of Lenscape, JLUG's photography event.",
    src: "/assets/after-movie/lenscape.mp4",
    orientation: "portrait",
  },
  {
    id: "code-kumbh",
    title: "CODE KUMBH",
    description: "After-movie recap of the original Code Kumbh hackathon.",
    src: "/assets/after-movie/codeKumbh.mp4",
    orientation: "portrait",
  },
  {
    id: "inicio",
    title: "INICIO",
    description: "After-movie recap of Inicio, JLUG's induction event.",
    src: "/assets/after-movie/Inicio.mp4",
    orientation: "portrait",
  },
  {
    id: "tedx-jec",
    title: "TEDX JEC",
    description: "Highlights from TEDx JEC, hosted in collaboration with JLUG.",
    src: "/assets/after-movie/tedxJec.mp4",
    orientation: "portrait",
  },
];
