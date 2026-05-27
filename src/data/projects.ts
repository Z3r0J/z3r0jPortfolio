import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    name: 'Clean Architecture',
    description: 'proj1Desc',
    stack: ['C#', '.NET', 'Clean Architecture', 'SOLID'],
    github: 'https://github.com/Z3r0J/CleanArchitecture',
    stars: 5,
    featured: true,
  },
  {
    id: 2,
    name: 'Togetherly',
    description: 'proj2Desc',
    stack: ['Flutter', 'Node.js', 'TypeScript', 'Express', 'TypeORM'],
    github: 'https://github.com/Z3r0J/togetherly_backend',
    featured: true,
  },
  {
    id: 3,
    name: 'DR Real Estate',
    description: 'proj3Desc',
    stack: ['.NET 6', 'C#', 'Onion Architecture', 'Identity', 'SQL Server'],
    github: 'https://github.com/Z3r0J/DRRealState',
    liveUrl: 'https://drrealestate.somee.com',
    stars: 1,
    featured: true,
  },
  {
    id: 4,
    name: 'Node.js Clean Architecture',
    description: 'proj4Desc',
    stack: ['Node.js', 'Express', 'TypeScript', 'TypeORM', 'MySQL'],
    github: 'https://github.com/Z3r0J/Nodejs-clean-architecture',
    featured: true,
  },
  {
    id: 5,
    name: 'Fusion Core Apps',
    description: 'proj5Desc',
    stack: ['Astro', 'TypeScript'],
    github: 'https://github.com/Z3r0J/fusion-core-apps-website',
    liveUrl: 'https://fusion-core-apps.vercel.app',
  },
  {
    id: 6,
    name: 'Blazor Turnstile Captcha',
    description: 'proj6Desc',
    stack: ['C#', 'Blazor', 'Cloudflare Turnstile'],
    github: 'https://github.com/Z3r0J/Blazor.TurnstileCaptcha',
  },
];
