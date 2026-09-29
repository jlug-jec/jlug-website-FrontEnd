"use client";

import { useState } from "react";
import type { President } from "../data/hall-of-fame";
import PresidentRow from "./PresidentRow";

export interface ChronicleTimelineProps {
  presidents: President[];
}

export default function ChronicleTimeline({ presidents }: ChronicleTimelineProps) {
  // Sort by order ascending (1 = most recent on top)
  const sortedPresidents = [...presidents].sort((a, b) => a.order - b.order);

  // Default expand the first (current/most recent) president
  const [expandedId, setExpandedId] = useState<string | null>(
    sortedPresidents.length > 0 ? sortedPresidents[0].id : null
  );

  const handleToggle = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  if (sortedPresidents.length === 0) {
    return (
      <div className="border border-jlug-line bg-jlug-ink p-12 text-center my-8">
        <p className="font-mono text-xs uppercase tracking-widest text-jlug-accent mb-2">
          STATUS: ARCHIVE_EMPTY
        </p>
        <p className="font-mono text-sm text-jlug-gray-1">
          [ NO HISTORICAL RECORDS LOGGED YET ]
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Continuous vertical timeline spine line */}
      <div
        aria-hidden="true"
        className="absolute top-6 bottom-6 left-6 md:left-8 w-px bg-[var(--color-legacy-mid)] opacity-40 z-0 pointer-events-none"
      />

      <div className="relative z-10 flex flex-col">
        {sortedPresidents.map((president) => (
          <PresidentRow
            key={president.id}
            president={president}
            isExpanded={expandedId === president.id}
            onToggle={() => handleToggle(president.id)}
            isCurrentEra={president.order === 1}
          />
        ))}
      </div>
    </div>
  );
}
