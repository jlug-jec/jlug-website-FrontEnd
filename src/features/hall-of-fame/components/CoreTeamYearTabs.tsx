"use client";

export interface CoreTeamYearTabsProps {
  years: string[];
  selectedYear: string;
  onSelectYear: (year: string) => void;
}

export default function CoreTeamYearTabs({
  years,
  selectedYear,
  onSelectYear,
}: CoreTeamYearTabsProps) {
  if (years.length === 0) return null;

  return (
    <div
      role="tablist"
      aria-label="Core Team Academic Year Archive"
      className="flex flex-wrap items-center gap-2 md:gap-4 border-b border-jlug-line pb-4"
    >
      <span className="font-mono text-xs uppercase tracking-widest text-jlug-gray-2 mr-2">
        TERM_SELECT:
      </span>
      {years.map((year) => {
        const isSelected = year === selectedYear;
        return (
          <button
            key={year}
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelectYear(year)}
            className={`font-mono text-xs md:text-sm px-4 py-2 border transition-all select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jlug-accent ${
              isSelected
                ? "bg-jlug-ink border-jlug-accent text-jlug-white shadow-[inset_0_-2px_0_var(--color-jlug-accent)]"
                : "bg-jlug-black/60 border-jlug-line text-jlug-gray-1 hover:border-jlug-gray-2 hover:text-jlug-white"
            }`}
          >
            {year}
          </button>
        );
      })}
    </div>
  );
}
