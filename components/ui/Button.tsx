import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "inverse" | "inverseOutline";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex select-none items-center justify-center gap-2 rounded-full font-medium " +
  "whitespace-nowrap transition-[transform,background-color,box-shadow,color,border-color] " +
  "duration-300 ease-premium disabled:pointer-events-none disabled:opacity-55";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-700 text-white shadow-soft hover:bg-brand-800 hover:-translate-y-0.5 " +
    "hover:shadow-lift active:translate-y-0 active:shadow-soft",
  secondary:
    "bg-surface text-ink ring-1 ring-line-strong hover:ring-brand-300 hover:-translate-y-0.5 " +
    "hover:shadow-soft active:translate-y-0",
  ghost: "text-ink-muted hover:bg-brand-50 hover:text-brand-800",
  inverse:
    "bg-white text-brand-800 shadow-soft hover:-translate-y-0.5 hover:shadow-lift " +
    "active:translate-y-0 active:shadow-soft",
  inverseOutline:
    "text-white ring-1 ring-white/35 hover:bg-white/10 hover:ring-white/60 " +
    "hover:-translate-y-0.5 active:translate-y-0",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[0.9375rem]",
  lg: "h-14 px-7 text-[1rem] sm:px-8",
};

function classes(variant: Variant, size: Size, className?: string) {
  return cx(base, variants[variant], sizes[size], className);
}

type SharedProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...rest
}: SharedProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={classes(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: SharedProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={classes(variant, size, className)} {...rest}>
      {children}
    </a>
  );
}
