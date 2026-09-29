"use client";

import { JecScWing, JEC_SC_CATEGORIES } from "@/data/jecScMembers";

interface JecScFilterProps {
  activeCategory: JecScWing;
  onCategoryChange: (category: JecScWing) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  categoryCounts: Record<string, number>;
}

export default function JecScFilter({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  categoryCounts,
}: JecScFilterProps) {
  return (
    <div className="mb-10 flex flex-col gap-5 border border-jlug-line bg-jlug-surface p-4 sm:p-5">
      {/* Top search & status strip */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-jlug-line pb-4 font-mono text-xs">
        <div className="flex items-center gap-2 text-jlug-gray-1 uppercase tracking-widest text-[0.7rem]">
          <span className="h-2 w-2 rounded-full bg-jlug-accent animate-pulse" />
          <span>ROSTER FILTER // SELECT WING</span>
        </div>

        {/* Search Input */}
        <div className="relative flex items-center">
          <span className="absolute left-3 text-jlug-gray-2 font-mono text-xs">
            /
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="FILTER BY NAME, ROLE, OR BRANCH..."
            className="w-full sm:w-80 border border-jlug-line bg-jlug-black px-7 py-2 font-mono text-xs text-jlug-white uppercase placeholder:text-jlug-gray-3 focus:border-jlug-accent focus:outline-none transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute right-3 font-mono text-xs text-jlug-gray-2 hover:text-jlug-accent cursor-pointer"
              title="Clear search"
            >
              [×]
            </button>
          )}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {JEC_SC_CATEGORIES.map((category) => {
          const isSelected = activeCategory === category;
          const count = categoryCounts[category] || 0;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`flex items-center gap-2 border px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "border-jlug-accent bg-jlug-accent text-jlug-black font-semibold shadow-[0_0_12px_rgba(183,243,74,0.25)]"
                  : "border-jlug-line bg-jlug-black text-jlug-gray-1 hover:border-jlug-gray-2 hover:text-jlug-white"
              }`}
            >
              <span>{category}</span>
              <span
                className={`text-[0.65rem] px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected
                    ? "bg-jlug-black text-jlug-accent"
                    : "bg-jlug-surface-raised text-jlug-gray-2"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
