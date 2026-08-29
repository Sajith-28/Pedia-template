"use client";

import { useEffect, useId, useState, type FormEvent } from "react";
import { clinic } from "@/data/clinic";
import { Button } from "@/components/ui/Button";
import { Field, borderFor, fieldControl, fieldHeight } from "@/components/ui/Field";
import { Icon } from "@/components/ui/Icons";
import { cx } from "@/lib/utils";

type FieldName = "name" | "phone" | "childAge" | "date" | "time" | "reason";
type FormValues = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;

const EMPTY: FormValues = {
  name: "",
  phone: "",
  childAge: "",
  date: "",
  time: "",
  reason: "",
};

const morningSlots = ["9:00 AM", "9:45 AM", "10:30 AM", "11:15 AM", "12:00 PM"];
const eveningSlots = ["4:00 PM", "4:45 PM", "5:30 PM", "6:15 PM", "7:00 PM"];

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter the parent or patient name.";
  }

  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 10) {
    errors.phone = "Please enter a valid contact number.";
  }

  if (values.childAge.trim().length === 0) {
    errors.childAge = "Please tell us how old your child is.";
  }

  if (!values.date) {
    errors.date = "Please choose a preferred date.";
  } else {
    const chosen = new Date(`${values.date}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(chosen.getTime())) errors.date = "Please choose a valid date.";
    else if (chosen < today) errors.date = "Please choose today or a later date.";
    else if (chosen.getDay() === 0) errors.date = "The clinic is closed on Sundays.";
  }

  if (!values.time) {
    errors.time = "Please choose a preferred time.";
  }

  return errors;
}

export function AppointmentForm() {
  const uid = useId();
  const fieldId = (name: FieldName) => `${uid}-${name}`;

  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [minDate, setMinDate] = useState("");

  // Resolved on the client so server and client markup always agree.
  useEffect(() => {
    setMinDate(new Date().toLocaleDateString("en-CA"));
  }, []);

  const update = (name: FieldName) => (value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = (Object.keys(nextErrors) as FieldName[])[0];
      document.getElementById(fieldId(firstInvalid))?.focus();
      return;
    }

    // Template build: no backend attached. Post `values` to your booking
    // endpoint here, then keep the confirmation state below.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="flex min-h-[28rem] flex-col items-center justify-center rounded-panel bg-surface p-8 text-center shadow-soft ring-1 ring-line sm:p-12"
      >
        <span className="grid h-16 w-16 place-items-center rounded-full bg-teal-50 text-teal-600">
          <Icon name="check" className="h-7 w-7" strokeWidth={1.6} />
        </span>
        <h3 className="mt-7 font-display text-[1.5rem] font-bold tracking-[-0.02em] text-ink">
          Request received
        </h3>
        <p className="mt-3.5 max-w-[42ch] text-[0.9375rem] leading-[1.72] text-ink-muted">
          Thank you, {values.name.trim().split(" ")[0]}. The clinic will call you on{" "}
          <span className="font-medium text-ink">{values.phone}</span> to confirm your
          appointment on{" "}
          <span className="font-medium text-ink">
            {new Date(`${values.date}T00:00:00`).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>{" "}
          at <span className="font-medium text-ink">{values.time}</span>.
        </p>
        <p className="mt-4 text-[0.8125rem] text-ink-soft">
          This is a demo template — no booking has actually been made.
        </p>
        <Button
          variant="secondary"
          size="md"
          className="mt-8"
          onClick={() => {
            setValues(EMPTY);
            setSubmitted(false);
          }}
        >
          Book another consultation
        </Button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-panel bg-surface p-6 shadow-soft ring-1 ring-line sm:p-9 lg:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={fieldId("name")} label="Parent / patient name" error={errors.name}>
          <input
            id={fieldId("name")}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Priya Raman"
            value={values.name}
            onChange={(event) => update("name")(event.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? `${fieldId("name")}-error` : undefined}
            className={cx(fieldControl, fieldHeight, borderFor(errors.name))}
          />
        </Field>

        <Field id={fieldId("phone")} label="Phone number" error={errors.phone}>
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91 90000 00000"
            value={values.phone}
            onChange={(event) => update("phone")(event.target.value)}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? `${fieldId("phone")}-error` : undefined}
            className={cx(fieldControl, fieldHeight, borderFor(errors.phone))}
          />
        </Field>

        <Field
          id={fieldId("childAge")}
          label="Child's age"
          error={errors.childAge}
          hint={errors.childAge ? undefined : "Months or years is fine."}
        >
          <input
            id={fieldId("childAge")}
            name="childAge"
            type="text"
            placeholder="e.g. 3 years 4 months"
            value={values.childAge}
            onChange={(event) => update("childAge")(event.target.value)}
            aria-invalid={errors.childAge ? true : undefined}
            aria-describedby={
              errors.childAge ? `${fieldId("childAge")}-error` : `${fieldId("childAge")}-hint`
            }
            className={cx(fieldControl, fieldHeight, borderFor(errors.childAge))}
          />
        </Field>

        <Field id={fieldId("date")} label="Preferred date" error={errors.date}>
          <input
            id={fieldId("date")}
            name="date"
            type="date"
            min={minDate || undefined}
            value={values.date}
            onChange={(event) => update("date")(event.target.value)}
            aria-invalid={errors.date ? true : undefined}
            aria-describedby={errors.date ? `${fieldId("date")}-error` : undefined}
            className={cx(fieldControl, fieldHeight, borderFor(errors.date))}
          />
        </Field>

        <Field
          id={fieldId("time")}
          label="Preferred time"
          error={errors.time}
          className="sm:col-span-2"
        >
          <div className="relative">
            <select
              id={fieldId("time")}
              name="time"
              value={values.time}
              onChange={(event) => update("time")(event.target.value)}
              aria-invalid={errors.time ? true : undefined}
              aria-describedby={errors.time ? `${fieldId("time")}-error` : undefined}
              className={cx(
                fieldControl,
                fieldHeight,
                borderFor(errors.time),
                "cursor-pointer pr-11",
                values.time ? "text-ink" : "text-ink-soft/75",
              )}
            >
              <option value="">Select a consultation slot</option>
              <optgroup label={`Morning — ${clinic.hours.morning}`}>
                {morningSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </optgroup>
              <optgroup label={`Evening — ${clinic.hours.evening}`}>
                {eveningSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </optgroup>
            </select>
            <Icon
              name="chevronDown"
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft"
            />
          </div>
        </Field>

        <Field
          id={fieldId("reason")}
          label="Reason for visit"
          hint="Optional — a short note helps us prepare for the consultation."
          className="sm:col-span-2"
        >
          <textarea
            id={fieldId("reason")}
            name="reason"
            rows={4}
            placeholder="Fever for three days, low appetite…"
            value={values.reason}
            onChange={(event) => update("reason")(event.target.value)}
            aria-describedby={`${fieldId("reason")}-hint`}
            className={cx(fieldControl, borderFor(), "resize-y py-3.5 leading-relaxed")}
          />
        </Field>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[34ch] text-[0.8125rem] leading-relaxed text-ink-soft">
          Requests are confirmed by phone during clinic hours.
        </p>
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Request Appointment
          <Icon
            name="arrowRight"
            className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1"
          />
        </Button>
      </div>
    </form>
  );
}
