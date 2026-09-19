"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { contact } from "@/data/contact";
import { navLinks } from "@/data/navigation";
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
  const spiedSection = useActiveSection(sectionIds);
  // Off the home page the sections do not exist, so the anchors have to point
  // back at the home page rather than at the current route, and nothing in the
  // nav is "current".
  const linkPrefix = usePathname() === "/" ? "" : "/";
  const activeSection = linkPrefix === "" ? spiedSection : "";

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
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter,border-color] duration-500 ease-premium border-b-2",
          scrolled
            ? "bg-gradient-to-r from-[#BAE6FD]/95 via-[#CBE8F9]/95 to-[#FCE7F3]/95 border-sky-300 shadow-md backdrop-blur-xl backdrop-saturate-150"
            : "bg-gradient-to-r from-[#BAE6FD]/90 via-[#DCF0FA]/90 to-[#FCE7F3]/90 border-sky-300/80 shadow-xs backdrop-blur-md",
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
              href={linkPrefix || "#home"}
              className="shrink-0 rounded-lg transition-opacity duration-300 ease-premium hover:opacity-80"
            >
              <Logo />
            </a>

            {/* Seven links need the wider breakpoint; below it the drawer takes over. */}
            <nav aria-label="Primary" className="hidden xl:block">
              <ul className="flex items-center gap-1.5">
                {navLinks.map((link) => {
                  const active = activeSection === link.sectionId;
                  return (
                    <li key={link.href}>
                      <a
                        href={`${linkPrefix}${link.href}`}
                        aria-current={active ? "true" : undefined}
                        className={cx(
                          "relative block px-3.5 py-1.5 text-[0.925rem] font-semibold rounded-full transition-all duration-300 ease-premium",
                          active
                            ? "text-[#113244] bg-white/80 shadow-xs ring-1 ring-sky-300"
                            : "text-[#183B4A] hover:text-[#0284C7] hover:bg-white/50",
                        )}
                      >
                        {link.label}
                        <span
                          aria-hidden="true"
                          className={cx(
                            "absolute inset-x-3.5 bottom-0.5 h-0.5 origin-center bg-sky-600 rounded-full",
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
              {contact.isConfigured ? (
                <a
                  href={contact.telHref}
                  aria-label={`Call ${contact.display}`}
                  className="grid h-11 w-11 place-items-center rounded-full text-[#113244] bg-white/70 border border-sky-300 transition-colors duration-300 ease-premium hover:bg-white hover:text-sky-800 sm:hidden"
                >
                  <Icon name="phone" className="h-[1.15rem] w-[1.15rem]" />
                </a>
              ) : null}

              <a
                href={`${linkPrefix}#appointment`}
                className="max-sm:hidden inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#113244] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-soft transition-all duration-300 ease-premium hover:bg-[#164055] hover:-translate-y-0.5 hover:shadow-lift border border-sky-400/40"
              >
                <Icon name="calendar" className="h-4 w-4 text-sky-300" />
                Book Appointment
              </a>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                className="group grid h-11 w-11 place-items-center rounded-full bg-white/70 border border-sky-300 transition-colors duration-300 ease-premium hover:bg-white xl:hidden"
              >
                <span aria-hidden="true" className="relative block h-[9px] w-5">
                  <span className="absolute left-0 top-0 h-0.5 w-5 bg-[#113244] transition-colors duration-300 ease-premium group-hover:bg-sky-800" />
                  <span className="absolute bottom-0 left-0 h-0.5 w-3 bg-[#113244] transition-[width,background-color] duration-500 ease-premium group-hover:w-5 group-hover:bg-sky-800" />
                </span>
              </button>
            </div>
          </div>
        </Container>

        <span
          aria-hidden="true"
          className={cx(
            "absolute inset-x-0 bottom-0 h-1 origin-left bg-gradient-to-r from-sky-400 via-pink-400 to-sky-500",
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
        linkPrefix={linkPrefix}
      />
    </>
  );
}
