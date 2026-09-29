import type { Metadata } from "next";
import JecScRoster from "@/features/jec-sc/components/JecScRoster";
import { JEC_STUDENT_COMMITTEE_MEMBERS } from "@/data/jecStudentCommittee";

export const metadata: Metadata = {
  title: "JLUG JEC Student Committee | JLUG",
  description:
    "Official representatives and members of the JLUG JEC Student Committee, Jabalpur Engineering College.",
};

export default function JecStudentCommitteePage() {
  return <JecScRoster initialMembers={JEC_STUDENT_COMMITTEE_MEMBERS} />;
}
