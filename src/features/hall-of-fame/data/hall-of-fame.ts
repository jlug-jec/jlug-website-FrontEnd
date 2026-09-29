// src/features/hall-of-fame/data/hall-of-fame.ts
// SINGLE SOURCE OF TRUTH for all Hall of Fame content.
// To add/update/remove a person, edit ONLY this file.

export type Domain =
  | "Open Source"
  | "Dev"
  | "Robotics"
  | "AI/ML"
  | "Design"
  | "Events"
  | "Community";

export interface President {
  id: string;              // slug, e.g. "2023-24-sharma"
  name: string;
  termLabel: string;       // e.g. "2023–24"
  termStartYear: number;   // 2023
  termEndYear: number;     // 2024
  branch?: string;         // e.g. "CSE", "IT", "ECE"
  portraitUrl: string;     // /alumni/xxxx.jpg
  domain: Domain;          // primary domain they led
  legacyNote?: string;     // 1-line "what they're known for" (optional)
  linkedinUrl?: string;
  githubUrl?: string;
  order: number;           // 1 = most recent, used for numbering (01, 02, 03…)
}

export interface CoreTeamMember {
  id: string;
  name: string;
  academicYear: string;    // e.g. "2023–24" — used for grouping
  role: string;            // e.g. "Design Lead", "Events Co-lead"
  branch?: string;
  yearOfStudy: "1st" | "2nd" | "3rd" | "4th";
  domain: Domain;
  portraitUrl?: string;
}

export const PRESIDENTS: President[] = [
  {
    id: "2025-26-aditya-sharma",
    name: "Aditya Sharma",
    termLabel: "2025–26",
    termStartYear: 2025,
    termEndYear: 2026,
    branch: "CSE",
    portraitUrl: "/alumni/aditya-sharma.jpg",
    domain: "Open Source",
    legacyNote: "Scaled CodeKumbh to 500+ participants and spearheaded the modern JLUG web platform.",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    order: 1,
  },
  {
    id: "2024-25-priya-patel",
    name: "Priya Patel",
    termLabel: "2024–25",
    termStartYear: 2024,
    termEndYear: 2025,
    branch: "IT",
    portraitUrl: "/alumni/priya-patel.jpg",
    domain: "Dev",
    legacyNote: "Inaugurated the campus-wide Linux Install Fest series and expanded JLUG mentorship circles.",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    order: 2,
  },
  {
    id: "2023-24-rohit-verma",
    name: "Rohit Verma",
    termLabel: "2023–24",
    termStartYear: 2023,
    termEndYear: 2024,
    branch: "ECE",
    portraitUrl: "/alumni/rohit-verma.jpg",
    domain: "Robotics",
    legacyNote: "Bridged embedded Linux systems with robotics hardware labs, establishing the hardware guild.",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    order: 3,
  },
  {
    id: "2022-23-ayush-gupta",
    name: "Ayush Gupta",
    termLabel: "2022–23",
    termStartYear: 2022,
    termEndYear: 2023,
    branch: "CSE",
    portraitUrl: "/alumni/ayush-gupta.jpg",
    domain: "AI/ML",
    legacyNote: "Pioneered open-weights ML study tracks and established community research sprints.",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    order: 4,
  },
  {
    id: "2021-22-shreya-mishra",
    name: "Shreya Mishra",
    termLabel: "2021–22",
    termStartYear: 2021,
    termEndYear: 2022,
    branch: "IT",
    portraitUrl: "/alumni/shreya-mishra.jpg",
    domain: "Community",
    legacyNote: "Maintained club momentum through the remote learning era with daily asynchronous build jams.",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    order: 5,
  },
  {
    id: "2020-21-aman-trivedi",
    name: "Aman Trivedi",
    termLabel: "2020–21",
    termStartYear: 2020,
    termEndYear: 2021,
    branch: "CSE",
    portraitUrl: "/alumni/aman-trivedi.jpg",
    domain: "Dev",
    legacyNote: "Architected internal servers and established git-based project workflows across domains.",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    order: 6,
  },
  {
    id: "2019-20-harsh-vardhan",
    name: "Harsh Vardhan",
    termLabel: "2019–20",
    termStartYear: 2019,
    termEndYear: 2020,
    branch: "CSE",
    portraitUrl: "/alumni/harsh-vardhan.jpg",
    domain: "Open Source",
    legacyNote: "Founding President. Planted the flag of JEC Linux Users Group and authored the founding charter.",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    order: 7,
  },
];

export const CORE_TEAM: CoreTeamMember[] = [
  // 2026–27 Heads
  {
    id: "ct-2026-01",
    name: "Akshat Tiwari",
    academicYear: "2026–27",
    role: "President",
    branch: "Industrial & Production Engg.",
    yearOfStudy: "4th",
    domain: "Community",
    portraitUrl: "/assets/presidents/akshat_tiwari.jpeg",
  },
  {
    id: "ct-2026-02",
    name: "Chitransh Tiwari",
    academicYear: "2026–27",
    role: "Vice President",
    branch: "Mechanical Engineering",
    yearOfStudy: "4th",
    domain: "Community",
    portraitUrl: "/alumni/2026-27, heads/chitransh.jpeg",
  },
  {
    id: "ct-2026-03",
    name: "Shiv Ojha",
    academicYear: "2026–27",
    role: "Executive President",
    branch: "Electronics & Telecomm.",
    yearOfStudy: "4th",
    domain: "Dev",
    portraitUrl: "/alumni/2026-27, heads/shiv.jpeg",
  },
  {
    id: "ct-2026-04",
    name: "Ritika",
    academicYear: "2026–27",
    role: "Executive Secretary",
    branch: "Information Technology",
    yearOfStudy: "3rd",
    domain: "Events",
    portraitUrl: "/alumni/2026-27, heads/ritika.jpeg",
  },
  {
    id: "ct-2026-05",
    name: "Peehu Pahade",
    academicYear: "2026–27",
    role: "General Secretary",
    branch: "Mechanical Engineering",
    yearOfStudy: "3rd",
    domain: "Community",
    portraitUrl: "/alumni/2026-27, heads/peehu.jpeg",
  },
  {
    id: "ct-2026-06",
    name: "Naman Yadav",
    academicYear: "2026–27",
    role: "Joint Secretary",
    branch: "Mechanical Engineering",
    yearOfStudy: "3rd",
    domain: "Community",
    portraitUrl: "/alumni/2026-27, heads/naman.jpeg",
  },
  {
    id: "ct-2026-07",
    name: "Pushpendra Tomar",
    academicYear: "2026–27",
    role: "Operational Chief",
    branch: "Mechatronics Engineering",
    yearOfStudy: "3rd",
    domain: "Events",
    portraitUrl: "/alumni/2026-27, heads/pushendra.jpeg",
  },
  {
    id: "ct-2026-08",
    name: "Apoorva Gupta",
    academicYear: "2026–27",
    role: "Operational Chief",
    branch: "Leadership",
    yearOfStudy: "3rd",
    domain: "Community",
    portraitUrl: "/alumni/2026-27, heads/apoorva.jpeg",
  },

  // 2025–26 Core Team
  {
    id: "ct-2025-01",
    name: "Devansh Dubey",
    academicYear: "2025–26",
    role: "Technical Lead",
    branch: "CSE",
    yearOfStudy: "4th",
    domain: "Dev",
  },
  {
    id: "ct-2025-02",
    name: "Rhea Sen",
    academicYear: "2025–26",
    role: "Design Lead",
    branch: "IT",
    yearOfStudy: "3rd",
    domain: "Design",
  },
  {
    id: "ct-2025-03",
    name: "Karan Johari",
    academicYear: "2025–26",
    role: "Open Source Lead",
    branch: "CSE",
    yearOfStudy: "4th",
    domain: "Open Source",
  },
  {
    id: "ct-2025-04",
    name: "Ananya Saxena",
    academicYear: "2025–26",
    role: "Events Lead",
    branch: "ECE",
    yearOfStudy: "3rd",
    domain: "Events",
  },
  {
    id: "ct-2025-05",
    name: "Tanmay Bisen",
    academicYear: "2025–26",
    role: "Robotics Lead",
    branch: "EE",
    yearOfStudy: "4th",
    domain: "Robotics",
  },
  {
    id: "ct-2025-06",
    name: "Sneha Shukla",
    academicYear: "2025–26",
    role: "AI/ML Lead",
    branch: "AI&DS",
    yearOfStudy: "3rd",
    domain: "AI/ML",
  },
  {
    id: "ct-2025-07",
    name: "Vikram Rathore",
    academicYear: "2025–26",
    role: "Community Lead",
    branch: "IT",
    yearOfStudy: "2nd",
    domain: "Community",
  },
  {
    id: "ct-2025-08",
    name: "Meera Nair",
    academicYear: "2025–26",
    role: "Dev Co-lead",
    branch: "CSE",
    yearOfStudy: "3rd",
    domain: "Dev",
  },

  // 2024–25 Core Team
  {
    id: "ct-2024-01",
    name: "Nikhil Pandey",
    academicYear: "2024–25",
    role: "Vice President",
    branch: "CSE",
    yearOfStudy: "4th",
    domain: "Dev",
  },
  {
    id: "ct-2024-02",
    name: "Pooja Deshmukh",
    academicYear: "2024–25",
    role: "Design Lead",
    branch: "IT",
    yearOfStudy: "4th",
    domain: "Design",
  },
  {
    id: "ct-2024-03",
    name: "Abhishek Kashyap",
    academicYear: "2024–25",
    role: "Open Source Lead",
    branch: "CSE",
    yearOfStudy: "3rd",
    domain: "Open Source",
  },
  {
    id: "ct-2024-04",
    name: "Gaurav Soni",
    academicYear: "2024–25",
    role: "Events Lead",
    branch: "ME",
    yearOfStudy: "4th",
    domain: "Events",
  },

  // 2023–24 Core Team
  {
    id: "ct-2023-01",
    name: "Sameer Khan",
    academicYear: "2023–24",
    role: "Systems Lead",
    branch: "CSE",
    yearOfStudy: "4th",
    domain: "Dev",
  },
  {
    id: "ct-2023-02",
    name: "Kritika Sahu",
    academicYear: "2023–24",
    role: "Design Lead",
    branch: "ECE",
    yearOfStudy: "3rd",
    domain: "Design",
  },
  {
    id: "ct-2023-03",
    name: "Mayank Lodhi",
    academicYear: "2023–24",
    role: "Robotics Lead",
    branch: "ECE",
    yearOfStudy: "4th",
    domain: "Robotics",
  },
  {
    id: "ct-2023-04",
    name: "Bhavna Jain",
    academicYear: "2023–24",
    role: "Community Lead",
    branch: "IT",
    yearOfStudy: "3rd",
    domain: "Community",
  },
];
