import { clinic } from "@/data/clinic";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ClinicMap } from "./ClinicMap";

const details = [
  {
    icon: "mapPin" as const,
    label: "Address",
    lines: [clinic.address.line1, clinic.address.line2],
  },
  {
    icon: "phone" as const,
    label: "Phone",
    lines: [clinic.phone.display],
    href: clinic.phone.href,
  },
  {
    icon: "clock" as const,
    label: "Opening hours",
    lines: [`${clinic.hours.shortDays} · ${clinic.hours.summary}`, clinic.hours.closed],
  },
];

export function ClinicLocation() {
  return (
    <section
      id="clinic"
      aria-labelledby="clinic-title"
      className="bg-canvas py-24 sm:py-28 lg:py-36"
    >
      <Container>
        <SectionHeading
          eyebrow="Location"
          title="Visit the clinic."
          titleId="clinic-title"
          description="A calm, purpose-built space for children in the heart of Anna Nagar, with easy parking and step-free access."
          className="max-w-2xl"
        />

        <div className="mt-14 grid gap-8 lg:mt-18 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-10">
          {/* ---------- Map ---------- */}
          <Reveal distance={22}>
            <ClinicMap />
          </Reveal>

          {/* ---------- Clinic details ---------- */}
          <Reveal delay={120} distance={22}>
            <div className="flex flex-col rounded-panel bg-surface p-7 shadow-soft ring-1 ring-line sm:p-9 lg:min-h-[30rem]">
              <h3 className="font-display text-[1.375rem] font-bold leading-snug tracking-[-0.02em] text-ink sm:text-[1.5rem]">
                {clinic.name}
              </h3>
              <p className="mt-2 text-[0.9375rem] text-ink-soft">{clinic.tagline}</p>

              {/* A <dl> may only group its terms in bare <div>s, so the icon
                  lives inside the <dt> and the <dd> is indented to match. */}
              <dl className="mt-8 space-y-6">
                {details.map((detail) => (
                  <div key={detail.label}>
                    <dt className="flex items-center gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                        <Icon name={detail.icon} className="h-[1.15rem] w-[1.15rem]" />
                      </span>
                      <span className="text-eyebrow text-ink-soft">{detail.label}</span>
                    </dt>
                    <dd className="mt-2 space-y-1 pl-14">
                      {detail.lines.map((line, index) =>
                        detail.href && index === 0 ? (
                          <a
                            key={line}
                            href={detail.href}
                            className="link-underline block text-[0.9375rem] leading-relaxed text-ink transition-colors duration-300 ease-premium hover:text-brand-700"
                          >
                            {line}
                          </a>
                        ) : (
                          <span
                            key={line}
                            className="block text-[0.9375rem] leading-relaxed text-ink-muted"
                          >
                            {line}
                          </span>
                        ),
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-auto flex flex-col gap-3 border-t border-line pt-7 sm:flex-row">
                <ButtonLink
                  href={clinic.directionsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  size="md"
                  className="w-full sm:w-auto sm:flex-1"
                >
                  <Icon name="navigation" className="h-4 w-4" />
                  Get Directions
                </ButtonLink>
                <ButtonLink
                  href={clinic.phone.href}
                  variant="secondary"
                  size="md"
                  className="w-full sm:w-auto sm:flex-1"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  Call Clinic
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
