"use client";

import { useState } from "react";
import type { CoreTeamMember } from "../data/hall-of-fame";
import CoreTeamYearTabs from "./CoreTeamYearTabs";
import CoreTeamGrid from "./CoreTeamGrid";

export interface CoreTeamSectionProps {
  members: CoreTeamMember[];
}

export default function CoreTeamSection({ members }: CoreTeamSectionProps) {
  // Extract unique academic years, preserving order
  const years = Array.from(new Set(members.map((m) => m.academicYear)));
  const [selectedYear, setSelectedYear] = useState<string>(
    years.length > 0 ? years[0] : "2025–26"
  );

  return (
    <div className="flex flex-col gap-6">
      <CoreTeamYearTabs
        years={years}
        selectedYear={selectedYear}
        onSelectYear={setSelectedYear}
      />
      <CoreTeamGrid members={members} academicYear={selectedYear} />
    </div>
  );
}
