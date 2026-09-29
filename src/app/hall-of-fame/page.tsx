import type { Metadata } from "next";
import HallOfFameClient from "@/features/hall-of-fame/HallOfFameClient";

export const metadata: Metadata = {
  title: "Hall of Fame | JLUG",
  description:
    "Every president who has led JEC Linux Users Group since 2019 — the people who carried JLUG forward.",
};

export default function HallOfFamePage() {
  return <HallOfFameClient />;
}
