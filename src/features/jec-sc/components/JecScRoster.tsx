"use client";

import {
  StudentCommitteeMember,
  JEC_STUDENT_COMMITTEE_CONFIG,
} from "@/data/jecStudentCommittee";
import JecScCard from "./JecScCard";

interface JecScRosterProps {
  initialMembers: StudentCommitteeMember[];
}

export default function JecScRoster({ initialMembers }: JecScRosterProps) {
  return (
    <div className="relative min-h-screen">
      {/* ── Page Header ── */}
      <header className="mx-auto max-w-6xl px-4 pt-10 pb-8 sm:px-6 md:pt-20">
        {/* Top metadata strip */}
        <div className="mb-4 flex flex-col items-start gap-3 border-b border-jlug-line pb-3 font-mono text-[0.65rem] uppercase tracking-wider sm:flex-row sm:items-center sm:justify-between sm:text-[0.7rem] sm:tracking-widest text-jlug-gray-1 animate-float-in-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="whitespace-nowrap text-jlug-accent font-bold">JLUG // CO-OP</span>
            <span className="text-jlug-gray-3">/</span>
            <span>{JEC_STUDENT_COMMITTEE_CONFIG.institution}</span>
          </div>
          <div>
            <span className="inline-block whitespace-nowrap border border-jlug-line bg-jlug-black px-2.5 py-0.5 text-jlug-accent font-semibold">
              {initialMembers.length} REPRESENTATIVES
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display break-words text-3xl font-bold tracking-tight text-jlug-white min-[400px]:text-4xl sm:text-6xl lg:text-7xl uppercase animate-float-in-2">
          {JEC_STUDENT_COMMITTEE_CONFIG.title}
        </h1>
      </header>

      {/* ── Main Content: Member Cards Grid ── */}
      <main className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {initialMembers.map((member) => (
            <JecScCard
              key={member.id}
              member={member}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
