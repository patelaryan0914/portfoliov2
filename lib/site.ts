// Central, dependency-free site config used by metadata, sitemap, robots
// and JSON-LD. Keep this file free of client-only imports (e.g. react-icons)
// so it is safe to import from server metadata routes.

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://aryan-dev.in"
).replace(/\/$/, "");

export const siteConfig = {
  name: "Aryan Patel",
  title: "Aryan Patel — Full-Stack Software Engineer (Backend Focused)",
  description:
    "Aryan Patel is a Full-Stack Software Engineer with a strong backend focus — building scalable, production-grade systems and AI/RAG applications with Node.js, TypeScript, React, and Next.js.",
  shortDescription:
    "Full-Stack Software Engineer with a backend focus — Node.js, TypeScript, React/Next.js, and AI/RAG systems.",
  jobTitle: "Full-Stack Software Engineer",
  email: "patelaryan0914@gmail.com",
  github: "https://github.com/patelaryan0914",
  linkedin: "https://www.linkedin.com/in/aryan0914/",
  location: "Montreal, Canada",
  image: "/aryan.jpg",
  ogImage: "/opengraph-image.jpg",
  keywords: [
    "Aryan Patel",
    "Full-Stack Software Engineer",
    "Backend Engineer",
    "Node.js Developer",
    "TypeScript Developer",
    "React Developer",
    "Next.js Developer",
    "RAG",
    "LLM",
    "AI Engineer",
    "REST APIs",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS",
    "Docker",
    "Software Engineer Montreal",
    "Concordia University",
    "Portfolio",
  ],
  knowsAbout: [
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Python",
    "React",
    "Next.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "REST APIs",
    "System Architecture",
    "RAG",
    "LLM Integration",
    "Vector Search",
    "AWS",
    "Docker",
    "CI/CD",
  ],
} as const;
