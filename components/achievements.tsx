"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, GitMerge, Trophy, type LucideIcon } from "lucide-react";

import SectionHeading from "./section-heading";
import { achievementsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  trophy: Trophy,
  "git-merge": GitMerge,
};

export default function Achievements() {
  const { ref } = useSectionInView("Achievements", 0.4);

  return (
    <section
      ref={ref}
      id="achievements"
      className="mx-auto max-w-6xl scroll-mt-28 px-4 py-24"
    >
      <SectionHeading eyebrow="Highlights">Achievements</SectionHeading>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {achievementsData.map((item, i) => {
          const Icon = iconMap[item.icon] ?? Trophy;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Card className="h-full transition-colors hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-bold leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-6">
                    {item.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="font-heading text-2xl font-bold text-primary">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                      >
                        View <ExternalLink className="h-3.5 w-3.5" />
                      </a>
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
