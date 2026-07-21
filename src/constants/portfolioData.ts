export type SkillCategory = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  category: "fullstack" | "frontend" | "ai";
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
};

export const navLinks = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Get in Touch",
] as const;

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB", "JWT", "REST APIs"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Docker", "VS Code", "Postman"],
  },
];

export const projects: Project[] = [
  {
    title: "CI/CD Dashboard",
    category: "fullstack",
    description:
      "Pipeline visibility dashboard with deployment metrics and release insights.",
    tech: ["React", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    title: "Job Portal",
    category: "fullstack",
    description:
      "Modern hiring platform with role filters, recruiter panel, and JWT auth.",
    tech: ["React", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    title: "E-Commerce",
    category: "frontend",
    description:
      "Responsive commerce experience with product discovery and smooth checkout.",
    tech: ["React", "TypeScript", "REST API"],
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    title: "AI Chat App",
    category: "ai",
    description:
      "Context-aware chat UI with token streaming and conversation persistence.",
    tech: ["React", "Node.js", "OpenAI API"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/",
    demo: "https://example.com",
  },
];

export const blogPosts = [
  {
    title: "Scaling MERN APIs for Remote Teams",
    date: "2026-06-18",
    excerpt:
      "A practical guide to resilient Express services and distributed collaboration.",
    url: "#",
  },
  {
    title: "React Performance Patterns That Actually Matter",
    date: "2026-05-03",
    excerpt:
      "How to reduce renders and improve perceived speed in production apps.",
    url: "#",
  },
  {
    title: "From Feature Delivery to Product Thinking",
    date: "2026-02-11",
    excerpt:
      "How senior developers drive better outcomes beyond writing clean code.",
    url: "#",
  },
];

export const profile = {
  name: "ASRUMOCHAN PARIDA",
  role: "Full Stack Developer",
  subtitle:
    "Building scalable web applications with React, Node.js, Express, and MongoDB for global teams. I focus on clean architecture, performance, and user-first product delivery.",
  years: "4+",
  email: "asrumochan.parida@gmail.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  resume: "#",
  location: "Remote",
  githubUsername: "asrumochanparida",
};
