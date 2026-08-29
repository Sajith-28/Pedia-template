"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { accents } from "@/lib/accents";
import { cx } from "@/lib/utils";

const AUTOPLAY_MS = 6000;

/** Cards visible at once, matched to the Tailwind breakpoints below. */
function usePerView() {
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const lg = window.matchMedia("(min-width: 1024px)");
    const sm = window.matchMedia("(min-width: 640px)");
    const sync = () => setPerView(lg.matches ? 3 : sm.matches ? 2 : 1);

    sync();
    lg.addEventListener("change", sync);
    sm.addEventListener("change", sync);
    return () => {
      lg.removeEventListener("change", sync);
      sm.removeEventListener("change", sync);
    };
  }, []);

  return perView;
}

export function Testimonials() {
  const perView = usePerView();
  const maxIndex = Math.max(0, testimonials.length - perView);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLUListElement>(null);

  // Keep the index valid when the breakpoint changes.
  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const go = useCallback(
    (next: number) => setIndex(Math.min(maxIndex, Math.max(0, next))),
    [maxIndex],
  );

  // Autoplay, paused on hover, focus, or when the tab is hidden.
  useEffect(() => {
    if (paused || maxIndex === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [paused, maxIndex]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(index - 1);
    }
  };

  return (
    <section
      aria-labelledby="testimonials-title"
      className="relative overflow-hidden bg-canvas-soft py-24 sm:py-28 lg:py-36"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-drift-b absolute -left-[8%] top-[10%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,var(--color-lilac-100)_0%,transparent_65%)] opacity-45" />
        <div className="animate-drift-a absolute -right-[8%] bottom-[6%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,var(--color-mint-100)_0%,transparent_65%)] opacity-45" />
      </div>

      <Container className="relative">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Parent experiences"
            title="In the words of families."
            titleId="testimonials-title"
            description="A few notes shared by parents after their consultations at the clinic."
            className="max-w-2xl"
          />

          {/* Controls sit with the heading so the track stays uncluttered. */}
          <div className="flex shrink-0 items-center gap-2.5">
            <button
              type="button"
              onClick={() => go(index - 1)}
              disabled={index === 0}
              aria-label="Previous testimonials"
              className="grid h-11 w-11 place-items-center rounded-full bg-surface text-ink-muted ring-1 ring-line transition-[color,box-shadow,transform] duration-300 ease-premium hover:-translate-y-0.5 hover:text-brand-700 hover:ring-brand-200 disabled:pointer-events-none disabled:opacity-40"
            >
              <Icon name="arrowRight" className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              disabled={index >= maxIndex}
              aria-label="Next testimonials"
              className="grid h-11 w-11 place-items-center rounded-full bg-surface text-ink-muted ring-1 ring-line transition-[color,box-shadow,transform] duration-300 ease-premium hover:-translate-y-0.5 hover:text-brand-700 hover:ring-brand-200 disabled:pointer-events-none disabled:opacity-40"
            >
              <Icon name="arrowRight" className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          className="mt-12 lg:mt-16"
          role="group"
          aria-roledescription="carousel"
          aria-label="Parent testimonials"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <ul
              ref={trackRef}
              className="-mx-2.5 flex transition-transform duration-[700ms] ease-premium lg:-mx-3"
              style={{ transform: `translate3d(-${index * (100 / perView)}%, 0, 0)` }}
            >
              {testimonials.map((testimonial, i) => {
                const accent = accents[testimonial.accent];
                const visible = i >= index && i < index + perView;
                return (
                  <li
                    key={testimonial.name}
                    aria-hidden={!visible}
                    className="w-full shrink-0 px-2.5 sm:w-1/2 lg:w-1/3 lg:px-3"
                  >
                    <figure className="group flex h-full flex-col rounded-panel bg-surface p-7 ring-1 ring-line transition-[transform,box-shadow] duration-500 ease-premium hover:-translate-y-1 hover:shadow-lift sm:p-8">
                      <span
                        aria-hidden="true"
                        className={cx(
                          "font-display text-[3rem] font-bold leading-[0.6] transition-transform duration-500 ease-premium group-hover:scale-110",
                          accent.text,
                        )}
                      >
                        &ldquo;
                      </span>

                      <blockquote className="mt-5 flex-1">
                        <p className="text-[1rem] leading-[1.78] text-ink-muted">
                          {testimonial.quote}
                        </p>
                      </blockquote>

                      <figcaption className="mt-7 flex items-center gap-3.5 border-t border-line pt-5">
                        <span
                          className={cx(
                            "grid h-10 w-10 shrink-0 place-items-center rounded-full font-display text-[0.875rem] font-bold",
                            accent.chip,
                          )}
                          aria-hidden="true"
                        >
                          {testimonial.name.charAt(0)}
                        </span>
                        <span className="min-w-0">
                          <span className="block font-display text-[0.9375rem] font-bold tracking-[-0.01em] text-ink">
                            {testimonial.name}
                          </span>
                          <span className="mt-0.5 block text-[0.8125rem] text-ink-soft">
                            {testimonial.role}
                          </span>
                        </span>
                      </figcaption>
                    </figure>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Position indicator */}
          <div className="mt-9 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, dot) => (
              <button
                key={dot}
                type="button"
                onClick={() => go(dot)}
                aria-label={`Go to slide ${dot + 1} of ${maxIndex + 1}`}
                aria-current={dot === index}
                className="group grid h-6 w-6 place-items-center"
              >
                <span
                  className={cx(
                    "block h-1.5 rounded-full transition-[width,background-color] duration-500 ease-premium",
                    dot === index
                      ? "w-7 bg-brand-600"
                      : "w-1.5 bg-line-strong group-hover:bg-brand-300",
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
