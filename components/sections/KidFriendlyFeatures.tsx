import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  TeddyBear,
  ToyBlocks,
  SmilingSun,
  StethoscopeHeart,
  BandageHeart,
  BabyRattle,
} from "@/components/ui/PediatricDecorations";
import { kidFriendlyFeatures } from "@/data/kidFeatures";
import { accents } from "@/lib/accents";
import { cx } from "@/lib/utils";

const iconMap = {
  sparkle: BandageHeart,
  blocks: ToyBlocks,
  "stethoscope-heart": StethoscopeHeart,
  sun: SmilingSun,
};

export function KidFriendlyFeatures() {
  return (
    <section
      id="child-friendly"
      aria-labelledby="kid-friendly-title"
      className="relative overflow-hidden bg-canvas py-24 sm:py-28 lg:py-36 border-t border-line"
    >
      {/* Ambient background glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-drift-a absolute -right-[10%] top-[10%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,var(--color-honey-100)_0%,transparent_65%)] opacity-40" />
        <div className="animate-drift-b absolute -left-[10%] bottom-[10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,var(--color-coral-100)_0%,transparent_65%)] opacity-35" />
      </div>

      <Container className="relative">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-coral-50 px-4 py-1.5 ring-1 ring-coral-200">
              <TeddyBear className="h-4 w-4 animate-wiggle" />
              <span className="text-eyebrow text-coral-600">
                Child-Friendly By Design
              </span>
            </div>
          </Reveal>

          <SectionHeading
            eyebrow=""
            title={
              <>
                A clinic experience where
                <br className="hidden sm:block" /> kids leave with a smile.
              </>
            }
            titleId="kid-friendly-title"
            description="We know a doctor visit can feel scary for a little one. Every detail of our clinic is thoughtfully crafted to turn nervousness into comfort and fun."
            className="mt-4 max-w-2xl text-center"
          />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-18 lg:grid-cols-4 lg:gap-6">
          {kidFriendlyFeatures.map((feat, index) => {
            const accent = accents[feat.accent];
            const IconComponent = iconMap[feat.icon as keyof typeof iconMap] || BabyRattle;

            return (
              <Reveal
                key={feat.id}
                delay={index * 110}
                distance={20}
                className="group relative flex flex-col justify-between overflow-hidden rounded-panel bg-surface p-7 ring-1 ring-line shadow-soft transition-[transform,box-shadow] duration-500 ease-premium hover:-translate-y-2 hover:shadow-lift"
              >
                {/* Top decorative glow */}
                <span
                  aria-hidden="true"
                  className={cx(
                    "pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-700 ease-premium group-hover:opacity-80",
                    accent.wash,
                  )}
                />

                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={cx(
                        "grid h-13 w-13 place-items-center rounded-2xl p-2 transition-transform duration-500 ease-premium group-hover:scale-110 group-hover:rotate-6",
                        accent.chip,
                      )}
                    >
                      <IconComponent className="h-9 w-9" />
                    </span>
                    <span
                      className={cx(
                        "rounded-full px-2.5 py-1 text-[0.6875rem] font-bold tracking-wide uppercase",
                        accent.chip,
                        accent.text,
                      )}
                    >
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-[1.125rem] font-bold leading-snug tracking-[-0.015em] text-ink">
                    {feat.title}
                  </h3>

                  <p className="mt-3 text-[0.9125rem] leading-[1.7] text-ink-muted">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-6 rounded-xl bg-canvas-soft p-3.5 ring-1 ring-line/70">
                  <p className="text-[0.8125rem] font-medium leading-relaxed text-ink-soft">
                    <span className="font-bold text-ink">✨ Little detail: </span>
                    {feat.funFact}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
