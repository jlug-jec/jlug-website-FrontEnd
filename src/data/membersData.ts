export interface MemberSocials {
  linkedin?: string;
  github?: string;
  twitter?: string;
  website?: string;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  email: string;
  image: string;
  branch?: string;
  year?: string;
  bio?: string;
  skills?: string[];
  socials: MemberSocials;
}

export const MEMBERS_DATA: Member[] = [
  {
    id: "mem-01",
    name: "Tanishka Singh",
    role: "Core Tech Lead",
    email: "tanishka@jlug.club",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    branch: "Computer Science & Engineering",
    year: "4th Year",
    bio: "Systems hacker focused on Linux Kernel optimizations and high-performance Rust web services.",
    skills: ["Linux Kernel", "Rust", "Distributed Systems", "C++"],
    socials: {
      github: "https://github.com/tanishka-singh",
      linkedin: "https://linkedin.com/in/tanishka-singh",
      twitter: "https://twitter.com/tanishka",
    },
  },
  {
    id: "mem-02",
    name: "Aarav Sharma",
    role: "AI & ML Specialist",
    email: "aarav@jlug.club",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    branch: "Information Technology",
    year: "3rd Year",
    bio: "Computer vision researcher building low-latency inference pipelines for autonomous agents.",
    skills: ["PyTorch", "CUDA", "OpenCV", "Python"],
    socials: {
      github: "https://github.com/aaravsharma",
      linkedin: "https://linkedin.com/in/aaravsharma",
    },
  },
  {
    id: "mem-03",
    name: "Ananya Verma",
    role: "Lead Systems Designer",
    email: "ananya@jlug.club",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    branch: "Electronics & Communication",
    year: "4th Year",
    bio: "Crafting minimalist, high-density technical design systems and digital interfaces.",
    skills: ["Figma", "UI/UX Architecture", "Tailwind CSS", "TypeScript"],
    socials: {
      github: "https://github.com/ananyaverma",
      linkedin: "https://linkedin.com/in/ananyaverma",
      website: "https://ananya.design",
    },
  },
  {
    id: "mem-04",
    name: "Devansh Patel",
    role: "DevOps & Infrastructure Lead",
    email: "devansh@jlug.club",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    branch: "Computer Science & Engineering",
    year: "3rd Year",
    bio: "Automating cloud infrastructure, bare-metal server clusters, and CI/CD deployment pipelines.",
    skills: ["Kubernetes", "Docker", "Terraform", "Go"],
    socials: {
      github: "https://github.com/devanshpatel",
      linkedin: "https://linkedin.com/in/devanshpatel",
    },
  },
  {
    id: "mem-05",
    name: "Riya Gupta",
    role: "Community & Operations Head",
    email: "riya@jlug.club",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    branch: "Electrical Engineering",
    year: "4th Year",
    bio: "Organizing flagship national hackathons, open-source sprints, and technical workshops.",
    skills: ["Community Strategy", "Event Management", "Open Source Advocacy"],
    socials: {
      linkedin: "https://linkedin.com/in/riyagupta",
      twitter: "https://twitter.com/riyagupta",
    },
  },
  {
    id: "mem-06",
    name: "Karan Mehta",
    role: "Creative Media & 3D Specialist",
    email: "karan@jlug.club",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    branch: "Mechanical Engineering",
    year: "2nd Year",
    bio: "Specializing in procedural 3D motion graphics, Blender animations, and visual storytelling.",
    skills: ["Blender", "Three.js", "GLSL Shaders", "After Effects"],
    socials: {
      github: "https://github.com/karanmehta",
      linkedin: "https://linkedin.com/in/karanmehta",
    },
  },
  {
    id: "mem-07",
    name: "Sneha Reddi",
    role: "Backend Architect",
    email: "sneha@jlug.club",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    branch: "Computer Science & Engineering",
    year: "3rd Year",
    bio: "Designing resilient REST & gRPC APIs and scalable event-driven database architectures.",
    skills: ["Go", "PostgreSQL", "Redis", "gRPC"],
    socials: {
      github: "https://github.com/snehareddi",
      linkedin: "https://linkedin.com/in/snehareddi",
    },
  },
  {
    id: "mem-08",
    name: "Vikramaditya Roy",
    role: "Robotics & Hardware Developer",
    email: "vikram@jlug.club",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80",
    branch: "Mechatronics Engineering",
    year: "4th Year",
    bio: "Building custom PCB designs, micro-controller firmware, and ROS2 autonomous navigation bots.",
    skills: ["ROS2", "ESP32", "Embedded C++", "KiCAD"],
    socials: {
      github: "https://github.com/vikramadityaroy",
      linkedin: "https://linkedin.com/in/vikramadityaroy",
    },
  },
];
