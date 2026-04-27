import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
      <p className="font-display text-sm font-semibold uppercase tracking-wider text-brand-700">404</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Siden blev ikke fundet
      </h1>
      <p className="mt-4 max-w-md text-lg text-slate-600">
        Den side du ledte efter findes ikke (længere). Måske kan du finde det du søger fra forsiden.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
        >
          Tilbage til forsiden
        </Link>
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:border-brand-600"
        >
          Kontakt os
        </Link>
      </div>
    </div>
  );
}
