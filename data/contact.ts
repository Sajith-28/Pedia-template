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

/** Short greeting for the "just chat" entry points. */
export const quickEnquiryMessage =
  "Hello Dr. Ushapriya 👩‍⚕️, I would like to enquire about a consultation for my child.";
