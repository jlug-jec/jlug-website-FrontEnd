import type { CoreTeamMember } from "../data/hall-of-fame";
import HofIDCard from "./HofIDCard";

export interface CoreTeamGridProps {
  members: CoreTeamMember[];
  academicYear: string;
}

export default function CoreTeamGrid({ members, academicYear }: CoreTeamGridProps) {
  const yearMembers = members.filter((m) => m.academicYear === academicYear);

  if (yearMembers.length === 0) {
    return (
      <div className="border border-jlug-line bg-jlug-ink p-12 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-jlug-accent mb-2">
          STATUS: NO_TEAM_RECORDS
        </p>
        <p className="font-mono text-sm text-jlug-gray-1">
          [ NO CORE TEAM RECORDS ARCHIVED FOR TERM {academicYear} ]
        </p>
      </div>
    );
  }

  return (
    <div
      role="tabpanel"
      aria-label={`Core Team for ${academicYear}`}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {yearMembers.map((member, i) => (
        <HofIDCard
          key={member.id}
          cardId={`CR_${academicYear.replace("–", "_").replace("-", "_")}_${String(i + 1).padStart(2, "0")}`}
          name={member.name}
          role={member.role}
          branch={member.branch}
          yearOfStudy={`${member.yearOfStudy} YEAR`}
          academicYear={member.academicYear}
          isActive={member.academicYear === "2026–27"}
          portraitUrl={member.portraitUrl}
        />
      ))}
    </div>
  );
}
