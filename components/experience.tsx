"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.15);

  return (
    <section
      ref={ref}
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-28 px-4 py-24"
    >
      <SectionHeading eyebrow="Where I've worked">
        Professional Experience
      </SectionHeading>

      <div className="relative mx-auto max-w-5xl">
        {/* Vertical line */}
        <div className="absolute left-4 top-2 h-full w-px bg-border sm:left-1/2 sm:-translate-x-1/2" />

        <div className="space-y-10">
          {experiencesData.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-12 sm:pl-0"
            >
              {/* Dot */}
              <span className="absolute left-4 top-4 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-background bg-primary sm:left-1/2" />

              <div
                className={
                  i % 2 === 0
                    ? "sm:pr-[calc(50%+1.5rem)]"
                    : "sm:pl-[calc(50%+1.5rem)]"
                }
              >
                <Card className="transition-colors hover:border-primary/50">
                  <CardContent className="p-6">
                    <span className="font-mono text-xs text-primary">
                      {job.date}
                    </span>
                    <h3 className="mt-2 flex items-center gap-2 font-heading text-lg font-bold">
                      <Briefcase className="h-4 w-4 text-primary" />
                      {job.role}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {job.company}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <Badge key={t} variant="accent" className="font-normal">
                          {t}
                        </Badge>
                      ))}
                    </div>

                    <ul className="mt-4 space-y-2">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
