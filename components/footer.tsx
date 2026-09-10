"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { links, personal } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link
              href="#home"
              className="font-heading text-xl font-bold tracking-tight"
            >
              Aryan<span className="text-primary">.</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Full-Stack Engineer building scalable systems and AI-powered
              applications.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Navigate</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {links.slice(1).map((link) => (
                <li key={link.hash}>
                  <Link
                    href={link.hash}
                    className="transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {personal.email}
                </a>
              </li>
              <li>
                <a
                  href={personal.phoneHref}
                  className="transition-colors hover:text-primary"
                >
                  {personal.phone}
                </a>
              </li>
              <li>{personal.location}</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Connect</h4>
            <div className="flex gap-3">
              <a
                href={personal.github}
                target="_blank"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {personal.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
