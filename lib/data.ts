import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiTailwindcss,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Achievements", hash: "#achievements" },
  { name: "Contact", hash: "#contact" },
] as const;

export const personal = {
  name: "Aryan Patel",
  firstName: "Aryan",
  roles: [
    "Full-Stack Engineer",
    "Backend Engineer",
    "AI / RAG Systems",
    "Scalable System Architecture",
  ],
  tagline:
    "Full-Stack Software Engineer with a strong backend focus — I build scalable, production-grade systems with Node.js, TypeScript, REST APIs, and modern databases, plus AI/RAG integrations.",
  summary:
    "Full-Stack Software Engineer with a strong backend focus, specializing in Node.js, TypeScript, REST APIs, databases, and scalable system architecture. Experienced in building production-grade web applications across React/Next.js frontends and Node.js backends, with hands-on experience in AI/RAG systems, Redis, PostgreSQL, MongoDB, AWS, and Docker.",
  email: "patelaryan0914@gmail.com",
  phone: "263.766.1828",
  phoneHref: "tel:+12637661828",
  location: "Montreal, Canada",
  github: "https://github.com/patelaryan0914",
  linkedin: "https://www.linkedin.com/in/aryan0914/",
  resumeUrl: "/AryanPatel-Resume.pdf",
  photo: "/aryan.jpg",
} as const;

// Floating tech logos for the hero card
export const techStack = [
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "currentColor" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Redis", Icon: SiRedis, color: "#FF4438" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#38BDF8" },
] as const;

export const aboutHighlights = [
  {
    icon: "server",
    title: "Backend",
    description:
      "Node.js, TypeScript, REST APIs, and scalable system architecture at the core.",
  },
  {
    icon: "layers",
    title: "Full-Stack",
    description:
      "Production web apps across React/Next.js frontends and Node.js backends.",
  },
  {
    icon: "brain",
    title: "AI / RAG",
    description:
      "RAG pipelines, LLM integration, vector search, and embeddings.",
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    description:
      "AWS, Docker, Redis, and CI/CD for reliable, low-latency delivery.",
  },
] as const;

export const skillsData = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C++", "Java"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "ShadCN UI"],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "REST APIs",
    ],
  },
  {
    category: "AI / ML",
    items: [
      "RAG",
      "LLM Integration",
      "Vector Search",
      "Embeddings",
      "Speech-to-Text",
    ],
  },
  { category: "Cloud", items: ["AWS (EC2, S3)", "Cloudflare"] },
  { category: "DevOps", items: ["Docker", "CI/CD", "Git", "GitHub"] },
] as const;

export const experiencesData = [
  {
    company: "Language Technologies Research Center, IIIT Hyderabad",
    role: "Software Engineer",
    location: "Hyderabad, India",
    date: "May 2025 – Aug 2026",
    tech: ["React", "Node.js", "MongoDB", "Redis", "REST APIs"],
    points: [
      "Led full-stack development of BandhuCare, building the admin panel frontend and backend services using React, Node.js, and MongoDB.",
      "Designed a multi-tenant architecture to isolate data across independent systems and support scalable application workflows.",
      "Built and optimized Node.js REST APIs, improving application performance by 40% through Redis caching.",
      "Integrated IIIT-based translation models to enable multilingual application workflows.",
      "Owned system design across frontend architecture, APIs, data modeling, and performance optimization.",
    ],
  },
  {
    company: "Covrize",
    role: "Full-Stack Developer Intern",
    location: "Ahmedabad, India",
    date: "May 2024 – May 2025",
    tech: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS"],
    points: [
      "Built full-stack web applications using Next.js, React, and Node.js, developing responsive interfaces and backend services.",
      "Developed reusable UI components and optimized frontend performance for responsive user experiences.",
      "Designed REST APIs and optimized PostgreSQL queries, improving application performance by 30%.",
      "Deployed applications on AWS EC2 and S3, reducing deployment time by 40%.",
    ],
  },
] as const;

export const experienceStats = [
  { value: "40%", label: "API Perf Boost" },
  { value: "30%", label: "Query Optimization" },
  { value: "40%", label: "Faster Deploys" },
  { value: "2+", label: "Years Building" },
] as const;

export const projectsData = [
  {
    title: "CallsConnectAI",
    subtitle: "AI-Powered Call Center",
    icon: "phone",
    highlight: "Smart India Hackathon 2024 Finalist",
    description:
      "Multilingual AI call center using Speech-to-Text and LLMs, cutting operational costs by 30%. Automated complaint handling and follow-ups improved efficiency by 40%, with LiveKit powering real-time concurrent voice calls.",
    tags: ["STT", "LLM", "LiveKit", "Node.js", "Next.js"],
    links: {
      demo: "https://youtu.be/IJPS3V9nYsQ?si=NqCNcnsn16FYWbhy",
      pitch: "https://youtu.be/s5PgWyDDenQ?si=I-AI7uotv92pXZk-",
      github: personal.github,
    },
  },
  {
    title: "DocAssist",
    subtitle: "Documentation Intelligence Platform (RAG)",
    icon: "bot",
    highlight: "Production",
    description:
      "Full-stack RAG platform that lets developers chat with documentation such as LiveKit and Stripe. Sitemap-based ingestion, chunking, and vector indexing power semantic search and context-aware answers.",
    tags: ["RAG", "Vector Search", "Embeddings", "Next.js", "Node.js"],
    links: { demo: "https://docassist.aryan-dev.in", github: personal.github },
  },
  {
    title: "BandhuCare",
    subtitle: "Multi-tenant Healthcare Platform",
    icon: "heart-pulse",
    highlight: "IIIT Hyderabad × CMC Vellore",
    description:
      "Post-medication support platform built at IIIT Hyderabad (LTRC) with a multi-tenant architecture, an admin panel, and IIIT translation models enabling multilingual patient workflows.",
    tags: ["React", "Node.js", "MongoDB", "Redis"],
    links: { github: personal.github },
  },
] as const;

export const achievementsData = [
  {
    icon: "trophy",
    title: "Smart India Hackathon 2024 — Finalist",
    description:
      "Ranked in the Top 5 out of 500+ teams for an AI-driven solution recognized by the Ministry of Education's Innovation Cell.",
    stats: [
      { value: "Top 5", label: "Final Rank" },
      { value: "500+", label: "Teams" },
    ],
    link: "",
  },
  {
    icon: "git-merge",
    title: "Open-Source Contributor — MedusaJS",
    description:
      "Merged PR #13521 into the MedusaJS open-source e-commerce platform, improving admin UI consistency.",
    stats: [
      { value: "#13521", label: "PR Merged" },
      { value: "OSS", label: "Contribution" },
    ],
    link: "https://github.com/medusajs/medusa/pull/13521",
  },
] as const;

export const educationData = [
  {
    school: "Concordia University",
    degree: "Master of Applied Computer Science",
    location: "Montreal, Canada",
    date: "Sep 2026 – Present",
    detail: "",
  },
  {
    school: "Charusat University",
    degree: "B.Tech in Computer Science & Engineering",
    location: "Changa, India",
    date: "Oct 2021 – Apr 2025",
    detail: "GPA: 8.99 / 10",
  },
] as const;

export const certificationsData = [
  {
    icon: "database",
    title: "MongoDB University",
    subtitle: "Node.js Learning Path",
  },
  {
    icon: "cloud",
    title: "AWS Educate",
    subtitle: "Getting Started with Compute",
  },
  {
    icon: "container",
    title: "Docker",
    subtitle: "Containerization for Modern Development",
  },
] as const;
