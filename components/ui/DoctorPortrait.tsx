import { doctor } from "@/data/doctor";
import { Icon } from "@/components/ui/Icons";
import { cx } from "@/lib/utils";

/**
 * Stand-in for the doctor's portrait.
 *
 * Deliberately not a photograph: no stock or generated face may stand in for a
 * real person. It fills its parent, so the parent owns the aspect ratio.
 *
 * To use the real photograph, replace the contents of this component with a
 * next/image `fill` element pointing at the supplied file — both the hero and
 * the About section render through here, so one change covers the site.
 */
export function DoctorPortrait({ className }: { className?: string }) {
  return (
    <div
      className={cx(
        "absolute inset-0 grid place-items-center overflow-hidden",
        "bg-[linear-gradient(150deg,var(--color-brand-50),var(--color-teal-50)_45%,var(--color-coral-50))]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="animate-drift-a absolute -left-1/4 top-[-15%] h-[70%] w-[80%] rounded-full bg-[radial-gradient(circle,var(--color-brand-100)_0%,transparent_65%)] opacity-70"
      />
      <div
        aria-hidden="true"
        className="animate-drift-b absolute -right-1/4 bottom-[-12%] h-[65%] w-[75%] rounded-full bg-[radial-gradient(circle,var(--color-coral-100)_0%,transparent_65%)] opacity-60"
      />

      <div className="relative flex flex-col items-center px-6 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-surface/80 text-brand-700 shadow-soft ring-1 ring-brand-100 backdrop-blur-sm sm:h-20 sm:w-20">
          <Icon name="stethoscope" className="h-7 w-7 sm:h-9 sm:w-9" />
        </span>

        <p className="mt-6 font-display text-[1.125rem] font-bold leading-snug tracking-[-0.02em] text-ink sm:text-[1.375rem]">
          {doctor.name}
        </p>
        <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-muted sm:text-[0.9375rem]">
          {doctor.title}
        </p>
        <p className="mt-1 text-[0.8125rem] text-ink-soft">{doctor.qualifications}</p>

        <p className="mt-6 rounded-full bg-surface/70 px-3.5 py-1.5 text-[0.75rem] font-medium text-ink-soft ring-1 ring-line">
          Photograph to follow
        </p>
      </div>
    </div>
  );
}
