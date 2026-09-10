"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { personal, techStack } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Button } from "@/components/ui/button";

function useTypewriter(words: readonly string[], speed = 90, pause = 1600) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () =>
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1)
          ),
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const role = useTypewriter(personal.roles);

  return (
    <section
      ref={ref}
      id="home"
      className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl scroll-mt-28 flex-col justify-center px-4 pb-16 pt-36 sm:pt-40"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="relative">
              <Image
                src={personal.photo}
                alt="Aryan Patel"
                width={56}
                height={56}
                quality={95}
                priority
                className="h-14 w-14 rounded-full border-2 border-primary/60 object-cover"
              />
              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-background bg-emerald-500" />
            </div>
            <span className="font-mono text-sm text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Hi, I&apos;m <span className="text-gradient">Aryan Patel</span>
          </h1>

          <div className="mt-4 flex h-9 items-center font-mono text-xl text-muted-foreground sm:text-2xl">
            <span className="text-primary">&gt;</span>
            <span className="ml-2 text-foreground">{role}</span>
            <span className="ml-0.5 inline-block h-6 w-[2px] animate-blink bg-primary" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {personal.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {/* Row 1 — primary actions */}
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link
                  href="#contact"
                  onClick={() => {
                    setActiveSection("Contact");
                    setTimeOfLastClick(Date.now());
                  }}
                  className="group"
                >
                  Contact me
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline">
                <a href={personal.resumeUrl} download className="group">
                  Download CV
                  <Download className="transition-transform group-hover:translate-y-0.5" />
                </a>
              </Button>
            </div>

            {/* Row 2 — social links */}
            <div className="flex items-center gap-3">
              <Button asChild size="icon" variant="outline" className="h-12 w-12">
                <a href={personal.github} target="_blank" aria-label="GitHub">
                  <FaGithub />
                </a>
              </Button>
              <Button asChild size="icon" variant="outline" className="h-12 w-12">
                <a href={personal.linkedin} target="_blank" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              </Button>
              <Button asChild size="icon" variant="outline" className="h-12 w-12">
                <a href={`mailto:${personal.email}`} aria-label="Email">
                  <Mail />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Right — terminal card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-full bg-primary/20 blur-3xl" />

          {/* Floating tech icons */}
          <div className="absolute -top-6 right-2 z-10 flex max-w-[300px] flex-wrap justify-end gap-3 sm:-right-4">
            {techStack.map(({ name, Icon, color }, i) => (
              <div
                key={name}
                title={name}
                className="flex h-11 w-11 animate-float items-center justify-center rounded-xl border border-border/70 bg-card/90 shadow-md backdrop-blur"
                style={{ animationDelay: `${(i % 5) * 0.7}s` }}
              >
                <Icon
                  className="h-6 w-6"
                  style={color === "currentColor" ? undefined : { color }}
                />
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                engineer.ts
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed">
              <code>
                <span className="text-blue-500">const</span>{" "}
                <span className="text-emerald-500">engineer</span> = {"{"}
                {"\n"}  name: <span className="text-amber-500">
                  &quot;Aryan Patel&quot;
                </span>
                ,{"\n"}  role:{" "}
                <span className="text-amber-500">&quot;Full-Stack Engineer&quot;</span>,
                {"\n"}  stack: [
                <span className="text-amber-500">&quot;Next.js&quot;</span>,{" "}
                <span className="text-amber-500">&quot;Node.js&quot;</span>,{" "}
                <span className="text-amber-500">&quot;AI&quot;</span>],
                {"\n"}  focus:{" "}
                <span className="text-amber-500">
                  &quot;Scalable systems &amp; RAG/LLM&quot;
                </span>
                ,{"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
