"use client";

import { useState } from "react";
import { clinic } from "@/data/clinic";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icons";

/**
 * Click-to-load map.
 *
 * The embed is a third-party iframe, so it is not requested until the visitor
 * asks for it: nothing external loads on first paint, and the section still
 * looks finished if the tile provider is slow or unavailable. Swap
 * `clinic.mapEmbedUrl` for a Google Maps or Mapbox embed as needed.
 */
export function ClinicMap() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-panel bg-brand-50 shadow-soft ring-1 ring-line">
      {loaded ? (
        <iframe
          src={clinic.mapEmbedUrl}
          title={`Map showing the location of ${clinic.name}`}
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[20rem] w-full border-0 sm:h-[24rem] lg:h-[30rem]"
        />
      ) : (
        <div className="relative h-[20rem] w-full sm:h-[24rem] lg:h-[30rem]">
          <MapIllustration />

          {/* Marker */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%+1.25rem)]">
            <span className="absolute -inset-4 rounded-full bg-brand-200/40" aria-hidden="true" />
            <span className="relative grid h-12 w-12 place-items-center rounded-full bg-brand-700 text-white shadow-lift">
              <Icon name="mapPin" className="h-6 w-6" />
            </span>
          </div>

          {/* Load control */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-3 bg-gradient-to-t from-brand-50 via-brand-50/90 to-transparent px-6 pb-6 pt-14 text-center">
            <p className="text-[0.9375rem] font-medium text-ink">
              {clinic.address.line1}
            </p>
            <Button variant="secondary" size="sm" onClick={() => setLoaded(true)}>
              Load interactive map
              <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      )}

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-surface/92 px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-soft shadow-soft backdrop-blur-sm">
        Demo location
      </span>
    </div>
  );
}

/** Abstract street plan — decorative, never a claim about the real streets. */
function MapIllustration() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 600 480"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="600" height="480" fill="var(--color-brand-50)" />

      {/* City blocks */}
      <g fill="var(--color-brand-100)" opacity="0.75">
        <rect x="24" y="18" width="150" height="120" rx="6" />
        <rect x="196" y="18" width="196" height="120" rx="6" />
        <rect x="414" y="18" width="162" height="120" rx="6" />
        <rect x="24" y="160" width="150" height="128" rx="6" />
        <rect x="414" y="160" width="162" height="128" rx="6" />
        <rect x="24" y="310" width="150" height="152" rx="6" />
        <rect x="196" y="310" width="196" height="152" rx="6" />
        <rect x="414" y="310" width="162" height="152" rx="6" />
      </g>

      {/* Green space beside the clinic */}
      <rect
        x="196"
        y="160"
        width="196"
        height="128"
        rx="6"
        fill="var(--color-teal-100)"
        opacity="0.8"
      />

      {/* Primary roads */}
      <g stroke="var(--color-canvas)" strokeWidth="14" strokeLinecap="round" fill="none">
        <path d="M185 -10V490" />
        <path d="M403 -10V490" />
        <path d="M-10 149H610" />
        <path d="M-10 299H610" />
      </g>

      {/* Secondary lanes */}
      <g stroke="var(--color-brand-200)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.85">
        <path d="M96 -10V490" />
        <path d="M300 18V462" />
        <path d="M494 -10V490" />
        <path d="M-10 78H610" />
        <path d="M-10 226H610" />
        <path d="M-10 386H610" />
        <path d="M414 462 600 330" />
      </g>
    </svg>
  );
}
