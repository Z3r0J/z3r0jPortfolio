export interface SocialNetworkLink {
  id: number;
  name: string;
  url: string;
  icon: string;
  class: string;
}

export interface EducationEntry {
  id: number;
  school: string;
  degree: string;
  description: string;
  startYear: number;
  endYear: number | string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  stack: string[];
  collaborator: string[];
  image: string;
  github: string;
  projectUrl: string;
  category: string;
}

export interface ProgrammingLanguage {
  name: string;
  experience: number;
  color: string;
  type: string;
}
