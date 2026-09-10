"use client";

import React from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";
import { personal } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.35);

  return (
    <section
      ref={ref}
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-28 px-4 py-24"
    >
      <SectionHeading eyebrow="Let's talk">Get In Touch</SectionHeading>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full">
            <CardContent className="p-8">
              <h3 className="font-heading text-2xl font-bold">
                Contact Information
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Have a project in mind or just want to say hi? Reach out
                directly or use the form.
              </p>

              <div className="mt-8 space-y-5">
                <a
                  href={`mailto:${personal.email}`}
                  className="group flex items-center gap-4"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted-foreground">
                      Email
                    </span>
                    <span className="text-sm font-medium">{personal.email}</span>
                  </span>
                </a>

                <a
                  href={personal.phoneHref}
                  className="group flex items-center gap-4"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted-foreground">
                      Phone
                    </span>
                    <span className="text-sm font-medium">{personal.phone}</span>
                  </span>
                </a>
              </div>

              <div className="mt-8">
                <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
                  Connect with me
                </p>
                <div className="flex gap-3">
                  <Button asChild size="icon" variant="outline">
                    <a
                      href={personal.github}
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                  </Button>
                  <Button asChild size="icon" variant="outline">
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin />
                    </a>
                  </Button>
                  <Button asChild size="icon" variant="outline">
                    <a href={`mailto:${personal.email}`} aria-label="Email">
                      <Mail />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full">
            <CardContent className="p-8">
              <form
                className="flex flex-col gap-5"
                action={async (formData) => {
                  const { error } = await sendEmail(formData);
                  if (error) {
                    toast.error(error);
                    return;
                  }
                  toast.success("Message sent successfully!");
                }}
              >
                <div className="space-y-2">
                  <Label htmlFor="senderEmail">Your Email</Label>
                  <Input
                    id="senderEmail"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    maxLength={5000}
                    rows={7}
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <SubmitBtn />
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
