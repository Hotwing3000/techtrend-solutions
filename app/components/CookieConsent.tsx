"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ConsentChoice = {
  necessary: true;
  analytics: boolean;
  timestamp: string;
  version: number;
};

const STORAGE_KEY = "cookie-consent";
const CONSENT_VERSION = 1;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    openCookieSettings?: () => void;
  }
}

function applyConsent(analytics: boolean) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: analytics ? "granted" : "denied",
    });
  }
}

function saveChoice(analytics: boolean) {
  const choice: ConsentChoice = {
    necessary: true,
    analytics,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(choice));
  applyConsent(analytics);
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analyticsToggle, setAnalyticsToggle] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        setOpen(true);
      } else {
        const parsed = JSON.parse(saved) as ConsentChoice;
        if (parsed.version !== CONSENT_VERSION) {
          setOpen(true);
        }
      }
    } catch {
      setOpen(true);
    }

    // Expose a global function so the footer link can re-open the banner
    window.openCookieSettings = () => {
      setShowCustomize(true);
      setOpen(true);
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved) as ConsentChoice;
          setAnalyticsToggle(parsed.analytics);
        }
      } catch {}
    };
  }, []);

  const acceptAll = () => {
    saveChoice(true);
    setOpen(false);
    setShowCustomize(false);
  };

  const rejectAll = () => {
    saveChoice(false);
    setOpen(false);
    setShowCustomize(false);
  };

  const saveCustom = () => {
    saveChoice(analyticsToggle);
    setOpen(false);
    setShowCustomize(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        {!showCustomize ? (
          <div className="p-6 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="hidden h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 sm:flex">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden>
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5z" />
                  <circle cx="9" cy="11" r="0.6" fill="currentColor" />
                  <circle cx="15" cy="14" r="0.6" fill="currentColor" />
                  <circle cx="11" cy="16" r="0.6" fill="currentColor" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 id="cookie-banner-title" className="font-display text-lg font-bold text-slate-900">
                  Vi bruger cookies
                </h2>
                <p id="cookie-banner-desc" className="mt-2 text-sm leading-relaxed text-slate-600">
                  Vi bruger nødvendige cookies, så hjemmesiden virker. Med din tilladelse bruger vi også
                  analyse-cookies (Google Analytics) til at forstå, hvordan besøgende bruger siden, så vi kan
                  forbedre den. Du kan ændre dit valg når som helst i bunden af siden.{" "}
                  <Link href="/cookiepolitik" className="font-medium text-brand-700 hover:underline">
                    Læs vores cookiepolitik
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-end">
              <button
                type="button"
                onClick={() => setShowCustomize(true)}
                className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-brand-700"
              >
                Tilpas indstillinger
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
              >
                Afvis alle
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-lg bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800"
              >
                Accepter alle
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-7">
            <h2 className="font-display text-lg font-bold text-slate-900">
              Cookie-indstillinger
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Vælg hvilke cookies du tillader. Du kan altid ændre dit valg igen.
            </p>

            <ul className="mt-5 space-y-3">
              <li className="flex items-start justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-slate-900">Nødvendige</h3>
                    <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-700">
                      Påkrævet
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    Får hjemmesiden til at virke. Kan ikke fravælges.
                  </p>
                </div>
                <Toggle checked disabled />
              </li>

              <li className="flex items-start justify-between gap-4 rounded-xl border border-slate-200 p-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">Analyse</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    Google Analytics – hjælper os med at forstå hvordan siden bruges,
                    så vi kan forbedre den. Anonymiseret aggregeret data.
                  </p>
                </div>
                <Toggle
                  checked={analyticsToggle}
                  onChange={() => setAnalyticsToggle((v) => !v)}
                />
              </li>
            </ul>

            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-end">
              <button
                type="button"
                onClick={() => setShowCustomize(false)}
                className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-brand-700"
              >
                Tilbage
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
              >
                Afvis alle
              </button>
              <button
                type="button"
                onClick={saveCustom}
                className="rounded-lg bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800"
              >
                Gem mine valg
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Toggle({
  checked,
  onChange,
  disabled = false,
}: {
  checked: boolean;
  onChange?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 flex-none items-center rounded-full transition ${
        checked ? "bg-brand-700" : "bg-slate-300"
      } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${
          checked ? "translate-x-5" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}
