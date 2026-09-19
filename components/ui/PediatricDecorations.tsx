import type { SVGProps } from "react";
import { cx } from "@/lib/utils";

type SvgProps = SVGProps<SVGSVGElement> & { className?: string };

/**
 * Modern, abstract pediatric-friendly shapes.
 * Replaces cartoon figures with soft pastel blobs, gentle rings, calm bubbles,
 * and subtle geometric accents per clinical design guidelines.
 */

export function TeddyBear({ className, ...props }: SvgProps) {
  // Abstract soft pastel organic blob with gentle inner accent
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="24" cy="24" r="18" fill="var(--color-pedia-pink-mid, #F9E1EC)" opacity="0.85" />
      <circle cx="24" cy="24" r="11" fill="var(--color-pedia-blue-soft, #BFE4F1)" opacity="0.65" />
      <circle cx="24" cy="24" r="5" fill="#ffffff" opacity="0.9" />
    </svg>
  );
}

export function SmilingCloud({ className, ...props }: SvgProps) {
  // Elegant abstract soft cloud curve
  return (
    <svg viewBox="0 0 64 42" fill="none" className={className} aria-hidden="true" {...props}>
      <path
        d="M18 34h28a10 10 0 0 0 5-19 13 13 0 0 0-23-4 11 11 0 0 0-14 10 9 9 0 0 0 4 13Z"
        fill="var(--color-pedia-blue-light, #EAF6FB)"
        stroke="var(--color-pedia-blue-soft, #BFE4F1)"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="23" cy="23" r="1.5" fill="var(--color-pedia-text-secondary, #536770)" opacity="0.4" />
      <circle cx="39" cy="23" r="1.5" fill="var(--color-pedia-text-secondary, #536770)" opacity="0.4" />
    </svg>
  );
}

export function SmilingSun({ className, ...props }: SvgProps) {
  // Refined soft glow sun with delicate rays
  return (
    <svg viewBox="0 0 52 52" fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="26" cy="26" r="12" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="1.5" />
      <circle cx="26" cy="26" r="18" stroke="#FDE68A" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
    </svg>
  );
}

export function ToyBlocks({ className, ...props }: SvgProps) {
  // Minimalist pastel geometric stack
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true" {...props}>
      <rect x="8" y="24" width="16" height="16" rx="4" fill="var(--color-pedia-blue-mid, #DDF1F8)" stroke="var(--color-pedia-blue-soft, #BFE4F1)" strokeWidth="1.5" />
      <rect x="24" y="24" width="16" height="16" rx="4" fill="var(--color-pedia-pink-mid, #F9E1EC)" stroke="var(--color-pedia-pink-soft, #F3C8D9)" strokeWidth="1.5" />
      <rect x="16" y="8" width="16" height="16" rx="4" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="1.5" />
    </svg>
  );
}

export function BabyRattle({ className, ...props }: SvgProps) {
  // Soft abstract ring rattle
  return (
    <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="26" cy="18" r="12" fill="var(--color-pedia-blue-light, #EAF6FB)" stroke="var(--color-pedia-blue-soft, #BFE4F1)" strokeWidth="2" />
      <circle cx="26" cy="18" r="5" fill="var(--color-pedia-pink-soft, #F3C8D9)" opacity="0.7" />
      <path d="M18 26l-8 8" stroke="var(--color-pedia-blue-soft, #BFE4F1)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="8" cy="36" r="3.5" fill="#FEF3C7" />
    </svg>
  );
}

export function BandageHeart({ className, ...props }: SvgProps) {
  // Abstract gentle heart with clinical cross
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true" {...props}>
      <rect x="10" y="14" width="28" height="20" rx="6" fill="var(--color-pedia-pink-light, #FCECF3)" stroke="var(--color-pedia-pink-soft, #F3C8D9)" strokeWidth="1.5" />
      <path d="M24 20v8M20 24h8" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
    </svg>
  );
}

export function HotAirBalloon({ className, ...props }: SvgProps) {
  // Abstract pastel balloon droplet
  return (
    <svg viewBox="0 0 48 56" fill="none" className={className} aria-hidden="true" {...props}>
      <path
        d="M24 6C16 6 10 13 10 22c0 7 6 14 14 17 8-3 14-10 14-17 0-9-6-16-14-16z"
        fill="var(--color-pedia-blue-mid, #DDF1F8)"
        stroke="var(--color-pedia-blue-soft, #BFE4F1)"
        strokeWidth="1.5"
      />
      <circle cx="24" cy="22" r="6" fill="var(--color-pedia-pink-light, #FCECF3)" />
      <rect x="21" y="45" width="6" height="5" rx="1.5" fill="#E2E8F0" />
      <path d="M19 39l2 6M29 39l-2 6" stroke="#94A3B8" strokeWidth="1" />
    </svg>
  );
}

export function StethoscopeHeart({ className, ...props }: SvgProps) {
  // Subtle clinical heart stethoscope line
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true" {...props}>
      <path
        d="M16 12v6a8 8 0 0 0 16 0v-6"
        stroke="var(--color-pedia-blue-soft, #BFE4F1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 26v4a5 5 0 0 0 5 5h1a4 4 0 0 0 4-4v-1"
        stroke="var(--color-pedia-pink-soft, #F3C8D9)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="34" cy="30" r="3" fill="var(--color-brand-500, #2b6784)" />
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
 * Ambient floating decorative backdrop container that renders tasteful,
 * soft abstract pastel blobs and subtle rings in the light blue and light pink system.
 */
export function PediatricDoodlesBackdrop({
  density = "medium",
  className,
}: {
  density?: "light" | "medium" | "full";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cx("pointer-events-none absolute inset-0 overflow-hidden select-none", className)}
    >
      {/* Soft gradient blob - top left */}
      <div className="absolute -top-12 -left-12 h-72 w-72 rounded-full bg-gradient-to-br from-[var(--color-pedia-blue-light)] to-transparent opacity-70 blur-2xl animate-drift-a" />

      {/* Soft gradient blob - top right */}
      <div className="absolute top-10 right-[5%] h-80 w-80 rounded-full bg-gradient-to-bl from-[var(--color-pedia-pink-light)] to-transparent opacity-65 blur-3xl animate-drift-b" />

      {/* Delicate floating ring - top left */}
      <div className="absolute top-32 left-[6%] h-10 w-10 rounded-full border border-sky-200/50 animate-float-slow opacity-60" />

      {/* Little Twinkling Stars */}
      <div className="absolute top-[22%] left-[14%] text-amber-300 animate-twinkle opacity-70">
        <TwinklingStar className="h-4 w-4" />
      </div>

      <div className="absolute top-[32%] right-[10%] text-rose-300 animate-twinkle opacity-65 [animation-delay:1.4s]">
        <TwinklingStar className="h-3.5 w-3.5" />
      </div>

      <div className="absolute bottom-[24%] left-[9%] text-sky-300 animate-twinkle opacity-60 [animation-delay:2.2s]">
        <TwinklingStar className="h-4 w-4" />
      </div>

      {density !== "light" && (
        <>
          {/* Subtle soft organic circle floating mid-right */}
          <div className="hidden sm:block absolute top-[44%] right-[3%] h-14 w-14 rounded-full bg-[var(--color-pedia-pink-mid)] opacity-40 blur-sm animate-float-bob" />

          {/* Gentle pastel blob mid-left */}
          <div className="hidden sm:block absolute top-[52%] left-[2%] h-12 w-12 rounded-full bg-[var(--color-pedia-blue-mid)] opacity-50 blur-sm animate-sway [animation-delay:0.8s]" />

          {/* Subtle soft ring bottom-right */}
          <div className="absolute bottom-12 right-[14%] h-12 w-12 rounded-full border border-rose-200/50 animate-float-slow opacity-50 [animation-delay:1.6s]" />

          {/* Subtle soft ring bottom-left */}
          <div className="absolute bottom-16 left-[20%] h-8 w-8 rounded-full border border-sky-200/40 animate-float-bob opacity-55 [animation-delay:2s]" />
        </>
      )}

      {density === "full" && (
        <>
          <div className="hidden lg:block absolute top-[18%] right-[22%] h-6 w-6 rounded-full bg-amber-200/40 animate-float-slower" />
          <div className="hidden lg:block absolute bottom-[30%] right-[24%] h-5 w-5 rounded-full border border-sky-300/40 animate-sway" />
        </>
      )}
    </div>
  );
}
