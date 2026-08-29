"use client";

import { useState } from "react";
import { experience } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { cx } from "@/lib/utils";

/**
 * Timeline that reads horizontally on large screens and vertically below.
 *
 * A single <ol> serves both orientations — only the decorative axis is
 * duplicated, and both copies are hidden from assistive technology. The fill
 * is a scaleX/scaleY transform driven by scroll position, so nothing layout
 * related animates.
 */
export function ExperienceTimeline() {
  const [listNode, setListNode] = useState<HTMLElement | null>(null);
  const progress = useScrollProgress(listNode);

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="bg-canvas py-24 sm:py-28 lg:py-36"
    >
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Eighteen years, one specialty."
          titleId="experience-title"
          description="A career built entirely within child health — from postgraduate training and hospital practice to a dedicated pediatric clinic."
          className="max-w-2xl"
        />

        <div ref={setListNode} className="relative mt-16 lg:mt-24">
          {/* ---------- Axis: vertical (mobile + tablet) ---------- */}
          <div aria-hidden="true" className="lg:hidden">
            <span className="absolute bottom-2 left-[7px] top-[14px] w-px bg-gradient-to-b from-line-strong via-line-strong to-transparent" />
            <span
              className="absolute bottom-2 left-[7px] top-[14px] w-px origin-top bg-gradient-to-b from-brand-600 to-teal-400 transition-transform duration-150 ease-linear"
              style={{ transform: `scaleY(${progress})` }}
            />
          </div>

          {/* ---------- Axis: horizontal (desktop) ---------- */}
          <div aria-hidden="true" className="hidden lg:block">
            <span className="absolute inset-x-0 top-[52px] h-px -translate-y-1/2 bg-gradient-to-r from-line-strong via-line-strong to-transparent" />
            <span
              className="absolute inset-x-0 top-[52px] h-px origin-left -translate-y-1/2 bg-gradient-to-r from-brand-600 to-teal-400 transition-transform duration-150 ease-linear"
              style={{ transform: `translateY(-50%) scaleX(${progress})` }}
            />
          </div>

          <ol className="relative lg:grid lg:grid-cols-4 lg:gap-x-6 xl:gap-x-8">
            {experience.map((entry, index) => {
              const reached = progress > index / experience.length + 0.02;

              return (
                <Reveal
                  key={entry.organisation}
                  as="li"
                  delay={index * 110}
                  // Fade only: a vertical offset would drag the node off the axis
                  // while the entrance is still running.
                  distance={0}
                  className="relative flex flex-col pb-12 pl-11 last:pb-0 lg:pb-0 lg:pl-0"
                >
                  {/* Node */}
                  <span
                    aria-hidden="true"
                    className={cx(
                      "absolute left-0 top-[7px] h-3.5 w-3.5 rounded-full border-2",
                      "transition-[background-color,border-color,box-shadow,transform] duration-500 ease-premium",
                      "lg:top-[52px] lg:-translate-y-1/2",
                      // Exactly one background utility per state — never two.
                      reached
                        ? "scale-110 border-brand-600 bg-brand-600 shadow-[0_0_0_4px_var(--color-brand-100)]"
                        : "border-line-strong bg-canvas",
                    )}
                  />

                  <p
                    className={cx(
                      "text-eyebrow transition-colors duration-500 ease-premium lg:flex lg:h-9 lg:items-center",
                      reached ? "text-brand-700" : "text-ink-soft",
                    )}
                  >
                    {entry.period}
                  </p>

                  {/* Axis gutter — keeps every desktop column on the same baseline. */}
                  <span aria-hidden="true" className="hidden lg:block lg:h-8" />

                  <h3 className="mt-3 font-display text-[1.0625rem] font-bold leading-snug tracking-[-0.015em] text-ink lg:mt-0 lg:min-h-[2.95rem]">
                    {entry.organisation}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] font-medium leading-snug text-brand-700 lg:min-h-[2.6rem]">
                    {entry.role}
                  </p>
                  <p className="mt-1.5 text-[0.8125rem] text-ink-soft">{entry.location}</p>
                  <p className="mt-3.5 text-[0.9rem] leading-[1.7] text-ink-muted">
                    {entry.description}
                  </p>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
