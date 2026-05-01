import Link from "next/link";
import { Logo } from "./Logo";
import { CookieSettingsLink } from "./CookieSettingsLink";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
              {siteConfig.description}
            </p>
            <span
              role="img"
              aria-label="LinkedIn (sociale profiler er ikke oprettet — caseprojekt)"
              title="Sociale profiler er ikke oprettet — dette er et caseprojekt"
              className="mt-5 inline-flex h-9 w-9 cursor-default items-center justify-center rounded-full bg-white text-slate-400 ring-1 ring-slate-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.36-1.84c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
            </span>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Løsninger</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              <li><Link href="/loesninger#firewall" className="hover:text-brand-700">Firewall-løsninger</Link></li>
              <li><Link href="/loesninger#netvaerk" className="hover:text-brand-700">Netværksbeskyttelse</Link></li>
              <li><Link href="/loesninger#backup" className="hover:text-brand-700">Sikkerhedskopiering</Link></li>
              <li><Link href="/loesninger#adgang" className="hover:text-brand-700">Adgangsstyring</Link></li>
              <li><Link href="/loesninger#overvaagning" className="hover:text-brand-700">IT-overvågning</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Virksomhed</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              <li><Link href="/om-os" className="hover:text-brand-700">Om os</Link></li>
              <li><Link href="/blog" className="hover:text-brand-700">Blog & nyheder</Link></li>
              <li><Link href="/faq" className="hover:text-brand-700">FAQ</Link></li>
              <li><Link href="/kontakt" className="hover:text-brand-700">Kontakt</Link></li>
              <li><Link href="/persondatapolitik" className="hover:text-brand-700">Persondatapolitik</Link></li>
              <li><Link href="/cookiepolitik" className="hover:text-brand-700">Cookiepolitik</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Alle rettigheder forbeholdes.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <CookieSettingsLink />
            <span className="hidden md:inline" aria-hidden>·</span>
            <p>CVR 12345678 · {siteConfig.address}</p>
          </div>
        </div>
        <div className="mt-4 space-y-2 text-[11px] leading-relaxed text-slate-400">
          <p>
            Illustrationer på sitet er delvist genereret med kunstig intelligens (AI).
            Fotografier af mennesker er stockmateriale.
          </p>
          <p>
            <span className="font-semibold text-slate-500">Bemærk:</span> Dette website er et
            caseprojekt. Kontaktoplysninger (CVR, adresse, telefon, e-mail), kundeudtalelser,
            navne og statistikker er fiktive og bør ikke bruges til reel kontakt.
          </p>
        </div>
      </div>
    </footer>
  );
}
