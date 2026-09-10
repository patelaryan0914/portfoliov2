"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Cloud, Layers, Server, type LucideIcon } from "lucide-react";

import SectionHeading from "./section-heading";
import { aboutHighlights, personal } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  server: Server,
  layers: Layers,
  brain: Brain,
  cloud: Cloud,
};

export default function About() {
  const { ref } = useSectionInView("About", 0.4);

  return (
    <section
      ref={ref}
      id="about"
      className="mx-auto max-w-6xl scroll-mt-28 px-4 py-24"
    >
      <SectionHeading eyebrow="Who I am">About Me</SectionHeading>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Terminal-style bio */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <p className="font-mono text-sm">
                <span className="text-emerald-500">aryan@dev</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-primary">~$</span>{" "}
                <span className="text-muted-foreground">cat about.md</span>
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {personal.summary}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                I&apos;m currently pursuing a Master of Applied Computer Science
                at Concordia University in Montreal, after leading full-stack
                development at IIIT Hyderabad&apos;s Language Technologies
                Research Center. I enjoy turning complex problems into clean,
                scalable systems — from multi-tenant backends and low-latency
                APIs to RAG platforms.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {aboutHighlights.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="group h-full transition-colors hover:border-primary/60">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      {Icon && <Icon className="h-5 w-5" />}
                    </div>
                    <h3 className="font-heading text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
