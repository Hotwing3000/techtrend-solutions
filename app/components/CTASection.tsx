import Link from "next/link";

export function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Kontakt opfordring">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-700 to-accent-600 px-6 py-14 text-center sm:px-12 sm:py-20">
        <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-grid" aria-hidden />
        <div className="relative">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Klar til at sikre din virksomhed?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Få en gratis og uforpligtende sikkerhedssamtale med vores eksperter.
            Vi kortlægger dine sårbarheder og foreslår konkrete løsninger.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-700 shadow-lg transition hover:bg-blue-50"
            >
              Kontakt os i dag
              <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path d="M7.5 4.5L13 10l-5.5 5.5-1.4-1.4L10.2 10 6.1 5.9z" />
              </svg>
            </Link>
            <Link
              href="/loesninger"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Se vores løsninger
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
