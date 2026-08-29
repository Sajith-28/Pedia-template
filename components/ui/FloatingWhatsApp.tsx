"use client";

import { useState } from "react";
import { clinic } from "@/data/clinic";
import { Icon } from "@/components/ui/Icons";
import { TeddyBear } from "@/components/ui/PediatricDecorations";
import { cx } from "@/lib/utils";

const quickPrompts = [
  {
    label: "📅 Book Checkup",
    text: "Hi, I would like to schedule a routine pediatric consultation for my child.",
  },
  {
    label: "💉 Vaccination",
    text: "Hi, I would like to inquire about immunization schedules and book a vaccine slot.",
  },
  {
    label: "🤒 Sick Visit",
    text: "Hi Dr. Aarav's Clinic, my child is feeling unwell and I'd like to book an urgent consultation.",
  },
];

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const getWhatsAppUrl = (customText?: string) => {
    const text = customText || clinic.whatsapp.message;
    return `https://wa.me/${clinic.whatsapp.number}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Expanded Quick-Chat Drawer / Card */}
      {isOpen && (
        <div className="w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-[1.5rem] bg-surface p-5 ring-1 ring-line shadow-panel animate-float-bob [animation-duration:8s]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-line pb-3.5">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366]/15 text-[#25D366]">
                  <Icon name="whatsapp" className="h-5 w-5" />
                </span>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-[#25D366] ring-2 ring-surface animate-pulse" />
              </div>
              <div>
                <p className="font-display text-[0.9375rem] font-bold text-ink flex items-center gap-1.5">
                  Little Bloom Care
                  <TeddyBear className="h-3.5 w-3.5" />
                </p>
                <p className="text-[0.75rem] text-ink-soft">
                  Usually replies in 15 mins
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp prompt"
              className="grid h-8 w-8 place-items-center rounded-full text-ink-soft hover:bg-canvas-soft hover:text-ink"
            >
              <Icon name="close" className="h-4 w-4" />
            </button>
          </div>

          {/* Body */}
          <div className="mt-3.5">
            <p className="text-[0.875rem] leading-relaxed text-ink-muted">
              Hello! 👋 How can Dr. Aarav Mehta and the clinic team assist you and your child today?
            </p>

            <div className="mt-4 flex flex-col gap-2">
              {quickPrompts.map((prompt) => (
                <a
                  key={prompt.label}
                  href={getWhatsAppUrl(prompt.text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl bg-canvas-soft px-3.5 py-2.5 text-[0.8125rem] font-medium text-ink transition-colors hover:bg-brand-50 hover:text-brand-800 ring-1 ring-line/60"
                >
                  <span>{prompt.label}</span>
                  <Icon name="arrowRight" className="h-3.5 w-3.5 text-brand-600" />
                </a>
              ))}
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-[0.875rem] font-semibold text-white shadow-soft transition-all hover:bg-[#1DA851] hover:shadow-lift"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Open WhatsApp Chat
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Contact pediatrician on WhatsApp"
        className="group relative flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-playful transition-all duration-300 ease-premium hover:bg-[#1DA851] hover:scale-105 active:scale-95"
      >
        <span className="relative">
          <Icon name="whatsapp" className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-white ring-2 ring-[#25D366] animate-ping" />
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-white ring-2 ring-[#25D366]" />
        </span>
        <span className="hidden sm:inline font-display text-[0.875rem] font-bold tracking-tight">
          Chat on WhatsApp
        </span>
      </button>
    </div>
  );
}
