import { clinic } from "@/data/clinic";
import { doctor } from "@/data/doctor";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="bg-canvas pb-24 sm:pb-28 lg:pb-32">
      <Container>
        <Reveal distance={24}>
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(115deg,var(--color-brand-50),var(--color-teal-50),var(--color-coral-50),var(--color-honey-50),var(--color-brand-50))] px-6 py-16 text-center ring-1 ring-brand-100 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="animate-drift-a absolute -left-[8%] -top-[45%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,var(--color-brand-100)_0%,transparent_65%)]" />
              <div className="animate-drift-b absolute -bottom-[55%] -right-[6%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,var(--color-coral-100)_0%,transparent_65%)] opacity-70" />
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
              <h2
                id="cta-title"
                className="font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.4rem] lg:text-[2.85rem]"
              >
                Your child&rsquo;s health deserves thoughtful care.
              </h2>

              <p className="mt-5 text-[1.0625rem] leading-[1.72] text-ink-muted">
                Schedule a consultation with {doctor.name}.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <ButtonLink
                  href={clinic.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Icon name="whatsapp" className="h-5 w-5" />
                  Book via WhatsApp
                </ButtonLink>
                <ButtonLink
                  href={clinic.phone.href}
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
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
