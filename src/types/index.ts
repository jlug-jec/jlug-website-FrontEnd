export interface Member {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  location?: string;
}

export interface Newsletter {
  id: string;
  title: string;
  pages: string[];
  edition: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image?: string;
}

export interface Faculty {
  id: string;
  name: string;
  role: string;
  image: string;
  department: string;
}

export interface Stats {
  members: number;
  events: number;
  projects: number;
  years: number;
}
