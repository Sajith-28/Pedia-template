"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { cx } from "@/lib/utils";

/**
 * Reveals a line of text word by word.
 *
 * Each word is its own `[data-reveal]` target, so it inherits the same
 * transition, `.js` guard and reduced-motion handling as every other reveal.
 * Words are inline-block only while animating matters — wrapping still works
 * because each word carries its own trailing space.
 */
export function WordReveal({
  text,
  className,
  delay = 0,
  stagger = 55,
  distance = 26,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  distance?: number;
}) {
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!node || shown) return;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    if (node.getBoundingClientRect().top < window.innerHeight) {
      setShown(true);
      return;
    }

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
    return () => observer.disconnect();
  }, [node, shown]);

  const words = text.split(" ");

  return (
    <span ref={setNode} className={cx("block", className)}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          data-reveal={shown ? "shown" : "hidden"}
          style={
            {
              "--reveal-delay": `${delay + index * stagger}ms`,
              "--reveal-y": `${distance}px`,
            } as CSSProperties
          }
          className="inline-block whitespace-pre"
        >
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
