import type { ReactNode } from "react";
import { cx } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  titleId?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  titleId,
}: Props) {
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <Reveal className={cx(centered && "flex flex-col items-center text-center", className)}>
      {eyebrow ? (
        <p
          className={cx(
            "text-eyebrow flex items-center gap-3",
            centered && "justify-center",
            dark ? "text-brand-200" : "text-brand-600",
          )}
        >
          <span
            aria-hidden="true"
            className={cx(
              "h-px w-7",
              dark ? "bg-white/35" : "bg-gradient-to-r from-coral-500 to-brand-400",
            )}
          />
          {eyebrow}
        </p>
      ) : null}

      <h2
        id={titleId}
        className={cx(
          "font-display text-[2rem] leading-[1.1] tracking-[-0.028em] sm:text-[2.4rem] lg:text-[2.9rem]",
          eyebrow ? "mt-5" : undefined,
          dark && "text-white",
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cx(
            "mt-5 max-w-[56ch] text-[1.0625rem] leading-[1.72]",
            centered && "mx-auto",
            dark ? "text-white/72" : "text-ink-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
