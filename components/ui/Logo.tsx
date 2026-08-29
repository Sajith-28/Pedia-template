import { cx } from "@/lib/utils";
import { clinic } from "@/data/clinic";

/**
 * Brand mark: two leaves opening from a bud — a "bloom" read at small sizes,
 * botanical rather than childish.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path
        d="M12 14c0-3.2 2.6-5.8 5.8-5.8 0 3.2-2.6 5.8-5.8 5.8Z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M12 14c0-3.2-2.6-5.8-5.8-5.8 0 3.2 2.6 5.8 5.8 5.8Z"
        fill="currentColor"
        opacity="0.85"
      />
      <circle cx="12" cy="6.3" r="2.4" fill="currentColor" />
      <path
        d="M12 20.6V13.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function Logo({
  className,
  tone = "light",
  compact = false,
}: {
  className?: string;
  tone?: "light" | "dark";
  compact?: boolean;
}) {
  const dark = tone === "dark";

  return (
    <span className={cx("flex items-center gap-2.5", className)}>
      <LogoMark className={cx("h-8 w-8 shrink-0", dark ? "text-teal-300" : "text-brand-700")} />
      <span className="flex flex-col leading-none">
        <span
          className={cx(
            "font-display text-[1.0625rem] font-bold tracking-[-0.02em]",
            dark ? "text-white" : "text-ink",
          )}
        >
          {clinic.shortName}
        </span>
        {!compact ? (
          <span
            className={cx(
              "mt-1 text-[0.5625rem] font-semibold uppercase tracking-[0.2em]",
              dark ? "text-white/55" : "text-ink-soft",
            )}
          >
            Children&rsquo;s Clinic
          </span>
        ) : null}
      </span>
    </span>
  );
}
