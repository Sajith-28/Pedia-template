/**
 * Single source of truth for the appointment contact number.
 *
 * Used by the appointment form, every WhatsApp call-to-action and every phone
 * link. Set it once here — nothing else in the app hard-codes a number.
 *
 * Format: full international number, digits only, no "+", spaces or hyphens.
 * For an Indian mobile that is the country code followed by the 10-digit
 * number, e.g. "919876543210".
 *
 * If this is ever emptied the site shows no phone number at all: the WhatsApp
 * and call actions are hidden and the appointment form explains that the
 * number is not configured, rather than opening a broken wa.me link.
 */
export const APPOINTMENT_NUMBER = "917708031169";
export const DOCTOR_APPOINTMENT_NUMBER = APPOINTMENT_NUMBER;

/** "919876543210" -> "+91 98765 43210". Falls back to a plain "+digits". */
function formatNumber(digits: string): string {
  if (!digits) return "";
  if (digits.startsWith("91") && digits.length === 12) {
    return `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`;
  }
  return `+${digits}`;
}

export const contact = {
  /** Digits-only international number, or "" when not yet supplied. */
  number: APPOINTMENT_NUMBER,
  isConfigured: APPOINTMENT_NUMBER.length > 0,
  /** Human-readable form for display. Empty when not configured. */
  display: formatNumber(APPOINTMENT_NUMBER),
  telHref: APPOINTMENT_NUMBER ? `tel:+${APPOINTMENT_NUMBER}` : "",
};

/**
 * Builds a wa.me link with the message safely percent-encoded, so line breaks,
 * apostrophes, ampersands and emoji all survive the URL intact.
 * Returns "" when no number is configured, so callers can hide the action.
 */
export function whatsappUrl(message: string): string {
  if (!contact.isConfigured) return "";
  return `https://wa.me/${contact.number}?text=${encodeURIComponent(message)}`;
}

/** Short greeting for the "just chat" entry points with professional emoji. */
export const quickEnquiryMessage =
  "Hello Dr. Ushapriya 👩⚕️, I would like to enquire about a consultation for my child.";

/**
 * Clinic location, as confirmed by the client.
 *
 * Coordinates and the place link come from the practice's own Google Maps
 * listing. The embed is the keyless Google Maps endpoint, so no API key is
 * needed; swap in the Maps Embed API (with a key) if usage ever warrants it.
 */
const COORDINATES = { lat: 13.0725314, lng: 80.2195736 };

export const clinicAddress = {
  line1: "20, Govinda St, Ayyavoo Colony",
  line2: "Aminjikarai, Chennai, Tamil Nadu 600029",
  street: "20, Govinda St, Ayyavoo Colony",
  locality: "Aminjikarai",
  city: "Chennai",
  region: "Tamil Nadu",
  postalCode: "600029",
  country: "IN",
  coordinates: COORDINATES,
  /** The practice's Google Maps listing. */
  mapsUrl: "https://maps.app.goo.gl/56aMkRGXxuBWMgGt8",
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${COORDINATES.lat}%2C${COORDINATES.lng}`,
  embedUrl: `https://maps.google.com/maps?q=${COORDINATES.lat},${COORDINATES.lng}&z=16&hl=en&output=embed`,
} as const;

/** Single line, for structured data and link titles. */
export const clinicAddressFull = `${clinicAddress.line1}, ${clinicAddress.line2}`;
