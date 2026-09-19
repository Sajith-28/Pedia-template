import { credentialHighlights } from "@/data/credentials";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { accents } from "@/lib/accents";
import { cx } from "@/lib/utils";

export function Credentials() {
  return (
    <section aria-label="Qualifications and focus" className="relative border-y border-line bg-canvas">
      <Container>
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {credentialHighlights.map((item, index) => {
            const accent = accents[item.accent];
            return (
              <Reveal
                key={item.value}
                delay={index * 90}
                distance={16}
                className={cx(
                  // Flex lives here so <dt>/<dd> stay direct children of the
                  // wrapper <div> — a <dl> allows no deeper nesting.
                  "group relative flex flex-col-reverse gap-3 border-line px-1 py-9 sm:px-4 sm:py-11 lg:px-8 lg:py-14",
                  index % 2 === 1 && "border-l pl-5 sm:pl-8",
                  index % 2 === 0 && "lg:border-l",
                  index === 0 && "lg:border-l-0 lg:pl-0",
                  index < 2 && "border-b lg:border-b-0",
                )}
              >
                <dt className="text-[0.8125rem] leading-snug text-ink-muted sm:text-sm">
                  {item.label}
                </dt>
                <dd>
                  <span
                    className={cx(
                      "mb-4 grid h-10 w-10 place-items-center rounded-xl transition-transform duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:rotate-3",
                      accent.chip,
                    )}
                  >
                    <Icon name={item.icon} className="h-[1.15rem] w-[1.15rem]" />
                  </span>
                  <span
                    className={cx(
                      "block font-display text-[1.125rem] font-bold leading-tight tracking-[-0.02em] sm:text-[1.3rem] lg:text-[1.45rem]",
                      accent.text,
                    )}
                  >
                    {item.value}
                  </span>
                </dd>
              </Reveal>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}
