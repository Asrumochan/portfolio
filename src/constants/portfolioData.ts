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
    title: "Tic Tac Toe",
    category: "frontend",
    description:
      "Classic 3x3 strategy game with clean UI, turn tracking, and winner detection.",
    tech: ["JavaScript", "HTML", "CSS"],
    image:
      "https://images.unsplash.com/photo-1632501641765-e568d28b0015?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/Asrumochan/tictactoe",
    demo: "https://tictactoe-mu-ruddy.vercel.app/",
  },
  {
    title: "Rock Paper Scissors",
    category: "frontend",
    description:
      "Interactive hand game with instant results, score updates, and smooth gameplay.",
    tech: ["JavaScript", "HTML", "CSS"],
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/Asrumochan/rock_paper_scissors",
    demo: "https://rock-paper-scissors-olive-five.vercel.app/",
  },
  {
    title: "Game Hub",
    category: "frontend",
    description:
      "A centralized arcade-style hub that brings multiple mini-games into one React app.",
    tech: ["React", "Vite", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/Asrumochan/game-hub",
    demo: "https://asrumochan.github.io/game-hub/",
  },
  {
    title: "Mutant's Gym",
    category: "frontend",
    description:
      "Modern fitness website with responsive sections, smooth navigation, and clean branding.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/Asrumochan/BS_NAVBAR",
    demo: "https://bs-navbar.vercel.app/",
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
  email: "asrumochanparida99@gmail.com",
  linkedin: "https://www.linkedin.com/in/asrumochan-parida-9975361a5/",
  github: "https://github.com/Asrumochan",
  mobile: "6370622566",
  resume: "#",
  location: "Remote",
  githubUsername: "Asrumochan",
};
