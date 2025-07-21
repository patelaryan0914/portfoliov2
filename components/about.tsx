"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className=" max-w-[45rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a Computer Science Engineering graduate from{" "}
        <span className="font-medium">Charusat University</span>, passionate about building scalable,
        real-world web applications. I currently work as a{" "}
        <span className="font-medium">Full Stack Software Engineer</span> at{" "}
        IIIT Hyderabad’s{" "}
        <span className="font-medium">Language Technologies Research Center</span>,
        where I’m leading the development of{" "}
        <span className="font-medium">BandhuCare</span> — a multilingual post-medication support platform
        for patients, developed in collaboration with{" "}
        <span className="font-medium">CMC Vellore</span>.
      </p>

      <p>
        I specialize in technologies like{" "}
        <span className="font-medium">Next.js, Node.js, and MongoDB</span>, and have hands-on experience
        with <span className="font-medium">Redis, PostgreSQL, Docker, AWS</span>, and{" "}
        <span className="font-medium">GitHub Actions</span>. Previously, I interned at{" "}
        <span className="font-medium">Covrize</span>, where I worked on full-stack features and helped
        improve cloud deployments by 40%.
      </p>

      <p>
        I was also a finalist at the{" "}
        <span className="font-medium">Smart India Hackathon 2024</span>, where my team ranked in the top 5
        nationally. Outside of work, I enjoy solving system design problems, learning cloud architecture,
        and contributing to healthcare tech solutions.
      </p>
    </motion.section>
  );
}
