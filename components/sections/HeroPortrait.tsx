"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { doctor } from "@/data/doctor";
import { media } from "@/lib/media";
import { Icon, type IconName } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { accents, type AccentName } from "@/lib/accents";
import { cx } from "@/lib/utils";

type FloatingCard = {
  icon: IconName;
  accent: AccentName;
  value: string;
  label: string;
  position: string;
  float: string;
  delay: number;
};

const floatingCards: FloatingCard[] = [
  {
    icon: "award",
    accent: "brand",
    value: doctor.experienceYears,
    label: "Years of Experience",
    position: "bottom-4 left-3 sm:-left-6 sm:bottom-10 lg:-left-9",
    float: "animate-float-slow",
    delay: 620,
  },
  {
    icon: "cradle",
    accent: "coral",
    value: doctor.childrenConsulted,
    label: "Children cared for",
    position: "right-3 top-4 sm:-right-5 sm:top-12 lg:-right-8",
    float: "animate-float-slower",
    delay: 740,
  },
];

/**
 * Portrait with a gentle scroll parallax.
 *
 * The hero sits at the top of the document, so scroll position alone drives the
 * offset — no per-element measurement needed. Capped at 42px and skipped
 * entirely under reduced motion.
 */
function useHeroParallax(strength = 0.09, max = 42) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const measure = () => {
      frame = 0;
      setOffset(Math.min(max, window.scrollY * strength));
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
    };
  }, [strength, max]);

  return offset;
}

export function HeroPortrait() {
  const offset = useHeroParallax();

  return (
    <Reveal delay={120} distance={28}>
      <div className="relative mx-auto w-full max-w-[26rem] sm:max-w-[30rem] lg:max-w-none">
        <div
          aria-hidden="true"
          className="absolute -inset-x-5 -inset-y-6 rounded-[2.75rem] bg-gradient-to-br from-brand-50 via-teal-50 to-coral-50 sm:-inset-x-7 sm:-inset-y-8"
        />
        <div
          aria-hidden="true"
          className="animate-float-slower absolute -right-8 -top-10 h-36 w-36 rounded-full bg-teal-100/70 blur-3xl"
        />

        <div
          className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-brand-100 shadow-panel ring-1 ring-ink/5 will-change-transform"
          style={{ transform: `translate3d(0, ${-offset}px, 0)` }}
        >
          <Image
            src={media.doctorPortrait.src}
            alt={media.doctorPortrait.alt}
            fill
            priority
            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 30rem, 92vw"
            quality={68}
            placeholder="blur"
            blurDataURL={media.doctorPortrait.blurDataURL}
            className="object-cover object-top"
          />
        </div>

        {floatingCards.map((card) => {
          const accent = accents[card.accent];
          return (
            <Reveal
              key={card.label}
              delay={card.delay}
              distance={14}
              className={cx("absolute", card.position)}
            >
              <div className={cx("group", card.float)}>
                <div className="flex items-center gap-3 rounded-2xl bg-surface/95 px-3.5 py-3 shadow-float ring-1 ring-line backdrop-blur-sm transition-shadow duration-500 ease-premium hover:shadow-lift sm:px-4 sm:py-3.5">
                  <span
                    className={cx(
                      "hidden h-9 w-9 shrink-0 place-items-center rounded-xl transition-transform duration-500 ease-premium group-hover:rotate-6 sm:grid",
                      accent.chip,
                    )}
                  >
                    <Icon name={card.icon} className="h-[1.1rem] w-[1.1rem]" />
                  </span>
                  <span className="block">
                    <span
                      className={cx(
                        "block font-display text-[1rem] font-bold leading-none tracking-[-0.02em] sm:text-[1.15rem]",
                        accent.text,
                      )}
                    >
                      {card.value}
                    </span>
                    <span className="mt-1.5 block text-[0.625rem] font-medium uppercase tracking-[0.12em] text-ink-soft sm:text-[0.6875rem] sm:tracking-[0.13em]">
                      {card.label}
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Reveal>
  );
}
