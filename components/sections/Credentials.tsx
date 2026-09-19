import { credentialHighlights } from "@/data/credentials";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedPastelBubbles } from "@/components/ui/PediatricDecorations";
import { cx } from "@/lib/utils";

export function Credentials() {
  return (
    <section
      aria-label="Qualifications and clinical highlights"
      className="relative overflow-hidden border-y border-sky-300/70 bg-gradient-to-r from-[#C2E7F9] via-[#F8C6DF] to-[#C2E7F9] py-9 sm:py-12"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -top-8 -right-6 opacity-60">
        <AnimatedPastelBubbles className="h-24 w-24" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-8 -left-6 opacity-55">
        <AnimatedPastelBubbles className="h-20 w-20" />
      </div>

      <Container className="relative">
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {credentialHighlights.map((item, index) => {
            // Alternating baby blue and bubble gum pink accents
            const isBlue = index % 2 === 0;
            const bgClass = isBlue
              ? "bg-[#E6F4FC] border-sky-300 hover:border-sky-400 shadow-sm"
              : "bg-[#FDE7F2] border-pink-300 hover:border-pink-400 shadow-sm";
            const iconBg = isBlue
              ? "bg-[#B9E4FB] text-sky-800"
              : "bg-[#FBC6E1] text-pink-800";

            return (
              <Reveal
                key={item.value}
                delay={index * 80}
                distance={14}
                className="h-full"
              >
                <div
                  className={cx(
                    "group relative flex flex-col justify-between h-full rounded-2xl border p-5 sm:p-6 transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-soft",
                    bgClass,
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cx(
                        "grid h-10 w-10 place-items-center rounded-xl transition-transform duration-300 ease-premium group-hover:scale-110",
                        iconBg,
                      )}
                    >
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <dt className="text-[0.8125rem] font-medium leading-snug text-slate-600">
                      {item.label}
                    </dt>
                  </div>

                  <dd className="mt-4">
                    <span className="block font-display text-[1.2rem] sm:text-[1.3rem] font-bold leading-tight tracking-[-0.015em] text-[#183B4A]">
                      {item.value}
                    </span>
                  </dd>
                </div>
              </Reveal>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}
