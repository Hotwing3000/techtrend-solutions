"use client";

import { useState, FormEvent } from "react";
import { services } from "@/lib/services";

type Status = "idle" | "submitting" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Demo: simulate submission
    setTimeout(() => setStatus("success"), 700);
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white">
          <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            <path d="M16.7 5.3l-8 8-3.7-3.7-1.4 1.4 5.1 5.1 9.4-9.4z" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold text-slate-900">Tak for din henvendelse!</h3>
        <p className="mt-2 text-slate-600">
          Vi vender tilbage til dig inden for 24 timer på hverdage.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          Send en ny besked →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Kontaktformular">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Virksomhedsnavn" name="company" required placeholder="F.eks. Eksempel ApS" />
        <Field label="E-mail" name="email" type="email" required placeholder="navn@virksomhed.dk" />
      </div>

      <Field
        label="Telefonnummer"
        name="phone"
        type="tel"
        required
        placeholder="+45 12 34 56 78"
      />

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-slate-900">
          Emne <span className="text-red-600">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          className="block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base text-slate-900 shadow-sm transition focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
        >
          <option value="" disabled>Vælg et emne…</option>
          {services.map((s) => (
            <option key={s.id} value={s.shortTitle}>{s.shortTitle}</option>
          ))}
          <option value="Generel forespørgsel">Generel forespørgsel</option>
          <option value="Sikkerhedssamtale">Gratis sikkerhedssamtale</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-900">
          Besked <span className="text-slate-400">(valgfrit)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Fortæl os kort om jeres situation og hvad I gerne vil have hjælp til…"
          className="block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base text-slate-900 shadow-sm transition focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
        />
      </div>

      <p className="text-xs text-slate-500">
        Ved at sende formularen accepterer du, at vi behandler dine oplysninger efter vores
        privatlivspolitik. Vi videregiver aldrig dine data til tredjepart.
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-700 px-6 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-brand-800 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sender…" : "Send henvendelse"}
        {status !== "submitting" && (
          <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            <path d="M7.5 4.5L13 10l-5.5 5.5-1.4-1.4L10.2 10 6.1 5.9z" />
          </svg>
        )}
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

function Field({ label, name, type = "text", required, placeholder }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-slate-900">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
      />
    </div>
  );
}
