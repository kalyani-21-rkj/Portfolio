export type ProjectCategory = 'All' | 'Full-Stack' | 'AI / ML' | 'Enterprise OS';

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'AI / ML' | 'Enterprise OS';
  description: string;
  problemSolved: string;
  keyContributions: string[];
  technologies: string[];
  architecture?: string[];
  liveUrl?: string;
  githubUrl?: string;
  deploymentPlatform?: string;
  featured: boolean;
  imagePath: string;
  metrics?: { label: string; value: string }[];
  modulesList?: string[];
  interactiveDemoType?: 'crm' | 'rbac' | 'llm' | 'audio';
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: string;
  period: string;
  status: 'Completed' | 'Current' | 'Selected';
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  score: string;
  year: string;
  coursework?: string[];
  notes?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description: string;
  skills: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  detail: string;
  verificationId?: string;
}
