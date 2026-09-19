import { doctor } from "@/data/doctor";
import { Container } from "@/components/ui/Container";
import { DoctorPortrait } from "@/components/ui/DoctorPortrait";
import { ExpandableText } from "@/components/ui/ExpandableText";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  AnimatedRockingHorse,
  AnimatedTeddyBear,
  AnimatedButterfly,
  AnimatedPastelBubbles,
} from "@/components/ui/PediatricDecorations";

const [firstParagraph, ...restParagraphs] = doctor.bio;

export function AboutDoctor() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-gradient-to-b from-[#FCE7F3] via-[#FBCFE8] to-[#FCE4F1] py-24 sm:py-28 lg:py-36 border-b border-pink-200"
    >
      {/* Ambient pastel glow & live moving toys */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift-a absolute -top-16 -left-16 h-80 w-80 rounded-full bg-[radial-gradient(circle,#F472B6_0%,transparent_70%)] opacity-40 blur-2xl" />
        <div className="animate-drift-b absolute bottom-8 -right-16 h-96 w-96 rounded-full bg-[radial-gradient(circle,#38BDF8_0%,transparent_70%)] opacity-45 blur-2xl" />

        {/* Live moving Butterfly floating on upper right */}
        <div className="absolute top-14 right-[4%] opacity-90">
          <AnimatedButterfly className="h-12 w-12 sm:h-14 sm:w-14" />
        </div>

        {/* Live moving Pastel Bubbles on lower left */}
        <div className="absolute bottom-16 left-[3%] opacity-85">
          <AnimatedPastelBubbles className="h-14 w-14 sm:h-16 sm:w-16" />
        </div>
      </div>

      <Container className="relative">
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
                className="absolute -left-4 -top-4 h-full w-full rounded-[1.75rem] border-2 border-pink-300 sm:-left-5 sm:-top-5"
              />
              <div className="group relative aspect-[5/6] overflow-hidden rounded-[1.75rem] bg-[#E0F2FE] shadow-panel ring-1 ring-sky-300">
                <DoctorPortrait
                  sizes="(min-width: 1024px) 34vw, (min-width: 640px) 26rem, 90vw"
                  className="transition-transform duration-[900ms] ease-premium group-hover:scale-[1.03]"
                />
              </div>
              {/* Live moving Rocking Horse playfully guarding portrait corner */}
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-6 -right-5 z-10 opacity-95">
                <AnimatedRockingHorse className="h-14 w-18 sm:h-16 sm:w-20 drop-shadow-md" />
              </div>
            </div>
          </Reveal>

          {/* ---------- Biography ---------- */}
          <div>
            <Reveal delay={80}>
              <p className="text-[1.0625rem] leading-[1.78] text-[#113244] font-medium">{firstParagraph}</p>
            </Reveal>

            <Reveal delay={140}>
              <ExpandableText paragraphs={restParagraphs} />
            </Reveal>

            <Reveal delay={200}>
              <dl className="relative mt-12 rounded-2xl bg-[#E0F2FE] p-6 sm:p-8 border-2 border-sky-300 shadow-sm">
                {/* Live moving Teddy Bear perched atop qualifications card */}
                <div aria-hidden="true" className="pointer-events-none absolute -top-8 right-6 opacity-95">
                  <AnimatedTeddyBear className="h-13 w-13 sm:h-15 sm:w-15 drop-shadow-sm" />
                </div>
                {doctor.credentials.map((row, idx) => (
                  <div
                    key={row.label}
                    className={`flex flex-col gap-1.5 py-4 sm:flex-row sm:items-baseline sm:gap-8 ${
                      idx !== doctor.credentials.length - 1 ? "border-b border-sky-200" : ""
                    }`}
                  >
                    <dt className="text-eyebrow shrink-0 text-sky-900 sm:w-52 font-bold">{row.label}</dt>
                    <dd className="text-[0.9375rem] font-bold leading-relaxed text-[#113244] sm:text-base">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10">
                <h3 className="text-eyebrow text-[#113244] font-bold">Areas of interest</h3>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {doctor.interests.map((interest) => (
                    <li
                      key={interest}
                      className="rounded-full bg-white px-4 py-2 text-[0.8125rem] font-bold text-[#113244] border-2 border-pink-300 shadow-sm transition-all hover:bg-[#FCE7F3] hover:border-pink-400"
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
