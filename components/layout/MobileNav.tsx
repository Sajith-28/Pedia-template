"use client";

import { useEffect, useRef } from "react";
import { clinic } from "@/data/clinic";
import { navLinks } from "@/data/navigation";
import { doctor } from "@/data/doctor";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";
import { cx } from "@/lib/utils";

type Props = {
  open: boolean;
  onClose: () => void;
  activeSection: string;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function MobileNav({ open, onClose, activeSection }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);

  /* Lock the page behind the drawer without losing scroll position. */
  useEffect(() => {
    if (!open) return;
    const { body } = document;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
    };
  }, [open]);

  /* Escape to close, Tab kept inside the panel. */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => el.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  /* Move focus into the drawer on open, and hand it back on close. */
  useEffect(() => {
    if (!open) return;

    const opener = document.activeElement as HTMLElement | null;
    const timer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    }, 220);

    return () => {
      window.clearTimeout(timer);
      // Runs exactly when the drawer closes: return focus to the trigger so
      // keyboard users are not dropped back onto <body>.
      opener?.focus();
    };
  }, [open]);

  return (
    // `inert` removes the closed drawer from the focus order *and* the
    // accessibility tree — aria-hidden alone would leave its links tabbable.
    <div
      className={cx("lg:hidden", open ? "pointer-events-auto" : "pointer-events-none")}
      inert={!open}
    >
      {/* Scrim */}
      <div
        onClick={onClose}
        className={cx(
          "fixed inset-0 z-40 bg-ink/30 transition-opacity duration-500 ease-premium",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cx(
          "fixed inset-y-0 right-0 z-50 flex w-full max-w-[26rem] flex-col bg-canvas",
          "shadow-panel transition-transform duration-[520ms] ease-premium",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-line px-5 sm:px-8">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center rounded-full text-ink-muted ring-1 ring-line-strong transition-colors duration-300 ease-premium hover:bg-brand-50 hover:text-brand-800"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        <nav
          aria-label="Mobile"
          className="flex-1 overflow-y-auto overscroll-contain px-5 py-7 sm:px-8"
        >
          <ul className="flex flex-col">
            {navLinks.map((link, index) => {
              const active = activeSection === link.sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={onClose}
                    aria-current={active ? "true" : undefined}
                    style={{ transitionDelay: open ? `${140 + index * 55}ms` : "0ms" }}
                    className={cx(
                      "flex items-center justify-between border-b border-line/80 py-4",
                      "font-display text-[1.4rem] tracking-[-0.02em]",
                      "transition-[opacity,transform,color] duration-500 ease-premium",
                      open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0",
                      active ? "text-brand-700" : "text-ink hover:text-brand-700",
                    )}
                  >
                    {link.label}
                    <Icon
                      name="arrowUpRight"
                      className={cx(
                        "h-4 w-4 transition-opacity duration-300",
                        active ? "opacity-100" : "opacity-30",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div
            style={{ transitionDelay: open ? "480ms" : "0ms" }}
            className={cx(
              "mt-8 space-y-4 transition-[opacity,transform] duration-500 ease-premium",
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
            )}
          >
            <p className="text-eyebrow text-ink-soft">Consultation</p>
            <div className="space-y-1.5 text-[0.9375rem] text-ink-muted">
              <p className="font-medium text-ink">{clinic.hours.days}</p>
              <p>{clinic.hours.morning}</p>
              <p>{clinic.hours.evening}</p>
            </div>
            <p className="text-[0.8125rem] text-ink-soft">
              {doctor.name} &middot; {doctor.shortTitle}
            </p>
          </div>
        </nav>

        <div className="shrink-0 border-t border-line bg-surface/60 px-5 pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-8">
          <div className="flex flex-col gap-3">
            <a
              href={clinic.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="inline-flex select-none items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3.5 text-base font-bold text-white shadow-soft transition-all duration-300 hover:bg-[#1DA851] w-full"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Book via WhatsApp
            </a>
            <ButtonLink
              href={clinic.phone.href}
              variant="secondary"
              size="lg"
              className="w-full"
            >
              <Icon name="phone" className="h-4 w-4" />
              {clinic.phone.display}
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
