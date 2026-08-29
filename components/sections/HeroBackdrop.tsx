/**
 * Hero atmosphere: slow-drifting colour washes and a few hairline curves.
 * Still restrained — the washes are wide, pale and always in motion, so they
 * read as light rather than as gradient blocks.
 */
export function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-drift-a absolute -left-[20%] -top-[34%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(circle,var(--color-brand-100)_0%,transparent_62%)] opacity-80" />
      <div className="animate-drift-b absolute -right-[14%] top-[2%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,var(--color-teal-100)_0%,transparent_60%)] opacity-70" />
      <div className="animate-drift-b absolute -left-[6%] bottom-[-18%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,var(--color-honey-100)_0%,transparent_62%)] opacity-45" />
      <div className="animate-drift-a absolute right-[16%] bottom-[-24%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,var(--color-coral-100)_0%,transparent_62%)] opacity-40" />

      <svg
        className="absolute inset-0 h-full w-full text-brand-200"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g stroke="currentColor" strokeWidth="1" opacity="0.55">
          <path d="M-120 760C230 675 435 495 575 262 675 96 780 6 930-72" />
          <path d="M-90 880C285 790 520 585 660 340 762 160 880 55 1040-30" />
          <path d="M955-60C1105 135 1295 255 1530 305" />
        </g>
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-canvas" />
    </div>
  );
}
