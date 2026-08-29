"use client";

import { useEffect, useState } from "react";
import { clinic } from "@/data/clinic";
import { navLinks } from "@/data/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cx } from "@/lib/utils";
import { MobileNav } from "./MobileNav";

const sectionIds = navLinks.map((link) => link.sectionId);

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
      const track = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(track > 0 ? Math.min(1, window.scrollY / track) : 0);
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[70] focus:rounded-full focus:bg-brand-700 focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={cx(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-premium",
          scrolled
            ? "bg-canvas/90 shadow-[inset_0_-1px_0_var(--color-line)] backdrop-blur-xl backdrop-saturate-150"
            : "bg-canvas/40 backdrop-blur-sm",
        )}
      >
        <Container>
          <div
            className={cx(
              "flex items-center justify-between gap-4 transition-[height] duration-500 ease-premium",
              scrolled ? "h-[68px] lg:h-[74px]" : "h-[76px] lg:h-[92px]",
            )}
          >
            <a
              href="#home"
              className="shrink-0 rounded-lg transition-opacity duration-300 ease-premium hover:opacity-80"
            >
              <Logo />
            </a>

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => {
                  const active = activeSection === link.sectionId;
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        aria-current={active ? "true" : undefined}
                        className={cx(
                          "relative block px-3.5 py-2 text-[0.9rem] transition-colors duration-300 ease-premium",
                          active ? "text-brand-800" : "text-ink-muted hover:text-ink",
                        )}
                      >
                        {link.label}
                        <span
                          aria-hidden="true"
                          className={cx(
                            "absolute inset-x-3.5 bottom-0.5 h-px origin-center bg-brand-600",
                            "transition-transform duration-500 ease-premium",
                            active ? "scale-x-100" : "scale-x-0",
                          )}
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2 sm:gap-2.5">
              <a
                href={clinic.phone.href}
                aria-label={`Call the clinic on ${clinic.phone.display}`}
                className="grid h-11 w-11 place-items-center rounded-full text-ink-muted ring-1 ring-line-strong transition-colors duration-300 ease-premium hover:bg-brand-50 hover:text-brand-800 sm:hidden"
              >
                <Icon name="phone" className="h-[1.15rem] w-[1.15rem]" />
              </a>

              <ButtonLink
                href={clinic.phone.href}
                variant="ghost"
                size="sm"
                className="max-sm:hidden"
              >
                <Icon name="phone" className="h-4 w-4" />
                Call
              </ButtonLink>

              <a
                href={clinic.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="max-sm:hidden inline-flex select-none items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-soft transition-all duration-300 ease-premium hover:bg-[#1DA851] hover:-translate-y-0.5 hover:shadow-lift"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Book via WhatsApp
              </a>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                className="group grid h-11 w-11 place-items-center rounded-full ring-1 ring-line-strong transition-colors duration-300 ease-premium hover:bg-brand-50 lg:hidden"
              >
                <span aria-hidden="true" className="relative block h-[9px] w-5">
                  <span className="absolute left-0 top-0 h-px w-5 bg-ink transition-colors duration-300 ease-premium group-hover:bg-brand-800" />
                  <span className="absolute bottom-0 left-0 h-px w-3 bg-ink transition-[width,background-color] duration-500 ease-premium group-hover:w-5 group-hover:bg-brand-800" />
                </span>
              </button>
            </div>
          </div>
        </Container>

        <span
          aria-hidden="true"
          className={cx(
            "absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-brand-600 via-teal-400 to-coral-500",
            "transition-[transform,opacity] duration-150 ease-linear",
            scrolled ? "opacity-100" : "opacity-0",
          )}
          style={{ transform: `scaleX(${progress})` }}
        />
      </header>

      <MobileNav
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
