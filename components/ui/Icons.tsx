import type { ReactNode, SVGProps } from "react";

/**
 * A small, purpose-built thin-line icon set.
 *
 * Drawn on a 24x24 grid with a 1.4 stroke so the whole system reads as one
 * family. Kept in-repo rather than pulling an icon package — it keeps the
 * bundle lean and the line weight consistent with the type.
 */
const iconPaths = {
  /* ---------- Clinical / service marks ---------- */
  cradle: (
    <>
      <circle cx="12" cy="7.6" r="2.6" />
      <path d="M4.6 13.4a7.4 5.4 0 0 0 14.8 0" />
      <path d="M3.2 13.4h17.6" />
    </>
  ),
  thermometer: (
    <>
      <path d="M10 14.2V5.4a2 2 0 1 1 4 0v8.8" />
      <circle cx="12" cy="17.4" r="3.3" />
      <path d="M12 9.4v5" />
    </>
  ),
  growth: (
    <>
      <path d="M4.2 3.6v16.2h16.2" />
      <path d="m6.8 16.4 3.9-4.3 2.8 2.5 4.8-6" />
      <path d="M15.4 8.6h2.9v2.9" />
    </>
  ),
  nutrition: (
    <>
      <path d="M4.4 12.8h15.2a7.6 7.6 0 0 1-15.2 0Z" />
      <path d="M2.9 12.8h18.2" />
      <path d="M12 9.9c0-2.6 1.8-4.4 4.4-4.4 0 2.6-1.8 4.4-4.4 4.4Z" />
      <path d="M12 9.9c-.6-1.7-2-2.7-3.7-2.9" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.1 19 5.8v5.6c0 4.2-2.8 7.4-7 9.5-4.2-2.1-7-5.3-7-9.5V5.8l7-2.7Z" />
      <path d="M12 9.3v5.2M9.4 11.9h5.2" />
    </>
  ),
  adolescent: (
    <>
      <circle cx="12" cy="8.2" r="3.3" />
      <path d="M5.4 20.2a6.6 6.6 0 0 1 13.2 0" />
    </>
  ),
  breathing: (
    <>
      <path d="M3.2 8.4h11a2.8 2.8 0 1 0-2.8-2.8" />
      <path d="M3.2 12.4h14.2a2.8 2.8 0 1 1-2.8 2.8" />
      <path d="M3.2 16.4h6.6" />
    </>
  ),
  clipboard: (
    <>
      <path d="M9 4.7H7.2a1.7 1.7 0 0 0-1.7 1.7v13.1a1.7 1.7 0 0 0 1.7 1.7h9.6a1.7 1.7 0 0 0 1.7-1.7V6.4a1.7 1.7 0 0 0-1.7-1.7H15" />
      <path d="M9.6 2.9h4.8a1 1 0 0 1 1 1v2.6H8.6V3.9a1 1 0 0 1 1-1Z" />
      <path d="m9.2 13.5 2.1 2.1 4-4.5" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M7 3.4v5.2a4.6 4.6 0 0 0 9.2 0V3.4" />
      <path d="M5.3 3.4h3.4M14.5 3.4h3.4" />
      <path d="M11.6 13.2v2.2a4.3 4.3 0 0 0 8.6 0v-1.2" />
      <circle cx="20.2" cy="12.1" r="2.1" />
    </>
  ),

  /* ---------- Interface ---------- */
  phone: (
    <>
      <path d="M19.6 16.9v2.4a1.7 1.7 0 0 1-1.85 1.7 15.9 15.9 0 0 1-6.93-2.47 15.7 15.7 0 0 1-4.82-4.82A15.9 15.9 0 0 1 3.53 6.75 1.7 1.7 0 0 1 5.22 4.9h2.4a1.7 1.7 0 0 1 1.7 1.46c.1.8.3 1.58.57 2.32a1.7 1.7 0 0 1-.38 1.79l-1.02 1.02a12.9 12.9 0 0 0 4.82 4.82l1.02-1.02a1.7 1.7 0 0 1 1.79-.38c.74.28 1.52.47 2.32.58a1.7 1.7 0 0 1 1.46 1.72Z" />
    </>
  ),
  calendar: (
    <>
      <path d="M5 5.5h14a2 2 0 0 1 2 2v11.3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7.5a2 2 0 0 1 2-2Z" />
      <path d="M3 10.3h18" />
      <path d="M7.8 3v4.4M16.2 3v4.4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.8" />
      <path d="M12 6.9V12l3.4 2" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21.3c3.9-4 6.6-7.4 6.6-10.7a6.6 6.6 0 1 0-13.2 0c0 3.3 2.7 6.7 6.6 10.7Z" />
      <circle cx="12" cy="10.3" r="2.5" />
    </>
  ),
  navigation: <path d="m3.6 11.3 16.8-7.6-7.6 16.8-2-7.2-7.2-2Z" />,
  mail: (
    <>
      <path d="M4.4 5.2h15.2a1.9 1.9 0 0 1 1.9 1.9v9.8a1.9 1.9 0 0 1-1.9 1.9H4.4a1.9 1.9 0 0 1-1.9-1.9V7.1a1.9 1.9 0 0 1 1.9-1.9Z" />
      <path d="m2.9 6.7 9.1 6.1 9.1-6.1" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.8" />
      <path d="M3.4 12h17.2" />
      <path d="M12 3.2c2.5 2.4 3.9 5.5 3.9 8.8s-1.4 6.4-3.9 8.8c-2.5-2.4-3.9-5.5-3.9-8.8S9.5 5.6 12 3.2Z" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.3" />
      <path d="m8.2 13.6-1.4 7.2 5.2-2.7 5.2 2.7-1.4-7.2" />
    </>
  ),
  arrowRight: <path d="M4.6 12h14.8M13.1 5.7 19.4 12l-6.3 6.3" />,
  arrowUpRight: <path d="M7.6 16.4 16.4 7.6M8.6 7.6h7.8v7.8" />,
  check: <path d="m5 12.5 4.6 4.6 9.4-10.6" />,
  chevronDown: <path d="m5.6 9.2 6.4 6.3 6.4-6.3" />,
  plus: <path d="M12 5.2v13.6M5.2 12h13.6" />,
  minus: <path d="M5.2 12h13.6" />,
  close: <path d="m6.2 6.2 11.6 11.6M17.8 6.2 6.2 17.8" />,
  spark: (
    <>
      <path d="M12 3.4c.8 4.3 2.3 5.8 6.6 6.6-4.3.8-5.8 2.3-6.6 6.6-.8-4.3-2.3-5.8-6.6-6.6 4.3-.8 5.8-2.3 6.6-6.6Z" />
      <path d="M18.4 16.2c.4 2 1 2.6 3 3-2 .4-2.6 1-3 3-.4-2-1-2.6-3-3 2-.4 2.6-1 3-3Z" />
    </>
  ),

  /* ---------- Social ---------- */
  instagram: (
    <>
      <path d="M8 3.6h8a4.4 4.4 0 0 1 4.4 4.4v8a4.4 4.4 0 0 1-4.4 4.4H8A4.4 4.4 0 0 1 3.6 16V8A4.4 4.4 0 0 1 8 3.6Z" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M16.8 7.3h.01" />
    </>
  ),
  facebook: (
    <path d="M15.6 3.6h-1.9a4.3 4.3 0 0 0-4.3 4.3v2.4H6.9v3.4h2.5v6.7h3.4v-6.7h2.5l.6-3.4h-3.1V8.2c0-.8.4-1.2 1.2-1.2h1.6V3.6Z" />
  ),
  linkedin: (
    <>
      <path d="M5.2 3.6h13.6a1.6 1.6 0 0 1 1.6 1.6v13.6a1.6 1.6 0 0 1-1.6 1.6H5.2a1.6 1.6 0 0 1-1.6-1.6V5.2a1.6 1.6 0 0 1 1.6-1.6Z" />
      <path d="M8.1 10.6v6.2" />
      <path d="M8.1 7.5h.01" />
      <path d="M12.2 16.8v-6.2m0 2.5a2.5 2.5 0 0 1 5 0v3.7" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof iconPaths;

type IconProps = Omit<SVGProps<SVGSVGElement>, "name"> & {
  name: IconName;
};

export function Icon({ name, strokeWidth = 1.4, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {iconPaths[name]}
    </svg>
  );
}
