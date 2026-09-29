/**
 * Hall-of-fame–local ID card component.
 *
 * Reproduces the visual language of the Home "THE BUILDERS" cards for use in
 * the Core Team Archive grid. It is intentionally NOT exported to shared
 * components to keep /hall-of-fame changes self-contained (PRD §0 Scope Lock).
 */

import Image from "next/image";

export interface HofIDCardProps {
  cardId: string;         // e.g. "CR_2025_01"
  name: string;
  role: string;
  branch?: string;
  yearOfStudy: string;    // "4TH YEAR"
  academicYear: string;   // "2025–26"
  isActive: boolean;
  portraitUrl?: string;
}

export default function HofIDCard({
  cardId,
  name,
  role,
  branch,
  yearOfStudy,
  academicYear,
  isActive,
  portraitUrl,
}: HofIDCardProps) {
  return (
    <div className="w-full bg-jlug-black border border-jlug-line p-1 hover:border-jlug-gray-2 transition-colors">
      <div className="border border-jlug-line p-4 flex flex-col">
        {/* Header strip — mirrors Home card exactly */}
        <div className="flex justify-between font-mono text-[0.65rem] text-jlug-gray-1 border-b border-jlug-line pb-2 mb-4 uppercase tracking-wider">
          <span>{cardId}</span>
          <span className={isActive ? "text-jlug-accent" : "text-jlug-gray-2"}>
            {isActive ? "ACTIVE" : "ALUMNI"}
          </span>
        </div>

        {/* Photo bay */}
        <div className="w-full aspect-[3/4] bg-jlug-surface mb-4 relative grayscale overflow-hidden border border-jlug-line/40 flex items-center justify-center font-mono text-xs text-jlug-gray-2">
          {portraitUrl ? (
            <Image
              src={portraitUrl}
              alt={`${name}, ${role}, ${academicYear}`}
              fill
              sizes="(max-width: 640px) 100vw, 220px"
              className="object-cover object-center scale-[1.35]"
            />
          ) : (
            <span className="tracking-widest text-[0.65rem] select-none">
              [ {name.split(" ")[0].toUpperCase()}_RAW ]
            </span>
          )}
        </div>

        {/* Details */}
        <h3 className="text-xl font-bold uppercase mb-1 tracking-tight text-jlug-white truncate">
          {name}
        </h3>
        <p className="font-mono text-xs text-jlug-gray-1 uppercase tracking-wide truncate">
          {role}{branch ? ` / ${branch}` : ""} / {yearOfStudy}
        </p>
      </div>
    </div>
  );
}
