import {
  clinicAddress,
  clinicAddressFull,
  contact,
  quickEnquiryMessage,
  whatsappUrl,
} from "@/data/contact";
import { doctor } from "@/data/doctor";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  AnimatedPaperPlane,
  AnimatedPastelBubbles,
} from "@/components/ui/PediatricDecorations";

export function Location() {
  const quickUrl = whatsappUrl(quickEnquiryMessage);

  return (
    <section
      id="location"
      aria-labelledby="location-title"
      className="relative overflow-hidden bg-gradient-to-b from-[#EBF6FC] via-[#F2F8FD] to-[#EAF6FB] py-24 sm:py-28 lg:py-36 border-t border-sky-100"
    >
      {/* Ambient washes & Live moving Paper Plane */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift-a absolute -left-[10%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,var(--color-pedia-blue-soft,#BFE4F1)_0%,transparent_65%)] opacity-60" />
        <div className="animate-drift-b absolute -right-[10%] bottom-[10%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,var(--color-pedia-pink-light,#FCECF3)_0%,transparent_65%)] opacity-60" />

        {/* Live moving Paper Plane gliding near location */}
        <div className="hidden lg:block absolute top-14 right-[4%] opacity-85">
          <AnimatedPaperPlane className="h-16 w-20" />
        </div>

        {/* Floating bubbles */}
        <div className="hidden md:block absolute bottom-12 left-[3%] opacity-65">
          <AnimatedPastelBubbles className="h-14 w-14" />
        </div>
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="Location"
          title="Visit the clinic."
          titleId="location-title"
          description={`${doctor.name} consults in ${clinicAddress.locality}, ${clinicAddress.city}.`}
          className="max-w-2xl"
        />

        <div className="mt-14 grid gap-8 lg:mt-18 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-10">
          {/* ---------- Map ---------- */}
          <Reveal distance={22}>
            <div className="overflow-hidden rounded-panel bg-canvas-soft shadow-soft ring-1 ring-line">
              <iframe
                src={clinicAddress.embedUrl}
                title={`Map showing ${doctor.name}'s clinic at ${clinicAddressFull}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block h-[22rem] w-full border-0 sm:h-[26rem] lg:h-[30rem]"
              />
              <div className="flex flex-col gap-2 border-t border-line bg-surface px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <p className="text-[0.8125rem] leading-snug text-ink-muted">
                  {clinicAddress.line1}, {clinicAddress.line2}
                </p>
                <a
                  href={clinicAddress.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline self-start text-[0.8125rem] font-semibold text-brand-700 transition-colors duration-300 ease-premium hover:text-brand-800 sm:shrink-0 sm:self-auto"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </Reveal>

          {/* ---------- Details ---------- */}
          <Reveal delay={120} distance={22}>
            <div className="flex h-full flex-col rounded-panel bg-surface p-7 shadow-soft ring-1 ring-line sm:p-9 lg:min-h-[30rem]">
              <h3 className="font-display text-[1.375rem] font-bold leading-snug tracking-[-0.02em] text-ink sm:text-[1.5rem]">
                {doctor.name}
              </h3>
              <p className="mt-2 text-[0.9375rem] text-ink-soft">{doctor.title}</p>

              {/* A <dl> may only group its terms in bare <div>s, so the icon
                  lives inside the <dt> and the <dd> is indented to match. */}
              <dl className="mt-8 space-y-6">
                <div>
                  <dt className="flex items-center gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                      <Icon name="mapPin" className="h-[1.15rem] w-[1.15rem]" />
                    </span>
                    <span className="text-eyebrow text-ink-soft">Clinic address</span>
                  </dt>
                  <dd className="mt-2 pl-14">
                    <address className="not-italic text-[0.9375rem] leading-relaxed text-ink-muted">
                      {clinicAddress.line1}
                      <br />
                      {clinicAddress.line2}
                    </address>
                  </dd>
                </div>

                {contact.isConfigured ? (
                  <div>
                    <dt className="flex items-center gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                        <Icon name="phone" className="h-[1.15rem] w-[1.15rem]" />
                      </span>
                      <span className="text-eyebrow text-ink-soft">Appointments</span>
                    </dt>
                    <dd className="mt-2 pl-14">
                      <a
                        href={contact.telHref}
                        className="link-underline text-[0.9375rem] leading-relaxed text-ink transition-colors duration-300 ease-premium hover:text-brand-700"
                      >
                        {contact.display}
                      </a>
                    </dd>
                  </div>
                ) : null}

                <div>
                  <dt className="flex items-center gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                      <Icon name="clipboard" className="h-[1.15rem] w-[1.15rem]" />
                    </span>
                    <span className="text-eyebrow text-ink-soft">Qualifications</span>
                  </dt>
                  <dd className="mt-2 pl-14 text-[0.9375rem] leading-relaxed text-ink-muted">
                    {doctor.qualifications}
                  </dd>
                </div>
              </dl>

              <p className="mt-8 text-[0.8125rem] leading-relaxed text-ink-soft">
                Consultation timings will be published here once confirmed. Please send an
                enquiry to arrange a slot.
              </p>

              <div className="mt-auto flex flex-col gap-3 border-t border-line pt-7 sm:flex-row">
                <ButtonLink
                  href={clinicAddress.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                  className="w-full sm:flex-1"
                >
                  <Icon name="navigation" className="h-4 w-4" />
                  Get Directions
                </ButtonLink>
                {quickUrl ? (
                  <ButtonLink
                    href={quickUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="md"
                    className="w-full sm:flex-1"
                  >
                    <Icon name="whatsapp" className="h-4 w-4" />
                    WhatsApp
                  </ButtonLink>
                ) : null}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
