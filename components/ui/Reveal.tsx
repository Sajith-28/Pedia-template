"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger offset in milliseconds. */
  delay?: number;
  /** Travel distance in pixels. Kept small — this is a settle, not a slide. */
  distance?: number;
  as?: "div" | "li";
};

/*
 * Shared scroll fallback.
 *
 * IntersectionObserver only reports threshold crossings, so an element that
 * jumps from below the fold to above it in a single frame — an anchor jump, an
 * End keypress, a fling scroll — can never be reported and would stay at zero
 * opacity forever. One rAF-throttled listener re-checks everything still
 * waiting, which costs a single pass over a shrinking set instead of a
 * listener per component.
 */
const waiting = new Set<() => void>();
let timer = 0;
let listening = false;

// Throttled to 5x/second rather than per frame: the observer handles the
// normal path, so this only needs to catch the occasional skipped element and
// must not read layout on every scroll frame.
let dirty = false;

function run() {
  timer = 0;
  const scrolledSinceLastRun = dirty;
  dirty = false;

  for (const check of [...waiting]) check();

  if (waiting.size === 0) {
    stopListening();
    return;
  }
  // One trailing pass after scrolling stops, then idle until the next scroll.
  if (scrolledSinceLastRun) timer = window.setTimeout(run, 200);
}

function schedule() {
  dirty = true;
  if (timer || waiting.size === 0) return;
  timer = window.setTimeout(run, 200);
}

function stopListening() {
  if (!listening) return;
  listening = false;
  window.removeEventListener("scroll", schedule);
  window.removeEventListener("resize", schedule);
}

function listen() {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
}

/**
 * Fade-up reveal driven by IntersectionObserver.
 *
 * The hidden state lives in CSS under a `.js` scope, so if scripting never runs
 * the content is simply visible. Only opacity and transform are animated.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 22,
  as = "div",
}: RevealProps) {
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!node || shown) return;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    // Already level with or above the fold — show it without waiting.
    const check = () => {
      if (node.getBoundingClientRect().top < window.innerHeight) setShown(true);
    };

    check();

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting || e.boundingClientRect.top < 0)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    waiting.add(check);
    listen();

    return () => {
      observer.disconnect();
      waiting.delete(check);
    };
  }, [node, shown]);

  const style = {
    "--reveal-delay": `${delay}ms`,
    "--reveal-y": `${distance}px`,
  } as CSSProperties;

  const state = shown ? "shown" : "hidden";

  if (as === "li") {
    return (
      <li ref={setNode} data-reveal={state} className={className} style={style}>
        {children}
      </li>
    );
  }

  return (
    <div ref={setNode} data-reveal={state} className={className} style={style}>
      {children}
    </div>
  );
}
