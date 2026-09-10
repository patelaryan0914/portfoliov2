"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  ExternalLink,
  HeartPulse,
  Phone,
  PlayCircle,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, LucideIcon> = {
  phone: Phone,
  bot: Bot,
  "heart-pulse": HeartPulse,
};

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);

  return (
    <section
      ref={ref}
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-28 px-4 py-24"
    >
      <SectionHeading eyebrow="Things I've built">
        Featured Projects
      </SectionHeading>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, i) => {
          const Icon = iconMap[project.icon] ?? Sparkles;
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Card className="group flex h-full flex-col overflow-hidden transition-colors hover:border-primary/60">
                <div className="relative flex h-32 items-center justify-center overflow-hidden bg-linear-to-br from-primary/20 via-primary/5 to-transparent">
                  <Icon className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />
                  {project.highlight && (
                    <Badge className="absolute right-3 top-3 gap-1">
                      <Sparkles className="h-3 w-3" />
                      {project.highlight}
                    </Badge>
                  )}
                </div>

                <CardContent className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-bold">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {project.subtitle}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-2">
                    {"demo" in project.links && project.links.demo && (
                      <Button asChild size="sm" variant="secondary">
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live
                        </a>
                      </Button>
                    )}
                    {"pitch" in project.links && project.links.pitch && (
                      <Button asChild size="sm" variant="secondary">
                        <a
                          href={project.links.pitch}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <PlayCircle className="h-4 w-4" />
                          Pitch
                        </a>
                      </Button>
                    )}
                    {project.links.github && (
                      <Button asChild size="sm" variant="outline">
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} on GitHub`}
                        >
                          <FaGithub className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
