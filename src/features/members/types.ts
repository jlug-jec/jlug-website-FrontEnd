export interface MemberSocials {
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

export type FilterCategory = "all" | "leadership" | "engineering" | "design-events";

export interface TeamMember {
  id: number | string;
  name: string;
  role: string;
  category?: FilterCategory | string;
  image: string;
  bio?: string;
  socials?: MemberSocials;
  objectPosition?: string;
  imageScale?: number;
}
