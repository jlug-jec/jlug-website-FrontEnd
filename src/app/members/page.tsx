import MembersRoster from "@/features/members/components/MembersRoster";
import teamData from "../../../team.json";

export const metadata = {
  title: "Members — JEC Linux Users Group (JLUG)",
  description: "Meet the team members, engineers, and contributors building the club projects.",
};

export default function MembersPage() {
  return <MembersRoster initialMembers={teamData} />;
}
