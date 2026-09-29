"use client";

import { useRef, MouseEvent } from "react";
import Image from "next/image";
import { TeamMember } from "../types";

function SocialIcon({ platform }: { platform: string }) {
  const p = platform.toLowerCase();
  if (p === "github") {
    return (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
      </svg>
    );
  }
  if (p === "linkedin") {
    return (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.99 1.83-2.04 3.77-2.04 4.03 0 4.78 2.55 4.78 5.86V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.45-2.16 2.96V21h-4V9Z" />
      </svg>
    );
  }
  if (p === "twitter" || p === "x") {
    return (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.93 8zM12 4.04c.83 1.2 1.48 2.59 1.91 3.96h-3.82c.43-1.37 1.08-2.76 1.91-3.96zM4.26 14a7.82 7.82 0 0 1 0-4h3.38a16.7 16.7 0 0 0-.1 2c0 .68.03 1.35.1 2H4.26zm.81 2h2.95c.32 1.3.8 2.51 1.38 3.56A8.03 8.03 0 0 1 5.07 16zm2.95-8H5.07a8.03 8.03 0 0 1 4.45-3.56C8.94 5.49 8.46 6.7 8.14 8zm4.03 11.96c-.83-1.2-1.48-2.59-1.91-3.96h3.82c-.43 1.37-1.08 2.76-1.91 3.96zM14.34 14h-4.68a14.7 14.7 0 0 1-.16-2c0-.68.05-1.35.16-2h4.68c.11.65.16 1.32.16 2 0 .68-.05 1.35-.16 2zm.19 5.56c.58-1.05 1.06-2.26 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14a16.7 16.7 0 0 0 .1-2c0-.68-.03-1.35-.1-2h3.38a7.82 7.82 0 0 1 0 4h-3.38z" />
    </svg>
  );
}

interface MemberCardProps {
  member: TeamMember;
  index: number;
  isExpanded: boolean;
  onToggleSpotlight: (member: TeamMember) => void;
}

export default function MemberCard({
  member,
  index,
  isExpanded,
  onToggleSpotlight,
}: MemberCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={() => onToggleSpotlight(member)}
      style={{ "--index": index } as React.CSSProperties}
      className={`card group relative bg-[var(--navy)] border border-[var(--steel)] rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer select-none ${
        isExpanded ? "is-expanded is-active shadow-2xl border-[var(--slate)]" : ""
      }`}
    >
      <div className="card__media aspect-[4/5] overflow-hidden bg-[var(--steel)] relative">
        <Image
          src={member.image}
          alt={member.name}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="card__photo object-cover object-center w-full h-full filter saturate-[0.85] scale-[1.35] transition-transform duration-500 group-hover:scale-[1.5] group-hover:saturate-100"
        />
      </div>

      <div className="card__body p-5 relative">
        <div className="card__heading pr-10">
          <h3 className="card__name font-display text-lg font-bold text-[var(--frost)]">
            {member.name}
          </h3>
          <p className="card__role font-mono text-xs text-[var(--mist)] mt-0.5">
            {member.role}
          </p>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleSpotlight(member);
          }}
          aria-expanded={isExpanded}
          aria-label={`${isExpanded ? "Close" : "Show"} bio for ${member.name}`}
          className="card__toggle absolute top-5 right-5 w-8 h-8 rounded-full border border-[var(--steel)] bg-[var(--navy)] text-[var(--frost)] flex items-center justify-center text-sm font-mono hover:bg-[var(--steel)] transition-colors cursor-pointer"
        >
          <span aria-hidden="true">{isExpanded ? "×" : "+"}</span>
        </button>

        {isExpanded && (
          <div className="card__bio-panel mt-4 pt-4 border-t border-[var(--steel)] animate-fadeIn">
            <p className="card__bio font-mono text-xs text-[var(--mist)] leading-relaxed">
              {member.bio}
            </p>
            {member.socials && (
              <ul className="card__socials flex items-center gap-3 mt-4">
                {Object.entries(member.socials).map(([platform, url]) => (
                  <li key={platform}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on ${platform}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-[var(--slate)] hover:text-[var(--frost)] transition-colors"
                    >
                      <SocialIcon platform={platform} />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
