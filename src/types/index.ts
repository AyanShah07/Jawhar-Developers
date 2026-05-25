export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  budget: string;
  area: string;
  status: "Completed" | "In Progress" | "Planning";
  image: string;
  story?: string;
  tags?: string[];
  featured?: boolean;
}

export interface Service {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  number: string;
  title: string;
  description: string;
  features: string[];
  projects: string;
  color: "orange" | "teal" | "gold";
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  project: string;
  projectValue: string;
}

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  content?: string;
}

export interface JobListing {
  id: string;
  title: string;
  dept: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  level: "Junior" | "Mid-level" | "Senior" | "Lead";
  posted: string;
  description?: string;
}

export interface NavLink {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface Office {
  city: string;
  address: string;
  phone?: string;
  email?: string;
  lat?: number;
  lng?: number;
}
