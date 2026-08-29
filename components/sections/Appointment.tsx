import { clinic } from "@/data/clinic";
import { doctor } from "@/data/doctor";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  TeddyBear,
  BandageHeart,
  SmilingSun,
} from "@/components/ui/PediatricDecorations";

const quickInquiries = [
  {
    label: "Routine Checkup",
    msg: "Hi, I'd like to book a routine pediatric health checkup with Dr. Aarav.",
  },
  {
    label: "Vaccination Slot",
    msg: "Hi, I'd like to check vaccine availability and schedule an immunization slot.",
  },
  {
    label: "Growth & Diet Query",
    msg: "Hi Dr. Aarav, I would like to consult regarding my child's growth and nutrition.",
  },
];

export function Appointment() {
  return (
    <section
      id="appointment"
      aria-labelledby="appointment-title"
      className="relative overflow-hidden bg-canvas-soft py-24 sm:py-28 lg:py-36"
    >
      {/* Background decorations */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-drift-a absolute -left-[10%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,var(--color-brand-100)_0%,transparent_65%)] opacity-40" />
        <div className="animate-drift-b absolute -right-[10%] bottom-[10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,var(--color-coral-100)_0%,transparent_65%)] opacity-40" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="Appointments &amp; Inquiries"
          title="Book your child's consultation."
          titleId="appointment-title"
          description={`Reach out on WhatsApp and our clinic desk will confirm a comfortable consultation slot with ${doctor.name}.`}
          className="max-w-2xl"
        />

        <div className="mt-14 grid gap-6 lg:mt-18 lg:grid-cols-[1.5fr_1fr] lg:items-start lg:gap-8">
          {/* ---------- WhatsApp booking card ---------- */}
          <Reveal distance={20}>
            <div className="relative overflow-hidden rounded-panel bg-surface p-8 ring-1 ring-line shadow-soft sm:p-10 lg:p-12">
              {/* Corner decorative bear */}
              <div className="absolute top-4 right-4 hidden sm:block opacity-40">
                <TeddyBear className="h-10 w-10 animate-float-bob" />
              </div>

              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                {/* Status Indicator */}
                <div className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/10 px-3.5 py-1.5 text-[0.8125rem] font-semibold text-[#1DA851]">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" />
                  </span>
                  Clinic Desk Online &bull; Direct WhatsApp Booking
                </div>

                <h3 className="mt-6 font-display text-[1.5rem] font-bold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[1.85rem]">
                  Message Dr. Aarav&rsquo;s Clinic
                </h3>

                <p className="mt-3.5 max-w-lg text-[1.0625rem] leading-[1.72] text-ink-muted">
                  Click below to open a pre-filled WhatsApp conversation. Send us your
                  child&rsquo;s age and preferred time — we reply promptly with the
                  confirmed appointment details.
                </p>

                {/* Primary WhatsApp Action Button */}
                <a
                  href={clinic.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 group inline-flex select-none items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-[1.0625rem] font-bold text-white shadow-soft transition-all duration-300 ease-premium hover:bg-[#1DA851] hover:-translate-y-1 hover:shadow-lift active:translate-y-0 w-full sm:w-auto"
                >
                  <Icon name="whatsapp" className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                  <span>Book via WhatsApp</span>
                </a>

                {/* Quick query chips */}
                <div className="mt-8 w-full border-t border-line pt-6">
                  <p className="text-[0.8125rem] font-semibold uppercase tracking-wider text-ink-soft">
                    Or tap a quick topic to start chatting:
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {quickInquiries.map((inquiry) => (
                      <a
                        key={inquiry.label}
                        href={`https://wa.me/${clinic.whatsapp.number}?text=${encodeURIComponent(inquiry.msg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-canvas-soft px-3.5 py-2 text-[0.8125rem] font-medium text-ink transition-colors hover:bg-brand-50 hover:text-brand-900 ring-1 ring-line/80"
                      >
                        💬 {inquiry.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Parent reassurances */}
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.8125rem] text-ink-soft">
                  <span className="flex items-center gap-1.5">
                    <Icon name="check" className="h-3.5 w-3.5 text-[#25D366]" />
                    No login or forms required
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="check" className="h-3.5 w-3.5 text-[#25D366]" />
                    Replies within 15 minutes
                  </span>
                </div>
              </div>
            </div>
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
