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

/* =========================================================================
   LIVE MOVING ANIMATED TOYS
   Delightful, cheerful pediatric vector toys that gently float, rock, and
   sway with smooth, GPU-accelerated micro-animations.
   ========================================================================= */

/**
 * Animated Hot Air Balloon: Gently drifts and floats with a whimsical
 * striped canopy, little bunting pennants, and a basket.
 */
export function AnimatedHotAirBalloon({ className, ...props }: SvgProps) {
  return (
    <div className={cx("inline-block animate-balloon-drift select-none", className)}>
      <svg
        viewBox="0 0 64 80"
        fill="none"
        className="h-full w-full drop-shadow-sm"
        aria-hidden="true"
        {...props}
      >
        {/* Main balloon canopy */}
        <defs>
          <linearGradient id="balloon-blue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DDF1F8" />
            <stop offset="100%" stopColor="#BFE4F1" />
          </linearGradient>
          <linearGradient id="balloon-pink" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FDECF3" />
            <stop offset="100%" stopColor="#F3C8D9" />
          </linearGradient>
          <linearGradient id="balloon-yellow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FEF9E7" />
            <stop offset="100%" stopColor="#FDE68A" />
          </linearGradient>
        </defs>

        {/* Center pink panel */}
        <path
          d="M32 4c-12 0-22 10-22 22 0 10 9 20 18 24h8c9-4 18-14 18-24 0-12-10-22-22-22z"
          fill="url(#balloon-pink)"
        />

        {/* Outer left blue stripe */}
        <path
          d="M32 4c-7 0-14 10-14 22 0 10 6 20 12 24-8-3-20-14-20-24 0-12 10-22 22-22z"
          fill="url(#balloon-blue)"
        />

        {/* Outer right blue stripe */}
        <path
          d="M32 4c7 0 14 10 14 22 0 10-6 20-12 24 8-3 20-14 20-24 0-12-10-22-22-22z"
          fill="url(#balloon-blue)"
        />

        {/* Center yellow accent stripe */}
        <path
          d="M32 4c-3.5 0-7 10-7 22 0 10 3 20 7 24 4-4 7-14 7-24 0-12-3.5-22-7-22z"
          fill="url(#balloon-yellow)"
        />

        {/* Canopy outline for crispness */}
        <path
          d="M32 4c-12 0-22 10-22 22 0 10 9 20 18 24h8c9-4 18-14 18-24 0-12-10-22-22-22z"
          stroke="#93C5FD"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        {/* Decorative bunting garland */}
        <path d="M14 24c4 3 8 3 12 0 4 3 8 3 12 0 4 3 8 3 12 0" stroke="#F472B6" strokeWidth="1.2" strokeLinecap="round" />
        <polygon points="20,26 22,30 24,26" fill="#FDE68A" />
        <polygon points="30,26 32,30 34,26" fill="#60A5FA" />
        <polygon points="40,26 42,30 44,26" fill="#F472B6" />

        {/* Rigging cables */}
        <line x1="24" y1="50" x2="26" y2="60" stroke="#94A3B8" strokeWidth="1.2" />
        <line x1="40" y1="50" x2="38" y2="60" stroke="#94A3B8" strokeWidth="1.2" />
        <line x1="28" y1="50" x2="29" y2="60" stroke="#94A3B8" strokeWidth="0.8" />
        <line x1="36" y1="50" x2="35" y2="60" stroke="#94A3B8" strokeWidth="0.8" />

        {/* Woven basket */}
        <rect x="25" y="60" width="14" height="12" rx="3" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1.2" />
        <line x1="25" y1="64" x2="39" y2="64" stroke="#D97706" strokeWidth="1" />
        <line x1="25" y1="68" x2="39" y2="68" stroke="#D97706" strokeWidth="1" />
        <line x1="29" y1="60" x2="29" y2="72" stroke="#D97706" strokeWidth="1" />
        <line x1="35" y1="60" x2="35" y2="72" stroke="#D97706" strokeWidth="1" />
      </svg>
    </div>
  );
}

/**
 * Animated Rocking Horse: Rocks back and forth with a sweet curved rocker,
 * gentle pastel saddle, and smiling horse head.
 */
export function AnimatedRockingHorse({ className, ...props }: SvgProps) {
  return (
    <div className={cx("inline-block animate-rocking-horse select-none", className)}>
      <svg
        viewBox="0 0 72 64"
        fill="none"
        className="h-full w-full drop-shadow-sm"
        aria-hidden="true"
        {...props}
      >
        {/* Curved rocker runners */}
        <path
          d="M6 56c18 8 42 8 60 0"
          stroke="#F3C8D9"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M8 58c17 7 39 7 56 0"
          stroke="#BFE4F1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Rocker runner vertical supports */}
        <line x1="22" y1="44" x2="16" y2="54" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="50" y1="44" x2="56" y2="54" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />

        {/* Horse Body */}
        <path
          d="M20 42c0-8 6-14 16-14h14c6 0 10 4 12 10l-4 6H24c-2.5 0-4-1-4-2z"
          fill="#EAF6FB"
          stroke="#93C5FD"
          strokeWidth="1.5"
        />

        {/* Horse Neck & Head */}
        <path
          d="M48 32l6-16c1-3 4-5 7-4 3 1 4 4 3 7l-5 13"
          fill="#EAF6FB"
          stroke="#93C5FD"
          strokeWidth="1.5"
        />
        <circle cx="61" cy="18" r="1.5" fill="#334155" />

        {/* Cute Horse Ear */}
        <polygon points="56,12 59,6 61,13" fill="#F3C8D9" stroke="#F472B6" strokeWidth="1" />

        {/* Soft Pastel Mane */}
        <path
          d="M52 14c-2 2-3 6-2 9M50 20c-2 2-3 5-2 8"
          stroke="#F472B6"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Cute Horse Tail */}
        <path
          d="M20 38c-5 2-8 7-7 12"
          stroke="#F472B6"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Saddle with blanket */}
        <rect x="30" y="27" width="14" height="9" rx="3" fill="#FCECF3" stroke="#F472B6" strokeWidth="1.2" />
        <circle cx="37" cy="31.5" r="2" fill="#FEF08A" />
      </svg>
    </div>
  );
}

/**
 * Animated Teddy Bear Toy: Gentle bobbing motion with cute rounded ears,
 * friendly embroidered face, and sweet pastel belly.
 */
export function AnimatedTeddyBear({ className, ...props }: SvgProps) {
  return (
    <div className={cx("inline-block animate-toy-bob select-none", className)}>
      <svg
        viewBox="0 0 54 58"
        fill="none"
        className="h-full w-full drop-shadow-sm"
        aria-hidden="true"
        {...props}
      >
        {/* Left ear */}
        <circle cx="14" cy="13" r="7" fill="#FCECF3" stroke="#F472B6" strokeWidth="1.5" />
        <circle cx="14" cy="13" r="3.5" fill="#F3C8D9" />

        {/* Right ear */}
        <circle cx="40" cy="13" r="7" fill="#FCECF3" stroke="#F472B6" strokeWidth="1.5" />
        <circle cx="40" cy="13" r="3.5" fill="#F3C8D9" />

        {/* Bear body */}
        <ellipse cx="27" cy="38" rx="15" ry="14" fill="#EAF6FB" stroke="#93C5FD" strokeWidth="1.5" />
        <ellipse cx="27" cy="39" rx="9" ry="8" fill="#FCECF3" />

        {/* Bear head */}
        <circle cx="27" cy="22" r="14" fill="#EAF6FB" stroke="#93C5FD" strokeWidth="1.5" />

        {/* Snout */}
        <ellipse cx="27" cy="24" rx="6" ry="4.5" fill="#ffffff" />
        <ellipse cx="27" cy="22.5" rx="2.5" ry="1.8" fill="#183B4A" />
        <path d="M27 24.3v2.5M25 26.8a2 2 0 0 0 4 0" stroke="#183B4A" strokeWidth="1.2" strokeLinecap="round" />

        {/* Eyes */}
        <circle cx="21" cy="19" r="1.8" fill="#183B4A" />
        <circle cx="21.5" cy="18.5" r="0.6" fill="#ffffff" />
        <circle cx="33" cy="19" r="1.8" fill="#183B4A" />
        <circle cx="33.5" cy="18.5" r="0.6" fill="#ffffff" />

        {/* Sweet pink blush on cheeks */}
        <circle cx="18" cy="23" r="2.2" fill="#FDA4AF" opacity="0.6" />
        <circle cx="36" cy="23" r="2.2" fill="#FDA4AF" opacity="0.6" />

        {/* Little bow tie */}
        <polygon points="27,33 22,30 22,36" fill="#F472B6" />
        <polygon points="27,33 32,30 32,36" fill="#F472B6" />
        <circle cx="27" cy="33" r="1.8" fill="#FEF08A" />

        {/* Little paws */}
        <ellipse cx="12" cy="36" rx="4" ry="3.5" fill="#EAF6FB" stroke="#93C5FD" strokeWidth="1.2" />
        <ellipse cx="42" cy="36" rx="4" ry="3.5" fill="#EAF6FB" stroke="#93C5FD" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

/**
 * Animated Toy Blocks: Stacked pastel cubes with letters/shapes that
 * bob gently to create a playful nursery atmosphere.
 */
export function AnimatedToyBlocks({ className, ...props }: SvgProps) {
  return (
    <div className={cx("inline-block animate-toy-bob [animation-delay:1s] select-none", className)}>
      <svg
        viewBox="0 0 54 52"
        fill="none"
        className="h-full w-full drop-shadow-sm"
        aria-hidden="true"
        {...props}
      >
        {/* Bottom Left Block - Soft Blue */}
        <rect x="4" y="24" width="22" height="22" rx="4" fill="#DDF1F8" stroke="#7DD3FC" strokeWidth="1.5" />
        <text x="15" y="39" fontSize="13" fontWeight="bold" fontFamily="sans-serif" fill="#0284C7" textAnchor="middle">
          A
        </text>

        {/* Bottom Right Block - Soft Pink */}
        <rect x="28" y="24" width="22" height="22" rx="4" fill="#FCECF3" stroke="#F472B6" strokeWidth="1.5" />
        <text x="39" y="39" fontSize="13" fontWeight="bold" fontFamily="sans-serif" fill="#DB2777" textAnchor="middle">
          B
        </text>

        {/* Top Centered Block - Butter Yellow */}
        <rect x="16" y="4" width="22" height="22" rx="4" fill="#FEF9E7" stroke="#FBBF24" strokeWidth="1.5" />
        <text x="27" y="19" fontSize="13" fontWeight="bold" fontFamily="sans-serif" fill="#D97706" textAnchor="middle">
          ★
        </text>
      </svg>
    </div>
  );
}

/**
 * Animated Baby Rattle: Ring rattle with soft beads that wiggles gently.
 */
export function AnimatedBabyRattle({ className, ...props }: SvgProps) {
  return (
    <div className={cx("inline-block animate-rattle-wiggle select-none", className)}>
      <svg
        viewBox="0 0 48 54"
        fill="none"
        className="h-full w-full drop-shadow-sm"
        aria-hidden="true"
        {...props}
      >
        {/* Ring rattle head */}
        <circle cx="28" cy="20" r="14" fill="#EAF6FB" stroke="#7DD3FC" strokeWidth="2.5" />
        <circle cx="28" cy="20" r="7" fill="#ffffff" stroke="#7DD3FC" strokeWidth="1.5" />

        {/* Colorful beads inside ring */}
        <circle cx="28" cy="9" r="2.8" fill="#F472B6" />
        <circle cx="37" cy="14" r="2.8" fill="#FBBF24" />
        <circle cx="37" cy="26" r="2.8" fill="#34D399" />
        <circle cx="20" cy="28" r="2.8" fill="#A78BFA" />
        <circle cx="17" cy="16" r="2.8" fill="#FB7185" />

        {/* Handle */}
        <line x1="20" y1="28" x2="8" y2="44" stroke="#F3C8D9" strokeWidth="4" strokeLinecap="round" />
        <circle cx="7" cy="45" r="4.5" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1.5" />
        <path d="M16 34c1-1 3-1 4 0" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/**
 * Animated Paper Plane: Gentle pastel glider soaring across a curved dashed trail.
 */
export function AnimatedPaperPlane({ className, ...props }: SvgProps) {
  return (
    <div className={cx("inline-block animate-airplane-glide select-none", className)}>
      <svg
        viewBox="0 0 68 46"
        fill="none"
        className="h-full w-full drop-shadow-sm"
        aria-hidden="true"
        {...props}
      >
        {/* Dashed wind trail */}
        <path
          d="M4 36c14-2 20-14 12-18-8-4-12 8 2 12 12 3 24-8 32-12"
          stroke="#93C5FD"
          strokeWidth="1.3"
          strokeDasharray="2 3"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Folded origami plane */}
        <g transform="translate(38, 4) rotate(15)">
          <polygon points="0,18 24,0 20,24" fill="#DDF1F8" stroke="#38BDF8" strokeWidth="1.2" />
          <polygon points="20,24 24,0 12,20" fill="#FCECF3" stroke="#F472B6" strokeWidth="1" />
          <polygon points="0,18 24,0 12,20" fill="#BFE4F1" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Animated Pastel Bubbles: Delicate iridescent light pink & light blue
 * floating soap bubbles with smooth floating motion.
 */
export function AnimatedPastelBubbles({ className, ...props }: SvgProps) {
  return (
    <div className={cx("inline-block animate-bubble-float select-none pointer-events-none", className)}>
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className="h-full w-full"
        aria-hidden="true"
        {...props}
      >
        {/* Large Baby Blue Bubble */}
        <circle cx="34" cy="30" r="18" fill="#BAE6FD" fillOpacity="0.5" stroke="#38BDF8" strokeWidth="1.4" />
        <ellipse cx="28" cy="22" rx="5" ry="2.5" transform="rotate(-30 28 22)" fill="#ffffff" fillOpacity="0.85" />
        <circle cx="38" cy="38" r="1.5" fill="#F472B6" fillOpacity="0.6" />

        {/* Medium Bubble Gum Pink Bubble */}
        <circle cx="16" cy="44" r="11" fill="#FCE7F3" fillOpacity="0.6" stroke="#F472B6" strokeWidth="1.3" />
        <ellipse cx="13" cy="39" rx="3" ry="1.5" transform="rotate(-30 13 39)" fill="#ffffff" fillOpacity="0.85" />

        {/* Small Baby Blue Bubble */}
        <circle cx="48" cy="14" r="8" fill="#E0F2FE" fillOpacity="0.65" stroke="#38BDF8" strokeWidth="1.1" />
        <circle cx="46" cy="12" r="1.2" fill="#ffffff" />
      </svg>
    </div>
  );
}

/**
 * Animated Pinwheel: A spinning pastel pinwheel on a wooden stick with 4 curved blades
 * in bubble gum pink, baby blue, sunny buttercup, and soft mint.
 */
export function AnimatedPinwheel({ className, ...props }: SvgProps) {
  return (
    <div className={cx("inline-block select-none", className)}>
      <svg
        viewBox="0 0 54 68"
        fill="none"
        className="h-full w-full drop-shadow-sm"
        aria-hidden="true"
        {...props}
      >
        {/* Wooden stick */}
        <line x1="27" y1="27" x2="27" y2="64" stroke="#FDE68A" strokeWidth="3" strokeLinecap="round" />
        <line x1="28" y1="27" x2="28" y2="64" stroke="#D97706" strokeWidth="0.8" strokeLinecap="round" />

        {/* Rotating pinwheel blades */}
        <g className="animate-pinwheel-spin" style={{ transformOrigin: "27px 27px" }}>
          {/* Top blade - Bubble gum pink */}
          <path d="M27 27 C27 15 15 15 15 27 Z" fill="#F472B6" stroke="#DB2777" strokeWidth="1" />
          {/* Right blade - Baby blue */}
          <path d="M27 27 C39 27 39 15 27 15 Z" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" />
          {/* Bottom blade - Buttercup yellow */}
          <path d="M27 27 C27 39 39 39 39 27 Z" fill="#FDE047" stroke="#EAB308" strokeWidth="1" />
          {/* Left blade - Soft mint */}
          <path d="M27 27 C15 27 15 39 27 39 Z" fill="#34D399" stroke="#059669" strokeWidth="1" />

          {/* Center pin / grommet */}
          <circle cx="27" cy="27" r="3.5" fill="#ffffff" stroke="#DB2777" strokeWidth="1.5" />
          <circle cx="27" cy="27" r="1.5" fill="#DB2777" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Animated Rubber Ducky: Playful yellow bath duck with orange beak,
 * bubble gum pink blush, and gentle bobbing water ripple.
 */
export function AnimatedRubberDucky({ className, ...props }: SvgProps) {
  return (
    <div className={cx("inline-block animate-ducky-wobble select-none", className)}>
      <svg
        viewBox="0 0 60 52"
        fill="none"
        className="h-full w-full drop-shadow-sm"
        aria-hidden="true"
        {...props}
      >
        {/* Soft water ripples */}
        <ellipse cx="30" cy="46" rx="24" ry="4.5" fill="#BAE6FD" opacity="0.6" />
        <path d="M12 45c6 2 14 2 20 0M34 46c5 1.5 12 1.5 16 0" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />

        {/* Duck Body */}
        <path
          d="M12 36c0-9 8-15 20-15 8 0 14 3 18 8 2 3 2 7 0 9-4 4-10 6-18 6-12 0-20-4-20-8z"
          fill="#FDE047"
          stroke="#EAB308"
          strokeWidth="1.5"
        />
        {/* Wing with baby blue highlight */}
        <path
          d="M24 33c-1-4 2-7 7-7 4 0 7 2 9 5-2 3-5 5-9 5-4 0-6-1-7-3z"
          fill="#FEF08A"
          stroke="#EAB308"
          strokeWidth="1.2"
        />

        {/* Duck Head */}
        <circle cx="40" cy="21" r="11" fill="#FDE047" stroke="#EAB308" strokeWidth="1.5" />

        {/* Beak */}
        <path d="M49 20c4-1 9 1 10 3-2 2-6 3-10 2z" fill="#FB923C" stroke="#EA580C" strokeWidth="1.2" />

        {/* Eye */}
        <circle cx="43" cy="18" r="1.8" fill="#183B4A" />
        <circle cx="43.5" cy="17.5" r="0.6" fill="#ffffff" />

        {/* Sweet Bubble Gum Pink Blush */}
        <circle cx="38" cy="24" r="2.2" fill="#F472B6" opacity="0.7" />

        {/* Tail Feather */}
        <path d="M14 33c-3-2-6-5-6-9 3 2 6 5 8 7z" fill="#FDE047" stroke="#EAB308" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

/**
 * Animated Little Train: Cute nursery wooden steam train with baby blue cabin,
 * bubble gum pink boiler, rotating wheels, and puffing steam puffs.
 */
export function AnimatedLittleTrain({ className, ...props }: SvgProps) {
  return (
    <div className={cx("inline-block animate-train-chug select-none", className)}>
      <svg
        viewBox="0 0 72 52"
        fill="none"
        className="h-full w-full drop-shadow-sm"
        aria-hidden="true"
        {...props}
      >
        {/* Steam Puffs */}
        <circle cx="18" cy="8" r="3" fill="#BAE6FD" opacity="0.7" />
        <circle cx="12" cy="4" r="4" fill="#FCE7F3" opacity="0.8" />
        <circle cx="5" cy="2" r="3.2" fill="#BAE6FD" opacity="0.6" />

        {/* Smokestack */}
        <rect x="15" y="14" width="7" height="12" rx="1.5" fill="#F472B6" stroke="#DB2777" strokeWidth="1.2" />
        <polygon points="13,14 24,14 22,18 15,18" fill="#F472B6" stroke="#DB2777" strokeWidth="1" />

        {/* Boiler (Bubble Gum Pink) */}
        <rect x="13" y="24" width="28" height="16" rx="4" fill="#FCE7F3" stroke="#F472B6" strokeWidth="1.5" />
        <line x1="22" y1="24" x2="22" y2="40" stroke="#F472B6" strokeWidth="1" />
        <line x1="31" y1="24" x2="31" y2="40" stroke="#F472B6" strokeWidth="1" />

        {/* Cowcatcher front */}
        <polygon points="13,40 5,42 13,32" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" />

        {/* Cabin (Baby Blue) */}
        <rect x="40" y="16" width="24" height="24" rx="3" fill="#BAE6FD" stroke="#38BDF8" strokeWidth="1.5" />
        {/* Cabin Roof */}
        <path d="M38 16h28c1 0 2-1 2-2H36c0 1 1 2 2 2z" fill="#F472B6" stroke="#DB2777" strokeWidth="1" />
        {/* Cabin Window */}
        <rect x="45" y="20" width="14" height="10" rx="2" fill="#ffffff" stroke="#38BDF8" strokeWidth="1.2" />
        <circle cx="52" cy="25" r="2.5" fill="#FDE047" />

        {/* Wheels */}
        <circle cx="21" cy="42" r="5" fill="#FEF08A" stroke="#EAB308" strokeWidth="1.5" />
        <circle cx="21" cy="42" r="2" fill="#F472B6" />
        <circle cx="34" cy="42" r="5" fill="#FEF08A" stroke="#EAB308" strokeWidth="1.5" />
        <circle cx="34" cy="42" r="2" fill="#38BDF8" />
        <circle cx="52" cy="41" r="7" fill="#FEF08A" stroke="#EAB308" strokeWidth="1.5" />
        <circle cx="52" cy="41" r="3" fill="#F472B6" />

        {/* Connecting rod */}
        <line x1="21" y1="42" x2="52" y2="41" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/**
 * Animated Butterfly: Delicate pastel butterfly fluttering its dual-tone wings
 * in bubble gum pink & baby blue with gentle floating flight path.
 */
export function AnimatedButterfly({ className, ...props }: SvgProps) {
  return (
    <div className={cx("inline-block animate-butterfly-flutter select-none", className)}>
      <svg
        viewBox="0 0 52 48"
        fill="none"
        className="h-full w-full drop-shadow-sm"
        aria-hidden="true"
        {...props}
      >
        {/* Upper Left Wing (Bubble Gum Pink) */}
        <path
          d="M26 22 C22 10 8 10 10 24 C10 30 18 30 26 24 Z"
          fill="#FCE7F3"
          stroke="#F472B6"
          strokeWidth="1.4"
        />
        <circle cx="16" cy="20" r="3" fill="#F472B6" opacity="0.6" />

        {/* Lower Left Wing (Baby Blue) */}
        <path
          d="M26 24 C20 28 14 36 20 40 C26 42 27 34 26 24 Z"
          fill="#BAE6FD"
          stroke="#38BDF8"
          strokeWidth="1.2"
        />

        {/* Upper Right Wing (Bubble Gum Pink) */}
        <path
          d="M26 22 C30 10 44 10 42 24 C42 30 34 30 26 24 Z"
          fill="#FCE7F3"
          stroke="#F472B6"
          strokeWidth="1.4"
        />
        <circle cx="36" cy="20" r="3" fill="#F472B6" opacity="0.6" />

        {/* Lower Right Wing (Baby Blue) */}
        <path
          d="M26 24 C32 28 38 36 32 40 C26 42 25 34 26 24 Z"
          fill="#BAE6FD"
          stroke="#38BDF8"
          strokeWidth="1.2"
        />

        {/* Butterfly Body */}
        <ellipse cx="26" cy="24" rx="2" ry="9" fill="#183B4A" />

        {/* Antennae */}
        <path d="M25 15 C23 10 20 9 19 10" stroke="#183B4A" strokeWidth="1" strokeLinecap="round" />
        <circle cx="19" cy="10" r="1" fill="#F472B6" />
        <path d="M27 15 C29 10 32 9 33 10" stroke="#183B4A" strokeWidth="1" strokeLinecap="round" />
        <circle cx="33" cy="10" r="1" fill="#38BDF8" />
      </svg>
    </div>
  );
}

/**
 * Ambient floating decorative backdrop container that renders tasteful,
 * soft abstract pastel blobs, floating live moving toys, and subtle sparkles.
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
          {/* Live moving Hot Air Balloon floating top right */}
          <div className="absolute top-10 right-[3%] opacity-90 hover:opacity-100 transition-opacity">
            <AnimatedHotAirBalloon className="h-12 w-10 sm:h-16 sm:w-14 lg:h-20 lg:w-16" />
          </div>

          {/* Live moving Rocking Horse floating bottom right */}
          <div className="absolute bottom-6 right-[4%] opacity-85">
            <AnimatedRockingHorse className="h-12 w-14 sm:h-14 sm:w-16 lg:h-16 lg:w-18" />
          </div>

          {/* Live moving Toy Blocks floating mid left */}
          <div className="absolute top-[48%] left-[2%] opacity-85">
            <AnimatedToyBlocks className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14" />
          </div>

          {/* Live moving Pinwheel */}
          <div className="hidden sm:block absolute top-[18%] left-[3%] opacity-85">
            <AnimatedPinwheel className="h-14 w-12 lg:h-16 lg:w-14" />
          </div>

          {/* Live moving Pastel Bubbles */}
          <div className="absolute bottom-14 left-[14%] opacity-80">
            <AnimatedPastelBubbles className="h-10 w-10 sm:h-12 sm:w-12" />
          </div>
        </>
      )}

      {density === "full" && (
        <>
          {/* Live moving Rubber Ducky */}
          <div className="hidden sm:block absolute bottom-[22%] left-[4%] opacity-85">
            <AnimatedRubberDucky className="h-12 w-14 lg:h-14 lg:w-16" />
          </div>

          {/* Live moving Butterfly */}
          <div className="absolute top-[36%] right-[8%] opacity-85">
            <AnimatedButterfly className="h-10 w-11 sm:h-12 sm:w-13" />
          </div>

          {/* Live moving Baby Rattle */}
          <div className="hidden md:block absolute bottom-[34%] right-[16%] opacity-80">
            <AnimatedBabyRattle className="h-11 w-10 lg:h-12 lg:w-11" />
          </div>

          {/* Live moving Paper Plane */}
          <div className="absolute top-[16%] left-[18%] opacity-80">
            <AnimatedPaperPlane className="h-9 w-12 sm:h-12 sm:w-16" />
          </div>
        </>
      )}
    </div>
  );
}
