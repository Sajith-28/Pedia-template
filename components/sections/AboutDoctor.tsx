import { doctor } from "@/data/doctor";
import { Container } from "@/components/ui/Container";
import { DoctorPortrait } from "@/components/ui/DoctorPortrait";
import { ExpandableText } from "@/components/ui/ExpandableText";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const [firstParagraph, ...restParagraphs] = doctor.bio;

export function AboutDoctor() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-canvas py-24 sm:py-28 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="About the doctor"
          title={`Meet ${doctor.name}`}
          titleId="about-title"
          description="Expertise in the comprehensive care of newborns, infants, children and adolescents."
          className="max-w-2xl"
        />

        <div className="mt-16 grid gap-14 lg:mt-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* ---------- Portrait ---------- */}
          <Reveal distance={26}>
            <div className="relative mx-auto w-full max-w-[26rem] lg:sticky lg:top-32 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -left-4 -top-4 h-full w-full rounded-[1.75rem] border border-brand-200 sm:-left-5 sm:-top-5"
              />
              <div className="group relative aspect-[5/6] overflow-hidden rounded-[1.75rem] bg-brand-100 shadow-panel ring-1 ring-ink/5">
                <DoctorPortrait
                  sizes="(min-width: 1024px) 34vw, (min-width: 640px) 26rem, 90vw"
                  className="transition-transform duration-[900ms] ease-premium group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </Reveal>

          {/* ---------- Biography ---------- */}
          <div>
            <Reveal delay={80}>
              <p className="text-[1.0625rem] leading-[1.78] text-ink-muted">{firstParagraph}</p>
            </Reveal>

            <Reveal delay={140}>
              <ExpandableText paragraphs={restParagraphs} />
            </Reveal>

            <Reveal delay={200}>
              <dl className="mt-12 rounded-2xl bg-[var(--color-pedia-blue-light,#EAF6FB)] p-6 sm:p-8 border border-sky-100">
                {doctor.credentials.map((row, idx) => (
                  <div
                    key={row.label}
                    className={`flex flex-col gap-1.5 py-4 sm:flex-row sm:items-baseline sm:gap-8 ${
                      idx !== doctor.credentials.length - 1 ? "border-b border-sky-200/50" : ""
                    }`}
                  >
                    <dt className="text-eyebrow shrink-0 text-[#536770] sm:w-52">{row.label}</dt>
                    <dd className="text-[0.9375rem] font-medium leading-relaxed text-[#183B4A] sm:text-base">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10">
                <h3 className="text-eyebrow text-[#536770]">Areas of interest</h3>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {doctor.interests.map((interest) => (
                    <li
                      key={interest}
                      className="rounded-full bg-white px-4 py-2 text-[0.8125rem] font-medium text-[#183B4A] border border-sky-200 shadow-sm transition-all hover:bg-[var(--color-pedia-pink-light,#FCECF3)] hover:border-rose-200"
                    >
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
