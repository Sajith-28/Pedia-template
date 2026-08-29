import { clinic } from "@/data/clinic";
import { doctor } from "@/data/doctor";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroPortrait } from "./HeroPortrait";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <HeroBackdrop />

      <Container className="relative">
        <div className="flex flex-col gap-14 pb-20 pt-[104px] sm:pt-[112px] lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:pb-32 lg:pt-[148px]">
          {/* ---------- Copy ---------- */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 ring-1 ring-brand-200 shadow-soft">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-coral-100 text-coral-600">
                  <Icon name="spark" className="h-3 w-3 animate-pulse" />
                </span>
                <span className="text-[0.8125rem] font-semibold tracking-tight text-brand-900">
                  {doctor.eyebrow} &bull; Children First Always
                </span>
              </div>
            </Reveal>

            {/* Word-by-word entrance — the one place on the page that earns it. */}
            <h1 className="mt-6 font-display text-[2.25rem] font-bold leading-[1.06] tracking-[-0.035em] text-ink sm:text-[3rem] md:text-[3.5rem] lg:text-[clamp(2.6rem,calc(4.5vw_-_4px),3.9rem)]">
              <WordReveal text={doctor.headline.lineOne} delay={120} className="max-sm:inline" />
              <WordReveal text={doctor.headline.lineTwo} delay={300} className="max-sm:inline" />
            </h1>

            <Reveal delay={480}>
              <p className="mt-7 max-w-[46ch] text-[1.0625rem] leading-[1.72] text-ink-muted sm:text-[1.125rem]">
                {doctor.intro}
              </p>
            </Reveal>

            <Reveal delay={560}>
              <div className="mt-9 border-l-2 border-coral-200 pl-5">
                <p className="font-display text-[1.0625rem] font-bold tracking-[-0.015em] text-ink">
                  {doctor.name}
                </p>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-muted">
                  {doctor.shortTitle}
                  <span className="max-sm:block">
                    <span aria-hidden="true" className="mx-2 text-line-strong max-sm:hidden">
                      &middot;
                    </span>
                    {doctor.experienceLabel}
                  </span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={640}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <ButtonLink
                  href={clinic.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                >
                  <Icon name="whatsapp" className="h-5 w-5" />
                  Book via WhatsApp
                </ButtonLink>
                <ButtonLink href="#about" variant="secondary" size="lg">
                  View Doctor Profile
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={720}>
              <p className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem] text-ink-soft">
                <Icon name="clock" className="h-4 w-4 shrink-0 text-mint-500" />
                <span>{clinic.hours.days}</span>
                <span aria-hidden="true" className="text-line-strong max-sm:hidden">
                  &middot;
                </span>
                <span>
                  {clinic.hours.morning} &amp; {clinic.hours.evening}
                </span>
              </p>
            </Reveal>
          </div>

          {/* ---------- Portrait ---------- */}
          <div className="order-1 lg:order-2">
            <HeroPortrait />
          </div>
        </div>
      </Container>
    </section>
  );
}
