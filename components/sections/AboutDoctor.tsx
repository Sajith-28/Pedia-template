import Image from "next/image";
import { doctor } from "@/data/doctor";
import { media } from "@/lib/media";
import { Container } from "@/components/ui/Container";
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
          description="A pediatrician who treats the consultation as a conversation — with the child, and with the people who know them best."
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
                <Image
                  src={media.doctorAbout.src}
                  alt={media.doctorAbout.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 34vw, (min-width: 640px) 26rem, 90vw"
                  placeholder="blur"
                  blurDataURL={media.doctorAbout.blurDataURL}
                  className="object-cover object-top transition-transform duration-[900ms] ease-premium group-hover:scale-[1.03]"
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
              <dl className="mt-12 border-t border-line">
                {doctor.credentials.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col gap-1.5 border-b border-line py-5 sm:flex-row sm:items-baseline sm:gap-8"
                  >
                    <dt className="text-eyebrow shrink-0 text-ink-soft sm:w-52">{row.label}</dt>
                    <dd className="text-[0.9375rem] leading-relaxed text-ink sm:text-base">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-11">
                <h3 className="text-eyebrow text-ink-soft">Areas of interest</h3>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {doctor.interests.map((interest) => (
                    <li
                      key={interest}
                      className="rounded-full bg-brand-50 px-4 py-2 text-[0.8125rem] font-medium text-brand-800 ring-1 ring-brand-100"
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
