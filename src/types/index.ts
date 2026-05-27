export interface ExperienceEntry {
  id: number;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location?: string;
  description: string; // i18n key
  highlights: string[]; // i18n keys
  stack: string[];
}

export interface EducationEntry {
  id: number;
  school: string;
  degree: string;
  description: string;
  startYear: number | string;
  endYear: number | string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  icon?: string;
}

export interface Project {
  id: number;
  name: string;
  description: string; // i18n key
  stack: string[];
  github: string;
  liveUrl?: string;
  stars?: number;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon: string; // react-icons component name
  category: 'backend' | 'frontend' | 'mobile' | 'cloud' | 'database' | 'integration' | 'architecture' | 'tools';
  gridSpan?: 'sm' | 'md' | 'lg';
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}
