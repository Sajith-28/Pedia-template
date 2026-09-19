import { contact, quickEnquiryMessage, whatsappUrl } from "@/data/contact";
import { doctor } from "@/data/doctor";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Contact details.
 *
 * Only what the client has confirmed appears here: the doctor, her title and
 * the city. No street address, map, email or opening hours are shown, because
 * none has been supplied.
 */
export function Contact() {
  const quickUrl = whatsappUrl(quickEnquiryMessage);

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-canvas py-24 sm:py-28 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch."
          titleId="contact-title"
          description={`${doctor.name} is currently practising in ${doctor.city}. Send an appointment enquiry and the clinic will confirm the details with you.`}
          className="max-w-2xl"
        />

        <div className="mt-14 grid gap-6 lg:mt-18 lg:grid-cols-2 lg:gap-8">
          <Reveal distance={22}>
            <div className="flex h-full flex-col rounded-panel bg-surface p-7 shadow-soft ring-1 ring-line sm:p-9">
              <h3 className="font-display text-[1.375rem] font-bold leading-snug tracking-[-0.02em] text-ink sm:text-[1.5rem]">
                {doctor.name}
              </h3>
              <p className="mt-2 text-[0.9375rem] text-ink-soft">{doctor.title}</p>

              <dl className="mt-8 space-y-6">
                <div>
                  <dt className="flex items-center gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                      <Icon name="mapPin" className="h-[1.15rem] w-[1.15rem]" />
                    </span>
                    <span className="text-eyebrow text-ink-soft">Practising in</span>
                  </dt>
                  <dd className="mt-2 pl-14 text-[0.9375rem] leading-relaxed text-ink-muted">
                    {doctor.city}
                  </dd>
                </div>

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
              </dl>

              <div className="mt-auto flex flex-col gap-3 border-t border-line pt-7 sm:flex-row">
                <ButtonLink href="#appointment" size="md" className="w-full sm:flex-1">
                  <Icon name="calendar" className="h-4 w-4" />
                  Book Appointment
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

          <Reveal delay={120} distance={22}>
            <div className="flex h-full flex-col justify-center rounded-panel bg-brand-950 p-8 text-white shadow-soft sm:p-10">
              <h3 className="font-display text-[1.25rem] font-bold leading-snug tracking-[-0.02em] sm:text-[1.5rem]">
                Care for every stage of childhood
              </h3>
              <p className="mt-4 text-[0.9375rem] leading-[1.75] text-white/65">
                From newborns — including premature and high-risk babies — through infancy
                and childhood to adolescence.
              </p>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {doctor.interests.map((interest) => (
                  <li
                    key={interest}
                    className="rounded-full bg-white/10 px-4 py-2 text-[0.8125rem] font-medium text-white/85 ring-1 ring-white/15"
                  >
                    {interest}
                  </li>
                ))}
              </ul>

              <p className="mt-8 border-t border-white/10 pt-6 text-[0.8125rem] leading-relaxed text-white/50">
                Full clinic address and consultation timings will be published here once
                confirmed.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
