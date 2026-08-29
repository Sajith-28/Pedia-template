"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icons";
import {
  TeddyBear,
  ToyBlocks,
  BabyRattle,
  SmilingSun,
  HotAirBalloon,
} from "@/components/ui/PediatricDecorations";
import { milestoneStages, type MilestoneStage } from "@/data/milestones";
import { clinic } from "@/data/clinic";
import { accents } from "@/lib/accents";
import { cx } from "@/lib/utils";

const tabIconMap = {
  cradle: BabyRattle,
  rattle: BabyRattle,
  blocks: ToyBlocks,
  teddy: TeddyBear,
  balloon: HotAirBalloon,
};

export function MilestoneGuide() {
  const [activeStageId, setActiveStageId] = useState<string>("newborn");

  const currentStage: MilestoneStage =
    milestoneStages.find((s) => s.id === activeStageId) ?? milestoneStages[0];
  const accent = accents[currentStage.accent];

  const getWhatsAppHrefForStage = (stage: MilestoneStage) => {
    return `https://wa.me/${clinic.whatsapp.number}?text=${encodeURIComponent(stage.whatsappPrompt)}`;
  };

  return (
    <section
      id="milestones"
      aria-labelledby="milestone-title"
      className="relative overflow-hidden bg-canvas-soft py-24 sm:py-28 lg:py-36 border-t border-line"
    >
      {/* Gentle ambient lighting */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-drift-b absolute -left-[12%] top-[15%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,var(--color-teal-100)_0%,transparent_65%)] opacity-40" />
        <div className="animate-drift-a absolute -right-[12%] bottom-[10%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,var(--color-honey-100)_0%,transparent_65%)] opacity-45" />
      </div>

      <Container className="relative">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 ring-1 ring-teal-200">
              <SmilingSun className="h-4 w-4 animate-sway" />
              <span className="text-eyebrow text-teal-700">
                Milestone &amp; Growth Guide
              </span>
            </div>
          </Reveal>

          <SectionHeading
            eyebrow=""
            title={
              <>
                Track your child&rsquo;s growth &amp;
                <br className="hidden sm:block" /> immunization at every stage.
              </>
            }
            titleId="milestone-title"
            description="Explore key development milestones, vaccination roadmaps, and pediatrician advice tailored to your little one's age."
            className="mt-4 max-w-2xl text-center"
          />
        </div>

        {/* Tab selector */}
        <Reveal delay={100} distance={16} className="mt-12 lg:mt-16">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {milestoneStages.map((stage) => {
              const isSelected = stage.id === activeStageId;
              const stageAccent = accents[stage.accent];
              const IconComp = tabIconMap[stage.iconName as keyof typeof tabIconMap] || BabyRattle;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStageId(stage.id)}
                  aria-pressed={isSelected}
                  className={cx(
                    "group flex items-center gap-2.5 rounded-full px-4 py-2.5 text-[0.875rem] font-medium transition-all duration-300 ease-premium sm:px-5 sm:py-3 sm:text-[0.9375rem]",
                    isSelected
                      ? "bg-brand-900 text-white shadow-soft scale-105"
                      : "bg-surface text-ink-muted ring-1 ring-line hover:bg-brand-50 hover:text-brand-900 hover:ring-brand-200",
                  )}
                >
                  <span
                    className={cx(
                      "grid h-6 w-6 place-items-center rounded-full transition-transform duration-300 group-hover:scale-110",
                      isSelected ? stageAccent.chip : "bg-canvas-soft",
                    )}
                  >
                    <IconComp className="h-4 w-4" />
                  </span>
                  <span>{stage.tabLabel}</span>
                  <span
                    className={cx(
                      "text-[0.75rem] px-2 py-0.5 rounded-full font-bold",
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-line/60 text-ink-soft",
                    )}
                  >
                    {stage.ageRange}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Content Card for Active Stage */}
        <Reveal key={currentStage.id} delay={120} distance={20} className="mt-10 lg:mt-12">
          <div className="overflow-hidden rounded-panel bg-surface p-7 ring-1 ring-line shadow-soft sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              {/* Left Column: Summary and Milestones */}
              <div>
                <div className="flex items-center gap-3">
                  <span
                    className={cx(
                      "grid h-12 w-12 place-items-center rounded-2xl p-2",
                      accent.chip,
                    )}
                  >
                    {(() => {
                      const IconC = tabIconMap[currentStage.iconName as keyof typeof tabIconMap] || BabyRattle;
                      return <IconC className="h-8 w-8" />;
                    })()}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.5rem] font-bold tracking-[-0.02em] text-ink sm:text-[1.75rem]">
                      {currentStage.tabLabel} Stage ({currentStage.ageRange})
                    </h3>
                    <p className="text-[0.875rem] font-medium text-ink-muted">
                      Essential developmental focus
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-[1.0625rem] leading-[1.75] text-ink-muted">
                  {currentStage.summary}
                </p>

                <h4 className="mt-8 font-display text-[1.0625rem] font-bold text-ink flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-teal-600" />
                  Key Developmental Milestones to Watch:
                </h4>

                <ul className="mt-4 space-y-3">
                  {currentStage.keyMilestones.map((m) => (
                    <li key={m} className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                      <span className={cx("mt-1.5 h-2 w-2 shrink-0 rounded-full", accent.solid)} />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Immunization roadmap & Pediatrician tip */}
              <div className="flex flex-col justify-between gap-6 rounded-2xl bg-canvas-soft p-6 ring-1 ring-line sm:p-7">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-coral-100 text-coral-600">
                      <Icon name="shield" className="h-4 w-4" />
                    </span>
                    <h4 className="font-display text-[1rem] font-bold text-ink">
                      Immunization Roadmap ({currentStage.ageRange})
                    </h4>
                  </div>

                  <p className="mt-3 text-[0.875rem] leading-relaxed font-medium text-ink">
                    {currentStage.vaccineSchedule}
                  </p>

                  <div className="mt-6 rounded-xl bg-surface p-4 ring-1 ring-line/80 border-l-3 border-teal-500">
                    <p className="text-[0.75rem] font-bold uppercase tracking-wider text-teal-700">
                      🩺 Dr. Aarav&rsquo;s Pediatric Tip:
                    </p>
                    <p className="mt-1.5 text-[0.875rem] leading-[1.65] text-ink-muted">
                      &ldquo;{currentStage.doctorTip}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="mt-4 border-t border-line/80 pt-5">
                  <ButtonLink
                    href={getWhatsAppHrefForStage(currentStage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="md"
                    className="w-full bg-[#25D366] text-white hover:bg-[#1DA851] shadow-soft"
                  >
                    <Icon name="whatsapp" className="h-4 w-4" />
                    Ask Dr. Aarav About This Stage
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
