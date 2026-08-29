import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TwinklingStar } from "@/components/ui/PediatricDecorations";
import { accents } from "@/lib/accents";
import { cx } from "@/lib/utils";

export function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-title"
      className="relative overflow-hidden bg-canvas-soft py-24 sm:py-28 lg:py-36"
    >
      {/* Slow-drifting washes keep the section from reading as a flat slab. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-drift-a absolute -left-[12%] top-[8%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,var(--color-coral-100)_0%,transparent_65%)] opacity-45" />
        <div className="animate-drift-b absolute -right-[10%] bottom-[4%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,var(--color-brand-100)_0%,transparent_65%)] opacity-55" />
      </div>

      <Container className="relative">
        <div className="flex flex-col items-start">
          <SectionHeading
            eyebrow="Pediatric clinical expertise"
            title={
              <>
                Specialized care for growing
                <br className="hidden sm:block" /> minds &amp; bodies.
              </>
            }
            titleId="expertise-title"
            description="From the first tender weeks of newborn life through teenage years, every specialty is approached with patience, empathy, and evidence-based science."
            className="max-w-2xl"
          />
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-18 lg:grid-cols-4 lg:gap-5">
          {services.map((service, index) => {
            const accent = accents[service.accent];
            return (
              <Reveal
                key={service.title}
                as="li"
                delay={(index % 4) * 90}
                distance={18}
                className={cx(
                  "group relative flex flex-col justify-between overflow-hidden rounded-panel bg-surface p-6 ring-1 ring-line lg:p-7",
                  "transition-[transform,box-shadow] duration-500 ease-premium hover:-translate-y-2 hover:shadow-lift",
                )}
              >
                {/* Accent wash that blooms from the corner on hover. */}
                <span
                  aria-hidden="true"
                  className={cx(
                    "pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-700 ease-premium group-hover:opacity-75",
                    accent.wash,
                  )}
                />
                <span
                  aria-hidden="true"
                  className={cx(
                    "pointer-events-none absolute inset-0 rounded-panel ring-1 ring-transparent transition-[box-shadow] duration-500 ease-premium",
                    accent.ring,
                  )}
                />

                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={cx(
                        "relative grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-[background-color,transform] duration-500 ease-premium group-hover:-translate-y-1 group-hover:rotate-6",
                        accent.chip,
                      )}
                    >
                      <Icon name={service.icon} className="h-[1.4rem] w-[1.4rem]" />
                    </span>
                    <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-honey-500">
                      <TwinklingStar className="h-4 w-4" />
                    </span>
                  </div>

                  <h3 className="relative mt-6 font-display text-[1.125rem] font-bold leading-snug tracking-[-0.015em] text-ink">
                    {service.title}
                  </h3>
                  <p className="relative mt-2.5 text-[0.9125rem] leading-[1.7] text-ink-muted">
                    {service.description}
                  </p>
                </div>

                {/* Rule that draws in from the left on hover. */}
                <div className="relative mt-6 pt-4 border-t border-line/50 flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className={cx(
                      "h-1 w-8 origin-left scale-x-75 rounded-full transition-all duration-500 ease-premium group-hover:w-14 group-hover:scale-x-100",
                      accent.bar,
                    )}
                  />
                  <span className="text-[0.75rem] font-bold uppercase tracking-wider text-ink-soft opacity-70 group-hover:opacity-100">
                    Pediatric Care
                  </span>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
