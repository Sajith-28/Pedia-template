import Image from "next/image";
import { doctor } from "@/data/doctor";
import { media } from "@/lib/media";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedTeddyBear } from "@/components/ui/PediatricDecorations";
import { cx } from "@/lib/utils";

const { philosophy } = doctor;

const pillarAccent = [
  "bg-sky-500",
  "bg-rose-400",
  "bg-teal-500",
];

export function Philosophy() {
  return (
    <section
      aria-labelledby="philosophy-title"
      className="relative overflow-hidden bg-gradient-to-tr from-[#C8E7F9] via-[#FBD2E7] to-[#F8BBDC] border-y border-pink-300 py-24 sm:py-28 lg:py-36"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift-a absolute -left-[10%] top-[-20%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,#38BDF8_0%,transparent_65%)] opacity-35" />
        <div className="animate-drift-b absolute -right-[12%] bottom-[-25%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,#EC4899_0%,transparent_65%)] opacity-35" />

        {/* Live moving Teddy Bear toy in philosophy section */}
        <div className="hidden lg:block absolute bottom-12 right-[4%] opacity-90">
          <AnimatedTeddyBear className="h-16 w-16" />
        </div>
      </div>

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* ---------- Consultation image ---------- */}
          <Reveal distance={26}>
            <div className="relative">
              {/* Offset frame */}
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 h-full w-full rounded-[1.75rem] border-2 border-pink-400 sm:-bottom-6 sm:-right-6"
              />
              <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-white shadow-panel ring-2 ring-sky-300">
                <Image
                  src={media.philosophy.src}
                  alt={media.philosophy.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 46vw, 92vw"
                  placeholder="blur"
                  blurDataURL={media.philosophy.blurDataURL}
                  className="object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </Reveal>

          {/* ---------- Statement ---------- */}
          <div>
            <Reveal>
              <p className="text-eyebrow flex items-center gap-3 text-sky-900 font-bold">
                <span aria-hidden="true" className="h-0.5 w-7 bg-sky-700" />
                Our philosophy
              </p>
            </Reveal>

            <Reveal delay={90}>
              <h2
                id="philosophy-title"
                className="mt-6 font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-[#113244] sm:text-[2.4rem] lg:text-[2.9rem]"
              >
                {philosophy.heading}
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 border-l-4 border-pink-500 pl-5 font-display text-[1.15rem] font-semibold leading-[1.55] tracking-[-0.01em] text-[#113244] sm:text-[1.3rem]">
                {philosophy.statement}
              </p>
            </Reveal>

            <div className="mt-7 space-y-5">
              {philosophy.body.map((paragraph, index) => (
                <Reveal key={paragraph} delay={230 + index * 70}>
                  <p className="text-[1rem] font-medium leading-[1.78] text-[#1e293b]">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- Pillars ---------- */}
        <ul className="mt-18 grid gap-10 sm:mt-20 lg:mt-24 lg:grid-cols-3 lg:gap-8">
          {philosophy.pillars.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              as="li"
              delay={index * 110}
              distance={18}
              className="group border-t border-sky-200/70 pt-7 lg:px-8 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={cx(
                    "h-2 w-2 rounded-full transition-transform duration-500 ease-premium group-hover:scale-150",
                    pillarAccent[index],
                  )}
                />
                <span className="text-eyebrow text-[#536770]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>
              <h3 className="mt-4 font-display text-[1.0625rem] font-bold tracking-[-0.015em] text-[#183B4A]">
                {pillar.title}
              </h3>
              <p className="mt-2.5 text-[0.9375rem] leading-[1.7] text-[#536770]">
                {pillar.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
