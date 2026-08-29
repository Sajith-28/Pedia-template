"use client";

import { useId, useState } from "react";
import { Icon } from "./Icons";

/**
 * Reveals the remaining biography paragraphs.
 * Uses the grid 0fr -> 1fr technique so the panel tweens to its natural height.
 */
export function ExpandableText({ paragraphs }: { paragraphs: readonly string[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  if (paragraphs.length === 0) return null;

  return (
    <div className="mt-5">
      <div id={panelId} className="accordion-panel" data-open={open}>
        <div className="accordion-panel-inner">
          <div className="space-y-5 pb-5">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[1rem] leading-[1.78] text-ink-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group inline-flex items-center gap-2 py-1.5 text-[0.9375rem] font-medium text-brand-700 transition-colors duration-300 ease-premium hover:text-brand-900"
      >
        <span className="link-underline">{open ? "Read less" : "Read more"}</span>
        <Icon
          name="chevronDown"
          className={
            "h-4 w-4 transition-transform duration-500 ease-premium " +
            (open ? "rotate-180" : "rotate-0")
          }
        />
      </button>
    </div>
  );
}
