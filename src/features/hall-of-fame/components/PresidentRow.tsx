"use client";

import Image from "next/image";
import { useState } from "react";
import type { President } from "../data/hall-of-fame";
import { useSpotlight } from "../engine/useSpotlight";

export interface PresidentRowProps {
  president: President;
  isExpanded: boolean;
  onToggle: () => void;
  isCurrentEra?: boolean;
}

export default function PresidentRow({
  president,
  isExpanded,
  onToggle,
  isCurrentEra = false,
}: PresidentRowProps) {
  const {
    ref,
    x,
    y,
    isHovered,
    prefersReducedMotion,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  } = useSpotlight();

  const [imageError, setImageError] = useState(false);

  const indexStr = String(president.order).padStart(2, "0");

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div className="relative group/row">
      {/* Horizontal grid container */}
      <div className="flex items-start gap-4 md:gap-8">
        
        {/* Left Rail: Monospace Index & Timeline Dot */}
        <div className="flex flex-col items-center flex-shrink-0 w-12 md:w-16 pt-5">
          <span className="font-mono text-xs md:text-sm font-semibold text-jlug-gray-2 group-hover/row:text-jlug-white transition-colors">
            {indexStr}
          </span>
          <div className="relative mt-2 flex items-center justify-center">
            {/* Timeline node dot */}
            <div
              className={`w-3 h-3 border transition-colors ${
                isCurrentEra
                  ? "bg-[var(--color-legacy-frost)] border-[var(--color-legacy-frost)] shadow-[0_0_8px_var(--color-legacy-frost)]"
                  : isExpanded
                  ? "bg-jlug-accent border-jlug-accent"
                  : "bg-jlug-black border-[var(--color-legacy-mid)] group-hover/row:border-jlug-white"
              }`}
            />
          </div>
        </div>

        {/* Content Bay */}
        <div className="flex-1 pb-8">
          {/* Header Row (Always visible, interactive trigger) */}
          <div
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            onClick={onToggle}
            onKeyDown={handleKeyDown}
            className={`w-full text-left p-4 md:p-6 border transition-all cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jlug-accent ${
              isExpanded
                ? "bg-jlug-ink border-jlug-line"
                : "bg-jlug-black/60 border-jlug-line/70 hover:bg-jlug-ink hover:border-jlug-gray-2"
            } ${isCurrentEra ? "border-b-2 border-b-[var(--color-legacy-frost)]" : ""}`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-baseline flex-wrap gap-3">
                <h3 className="text-xl md:text-3xl font-bold tracking-tight text-jlug-white group-hover/row:text-jlug-accent transition-colors">
                  {president.name}
                </h3>
                {isCurrentEra && (
                  <span
                    className="font-mono text-[0.65rem] px-2 py-0.5 uppercase tracking-widest text-jlug-black bg-[var(--color-legacy-frost)] font-semibold"
                    title="Current Leadership Era"
                  >
                    CURRENT ERA
                  </span>
                )}
              </div>

              {/* Badges / Metadata */}
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-jlug-gray-1">
                <span className="border border-jlug-line px-2 py-1 bg-jlug-black">
                  {president.termLabel}
                </span>
                <span className="text-jlug-accent hidden sm:inline">
                  [{president.domain}]
                </span>
                <span className="font-mono text-xs text-jlug-gray-2 ml-2">
                  {isExpanded ? "[ − ]" : "[ + ]"}
                </span>
              </div>
            </div>
          </div>

          {/* Expanded Card Details */}
          {isExpanded && (
            <div
              ref={ref}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative mt-2 border border-jlug-line bg-jlug-ink p-6 md:p-8 overflow-hidden transition-all"
              style={{
                background:
                  isHovered && !prefersReducedMotion
                    ? `radial-gradient(circle 320px at ${x}px ${y}px, rgba(183, 243, 74, 0.12), transparent 70%), var(--color-jlug-ink)`
                    : "var(--color-jlug-ink)",
              }}
            >
              {/* Subtle archival corner detail */}
              <div className="absolute top-2 right-2 font-mono text-[0.6rem] text-jlug-gray-3 tracking-widest uppercase select-none">
                ARCHIVE // RECORD_{president.id}
              </div>

              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                {/* Portrait Bay */}
                <div className="w-28 h-36 md:w-36 md:h-48 flex-shrink-0 bg-jlug-surface border border-jlug-line p-1 relative">
                  <div className="w-full h-full relative overflow-hidden bg-jlug-black flex items-center justify-center font-mono text-[0.65rem] text-jlug-gray-2 grayscale">
                    {president.portraitUrl && !imageError ? (
                      <Image
                        src={president.portraitUrl}
                        alt={`${president.name}, JLUG President ${president.termLabel}`}
                        fill
                        sizes="144px"
                        className="object-cover"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="text-center p-2">
                        <span>[ {president.name.split(" ")[0].toUpperCase()}_RAW ]</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Legacy Narrative & Social Connections */}
                <div className="flex-1 flex flex-col justify-between self-stretch">
                  <div>
                    <div className="font-mono text-xs text-jlug-accent uppercase tracking-widest mb-2">
                      LEADERSHIP IMPACT // {president.termStartYear}–{president.termEndYear}
                    </div>
                    <p className="text-base md:text-lg text-jlug-white-soft leading-relaxed max-w-2xl">
                      {president.legacyNote || "Led the community through open source technical initiatives and student mentorship."}
                    </p>
                  </div>

                  {/* Monospace Bracket Social Actions */}
                  <div className="mt-6 pt-4 border-t border-jlug-line flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                    <div className="text-jlug-gray-2 uppercase tracking-widest">
                      DOMAIN: <span className="text-jlug-white">{president.domain}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      {president.linkedinUrl && (
                        <a
                          href={president.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-jlug-line px-3 py-1.5 text-jlug-white hover:bg-jlug-white hover:text-jlug-black transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jlug-accent"
                          aria-label={`${president.name} LinkedIn Profile`}
                        >
                          [ in ]
                        </a>
                      )}
                      {president.githubUrl && (
                        <a
                          href={president.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-jlug-line px-3 py-1.5 text-jlug-white hover:bg-jlug-white hover:text-jlug-black transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jlug-accent"
                          aria-label={`${president.name} GitHub Profile`}
                        >
                          [ gh ]
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
