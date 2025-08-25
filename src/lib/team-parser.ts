import fs from 'fs';
import path from 'path';

export interface TeamMember {
  name: string;
  role?: string;
  branch?: string;
  department?: string;
  skills?: string;
  specialization?: string;
  interests?: string;
  image: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  bio?: string;
}

export interface TeamData {
  seniors: TeamMember[];
  // juniors: TeamMember[];
}

function parseMarkdownFile(filePath: string): TeamMember[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const members: TeamMember[] = [];

  let currentMember: Partial<TeamMember> = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith('### ') && !line.includes(':')) {
      // Start of a new member
      const nameMatch = line.match(/### (.*)/);
      if (nameMatch) {
        if (Object.keys(currentMember).length > 0) {
          members.push(currentMember as TeamMember);
        }
        currentMember = { name: nameMatch[1] };
      }
    } else if (line.startsWith('- ') && line.includes(':')) {
      // Member detail
      const detailMatch = line.match(/- (.*?): (.*)/);
      if (detailMatch) {
        const [_, key, value] = detailMatch;
        switch (key.toLowerCase()) {
          case 'name':
            currentMember.name = value;
            break;
          case 'role':
            currentMember.role = value;
            break;
          case 'branch':
            currentMember.branch = value;
            break;
          case 'department':
            currentMember.department = value;
            break;
          case 'skills':
            currentMember.skills = value;
            break;
          case 'specialization':
            currentMember.specialization = value;
            break;
          case 'interests':
            currentMember.interests = value;
            break;
          case 'image':
            currentMember.image = value;
            break;
          case 'linkedin':
            currentMember.linkedin = value;
            break;
          case 'github':
            currentMember.github = value;
            break;
          case 'instagram':
            currentMember.instagram = value;
            break;
          case 'bio':
            currentMember.bio = value;
            break;
        }
      }
    }
  }

  // Add the last member
  if (Object.keys(currentMember).length > 0) {
    members.push(currentMember as TeamMember);
  }

  return members;
}

export function parseTeamData(): TeamData {
  const fourthYearPath = path.join(process.cwd(), 'src/data/4th-year-team.md');
  // const thirdYearPath = path.join(process.cwd(), 'src/data/3rd-year-team.md');

  const fourthYearMembers = parseMarkdownFile(fourthYearPath);
  // const thirdYearMembers = parseMarkdownFile(thirdYearPath);

  return {
    seniors: fourthYearMembers,
    // juniors: thirdYearMembers
  };
}
