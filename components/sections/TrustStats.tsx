"use client";

import { useState } from "react";
import { stats, type Stat } from "@/data/stats";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { parseCountable, useCountUp, useInView } from "@/hooks/useCountUp";
import { accents } from "@/lib/accents";
import { cx } from "@/lib/utils";

export function TrustStats() {
  const [node, setNode] = useState<HTMLElement | null>(null);
  const inView = useInView(node);

  return (
    <section
      aria-label="Practice credentials"
      className="relative border-y border-line bg-canvas"
    >
      <Container>
        <dl ref={setNode} className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 90}
              distance={16}
              className={cx(
                // Flex lives here so <dt>/<dd> stay direct children of the
                // wrapper <div> — a <dl> allows no deeper nesting.
                "group relative flex flex-col-reverse gap-3 border-line px-1 py-9 sm:px-4 sm:py-11 lg:px-8 lg:py-14",
                index % 2 === 1 && "border-l pl-5 sm:pl-8",
                index % 2 === 0 && "lg:border-l",
                index === 0 && "lg:border-l-0 lg:pl-0",
                index < 2 && "border-b lg:border-b-0",
              )}
            >
              <StatFigure stat={stat} active={inView} />
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function StatFigure({ stat, active }: { stat: Stat; active: boolean }) {
  const accent = accents[stat.accent];
  const countable = parseCountable(stat.value);
  const count = useCountUp(countable?.target ?? 0, active && countable !== null);

  const display = countable
    ? `${countable.prefix}${countable.grouped ? count.toLocaleString("en-US") : count}${countable.suffix}`
    : stat.value;

  return (
    <>
      <dt className="text-[0.8125rem] leading-snug text-ink-muted sm:text-sm">{stat.label}</dt>
      <dd>
        <span
          className={cx(
            "mb-4 grid h-10 w-10 place-items-center rounded-xl transition-transform duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:rotate-3",
            accent.chip,
          )}
        >
          <Icon name={stat.icon} className="h-[1.15rem] w-[1.15rem]" />
        </span>
        <span
          className={cx(
            "block font-display text-[1.75rem] font-bold leading-none tracking-[-0.03em] tabular-nums sm:text-[2rem] lg:text-[2.25rem]",
            accent.text,
          )}
        >
          {display}
        </span>
      </dd>
    </>
  );
}
