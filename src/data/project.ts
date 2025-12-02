export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
  gradientClass: string;
}

export const projects: Project[] = [
  {
    title: 'Personal Portfolio Website',
    description: 'A responsive portfolio website to showcase my projects and skills, built with React.',
    tags: ['React', "CSS", 'TypeScript'],
    gradientClass: 'project-card-image-gradient-1',
    github: '#',
    demo: '#',
  },
  {
    title: 'Chess AI Engine',
    description: 'An AI-powered chess engine that uses machine learning to improve its gameplay over time.',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    gradientClass: 'project-card-image-gradient-2',
    github: '#',
    demo: '#',
  },
  {
    title: 'PacMan',
    description: 'Pacman recreated using Unity game engine with C# scripting language.',
    tags: ['C#', 'Unity'],
    gradientClass: 'project-card-image-gradient-3',
    github: '#',
    demo: '#',
  },
];