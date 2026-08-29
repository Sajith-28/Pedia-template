import Image from "next/image";
import { doctor } from "@/data/doctor";
import { media } from "@/lib/media";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cx } from "@/lib/utils";

const { philosophy } = doctor;

const pillarAccent = ["bg-coral-500", "bg-honey-500", "bg-mint-500"];

export function Philosophy() {
  return (
    <section
      aria-labelledby="philosophy-title"
      className="relative overflow-hidden bg-brand-950 py-24 sm:py-28 lg:py-36"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[10%] top-[-20%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,var(--color-brand-800)_0%,transparent_65%)] opacity-70" />
        <div className="absolute -right-[12%] bottom-[-25%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,var(--color-teal-700)_0%,transparent_65%)] opacity-40" />
      </div>

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* ---------- Consultation image ---------- */}
          <Reveal distance={26}>
            <div className="relative">
              {/* Offset frame first in the DOM so it paints beneath the image
                  without a negative z-index (which would drop it behind the
                  section background entirely). */}
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 h-full w-full rounded-[1.75rem] border border-white/15 sm:-bottom-6 sm:-right-6"
              />
              <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-brand-900 shadow-panel ring-1 ring-white/10">
                <Image
                  src={media.philosophy.src}
                  alt={media.philosophy.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 46vw, 92vw"
                  placeholder="blur"
                  blurDataURL={media.philosophy.blurDataURL}
                  className="object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </Reveal>

          {/* ---------- Statement ---------- */}
          <div>
            <Reveal>
              <p className="text-eyebrow flex items-center gap-3 text-teal-300">
                <span aria-hidden="true" className="h-px w-7 bg-white/30" />
                Our philosophy
              </p>
            </Reveal>

            <Reveal delay={90}>
              <h2
                id="philosophy-title"
                className="mt-6 font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-[2.4rem] lg:text-[2.9rem]"
              >
                {philosophy.heading}
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 border-l-2 border-teal-400/60 pl-5 font-display text-[1.15rem] font-medium leading-[1.55] tracking-[-0.01em] text-white/90 sm:text-[1.3rem]">
                {philosophy.statement}
              </p>
            </Reveal>

            <div className="mt-7 space-y-5">
              {philosophy.body.map((paragraph, index) => (
                <Reveal key={paragraph} delay={230 + index * 70}>
                  <p className="text-[1rem] leading-[1.78] text-white/65">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- Pillars ---------- */}
        <ul className="mt-18 grid gap-10 sm:mt-20 lg:mt-24 lg:grid-cols-3 lg:gap-8">
          {/* One accent per pillar, matched to the light sections above. */}
          {philosophy.pillars.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              as="li"
              delay={index * 110}
              distance={18}
              className="group border-t border-white/12 pt-7 lg:px-8 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={cx(
                    "h-1.5 w-1.5 rounded-full transition-transform duration-500 ease-premium group-hover:scale-150",
                    pillarAccent[index],
                  )}
                />
                <span className="text-eyebrow text-white/55">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>
              <h3 className="mt-4 font-display text-[1.0625rem] font-bold tracking-[-0.015em] text-white">
                {pillar.title}
              </h3>
              <p className="mt-2.5 text-[0.9375rem] leading-[1.7] text-white/60">
                {pillar.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
