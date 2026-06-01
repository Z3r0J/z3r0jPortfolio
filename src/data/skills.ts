import { Skill } from '@/types';

export const skills: Skill[] = [
  // Backend - primary
  { name: 'C# / .NET', icon: 'SiDotnet', category: 'backend', gridSpan: 'lg' },
  { name: 'ASP.NET Core', icon: 'SiDotnet', category: 'backend', gridSpan: 'md' },
  { name: 'Node.js', icon: 'SiNodedotjs', category: 'backend', gridSpan: 'md' },
  { name: 'Express', icon: 'SiExpress', category: 'backend', gridSpan: 'sm' },

  // Frontend
  { name: 'React', icon: 'SiReact', category: 'frontend', gridSpan: 'lg' },
  { name: 'Next.js', icon: 'SiNextdotjs', category: 'frontend', gridSpan: 'md' },
  { name: 'Blazor', icon: 'SiBlazor', category: 'frontend', gridSpan: 'sm' },

  // Mobile
  { name: 'React Native', icon: 'SiReact', category: 'mobile', gridSpan: 'md' },
  { name: 'Expo', icon: 'SiExpo', category: 'mobile', gridSpan: 'sm' },
  { name: 'Flutter', icon: 'SiFlutter', category: 'mobile', gridSpan: 'sm' },

  // Cloud
  { name: 'Azure', icon: 'SiMicrosoftazure', category: 'cloud', gridSpan: 'md' },

  // Database
  { name: 'SQL Server', icon: 'SiMicrosoftsqlserver', category: 'database', gridSpan: 'md' },
  { name: 'MySQL', icon: 'SiMysql', category: 'database', gridSpan: 'sm' },

  // Integration
  { name: 'REST APIs', icon: 'TbApi', category: 'integration', gridSpan: 'sm' },
  { name: 'Microservices', icon: 'TbComponents', category: 'integration', gridSpan: 'sm' },

  // Architecture
  { name: 'Clean Architecture', icon: 'TbBuildingArch', category: 'architecture', gridSpan: 'md' },
  { name: 'DDD', icon: 'TbHexagons', category: 'architecture', gridSpan: 'sm' },
  { name: 'SOLID', icon: 'TbStack2', category: 'architecture', gridSpan: 'sm' },

  // Tools
  { name: 'Docker', icon: 'SiDocker', category: 'tools', gridSpan: 'sm' },
  { name: 'Git', icon: 'SiGit', category: 'tools', gridSpan: 'sm' },
  { name: 'Scrum', icon: 'SiJirasoftware', category: 'tools', gridSpan: 'sm' },

  // AI Tools
  { name: 'Claude', icon: 'TbBrandOpenai', category: 'tools', gridSpan: 'sm' },
  { name: 'ChatGPT (Codex)', icon: 'SiOpenai', category: 'tools', gridSpan: 'sm' },
  { name: 'GitHub Copilot', icon: 'SiGithubcopilot', category: 'tools', gridSpan: 'sm' },
];
