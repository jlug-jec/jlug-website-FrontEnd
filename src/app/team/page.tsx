import { Metadata } from 'next';
import TeamPage from '@/components/pages/team-page';
import { parseTeamData } from '@/lib/team-parser';

export const metadata: Metadata = {
  title: 'Meet Our Team - JLUG',
  description:
    'Meet the amazing team behind JLUG - From seniors to juniors, discover the people who make our community thrive',
};

export default function Page() {
  const teamData = parseTeamData();
  return <TeamPage teamData={teamData} />;
}
