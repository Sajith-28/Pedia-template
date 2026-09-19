import { contact, quickEnquiryMessage, whatsappUrl } from "@/data/contact";
import { doctor } from "@/data/doctor";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { TwinklingStar } from "@/components/ui/PediatricDecorations";

export function FinalCta() {
  const quickUrl = whatsappUrl(quickEnquiryMessage);

  return (
    <section aria-labelledby="cta-title" className="bg-canvas pb-24 sm:pb-28 lg:pb-32">
      <Container>
        <Reveal distance={24}>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[var(--color-pedia-blue-light,#EAF6FB)] via-white to-[var(--color-pedia-pink-light,#FCECF3)] px-6 py-16 text-center border border-sky-200 shadow-soft sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="animate-drift-a absolute -left-[8%] -top-[45%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,var(--color-pedia-blue-soft,#BFE4F1)_0%,transparent_65%)] opacity-60" />
              <div className="animate-drift-b absolute -bottom-[55%] -right-[6%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,var(--color-pedia-pink-soft,#F3C8D9)_0%,transparent_65%)] opacity-60" />

              {/* Subtle abstract ambient sparkles */}
              <div className="absolute top-10 left-12 text-sky-400 animate-twinkle opacity-70 hidden sm:block">
                <TwinklingStar className="h-5 w-5" />
              </div>
              <div className="absolute bottom-10 right-14 text-rose-400 animate-twinkle opacity-70 hidden sm:block [animation-delay:1.2s]">
                <TwinklingStar className="h-5 w-5" />
              </div>

              {/* Gentle architectural waves */}
              <svg
                className="absolute inset-0 h-full w-full text-sky-200/50"
                viewBox="0 0 1200 400"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
              >
                <g stroke="currentColor" strokeWidth="1" opacity="0.4">
                  <path d="M-60 330C180 280 330 180 430 40" />
                  <path d="M760 390C900 250 1030 170 1270 120" />
                </g>
              </svg>
            </div>

            <div className="relative mx-auto max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-4 py-1.5 border border-sky-200 shadow-sm mb-6">
                <span className="h-2 w-2 rounded-full bg-teal-500" />
                <span className="text-[0.8125rem] font-semibold text-[#183B4A]">
                  {doctor.title} &bull; {doctor.city}
                </span>
              </div>

              <h2
                id="cta-title"
                className="font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-[#183B4A] sm:text-[2.4rem] lg:text-[2.85rem]"
              >
                Your child&rsquo;s health deserves thoughtful care.
              </h2>

              <p className="mt-5 text-[1.0625rem] leading-[1.72] text-[#536770]">
                Share a few details about your child with {doctor.name} and your enquiry
                opens in WhatsApp, ready to send.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <ButtonLink href="#appointment" size="lg" className="w-full sm:w-auto">
                  <Icon name="calendar" className="h-5 w-5" />
                  Book Appointment
                </ButtonLink>

                {quickUrl ? (
                  <a
                    href={quickUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full select-none items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-[1rem] font-bold text-white shadow-soft transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-[#1DA851] hover:shadow-lift sm:w-auto"
                  >
                    <Icon name="whatsapp" className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                ) : null}

                {contact.isConfigured ? (
                  <ButtonLink
                    href={contact.telHref}
                    variant="secondary"
                    size="lg"
                    className="w-full bg-white/90 sm:w-auto hover:bg-white"
                  >
                    <Icon name="phone" className="h-4 w-4" />
                    Call {contact.display}
                  </ButtonLink>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
