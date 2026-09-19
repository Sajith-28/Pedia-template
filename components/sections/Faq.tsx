"use client";

import { useId, useState } from "react";
import { contact } from "@/data/contact";
import { faqs } from "@/data/faqs";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  AnimatedHotAirBalloon,
  AnimatedPastelBubbles,
} from "@/components/ui/PediatricDecorations";
import { accents, type AccentName } from "@/lib/accents";
import { cx } from "@/lib/utils";

// Rotating accents so the open question is picked out in a different hue
// each time, rather than one flat blue down the list.
const faqAccents: AccentName[] = ["coral", "brand", "mint", "honey", "lilac", "teal"];

export function Faq() {
  const uid = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="relative overflow-hidden bg-gradient-to-b from-[#FCE7F3] via-[#FBD0E7] to-[#FCE6F2] py-24 sm:py-28 lg:py-36 border-t border-pink-300"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift-a absolute -left-[10%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,#F472B6_0%,transparent_65%)] opacity-35" />
        <div className="animate-drift-b absolute -right-[10%] bottom-[10%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,#38BDF8_0%,transparent_65%)] opacity-35" />

        {/* Live moving Hot Air Balloon in FAQ sticky rail area */}
        <div className="hidden xl:block absolute top-28 left-[3%] opacity-90">
          <AnimatedHotAirBalloon className="h-16 w-14" />
        </div>

        {/* Soft bubbles */}
        <div className="hidden md:block absolute bottom-12 right-[4%] opacity-75">
          <AnimatedPastelBubbles className="h-14 w-14" />
        </div>
      </div>

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* ---------- Heading rail ---------- */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="FAQs"
              title="Questions parents ask."
              titleId="faqs-title"
              description="If something is not covered here, send an appointment enquiry and we will get back to you."
            />

            <Reveal delay={160}>
              {contact.isConfigured ? (
                <ButtonLink href={contact.telHref} variant="secondary" size="md" className="mt-8 bg-white border-2 border-sky-300 hover:border-sky-400">
                  <Icon name="phone" className="h-4 w-4" />
                  {contact.display}
                </ButtonLink>
              ) : (
                <ButtonLink href="#appointment" variant="secondary" size="md" className="mt-8 bg-white border-2 border-sky-300 hover:border-sky-400">
                  <Icon name="calendar" className="h-4 w-4" />
                  Book an Appointment
                </ButtonLink>
              )}
            </Reveal>
          </div>

          {/* ---------- Accordion Cards ---------- */}
          <ul className="space-y-4">
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              const buttonId = `${uid}-q-${index}`;
              const panelId = `${uid}-a-${index}`;

              return (
                <Reveal
                  key={faq.question}
                  as="li"
                  delay={index * 60}
                  distance={14}
                >
                  <div
                    className={cx(
                      "overflow-hidden rounded-2xl bg-white border-2 p-5 sm:p-6 transition-all duration-300 ease-premium shadow-sm",
                      open
                        ? "border-pink-400 ring-2 ring-pink-200"
                        : "border-sky-200 hover:border-pink-300",
                    )}
                  >
                    <h3>
                      <button
                        type="button"
                        id={buttonId}
                        aria-expanded={open}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(open ? null : index)}
                        className="group flex w-full items-start justify-between gap-6 text-left"
                      >
                        <span
                          className={cx(
                            "font-display text-[1.0625rem] font-bold leading-snug tracking-[-0.015em] transition-colors duration-300 ease-premium sm:text-[1.125rem]",
                            open ? "text-pink-900" : "text-[#113244] group-hover:text-pink-700",
                          )}
                        >
                          {faq.question}
                        </span>

                        <span
                          aria-hidden="true"
                          className={cx(
                            "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full transition-[background-color,color,transform] duration-300 ease-premium",
                            open
                              ? "rotate-180 bg-pink-500 text-white"
                              : "bg-[#D4EDFA] text-sky-800 group-hover:bg-[#B3DFF6]",
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
                      <div className="accordion-panel-inner pt-4">
                        <p className="max-w-[62ch] text-[0.9375rem] leading-[1.78] text-[#536770] sm:text-[1rem]">
                          {faq.answer}
                        </p>
                      </div>
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
