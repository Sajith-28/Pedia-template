"use client";

import { useEffect, useState } from "react";

/**
 * Splits a display value like "10,000+" or "MBBS · MD" into an animatable
 * number plus whatever wraps it. Values with no digits animate not at all.
 */
export function parseCountable(value: string) {
  const match = value.match(/^(\D*)([\d,]+)(.*)$/s);
  if (!match) return null;
  const [, prefix, digits, suffix] = match;
  const target = Number(digits.replace(/,/g, ""));
  if (!Number.isFinite(target)) return null;
  return { prefix, target, suffix, grouped: digits.includes(",") };
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Counts from zero to `target` once `active` turns true.
 * Returns the target immediately when reduced motion is requested.
 */
export function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      setValue(Math.round(easeOut(progress) * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return value;
}

/** True once the element has entered the viewport. Fires once. */
export function useInView(node: HTMLElement | null) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!node || inView) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    if (node.getBoundingClientRect().top < window.innerHeight) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting || e.boundingClientRect.top < 0)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [node, inView]);

  return inView;
}
