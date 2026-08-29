import { clinic } from "@/data/clinic";
import { doctor } from "@/data/doctor";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AppointmentForm } from "./AppointmentForm";

export function Appointment() {
  return (
    <section
      id="appointment"
      aria-labelledby="appointment-title"
      className="bg-canvas-soft py-24 sm:py-28 lg:py-36"
    >
      <Container>
        <SectionHeading
          eyebrow="Appointments"
          title="Book a consultation."
          titleId="appointment-title"
          description={`Send a request and the clinic will call you back to confirm a time with ${doctor.name}.`}
          className="max-w-2xl"
        />

        <div className="mt-14 grid gap-6 lg:mt-18 lg:grid-cols-[1.5fr_1fr] lg:items-start lg:gap-8">
          <Reveal distance={20}>
            <AppointmentForm />
          </Reveal>

          <aside className="flex flex-col gap-6">
            {/* ---------- Consultation hours ---------- */}
            <Reveal delay={120} distance={20}>
              <div className="rounded-panel bg-brand-950 p-7 text-white shadow-soft sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-teal-300">
                    <Icon name="clock" className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-[1.0625rem] font-bold tracking-[-0.015em]">
                    Consultation hours
                  </h3>
                </div>

                <p className="mt-6 text-[0.9375rem] font-medium text-white/90">
                  {clinic.hours.days}
                </p>

                <dl className="mt-4 space-y-3">
                  {clinic.consultationSlots.map((slot) => (
                    <div
                      key={slot.label}
                      className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                    >
                      <dt className="text-[0.8125rem] uppercase tracking-[0.12em] text-white/55">
                        {slot.label}
                      </dt>
                      <dd className="text-[0.9375rem] text-white/85">{slot.value}</dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-5 text-[0.8125rem] text-white/55">{clinic.hours.closed}</p>

                <ButtonLink
                  href={clinic.phone.href}
                  variant="inverse"
                  size="md"
                  className="mt-7 w-full"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  {clinic.phone.display}
                </ButtonLink>
              </div>
            </Reveal>

            {/* ---------- Emergency notice ---------- */}
            <Reveal delay={200} distance={20}>
              <div className="rounded-panel border-l-2 border-notice bg-notice-soft p-6 ring-1 ring-notice-line sm:p-7">
                <div className="flex items-start gap-3.5">
                  <span className="mt-0.5 shrink-0 text-notice">
                    <Icon name="shield" className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[0.9375rem] font-semibold text-ink">
                      In an emergency
                    </h3>
                    <p className="mt-2 text-[0.875rem] leading-[1.7] text-ink-muted">
                      {clinic.emergencyNotice}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* ---------- What to bring ---------- */}
            <Reveal delay={260} distance={20}>
              <div className="rounded-panel bg-surface p-6 ring-1 ring-line sm:p-7">
                <h3 className="text-eyebrow text-ink-soft">Before your visit</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    "Previous prescriptions and reports",
                    "Your child's immunisation record",
                    "A short note of your questions",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Icon
                        name="check"
                        className="mt-1 h-3.5 w-3.5 shrink-0 text-teal-500"
                        strokeWidth={2}
                      />
                      <span className="text-[0.875rem] leading-[1.65] text-ink-muted">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </Container>
    </section>
  );
}
