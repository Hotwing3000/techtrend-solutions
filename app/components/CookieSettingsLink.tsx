"use client";

export function CookieSettingsLink({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined" && typeof window.openCookieSettings === "function") {
          window.openCookieSettings();
        }
      }}
      className={`hover:text-brand-700 ${className}`}
    >
      Cookie-indstillinger
    </button>
  );
}
