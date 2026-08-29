import type { ReactNode } from "react";
import { cx } from "@/lib/utils";
import { Icon } from "./Icons";

// Colour and border colour are intentionally absent: callers own those, so a
// state class never has to out-rank a base class for the same property.
export const fieldControl =
  "w-full rounded-xl border bg-canvas/50 px-4 text-[0.9375rem] " +
  "placeholder:text-ink-soft/75 transition-[border-color,background-color] duration-300 ease-premium " +
  "focus:border-brand-400 focus:bg-surface";

export const fieldHeight = "h-12";

export function Field({
  id,
  label,
  error,
  hint,
  children,
  className,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("flex flex-col", className)}>
      <label htmlFor={id} className="mb-2 text-[0.8125rem] font-medium text-ink">
        {label}
      </label>

      {children}

      {error ? (
        <p
          id={`${id}-error`}
          className="mt-2 flex items-start gap-1.5 text-[0.8125rem] leading-snug text-danger"
        >
          <Icon name="close" className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={2} />
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="mt-2 text-[0.8125rem] leading-snug text-ink-soft">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export function borderFor(error?: string) {
  return error
    ? "border-danger/60 hover:border-danger"
    : "border-line-strong/80 hover:border-line-strong";
}
