"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll() {
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      autoRaf: true,
      anchors: true,
    });

    document.documentElement.classList.add("lenis");

    return () => {
      document.documentElement.classList.remove("lenis");
      lenis.destroy();
    };
  }, []);

  return null;
}
