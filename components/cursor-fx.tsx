"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorFX() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () =>
      setEnabled(finePointer.matches && !reducedMotion.matches);

    update();
    finePointer.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);
    return () => {
      finePointer.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const glow = glowRef.current;
    if (!glow) return;

    const pos = { x: -200, y: -200 };
    const glowPos = { x: -200, y: -200 };
    let visible = false;
    let raf = 0;

    const onMove = (event: PointerEvent) => {
      pos.x = event.clientX;
      pos.y = event.clientY;
      visible = true;
    };

    const onLeave = () => {
      visible = false;
    };

    const tick = () => {
      glowPos.x += (pos.x - glowPos.x) * 0.14;
      glowPos.y += (pos.y - glowPos.y) * 0.14;

      glow.style.transform = `translate3d(${glowPos.x}px, ${glowPos.y}px, 0) translate(-50%, -50%)`;
      glow.style.opacity = visible ? "1" : "0";

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[998] hidden md:block" aria-hidden>
      <div
        ref={glowRef}
        className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.22),transparent_64%)] opacity-0 will-change-transform"
      />
    </div>
  );
}
