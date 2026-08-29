"use client";

import { useEffect, useState } from "react";

/**
 * Returns 0..1 describing how far an element has travelled through the viewport.
 *
 * Reads are batched into a single rAF and listeners are passive, so scrolling
 * stays smooth. Returns 1 immediately when reduced motion is requested.
 */
export function useScrollProgress(node: HTMLElement | null) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      setProgress(1);
      return;
    }

    let frame = 0;

    const measure = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight;

      // Fill begins as the block enters the lower third and completes as it
      // clears the upper third — the line tracks reading position, not scroll.
      const start = viewport * 0.82;
      const end = viewport * 0.38;
      const span = rect.height + start - end;
      if (span <= 0) return;

      const next = (start - rect.top) / span;
      setProgress(Math.min(1, Math.max(0, next)));
    };

    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [node]);

  return progress;
}
