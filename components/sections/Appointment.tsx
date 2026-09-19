"use client";

import { useId, useRef, useState } from "react";
import { contact, quickEnquiryMessage, whatsappUrl } from "@/data/contact";
import { doctor } from "@/data/doctor";
import { Container } from "@/components/ui/Container";
import { Field, borderFor, fieldControl, fieldHeight } from "@/components/ui/Field";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeddyBear } from "@/components/ui/PediatricDecorations";
import { cx } from "@/lib/utils";

type FormValues = {
  parentName: string;
  childName: string;
  childAge: string;
  phone: string;
  reason: string;
  preferredDate: string;
  preferredTime: string;
  note: string;
};

type FieldName = keyof FormValues;

const EMPTY: FormValues = {
  parentName: "",
  childName: "",
  childAge: "",
  phone: "",
  reason: "",
  preferredDate: "",
  preferredTime: "",
  note: "",
};

/** Order matters: the first invalid field in this list receives focus. */
const REQUIRED: FieldName[] = ["parentName", "childName", "childAge", "phone", "reason"];

const LABELS: Record<FieldName, string> = {
  parentName: "Parent / Guardian Name",
  childName: "Child's Name",
  childAge: "Child's Age",
  phone: "Contact Number",
  reason: "Reason for Visit",
  preferredDate: "Preferred Date",
  preferredTime: "Preferred Time",
  note: "Additional Note",
};

function validate(values: FormValues): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};

  for (const name of REQUIRED) {
    if (!values[name].trim()) errors[name] = `${LABELS[name]} is required.`;
  }

  if (values.phone.trim() && (values.phone.match(/\d/g) ?? []).length < 10) {
    errors.phone = "Enter a contact number with at least 10 digits.";
  }

  return errors;
}

/**
 * Builds the WhatsApp message. Optional lines are dropped when blank so the
 * doctor never receives a half-empty enquiry. The caller percent-encodes it.
 */
function buildMessage(values: FormValues): string {
  const lines = [
    "Hello Dr. Ushapriya 👩‍⚕️,",
    "",
    "I would like to book a consultation for my child. 🩺👶",
    "",
    `Parent/Guardian Name: ${values.parentName.trim()}`,
    `Child's Name: ${values.childName.trim()}`,
    `Child's Age: ${values.childAge.trim()}`,
    `Contact Number: ${values.phone.trim()}`,
    `Reason for Visit: ${values.reason.trim()}`,
  ];

  if (values.preferredDate) lines.push(`Preferred Date: ${values.preferredDate}`);
  if (values.preferredTime) lines.push(`Preferred Time: ${values.preferredTime}`);

  if (values.note.trim()) {
    lines.push("", "Additional Note:", values.note.trim());
  }

  lines.push("", "Please let me know the available appointment slot.", "", "Thank you. 🙏");

  return lines.join("\n");
}

export function Appointment() {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<"idle" | "opened" | "unconfigured">("idle");

  const fieldId = (name: FieldName) => `${uid}-${name}`;

  const set = (name: FieldName) => (value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear the message as soon as the field is corrected.
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const describedBy = (name: FieldName) =>
    errors[name] ? `${fieldId(name)}-error` : undefined;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const found = validate(values);
    setErrors(found);

    const firstInvalid = REQUIRED.find((name) => found[name]);
    if (firstInvalid) {
      setStatus("idle");
      formRef.current
        ?.querySelector<HTMLElement>(`#${CSS.escape(fieldId(firstInvalid))}`)
        ?.focus();
      return;
    }

    const url = whatsappUrl(buildMessage(values));
    if (!url) {
      setStatus("unconfigured");
      return;
    }

    setStatus("opened");
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const quickUrl = whatsappUrl(quickEnquiryMessage);

  return (
    <section
      id="appointment"
      aria-labelledby="appointment-title"
      className="relative overflow-hidden bg-canvas-soft py-24 sm:py-28 lg:py-36"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-drift-a absolute -left-[10%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,var(--color-brand-100)_0%,transparent_65%)] opacity-40" />
        <div className="animate-drift-b absolute -right-[10%] bottom-[10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,var(--color-coral-100)_0%,transparent_65%)] opacity-40" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="Appointments"
          title="Request an appointment."
          titleId="appointment-title"
          description={`Share a few details about your child and the enquiry opens in WhatsApp, ready to send to ${doctor.name}.`}
          className="max-w-2xl"
        />

        <div className="mt-14 grid gap-6 lg:mt-18 lg:grid-cols-[1.45fr_1fr] lg:items-start lg:gap-8">
          {/* ---------- Enquiry form ---------- */}
          <Reveal distance={20}>
            <div className="relative overflow-hidden rounded-panel bg-surface p-6 shadow-soft ring-1 ring-line sm:p-9 lg:p-10">
              <div aria-hidden="true" className="absolute right-4 top-4 hidden opacity-40 sm:block">
                <TeddyBear className="h-10 w-10 animate-float-bob" />
              </div>

              <h3 className="font-display text-[1.375rem] font-bold leading-snug tracking-[-0.02em] text-ink sm:text-[1.625rem]">
                Appointment enquiry
              </h3>
              <p className="mt-3 max-w-lg text-[0.9375rem] leading-[1.7] text-ink-muted">
                Fields marked <span aria-hidden="true">*</span>
                <span className="sr-only">with an asterisk</span> are required. Nothing is
                stored on this website — your details go straight into a WhatsApp message
                that you send yourself.
              </p>

              <form ref={formRef} noValidate onSubmit={handleSubmit} className="mt-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id={fieldId("parentName")}
                    label="Parent / Guardian Name *"
                    error={errors.parentName}
                  >
                    <input
                      id={fieldId("parentName")}
                      name="parentName"
                      type="text"
                      autoComplete="name"
                      value={values.parentName}
                      onChange={(e) => set("parentName")(e.target.value)}
                      aria-invalid={errors.parentName ? true : undefined}
                      aria-describedby={describedBy("parentName")}
                      className={cx(fieldControl, fieldHeight, borderFor(errors.parentName))}
                    />
                  </Field>

                  <Field
                    id={fieldId("childName")}
                    label="Child's Name *"
                    error={errors.childName}
                  >
                    <input
                      id={fieldId("childName")}
                      name="childName"
                      type="text"
                      value={values.childName}
                      onChange={(e) => set("childName")(e.target.value)}
                      aria-invalid={errors.childName ? true : undefined}
                      aria-describedby={describedBy("childName")}
                      className={cx(fieldControl, fieldHeight, borderFor(errors.childName))}
                    />
                  </Field>

                  <Field
                    id={fieldId("childAge")}
                    label="Child's Age *"
                    error={errors.childAge}
                    hint="For example: 8 months, or 6 years"
                  >
                    <input
                      id={fieldId("childAge")}
                      name="childAge"
                      type="text"
                      value={values.childAge}
                      onChange={(e) => set("childAge")(e.target.value)}
                      aria-invalid={errors.childAge ? true : undefined}
                      aria-describedby={describedBy("childAge")}
                      className={cx(fieldControl, fieldHeight, borderFor(errors.childAge))}
                    />
                  </Field>

                  <Field id={fieldId("phone")} label="Contact Number *" error={errors.phone}>
                    <input
                      id={fieldId("phone")}
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={(e) => set("phone")(e.target.value)}
                      aria-invalid={errors.phone ? true : undefined}
                      aria-describedby={describedBy("phone")}
                      className={cx(fieldControl, fieldHeight, borderFor(errors.phone))}
                    />
                  </Field>

                  <Field
                    id={fieldId("reason")}
                    label="Reason for Visit *"
                    error={errors.reason}
                    className="sm:col-span-2"
                    hint="A short description is enough — please do not share detailed medical records here."
                  >
                    <input
                      id={fieldId("reason")}
                      name="reason"
                      type="text"
                      value={values.reason}
                      onChange={(e) => set("reason")(e.target.value)}
                      aria-invalid={errors.reason ? true : undefined}
                      aria-describedby={describedBy("reason")}
                      className={cx(fieldControl, fieldHeight, borderFor(errors.reason))}
                    />
                  </Field>

                  <Field id={fieldId("preferredDate")} label="Preferred Date">
                    <input
                      id={fieldId("preferredDate")}
                      name="preferredDate"
                      type="date"
                      value={values.preferredDate}
                      onChange={(e) => set("preferredDate")(e.target.value)}
                      className={cx(fieldControl, fieldHeight, borderFor())}
                    />
                  </Field>

                  <Field id={fieldId("preferredTime")} label="Preferred Time">
                    <select
                      id={fieldId("preferredTime")}
                      name="preferredTime"
                      value={values.preferredTime}
                      onChange={(e) => set("preferredTime")(e.target.value)}
                      className={cx(
                        fieldControl,
                        fieldHeight,
                        borderFor(),
                        "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%235f6e78%22 stroke-width=%221.6%22 stroke-linecap=%22round%22%3E%3Cpath d=%22m5.6 9.2 6.4 6.3 6.4-6.3%22/%3E%3C/svg%3E')] bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-11",
                      )}
                    >
                      <option value="">No preference</option>
                      <option value="Morning">Morning</option>
                      <option value="Afternoon">Afternoon</option>
                      <option value="Evening">Evening</option>
                    </select>
                  </Field>

                  <Field
                    id={fieldId("note")}
                    label="Additional Note"
                    className="sm:col-span-2"
                  >
                    <textarea
                      id={fieldId("note")}
                      name="note"
                      rows={3}
                      value={values.note}
                      onChange={(e) => set("note")(e.target.value)}
                      className={cx(fieldControl, borderFor(), "resize-y py-3")}
                    />
                  </Field>
                </div>

                <button
                  type="submit"
                  className="group mt-8 inline-flex w-full select-none items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-[1rem] font-bold text-white shadow-soft transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-[#1DA851] hover:shadow-lift active:translate-y-0"
                >
                  <Icon
                    name="whatsapp"
                    className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                  />
                  Continue to WhatsApp
                </button>

                <p aria-live="polite" className="mt-4">
                  {status === "opened" ? (
                    <span className="flex items-start gap-2 text-[0.875rem] leading-relaxed text-mint-600">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
                      WhatsApp should have opened in a new tab with your enquiry ready to
                      send. If it did not, please check your pop-up blocker.
                    </span>
                  ) : null}

                  {status === "unconfigured" ? (
                    <span className="flex items-start gap-2 rounded-xl bg-notice-soft p-3.5 text-[0.875rem] leading-relaxed text-notice ring-1 ring-notice-line">
                      <Icon name="shield" className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>
                        The appointment WhatsApp number has not been configured yet, so this
                        enquiry cannot be sent. Please set{" "}
                        <code className="font-mono text-[0.8125rem]">APPOINTMENT_NUMBER</code>{" "}
                        in <code className="font-mono text-[0.8125rem]">data/contact.ts</code>.
                      </span>
                    </span>
                  ) : null}
                </p>
              </form>
            </div>
          </Reveal>

          {/* ---------- Aside ---------- */}
          <aside className="flex flex-col gap-6">
            <Reveal delay={120} distance={20}>
              <div className="rounded-panel bg-brand-950 p-7 text-white shadow-soft sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-teal-300">
                    <Icon name="whatsapp" className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-[1.0625rem] font-bold tracking-[-0.015em]">
                    Prefer to just message?
                  </h3>
                </div>

                <p className="mt-5 text-[0.9375rem] leading-[1.7] text-white/65">
                  Skip the form and start a WhatsApp conversation instead.
                </p>

                {quickUrl ? (
                  <a
                    href={quickUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full select-none items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[0.9375rem] font-bold text-brand-800 shadow-soft transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0"
                  >
                    <Icon name="whatsapp" className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                ) : (
                  <p className="mt-6 rounded-xl bg-white/5 p-3.5 text-[0.8125rem] leading-relaxed text-white/55 ring-1 ring-white/10">
                    A WhatsApp number will be published here once confirmed.
                  </p>
                )}

                {contact.isConfigured ? (
                  <a
                    href={contact.telHref}
                    className="mt-3 inline-flex w-full select-none items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.9375rem] font-medium text-white/85 ring-1 ring-white/25 transition-colors duration-300 ease-premium hover:bg-white/10"
                  >
                    <Icon name="phone" className="h-4 w-4" />
                    {contact.display}
                  </a>
                ) : null}
              </div>
            </Reveal>

            <Reveal delay={200} distance={20}>
              <div className="rounded-panel border-l-2 border-notice bg-notice-soft p-6 ring-1 ring-notice-line sm:p-7">
                <div className="flex items-start gap-3.5">
                  <span className="mt-0.5 shrink-0 text-notice">
                    <Icon name="shield" className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[0.9375rem] font-semibold text-ink">
                      In an emergency
                    </h3>
                    <p className="mt-2 text-[0.875rem] leading-[1.7] text-ink-muted">
                      This enquiry form is not monitored continuously. For urgent medical
                      emergencies, please contact your nearest emergency facility.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </Container>
    </section>
  );
}
