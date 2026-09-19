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
  AnimatedPinwheel,
  AnimatedRubberDucky,
  AnimatedPastelBubbles,
} from "@/components/ui/PediatricDecorations";
import { accents } from "@/lib/accents";
import { cx } from "@/lib/utils";

export function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-title"
      className="relative overflow-hidden bg-gradient-to-b from-[#CBE8F9] via-[#E1F2FC] to-[#CBE8F9] py-24 sm:py-28 lg:py-36 border-b border-sky-300"
    >
      {/* Soft pediatric atmospheric radial washes & live moving toys */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift-a absolute -left-[10%] top-[10%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,#38BDF8_0%,transparent_65%)] opacity-40" />
        <div className="animate-drift-b absolute -right-[10%] bottom-[5%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,#F472B6_0%,transparent_65%)] opacity-45" />

        {/* Live moving Hot Air Balloon floating on top right margin */}
        <div className="absolute top-10 right-[3%] opacity-95">
          <AnimatedHotAirBalloon className="h-14 w-12 sm:h-20 sm:w-16 lg:h-24 lg:w-20" />
        </div>

        {/* Live moving Toy Blocks on mid-left margin */}
        <div className="absolute top-[40%] left-[2%] opacity-90">
          <AnimatedToyBlocks className="h-11 w-11 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />
        </div>

        {/* Live moving Pinwheel spinning on top left */}
        <div className="hidden sm:block absolute top-14 left-[4%] opacity-90">
          <AnimatedPinwheel className="h-14 w-12 lg:h-16 lg:w-14" />
        </div>

        {/* Live moving Rubber Ducky bobbing at bottom right */}
        <div className="absolute bottom-12 right-[4%] opacity-90">
          <AnimatedRubberDucky className="h-12 w-14 sm:h-14 sm:w-16" />
        </div>

        {/* Floating Bubbles */}
        <div className="hidden md:block absolute bottom-16 left-[6%] opacity-80">
          <AnimatedPastelBubbles className="h-14 w-14" />
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

        <ul className="mx-auto mt-12 grid max-w-7xl gap-4 sm:grid-cols-3 sm:gap-4 lg:mt-16 lg:gap-6">
          {expertiseAreas.map((area, index) => {
            const accent = accents[area.accent];
            return (
              <Reveal
                key={area.slug}
                as="li"
                delay={(index % 3) * 80}
                distance={18}
                className="h-full"
              >
                <Link
                  id={`expertise-${area.slug}`}
                  href={`/expertise/${area.slug}`}
                  aria-label={`${area.title} — read more`}
                  className={cx(
                    "group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white border-2 border-sky-300 shadow-sm scroll-mt-28 sm:scroll-mt-36",
                    "transition-[transform,box-shadow,border-color] duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-lift hover:border-pink-400",
                    "target:ring-4 target:ring-sky-400 target:border-sky-500 target:shadow-lift",
                  )}
                >
                  {/* Hover ring in the card's own accent. */}
                  <span
                    aria-hidden="true"
                    className={cx(
                      "pointer-events-none absolute inset-0 z-10 rounded-2xl ring-1 ring-transparent transition-[box-shadow] duration-500 ease-premium",
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
                      sizes="(min-width: 1280px) 24rem, (min-width: 640px) 30vw, 95vw"
                      className="object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-[1.06]"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent"
                    />
                    <span
                      className={cx(
                        "absolute left-3 top-3 sm:left-3.5 sm:top-3.5 lg:left-4 lg:top-4 grid h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 place-items-center rounded-lg sm:rounded-xl shadow-soft backdrop-blur-sm",
                        "transition-transform duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:rotate-6",
                        accent.chip,
                      )}
                    >
                      <Icon name={area.icon} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </span>
                    <span className="absolute right-3 top-3 sm:right-3.5 sm:top-3.5 lg:right-4 lg:top-4 text-honey-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <TwinklingStar className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-3.5 sm:p-4 lg:p-5">
                    {/* Grows so the CTA stays on the card's baseline whatever
                        the description length. */}
                    <div className="flex-1">
                      <h3 className="font-display text-[0.98rem] sm:text-[1.05rem] lg:text-[1.125rem] font-bold leading-snug tracking-[-0.015em] text-ink">
                        {area.title}
                      </h3>
                      <p className="mt-2 text-[0.8rem] sm:text-[0.84rem] lg:text-[0.875rem] leading-[1.62] text-ink-muted">
                        {area.description}
                      </p>
                    </div>

                    <div className="mt-3.5 sm:mt-4 flex items-center justify-between gap-2 border-t border-line/60 pt-3 sm:pt-3.5">
                      <span className="inline-flex items-center gap-1.5 text-[0.8rem] sm:text-[0.84rem] lg:text-[0.875rem] font-semibold text-brand-700 transition-colors duration-300 ease-premium group-hover:text-brand-800">
                        Read More
                        <Icon
                          name="arrowRight"
                          className="h-3.5 w-3.5 transition-transform duration-500 ease-premium group-hover:translate-x-1"
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        className={cx(
                          "h-1 w-6 origin-right scale-x-75 rounded-full transition-all duration-500 ease-premium group-hover:w-10 group-hover:scale-x-100",
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
