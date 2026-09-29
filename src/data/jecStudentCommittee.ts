/**
 * ============================================================================
 * JEC STUDENT COMMITTEE — MEMBER DATA CONFIGURATION
 * ============================================================================
 * 
 * Modify this file to easily update members of the JEC Student Committee.
 * 
 * Each member entry supports:
 * - id: Unique identifier
 * - name: Full Name (displayed in uppercase)
 * - role: Committee Role / Designation
 * - image: Path to photo in /public folder (e.g., "/alumni/2026-27, heads/akshat.jpeg")
 * - bio: Short quote or description
 * - imageScale: (optional) Zoom scale factor (default: 1)
 * - objectPosition: (optional) Image alignment, e.g. "center 20%"
 * - imageOffsetY: (optional) Shift photo vertically in % of frame height (positive = down)
 * - email: (optional) Contact email
 * - socials: (optional) LinkedIn, GitHub, etc.
 */

export interface StudentCommitteeMember {
  id: number | string;
  name: string;
  role?: string;
  image: string;
  bio?: string;
  imageScale?: number;
  objectPosition?: string;
  imageOffsetY?: number;
  email?: string;
  socials?: Record<string, string>;
}

export const JEC_STUDENT_COMMITTEE_CONFIG = {
  title: "JLUG JEC STUDENT COMMITTEE",
  shortTitle: "JEC SC",
  institution: "JABALPUR ENGINEERING COLLEGE",
};

export const JEC_STUDENT_COMMITTEE_MEMBERS: StudentCommitteeMember[] = [
  {
    id: 1,
    name: "AKSHAT TIWARI",

    image: "/assets/presidents/akshat_tiwari.jpeg",
    imageScale: 1,
    objectPosition: "center top",

  },
  {
    id: 2,
    name: "CHITRANSH TIWARI",

    image: "/alumni/members/chitransh.png",
    imageScale: 1,
    objectPosition: "center",

  },
  {
    id: 3,
    name: "PRINCE DWIVEDI",

    image: "/assets/presidents/prince_dwivedi.png",
    imageScale: 1,
    objectPosition: "center",
    

  },
  {
    id: 4,
    name: "PALAK CHOUDHARY",

    image: "/alumni/members/palak.jpeg",
    imageScale: 1.22,
    objectPosition: "center 20%",
    imageOffsetY: 5,
    

  },
  {
    id: 5,
    name: "HARSHIT SOLANKI",

    image: "/assets/presidents/harshit_solanki.jpg",
    imageScale: 1,
    objectPosition: "center",
    
  },

  {
    id: 6,
    name: "VARSHA GURBANI",

    image: "/alumni/members/varsha.jpeg",
    imageScale: 1,
    objectPosition: "center",
    
  },
  {
    id: 7,
    name: "MUSTKEEM ARSH",

    image: "/assets/presidents/mustkeem_arsh.jpg",
    imageScale: 1,
    objectPosition: "center",
    imageOffsetY: 4,
    

  },
  {id: 8,
    name: "ISHITA MODI",

    image: "/alumni/members/ishita.jpeg",
    imageScale: 1.09,
    objectPosition: "center",
    
  },
  {id: 9,
    name: "SAMVEG SHANDILYA",

    image: "/assets/presidents/samveg_shandilya.jpg",
    imageScale: 1.14,
    objectPosition: "center",
    
  },

  {id: 10,
    name: "PREETI PATEL",

    image: "/alumni/members/preeti.jpeg",
    imageScale: 1.08,
    objectPosition: "center",
  },
  {id: 11,
    name: "ADITI SHRIVASTAVA",

    image: "/alumni/members/aditi.jpeg",
    imageScale: 1.08,
    objectPosition: "center",
    
  },
   {id: 12,
    name: "AASTHA GAUTAM",

    image: "/alumni/members/aastha.jpeg",
    imageScale: 1.08,
    objectPosition: "center",
    
  },
  {id: 13,
    name: "MOHAMMAD USAID",

    image: "/assets/presidents/mohammad_usaid.png",
    imageScale: 1.15,
    objectPosition: "center",
    
  },
  {id: 14,
    name: "PRANSHU MISHRA",

    image: "/assets/presidents/pranshu_mishra.jpg",
    imageScale: 1.14,
    objectPosition: "center",
    
  },
  {id: 15,
    name: "AYUSHMAN PARCHORIA",

    image: "/assets/presidents/ayushman_parchoria.jpg",
    imageScale: 1.09,
    objectPosition: "center",
    
  },

];
