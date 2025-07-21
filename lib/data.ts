import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaNodeJs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import callsconnectaiImg from "@/public/callsconnectai.svg";
import bandhucareImg from "@/public/bandhucare.svg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated B.Tech in Computer Science",
    location: "Charusat University, Gujarat",
    description:
      "Graduated with a CGPA of 8.99/10, specializing in full-stack development and cloud infrastructure.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 – 2025",
  },
  {
    title: "Full-Stack Developer Intern",
    location: "Covrize, Ahmedabad",
    description:
      "Worked on a full-stack web platform using Next.js, Node.js, and PostgreSQL. Set up CI/CD with Docker and GitHub Actions, reducing deployment cycles by 40%.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 – May 2025",
  },
  {
    title: "Software Engineer (Full Stack)",
    location: "IIIT Hyderabad – LTRC",
    description:
      "Leading development of BandhuCare, a multilingual post-medication support platform for patients, in collaboration with CMC Vellore. Tech stack: Next.js, Node.js, MongoDB, Redis.",
    icon: React.createElement(FaNodeJs),
    date: "May 2025 – Present",
  },
] as const;



export const projectsData = [
  {
    title: "CallsConnectAI – Smart India Hackathon Finalist",
    description:
      "AI-powered call center platform using STT and LLMs; selected among top 5 teams at SIH 2024.",
    tags: ["Next.js", "Node.js", "MongoDB","Livekit"],
    imageUrl: callsconnectaiImg,
  },
  {
    title: "BandhuCare – CMC Vellore Collaboration",
    description:
      "Multilingual post-medication support platform built with IIIT Hyderabad and CMC Vellore.",
    tags: ["Next.js", "Node.js", "MongoDB", "Kafka"],
    imageUrl: bandhucareImg,
  },
] as const;


export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Prisma",
  "Docker",
  "AWS",
  "Git",
  "GitHub Actions",
  "Tailwind CSS",
] as const;

