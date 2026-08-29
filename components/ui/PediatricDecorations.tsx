import type { SVGProps } from "react";
import { cx } from "@/lib/utils";

type SvgProps = SVGProps<SVGSVGElement> & { className?: string };

export function TeddyBear({ className, ...props }: SvgProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true" {...props}>
      {/* Ears */}
      <circle cx="11" cy="14" r="6.5" fill="#e0714d" />
      <circle cx="11" cy="14" r="3.5" fill="#fdf0ec" />
      <circle cx="37" cy="14" r="6.5" fill="#e0714d" />
      <circle cx="37" cy="14" r="3.5" fill="#fdf0ec" />
      {/* Head */}
      <circle cx="24" cy="26" r="16" fill="#cf9a26" />
      {/* Cheeks */}
      <circle cx="16" cy="29" r="2.5" fill="#f4c3b2" opacity="0.8" />
      <circle cx="32" cy="29" r="2.5" fill="#f4c3b2" opacity="0.8" />
      {/* Eyes */}
      <circle cx="18" cy="23" r="2.2" fill="#13202a" />
      <circle cx="30" cy="23" r="2.2" fill="#13202a" />
      <circle cx="19" cy="22" r="0.8" fill="#ffffff" />
      <circle cx="31" cy="22" r="0.8" fill="#ffffff" />
      {/* Snout */}
      <ellipse cx="24" cy="29" rx="6.5" ry="5" fill="#f8e8c2" />
      <ellipse cx="24" cy="27" rx="2.5" ry="1.8" fill="#13202a" />
      <path
        d="M24 28.5V31M21.5 30.5C22.3 31.8 23.2 32.2 24 32.2C24.8 32.2 25.7 31.8 26.5 30.5"
        stroke="#13202a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SmilingCloud({ className, ...props }: SvgProps) {
  return (
    <svg viewBox="0 0 64 42" fill="none" className={className} aria-hidden="true" {...props}>
      <path
        d="M18 36h28a12 12 0 0 0 6-22.4A15 15 0 0 0 24 10.5 13 13 0 0 0 8 22a10 10 0 0 0 10 14Z"
        fill="#e0edf3"
        stroke="#94bfd3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Cheeks */}
      <circle cx="21" cy="26" r="2.5" fill="#f4c3b2" />
      <circle cx="43" cy="26" r="2.5" fill="#f4c3b2" />
      {/* Cute eyes */}
      <path
        d="M26 21c.5 1.5 2 2.2 3.5 1.5M35 22.5c1.5.7 3 0 3.5-1.5"
        stroke="#2b6784"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Smiling mouth */}
      <path
        d="M29 27c1.5 2 4.5 2 6 0"
        stroke="#2b6784"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SmilingSun({ className, ...props }: SvgProps) {
  return (
    <svg viewBox="0 0 52 52" fill="none" className={className} aria-hidden="true" {...props}>
      {/* Rays */}
      <g stroke="#cf9a26" strokeWidth="2.5" strokeLinecap="round">
        <line x1="26" y1="4" x2="26" y2="9" />
        <line x1="26" y1="43" x2="26" y2="48" />
        <line x1="4" y1="26" x2="9" y2="26" />
        <line x1="43" y1="26" x2="48" y2="26" />
        <line x1="10.5" y1="10.5" x2="14" y2="14" />
        <line x1="38" y1="38" x2="41.5" y2="41.5" />
        <line x1="10.5" y1="41.5" x2="14" y2="38" />
        <line x1="38" y1="14" x2="41.5" y2="10.5" />
      </g>
      {/* Sun disk */}
      <circle cx="26" cy="26" r="14" fill="#f8e8c2" stroke="#cf9a26" strokeWidth="2" />
      {/* Cheeks */}
      <circle cx="19" cy="28" r="2" fill="#e0714d" opacity="0.6" />
      <circle cx="33" cy="28" r="2" fill="#e0714d" opacity="0.6" />
      {/* Eyes */}
      <circle cx="21" cy="23" r="1.8" fill="#13202a" />
      <circle cx="31" cy="23" r="1.8" fill="#13202a" />
      {/* Smile */}
      <path
        d="M22 28.5c1.5 2.5 6.5 2.5 8 0"
        stroke="#13202a"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ToyBlocks({ className, ...props }: SvgProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true" {...props}>
      {/* Block 1 (A) */}
      <rect x="6" y="22" width="18" height="18" rx="3.5" fill="#fdf0ec" stroke="#e0714d" strokeWidth="2" />
      <text x="15" y="35" fill="#e0714d" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
        A
      </text>
      {/* Block 2 (B) */}
      <rect x="24" y="22" width="18" height="18" rx="3.5" fill="#eaf6ef" stroke="#429c72" strokeWidth="2" />
      <text x="33" y="35" fill="#429c72" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
        B
      </text>
      {/* Block 3 (C) stacked on top */}
      <rect x="15" y="6" width="18" height="18" rx="3.5" fill="#fdf6e7" stroke="#cf9a26" strokeWidth="2" />
      <text x="24" y="19" fill="#cf9a26" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
        C
      </text>
    </svg>
  );
}

export function BabyRattle({ className, ...props }: SvgProps) {
  return (
    <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden="true" {...props}>
      {/* Head */}
      <circle cx="28" cy="16" r="11" fill="#eff8f6" stroke="#3a8f87" strokeWidth="2" />
      {/* Inner cute star in rattle */}
      <path
        d="M28 10l1.8 3.8 4.2.6-3 3 .7 4.2-3.7-2-3.7 2 .7-4.2-3-3 4.2-.6L28 10z"
        fill="#83c6be"
      />
      {/* Handle */}
      <path
        d="M21 24l-9 9"
        stroke="#3a8f87"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Ring at bottom */}
      <circle cx="10" cy="35" r="4.5" fill="#f8e8c2" stroke="#cf9a26" strokeWidth="2" />
    </svg>
  );
}

export function BandageHeart({ className, ...props }: SvgProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true" {...props}>
      <g transform="rotate(-15 24 24)">
        {/* Bandage strip */}
        <rect x="6" y="15" width="36" height="18" rx="6" fill="#f8e8c2" stroke="#cf9a26" strokeWidth="2" />
        {/* Dots */}
        <circle cx="12" cy="24" r="1.2" fill="#cf9a26" />
        <circle cx="36" cy="24" r="1.2" fill="#cf9a26" />
        {/* White center pad */}
        <rect x="18" y="16" width="12" height="16" rx="2" fill="#ffffff" />
        {/* Heart */}
        <path
          d="M24 28s-4-2.8-4-5.2c0-1.4 1-2.3 2.3-2.3 1 0 1.7.6 1.7.6s.7-.6 1.7-.6c1.3 0 2.3.9 2.3 2.3 0 2.4-4 5.2-4 5.2z"
          fill="#e0714d"
        />
      </g>
    </svg>
  );
}

export function HotAirBalloon({ className, ...props }: SvgProps) {
  return (
    <svg viewBox="0 0 48 56" fill="none" className={className} aria-hidden="true" {...props}>
      {/* Balloon envelope */}
      <path
        d="M24 4C14 4 6 12 6 22c0 8 7 15 14 18h8c7-3 14-10 14-18 0-10-8-18-18-18z"
        fill="#fadfd5"
        stroke="#e0714d"
        strokeWidth="2"
      />
      {/* Stripes */}
      <path
        d="M24 4c-5 0-9 8-9 18 0 7 4 15 9 18 5-3 9-11 9-18 0-10-4-18-9-18z"
        fill="#83c6be"
      />
      <path d="M24 4v36" stroke="#2c736d" strokeWidth="1.5" />
      {/* Ropes */}
      <line x1="18" y1="40" x2="20" y2="47" stroke="#cf9a26" strokeWidth="1.5" />
      <line x1="30" y1="40" x2="28" y2="47" stroke="#cf9a26" strokeWidth="1.5" />
      {/* Basket */}
      <rect x="19" y="47" width="10" height="7" rx="1.5" fill="#f0d494" stroke="#cf9a26" strokeWidth="1.5" />
    </svg>
  );
}

export function StethoscopeHeart({ className, ...props }: SvgProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true" {...props}>
      {/* Heart tubing */}
      <path
        d="M14 12V8a2 2 0 0 1 4 0v10c0 6 5 11 11 11s11-5 11-11V8a2 2 0 0 1 4 0v4"
        stroke="#3b7f9d"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Loop into heart */}
      <path
        d="M24 29c0 4-4 8-8 10-3-2-6-5-6-9 0-3 2.5-5 5.5-5 2 0 3.5 1.2 3.5 1.2s1.5-1.2 3.5-1.2c2 0 3.5 1.2 4 2.5"
        stroke="#e0714d"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Chest piece */}
      <circle cx="24" cy="41" r="3.5" fill="#83c6be" stroke="#2c736d" strokeWidth="1.8" />
    </svg>
  );
}

export function TwinklingStar({ className, ...props }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" {...props}>
      <path
        d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Ambient floating decorative backdrop container that renders cute pediatric doodles
 * with staggered gentle floating and sway keyframes.
 */
export function PediatricDoodlesBackdrop({
  density = "medium",
  className,
}: {
  density?: "light" | "medium" | "full";
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={cx("pointer-events-none absolute inset-0 overflow-hidden select-none", className)}>
      {/* Floating Cloud Top Left */}
      <div className="absolute -top-4 left-[3%] animate-float-slow opacity-60 sm:opacity-85">
        <SmilingCloud className="h-14 w-20 drop-shadow-sm transition-transform duration-700 hover:scale-125" />
      </div>

      {/* Floating Smiling Sun Top Right */}
      <div className="absolute top-6 right-[4%] animate-sway opacity-70 sm:opacity-90">
        <SmilingSun className="h-12 w-12 drop-shadow-sm" />
      </div>

      {/* Little Twinkling Stars */}
      <div className="absolute top-[18%] left-[18%] text-honey-500 animate-twinkle opacity-75">
        <TwinklingStar className="h-5 w-5" />
      </div>

      <div className="absolute top-[35%] right-[14%] text-coral-500 animate-twinkle opacity-70 [animation-delay:1.2s]">
        <TwinklingStar className="h-4 w-4" />
      </div>

      <div className="absolute bottom-[22%] left-[8%] text-teal-400 animate-twinkle opacity-65 [animation-delay:2.1s]">
        <TwinklingStar className="h-6 w-6" />
      </div>

      {density !== "light" && (
        <>
          {/* Cute Teddy Bear floating left-mid */}
          <div className="hidden sm:block absolute top-[52%] -left-2 animate-float-bob opacity-85">
            <TeddyBear className="h-14 w-14 drop-shadow-sm" />
          </div>

          {/* Toy Blocks floating right-mid */}
          <div className="hidden sm:block absolute top-[44%] right-[2%] animate-sway opacity-85 [animation-delay:0.8s]">
            <ToyBlocks className="h-13 w-13 drop-shadow-sm" />
          </div>

          {/* Bandage with Heart floating bottom-right */}
          <div className="absolute bottom-6 right-[12%] animate-float-slow opacity-75 sm:opacity-90 [animation-delay:1.5s]">
            <BandageHeart className="h-11 w-11 drop-shadow-sm" />
          </div>

          {/* Baby Rattle floating bottom-left */}
          <div className="absolute bottom-10 left-[22%] animate-float-bob opacity-70 sm:opacity-85 [animation-delay:2s]">
            <BabyRattle className="h-10 w-10 drop-shadow-sm" />
          </div>
        </>
      )}

      {density === "full" && (
        <>
          {/* Hot Air Balloon */}
          <div className="hidden lg:block absolute top-[14%] right-[26%] animate-float-slower opacity-80">
            <HotAirBalloon className="h-14 w-12 drop-shadow-sm" />
          </div>
          {/* Stethoscope Heart */}
          <div className="hidden lg:block absolute bottom-[30%] right-[28%] animate-sway opacity-75">
            <StethoscopeHeart className="h-12 w-12 drop-shadow-sm" />
          </div>
        </>
      )}
    </div>
  );
}
