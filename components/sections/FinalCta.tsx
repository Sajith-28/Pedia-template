import { clinic } from "@/data/clinic";
import { doctor } from "@/data/doctor";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import {
  TeddyBear,
  SmilingCloud,
  TwinklingStar,
} from "@/components/ui/PediatricDecorations";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="bg-canvas pb-24 sm:pb-28 lg:pb-32">
      <Container>
        <Reveal distance={24}>
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(115deg,var(--color-brand-50),var(--color-teal-50),var(--color-coral-50),var(--color-honey-50),var(--color-brand-50))] px-6 py-16 text-center ring-1 ring-brand-100 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="animate-drift-a absolute -left-[8%] -top-[45%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,var(--color-brand-100)_0%,transparent_65%)]" />
              <div className="animate-drift-b absolute -bottom-[55%] -right-[6%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,var(--color-coral-100)_0%,transparent_65%)] opacity-70" />

              {/* Cute floating doodles */}
              <div className="absolute top-6 left-8 animate-float-slow opacity-80 hidden sm:block">
                <SmilingCloud className="h-12 w-16" />
              </div>
              <div className="absolute bottom-8 right-8 animate-float-bob opacity-85 hidden sm:block">
                <TeddyBear className="h-12 w-12" />
              </div>
              <div className="absolute top-10 right-14 text-honey-500 animate-twinkle opacity-75">
                <TwinklingStar className="h-5 w-5" />
              </div>

              <svg
                className="absolute inset-0 h-full w-full text-brand-200"
                viewBox="0 0 1200 400"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
              >
                <g stroke="currentColor" strokeWidth="1" opacity="0.5">
                  <path d="M-60 330C180 280 330 180 430 40" />
                  <path d="M760 390C900 250 1030 170 1270 120" />
                </g>
              </svg>
            </div>

            <div className="relative mx-auto max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-1.5 ring-1 ring-brand-200 shadow-soft mb-6">
                <span className="h-2 w-2 rounded-full bg-[#25D366] animate-ping" />
                <span className="text-[0.8125rem] font-semibold text-brand-900">
                  Accepting New Pediatric Patients &bull; Same-Day Slots Available
                </span>
              </div>

              <h2
                id="cta-title"
                className="font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.4rem] lg:text-[2.85rem]"
              >
                Your child&rsquo;s health deserves thoughtful care.
              </h2>

              <p className="mt-5 text-[1.0625rem] leading-[1.72] text-ink-muted">
                Schedule a consultation with {doctor.name}. No complex forms &mdash; simply message us on WhatsApp.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <a
                  href={clinic.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex select-none items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-[1rem] font-bold text-white shadow-soft transition-all duration-300 ease-premium hover:bg-[#1DA851] hover:-translate-y-0.5 hover:shadow-lift w-full sm:w-auto"
                >
                  <Icon name="whatsapp" className="h-5 w-5" />
                  Book via WhatsApp
                </a>
                <ButtonLink
                  href={clinic.phone.href}
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto bg-white/90"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  Call {clinic.phone.display}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
