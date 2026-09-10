"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cloud, Container, Database, type LucideIcon } from "lucide-react";

import SectionHeading from "./section-heading";
import { certificationsData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  database: Database,
  cloud: Cloud,
  container: Container,
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-6xl scroll-mt-28 px-4 py-24"
    >
      <SectionHeading eyebrow="Continuous learning">
        Certifications
      </SectionHeading>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {certificationsData.map((cert, i) => {
          const Icon = iconMap[cert.icon] ?? Database;
          return (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full text-center transition-transform hover:-translate-y-1 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading text-lg font-bold">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cert.subtitle}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
