"use client";

import { useState } from "react";
import { contact, quickEnquiryMessage, whatsappUrl } from "@/data/contact";
import { doctor } from "@/data/doctor";
import { Icon } from "@/components/ui/Icons";

/**
 * Topics drawn from the client-approved areas of expertise with friendly emojis.
 */
const quickPrompts = [
  {
    label: "Book a consultation",
    icon: "calendar" as const,
    text: "Hello Dr. Ushapriya 👩‍⚕️, I would like to book a consultation for my child. 🩺👶",
  },
  {
    label: "Newborn care",
    icon: "cradle" as const,
    text: "Hello Dr. Ushapriya 👩‍⚕️, I would like to enquire about newborn care for my baby. 🍼👶",
  },
  {
    label: "Growth & development",
    icon: "growth" as const,
    text: "Hello Dr. Ushapriya 👩‍⚕️, I would like to consult regarding my child's growth and development. 🌱📈",
  },
];

/**
 * Floating call-to-action.
 *
 * Falls back to an appointment-form link while no WhatsApp number is
 * configured, so the button is never a dead end and no placeholder number is
 * ever shown.
 */
export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  if (!contact.isConfigured) {
    return (
      <div className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
        <a
          href="#appointment"
          className="group flex items-center gap-3 rounded-full bg-brand-700 px-4 py-3 text-white shadow-playful transition-all duration-300 ease-premium hover:scale-105 hover:bg-brand-800 active:scale-95"
        >
          <Icon
            name="calendar"
            className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6"
          />
          <span className="hidden font-display text-[0.875rem] font-bold tracking-tight sm:inline">
            Book Appointment
          </span>
        </a>
      </div>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {isOpen && (
        <div className="w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-[1.5rem] bg-surface p-5 ring-1 ring-line shadow-panel">
          <div className="flex items-center justify-between border-b border-line pb-3.5">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366]/15 text-[#25D366]">
                  <Icon name="whatsapp" className="h-5 w-5" />
                </span>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-[#25D366] ring-2 ring-surface" />
              </div>
              <div>
                <p className="font-display text-[0.9375rem] font-bold text-ink">
                  {doctor.shortName}
                </p>
                <p className="text-[0.75rem] text-ink-soft">Appointment enquiries</p>
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

          <div className="mt-3.5">
            <p className="text-[0.875rem] leading-relaxed text-ink-muted">
              Choose a topic to start a WhatsApp message, or open the appointment form for
              a full enquiry.
            </p>

            <div className="mt-4 flex flex-col gap-2">
              {quickPrompts.map((prompt) => (
                <a
                  key={prompt.label}
                  href={whatsappUrl(prompt.text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl bg-canvas-soft px-3.5 py-2.5 text-[0.8125rem] font-medium text-ink ring-1 ring-line/60 transition-colors hover:bg-brand-50 hover:text-brand-800"
                >
                  <span className="flex items-center gap-2.5">
                    <Icon name={prompt.icon} className="h-4 w-4 shrink-0 text-brand-600" />
                    {prompt.label}
                  </span>
                  <Icon name="arrowRight" className="h-3.5 w-3.5 shrink-0 text-brand-600" />
                </a>
              ))}
            </div>

            <a
              href={whatsappUrl(quickEnquiryMessage)}
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

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={`Contact ${doctor.name} on WhatsApp`}
        aria-expanded={isOpen}
        className="group relative flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-playful transition-all duration-300 ease-premium hover:scale-105 hover:bg-[#1DA851] active:scale-95"
      >
        <Icon
          name="whatsapp"
          className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12"
        />
        <span className="hidden font-display text-[0.875rem] font-bold tracking-tight sm:inline">
          Chat on WhatsApp
        </span>
      </button>
    </div>
  );
}
