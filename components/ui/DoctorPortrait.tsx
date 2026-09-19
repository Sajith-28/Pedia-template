import Image from "next/image";
import portrait from "@/public/images/dr-ushapriya-sudhakar.jpg";
import { cx } from "@/lib/utils";

/**
 * Photograph of Dr. Ushapriya Sudhakar, used by both the hero and the About
 * section. It fills its parent, so the parent owns the aspect ratio.
 *
 * Statically imported, so next/image knows the intrinsic size and generates
 * the blur placeholder at build time. To change the photograph, replace the
 * file at public/images/dr-ushapriya-sudhakar.jpg.
 */
export function DoctorPortrait({
  className,
  priority = false,
  sizes = "(min-width: 1024px) 40vw, (min-width: 640px) 30rem, 92vw",
}: {
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={portrait}
      alt="Dr. Ushapriya Sudhakar caring for a newborn baby in a neonatal unit"
      fill
      priority={priority}
      placeholder="blur"
      sizes={sizes}
      className={cx("object-cover object-[center_22%]", className)}
    />
  );
}
