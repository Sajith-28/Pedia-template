import Image from "next/image";
import Link from "next/link";
import { expertiseAreas, expertiseIntro, expertiseTagline } from "@/data/expertise";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  TwinklingStar,
  AnimatedHotAirBalloon,
  AnimatedToyBlocks,
} from "@/components/ui/PediatricDecorations";
import { accents } from "@/lib/accents";
import { cx } from "@/lib/utils";

export function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-title"
      className="relative overflow-hidden bg-gradient-to-b from-[#EBF6FB] via-[#F2F9FD] to-[#EAF5FB] py-24 sm:py-28 lg:py-36 border-b border-sky-100"
    >
      {/* Soft pediatric atmospheric radial washes & live moving toys */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift-a absolute -left-[10%] top-[10%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,var(--color-pedia-blue-soft,#BFE4F1)_0%,transparent_65%)] opacity-60" />
        <div className="animate-drift-b absolute -right-[10%] bottom-[5%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,var(--color-pedia-pink-light,#FCECF3)_0%,transparent_65%)] opacity-65" />

        {/* Live moving Hot Air Balloon floating on top right margin */}
        <div className="hidden lg:block absolute top-14 right-[3%] opacity-90">
          <AnimatedHotAirBalloon className="h-20 w-16 lg:h-24 lg:w-20" />
        </div>

        {/* Live moving Toy Blocks on mid-left margin */}
        <div className="hidden lg:block absolute top-[44%] left-[2.5%] opacity-85">
          <AnimatedToyBlocks className="h-16 w-16" />
        </div>
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="Paediatric clinical expertise"
          title={<span className="uppercase tracking-[0.005em]">Areas of Expertise</span>}
          titleId="expertise-title"
          description={expertiseIntro}
          align="center"
          className="mx-auto max-w-3xl"
        />

        <ul className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:mt-18 lg:gap-7">
          {expertiseAreas.map((area, index) => {
            const accent = accents[area.accent];
            return (
              <Reveal
                key={area.slug}
                as="li"
                delay={(index % 2) * 90}
                distance={18}
                className="h-full"
              >
                <Link
                  href={`/expertise/${area.slug}`}
                  aria-label={`${area.title} — read more`}
                  className={cx(
                    "group relative flex h-full flex-col overflow-hidden rounded-panel bg-surface border border-[var(--color-pedia-blue-soft,#BFE4F1)] shadow-sm",
                    "transition-[transform,box-shadow,border-color] duration-500 ease-premium hover:-translate-y-2 hover:shadow-lift hover:border-[var(--color-pedia-pink-soft,#F3C8D9)]",
                  )}
                >
                  {/* Hover ring in the card's own accent. */}
                  <span
                    aria-hidden="true"
                    className={cx(
                      "pointer-events-none absolute inset-0 z-10 rounded-panel ring-1 ring-transparent transition-[box-shadow] duration-500 ease-premium",
                      accent.ring,
                    )}
                  />

                  <div className="relative aspect-[16/10] overflow-hidden bg-canvas-soft">
                    <Image
                      src={area.image.src}
                      alt={area.image.alt}
                      fill
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={area.image.blurDataURL}
                      sizes="(min-width: 1024px) 34rem, (min-width: 640px) 45vw, 92vw"
                      className="object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-[1.06]"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent"
                    />
                    <span
                      className={cx(
                        "absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-xl shadow-soft backdrop-blur-sm",
                        "transition-transform duration-500 ease-premium group-hover:-translate-y-1 group-hover:rotate-6",
                        accent.chip,
                      )}
                    >
                      <Icon name={area.icon} className="h-[1.3rem] w-[1.3rem]" />
                    </span>
                    <span className="absolute right-5 top-5 text-honey-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <TwinklingStar className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
                    {/* Grows so the CTA stays on the card's baseline whatever
                        the description length. */}
                    <div className="flex-1">
                      <h3 className="font-display text-[1.25rem] font-bold leading-snug tracking-[-0.015em] text-ink sm:text-[1.375rem]">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[0.9375rem] leading-[1.72] text-ink-muted">
                        {area.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-line/60 pt-5">
                      <span className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brand-700 transition-colors duration-300 ease-premium group-hover:text-brand-800">
                        Read More
                        <Icon
                          name="arrowRight"
                          className="h-4 w-4 transition-transform duration-500 ease-premium group-hover:translate-x-1.5"
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        className={cx(
                          "h-1 w-8 origin-right scale-x-75 rounded-full transition-all duration-500 ease-premium group-hover:w-14 group-hover:scale-x-100",
                          accent.bar,
                        )}
                      />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-16 text-center lg:mt-20" distance={16}>
          <p className="font-display text-[1.5rem] font-bold leading-[1.25] tracking-[-0.02em] text-brand-800 sm:text-[1.9rem]">
            {expertiseTagline}
          </p>
          <span
            aria-hidden="true"
            className="mx-auto mt-5 block h-1 w-20 rounded-full bg-gradient-to-r from-coral-500 via-honey-500 to-brand-400"
          />
        </Reveal>
      </Container>
    </section>
  );
}
