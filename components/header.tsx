"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { links } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useActiveSectionContext } from "@/context/active-section-context";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [open, setOpen] = useState(false);

  const handleNav = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[999]">
      <div className="mx-auto mt-3 flex h-14 max-w-5xl items-center justify-between gap-4 rounded-full border border-border/60 bg-background/80 px-4 shadow-lg shadow-black/5 backdrop-blur-md sm:mt-4 sm:px-6">
        <Link
          href="#home"
          onClick={() => handleNav("Home")}
          className="font-heading text-lg font-bold tracking-tight"
        >
          Aryan<span className="text-primary">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
            {links.map((link) => (
              <li key={link.hash} className="relative">
                <Link
                  href={link.hash}
                  onClick={() => handleNav(link.name)}
                  className={cn(
                    "relative z-10 block rounded-full px-3 py-2 transition-colors hover:text-foreground",
                    activeSection === link.name && "text-foreground"
                  )}
                >
                  {link.name}
                  {activeSection === link.name && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-0 -z-10 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-2xl border border-border/60 bg-background/95 p-2 shadow-lg backdrop-blur-lg md:hidden"
          >
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    href={link.hash}
                    onClick={() => handleNav(link.name)}
                    className={cn(
                      "block rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                      activeSection === link.name &&
                        "bg-accent text-accent-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
