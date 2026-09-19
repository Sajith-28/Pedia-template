import { credentialHighlights } from "@/data/credentials";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { cx } from "@/lib/utils";

export function Credentials() {
  return (
    <section
      aria-label="Qualifications and clinical highlights"
      className="relative border-y border-sky-100 bg-[#FAF9F6] py-8 sm:py-12"
    >
      <Container>
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {credentialHighlights.map((item, index) => {
            // Alternating soft light blue and light pink backgrounds
            const isBlue = index % 2 === 0;
            const bgClass = isBlue
              ? "bg-[var(--color-pedia-blue-light,#EAF6FB)] border-sky-100 hover:border-sky-200"
              : "bg-[var(--color-pedia-pink-light,#FCECF3)] border-rose-100 hover:border-rose-200";
            const iconBg = isBlue
              ? "bg-sky-100 text-sky-700"
              : "bg-rose-100 text-rose-700";

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
