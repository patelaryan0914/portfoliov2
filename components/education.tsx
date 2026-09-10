"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

import SectionHeading from "./section-heading";
import { educationData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-24">
      <SectionHeading eyebrow="Academics">Education</SectionHeading>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {educationData.map((edu, i) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
          >
            <Card className="h-full transition-colors hover:border-primary/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-heading text-lg font-bold">
                        {edu.school}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {edu.degree}
                    </p>
                    <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {edu.location}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs text-muted-foreground">
                        {edu.date}
                      </span>
                      {edu.detail && (
                        <Badge variant="accent" className="font-normal">
                          {edu.detail}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
