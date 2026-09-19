"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { doctor } from "@/data/doctor";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icons";
import {
  AnimatedHotAirBalloon,
  AnimatedPaperPlane,
  AnimatedPastelBubbles,
} from "@/components/ui/PediatricDecorations";

const AUTOPLAY_INTERVAL = 4000;

export function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const slides = doctor.banners;
  const total = slides.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  // Autoplay timer: auto-changes every 4 seconds with pause on hover/focus & reduced motion support
  useEffect(() => {
    if (isPaused) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevSlide();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      nextSlide();
    }
  };

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0]?.clientX ?? 0;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 45) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="Clinical highlights and practice gallery"
      className="relative w-full overflow-hidden bg-canvas pt-[72px] sm:pt-[80px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Banner viewport container - adapts to screen proportions */}
      <div
        className="relative w-full min-h-[520px] sm:min-h-[580px] md:min-h-[620px] lg:min-h-[660px] xl:min-h-[700px] flex items-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides rendering with smooth crossfade */}
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${total}: ${slide.title}`}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Desktop banner image (>= md) */}
              <div className="hidden md:block absolute inset-0">
                <Image
                  src={slide.desktopSrc}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Mobile banner image (< md) */}
              <div className="block md:hidden absolute inset-0">
                <Image
                  src={slide.mobileSrc}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Protective gradient scrim ensuring high contrast legibility while preserving face clarity */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#113244]/90 via-[#113244]/45 to-transparent md:bg-gradient-to-r md:from-[#113244]/85 md:via-[#113244]/45 md:to-transparent"
              />

              {/* Content overlay */}
              <Container className="relative h-full flex flex-col justify-end md:justify-center py-12 md:py-16">
                <div className="max-w-xl text-white">
                  {/* Eyebrow badge */}
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-3.5 py-1.5 ring-1 ring-white/25 shadow-sm mb-4">
                    <span className="h-2 w-2 rounded-full bg-teal-300 animate-pulse" />
                    <span className="text-[0.75rem] sm:text-[0.8125rem] font-semibold tracking-wide text-teal-100">
                      {slide.badge}
                    </span>
                  </div>

                  {/* Doctor Title / Headline */}
                  <h1 className="font-display text-[1.85rem] sm:text-[2.35rem] md:text-[2.85rem] lg:text-[3.25rem] font-bold leading-[1.12] tracking-[-0.025em] text-white drop-shadow-sm">
                    {slide.title}
                  </h1>

                  {/* Doctor Credentials Sub-badge */}
                  <div className="mt-3.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-teal-200 text-[0.875rem] sm:text-[0.9375rem] font-medium">
                    <span className="font-semibold text-white">{doctor.name}</span>
                    <span aria-hidden="true" className="text-white/40">&bull;</span>
                    <span>{doctor.qualifications}</span>
                  </div>

                  {/* Subtitle */}
                  <p className="mt-3.5 text-[0.9375rem] sm:text-[1.0625rem] leading-[1.65] text-white/90 max-w-lg drop-shadow-sm">
                    {slide.subtitle}
                  </p>

                  {/* Action Buttons */}
                  <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
                    <ButtonLink
                      href="#appointment"
                      size="lg"
                      className="bg-teal-500 hover:bg-teal-600 text-white shadow-soft"
                    >
                      <Icon name="calendar" className="h-5 w-5" />
                      Book Appointment
                    </ButtonLink>

                    <ButtonLink
                      href="#about"
                      variant="inverseOutline"
                      size="lg"
                    >
                      About Doctor
                    </ButtonLink>
                  </div>
                </div>
              </Container>
            </div>
          );
        })}

        {/* Playful live toy animations floating gracefully across hero banner */}
        <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 z-20 overflow-hidden">
          {/* Top right floating hot air balloon */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-12 lg:right-20 opacity-90 drop-shadow-md">
            <AnimatedHotAirBalloon className="h-14 w-12 sm:h-18 sm:w-16 lg:h-22 lg:w-18" />
          </div>

          {/* Top left paper plane gliding in the sky */}
          <div className="absolute top-5 left-[30%] sm:left-[45%] opacity-85 drop-shadow-sm">
            <AnimatedPaperPlane className="h-9 w-12 sm:h-11 sm:w-16" />
          </div>

          {/* Gentle ambient floating bubbles near bottom right */}
          <div className="hidden sm:block absolute bottom-14 right-10 opacity-75">
            <AnimatedPastelBubbles className="h-14 w-14 lg:h-18 lg:w-18" />
          </div>
        </div>

        {/* Carousel Prev/Next Controls (visible on tablet and desktop) */}
        <div className="hidden sm:flex absolute inset-y-0 inset-x-4 md:inset-x-8 z-20 items-center justify-between pointer-events-none">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full bg-black/25 text-white backdrop-blur-md ring-1 ring-white/20 transition-all duration-300 ease-premium hover:bg-black/45 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-teal-400"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full bg-black/25 text-white backdrop-blur-md ring-1 ring-white/20 transition-all duration-300 ease-premium hover:bg-black/45 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-teal-400"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="absolute bottom-4 sm:bottom-6 inset-x-0 z-20 flex justify-center items-center gap-2.5">
          {slides.map((slide, index) => {
            const isActive = index === current;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={isActive ? "true" : undefined}
                className={`transition-all duration-300 rounded-full h-2.5 ${
                  isActive
                    ? "w-8 bg-teal-400 shadow-sm"
                    : "w-2.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
