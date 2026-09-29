/**
 * ============================================================================
 * JEC STUDENT COMMITTEE (JEC SC) — MEMBER DIRECTORY VARIABLE CONFIG
 * ============================================================================
 * 
 * HOW TO UPDATE MEMBERS:
 * - To add a new member: Add a new object to the `JEC_SC_MEMBERS` array below.
 * - To edit a member: Update their `name`, `role`, `wing`, `photo`, or `branchYear`.
 * - To change photos: Place your image in `/public/alumni/2026-27, heads/` or `/public/assets/`
 *   and set `photo` to `/alumni/2026-27, heads/your-image.jpeg`.
 * 
 * If a photo is unavailable, a clean stylized avatar with their initials will automatically render.
 */

export type JecScWing =
  | "All"
  | "Executive Committee"
  | "Technical Wing"
  | "Cultural Wing"
  | "Sports & Welfare"
  | "Media & PR";

export interface JecScMember {
  id: string;
  name: string;
  role: string;
  wing: JecScWing;
  branchYear: string;
  photo: string;
  bio: string;
  badge?: string;
  email?: string;
  socials?: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    twitter?: string;
  };
}

export const JEC_SC_COMMITTEE_CONFIG = {
  title: "JEC STUDENT COMMITTEE",
  shortTitle: "JEC SC",
  tagline: "WHERE STUDENT VOICE MEETS LEADERSHIP",
  institution: "JABALPUR ENGINEERING COLLEGE",
  tenure: "2026 – 2027",
  description:
    "The official student representative body of Jabalpur Engineering College, driving student welfare, campus culture, technical innovation, and inter-collegiate excellence.",
  stats: {
    totalMembers: "24+",
    activeWings: "5 WINGS",
    established: "EST. 1947",
    term: "TERM 26-27",
  },
};

export const JEC_SC_CATEGORIES: JecScWing[] = [
  "All",
  "Executive Committee",
  "Technical Wing",
  "Cultural Wing",
  "Sports & Welfare",
  "Media & PR",
];

export const JEC_SC_MEMBERS: JecScMember[] = [
  {
    id: "sc-01",
    name: "AKSHAT TIWARI",
    role: "President",
    wing: "Executive Committee",
    branchYear: "4th Year · Computer Science & Engineering",
    photo: "/assets/presidents/akshat_tiwari.jpeg",
    bio: "Guiding the student body towards unified growth, bridging the gap between student aspirations and institute leadership.",
    badge: "HEAD OF COMMITTEE",
    email: "president.sc@jecjabalpur.ac.in",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: "sc-02",
    name: "CHITRANSH TIWARI",
    role: "Vice President",
    wing: "Executive Committee",
    branchYear: "4th Year · Information Technology",
    photo: "/alumni/2026-27, heads/chitransh.jpeg",
    bio: "Overseeing committee governance, inter-departmental synergies, and strategic student initiatives across all faculties.",
    badge: "EXECUTIVE",
    email: "vp.sc@jecjabalpur.ac.in",
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "sc-03",
    name: "PEEHU PAHADE",
    role: "General Secretary",
    wing: "Executive Committee",
    branchYear: "3rd Year · Electronics & Telecommunication",
    photo: "/alumni/2026-27, heads/peehu.jpeg",
    bio: "Orchestrating general committee operations, institutional liaisoning, and ensuring every student voice translates into action.",
    badge: "CORE LEAD",
    email: "gensec.sc@jecjabalpur.ac.in",
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: "sc-04",
    name: "SHIV OJHA",
    role: "Executive President",
    wing: "Executive Committee",
    branchYear: "4th Year · Mechanical Engineering",
    photo: "/alumni/2026-27, heads/shiv.jpeg",
    bio: "Spearheading execution policy, campus infrastructure dialogs, and high-impact committee summits.",
    badge: "EXECUTIVE",
    email: "exec.sc@jecjabalpur.ac.in",
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "sc-05",
    name: "RITIKA",
    role: "Executive Secretary",
    wing: "Executive Committee",
    branchYear: "3rd Year · Electrical Engineering",
    photo: "/alumni/2026-27, heads/ritika.jpeg",
    bio: "Managing committee documentation, administrative coordination, and inter-club alignments for all university events.",
    badge: "SECRETARIAT",
    email: "ritika.sc@jecjabalpur.ac.in",
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "sc-06",
    name: "VEDANSH",
    role: "Technical Secretary",
    wing: "Technical Wing",
    branchYear: "3rd Year · Computer Science & Engineering",
    photo: "/alumni/2026-27, heads/vedansh.jpeg",
    bio: "Pioneering campus hackathons, open-source technical culture, and student-driven software development at JEC.",
    badge: "TECH LEAD",
    email: "techsec.sc@jecjabalpur.ac.in",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "sc-07",
    name: "DAKSH",
    role: "Technical Head",
    wing: "Technical Wing",
    branchYear: "3rd Year · Information Technology",
    photo: "/alumni/2026-27, heads/daksh.jpeg",
    bio: "Mentoring junior batches in systems programming, web technologies, and competitive technical problem solving.",
    badge: "TECH LEAD",
    socials: {
      github: "https://github.com",
    },
  },
  {
    id: "sc-08",
    name: "ANUSHKA",
    role: "Cultural Secretary",
    wing: "Cultural Wing",
    branchYear: "3rd Year · Civil Engineering",
    photo: "/alumni/2026-27, heads/anushka.jpeg",
    bio: "Directing college cultural fests, annual celebrations, theatrical productions, and artistic talent showcases.",
    badge: "CULTURAL LEAD",
    email: "cultsec.sc@jecjabalpur.ac.in",
    socials: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "sc-09",
    name: "APOORVA",
    role: "Cultural Coordinator",
    wing: "Cultural Wing",
    branchYear: "2nd Year · Artificial Intelligence & Data Science",
    photo: "/alumni/2026-27, heads/apoorva.jpeg",
    bio: "Curating music, dance, and fine arts events with rich student participation across all four academic years.",
    badge: "COORDINATOR",
    socials: {
      instagram: "https://instagram.com",
    },
  },
  {
    id: "sc-10",
    name: "HARDIK",
    role: "Sports Secretary",
    wing: "Sports & Welfare",
    branchYear: "4th Year · Mechanical Engineering",
    photo: "/alumni/2026-27, heads/hardik.jpeg",
    bio: "Leading inter-branch sports leagues, university tournaments, and athletic welfare programs for student athletes.",
    badge: "SPORTS LEAD",
    email: "sports.sc@jecjabalpur.ac.in",
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "sc-11",
    name: "ISHA",
    role: "Student Welfare Secretary",
    wing: "Sports & Welfare",
    branchYear: "3rd Year · Industrial & Production Engineering",
    photo: "/alumni/2026-27, heads/isha.jpeg",
    bio: "Advocating student well-being, grievance redressal, hostel facilities, and mental wellness initiatives.",
    badge: "WELFARE LEAD",
    email: "welfare.sc@jecjabalpur.ac.in",
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "sc-12",
    name: "SAURABH",
    role: "Media & PR Secretary",
    wing: "Media & PR",
    branchYear: "3rd Year · Electronics & Telecommunication",
    photo: "/alumni/2026-27, heads/saurabh.jpeg",
    bio: "Crafting committee branding, media outreach, press releases, and digital storytelling across all channels.",
    badge: "MEDIA LEAD",
    email: "media.sc@jecjabalpur.ac.in",
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: "sc-13",
    name: "PRANJAL",
    role: "Public Relations Head",
    wing: "Media & PR",
    branchYear: "3rd Year · Computer Science & Engineering",
    photo: "/alumni/2026-27, heads/pranjal.jpeg",
    bio: "Fostering alumni networks, industrial guest relations, and sponsorship partnerships for student fests.",
    badge: "PR LEAD",
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "sc-14",
    name: "PUSHPENDRA",
    role: "Logistics & Operations Lead",
    wing: "Executive Committee",
    branchYear: "3rd Year · Mechanical Engineering",
    photo: "/alumni/2026-27, heads/pushpendra.jpeg",
    bio: "Ensuring flawless operational execution, ground management, and vendor logistics for campus-wide events.",
    badge: "OPERATIONS",
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "sc-15",
    name: "SVASTI",
    role: "Literary & Debate Head",
    wing: "Cultural Wing",
    branchYear: "2nd Year · Information Technology",
    photo: "/alumni/2026-27, heads/svasti.jpeg",
    bio: "Organizing parliamentary debates, model united nations, quiz championships, and college publications.",
    badge: "LITERARY LEAD",
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "sc-16",
    name: "VINAY",
    role: "Joint Secretary",
    wing: "Executive Committee",
    branchYear: "3rd Year · Electrical Engineering",
    photo: "/alumni/2026-27, heads/vinay.jpeg",
    bio: "Supporting executive oversight, committee meetings, and inter-society collaborations across JEC.",
    badge: "EXECUTIVE",
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
];
