"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { contact } from "@/data/contact";
import { navLinks } from "@/data/navigation";
import { expertiseAreas } from "@/data/expertise";
import { accents } from "@/lib/accents";
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
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const spiedSection = useActiveSection(sectionIds);
  // Off the home page the sections do not exist, so the anchors have to point
  // back at the home page rather than at the current route, and nothing in the
  // nav is "current".
  const linkPrefix = usePathname() === "/" ? "" : "/";
  const activeSection = linkPrefix === "" ? spiedSection : "";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setExpertiseOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpertiseOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
                  const isExpertise = link.sectionId === "expertise";

                  if (isExpertise) {
                    return (
                      <li
                        key={link.href}
                        ref={dropdownRef}
                        className="relative"
                        onMouseEnter={() => setExpertiseOpen(true)}
                        onMouseLeave={() => setExpertiseOpen(false)}
                      >
                        <button
                          type="button"
                          onClick={() => setExpertiseOpen((prev) => !prev)}
                          aria-expanded={expertiseOpen}
                          aria-haspopup="true"
                          className={cx(
                            "relative flex items-center gap-1.5 px-3.5 py-1.5 text-[0.925rem] font-semibold rounded-full transition-all duration-300 ease-premium cursor-pointer",
                            expertiseOpen
                              ? "text-[#d9222a] bg-white/90 shadow-xs ring-1 ring-red-200"
                              : active
                                ? "text-[#113244] bg-white/80 shadow-xs ring-1 ring-sky-300"
                                : "text-[#183B4A] hover:text-[#0284C7] hover:bg-white/50",
                          )}
                        >
                          <span className={cx(expertiseOpen && "text-[#d9222a] font-bold")}>{link.label}</span>
                          <Icon
                            name="chevronDown"
                            className={cx(
                              "h-3.5 w-3.5 transition-transform duration-300",
                              expertiseOpen ? "rotate-180 text-[#d9222a]" : "text-sky-600",
                            )}
                          />
                          <span
                            aria-hidden="true"
                            className={cx(
                              "absolute inset-x-3.5 bottom-0.5 h-0.5 origin-center bg-sky-600 rounded-full",
                              "transition-transform duration-500 ease-premium",
                              active && !expertiseOpen ? "scale-x-100" : "scale-x-0",
                            )}
                          />
                        </button>

                        {/* Dropdown Menu matching user example style */}
                        <div
                          className={cx(
                            "absolute left-1/2 top-full -translate-x-1/2 pt-1 transition-all duration-200 ease-premium z-50",
                            expertiseOpen
                              ? "opacity-100 pointer-events-auto translate-y-0"
                              : "opacity-0 pointer-events-none -translate-y-2",
                          )}
                        >
                          <div className="w-72 sm:w-80 overflow-hidden rounded-b-xl bg-[#0f4d60] shadow-2xl border-t-4 border-[#d9222a]">
                            <ul className="flex flex-col">
                              {expertiseAreas.map((area) => (
                                <li key={area.slug} className="border-b border-[#1b5d72]/60 last:border-b-0">
                                  <a
                                    href={`${linkPrefix}#expertise-${area.slug}`}
                                    onClick={() => setExpertiseOpen(false)}
                                    className="group/item flex items-center justify-between px-5 py-3.5 text-[0.9375rem] font-medium text-white/95 transition-colors duration-150 hover:bg-[#0b3e4f] hover:text-white"
                                  >
                                    <span className="truncate pr-3">{area.title}</span>
                                    <Icon
                                      name="chevronRight"
                                      className="h-3.5 w-3.5 shrink-0 text-white/60 transition-transform duration-200 group-hover/item:translate-x-1 group-hover/item:text-white"
                                    />
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </li>
                    );
                  }

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
