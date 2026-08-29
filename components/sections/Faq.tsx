"use client";

import { useId, useState } from "react";
import { clinic } from "@/data/clinic";
import { faqs } from "@/data/faqs";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { accents, type AccentName } from "@/lib/accents";
import { cx } from "@/lib/utils";

// Rotating accents so the open question is picked out in a different hue
// each time, rather than one flat blue down the list.
const faqAccents: AccentName[] = ["coral", "brand", "mint", "honey", "lilac", "teal"];

export function Faq() {
  const uid = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" aria-labelledby="faqs-title" className="bg-canvas py-24 sm:py-28 lg:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* ---------- Heading rail ---------- */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="FAQs"
              title="Questions parents ask."
              titleId="faqs-title"
              description="If something is not covered here, the clinic is happy to answer it over the phone."
            />

            <Reveal delay={160}>
              <ButtonLink href={clinic.phone.href} variant="secondary" size="md" className="mt-8">
                <Icon name="phone" className="h-4 w-4" />
                {clinic.phone.display}
              </ButtonLink>
            </Reveal>
          </div>

          {/* ---------- Accordion ---------- */}
          <ul className="border-t border-line">
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              const accent = accents[faqAccents[index % faqAccents.length]];
              const buttonId = `${uid}-q-${index}`;
              const panelId = `${uid}-a-${index}`;

              return (
                <Reveal
                  key={faq.question}
                  as="li"
                  delay={index * 70}
                  distance={16}
                  className="border-b border-line"
                >
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : index)}
                      className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={cx(
                          "font-display text-[1.0625rem] font-bold leading-snug tracking-[-0.015em] transition-colors duration-300 ease-premium sm:text-[1.125rem]",
                          open ? accent.text : "text-ink group-hover:text-brand-700",
                        )}
                      >
                        {faq.question}
                      </span>

                      <span
                        aria-hidden="true"
                        className={cx(
                          "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full transition-[background-color,color,transform] duration-500 ease-premium",
                          open
                            ? cx("rotate-180", accent.solid)
                            : "bg-brand-50 text-brand-700 group-hover:bg-brand-100",
                        )}
                      >
                        <Icon name="chevronDown" className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="accordion-panel"
                    data-open={open}
                  >
                    <div className="accordion-panel-inner">
                      <p className="max-w-[62ch] pb-7 pr-10 text-[0.9375rem] leading-[1.78] text-ink-muted sm:text-[1rem]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
