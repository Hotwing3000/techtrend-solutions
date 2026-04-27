import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { JsonLd } from "../components/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt – book en gratis sikkerhedssamtale",
  description:
    "Kontakt TechTrend Solutions for en gratis og uforpligtende sikkerhedssamtale. Vi hjælper SMV'er med firewall-løsninger, netværksbeskyttelse og IT-sikkerhed. Svar inden for 24 timer.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt | TechTrend Solutions",
    description: "Få en gratis sikkerhedssamtale med vores danske team.",
    url: `${siteConfig.url}/kontakt`,
  },
};

export default function KontaktPage() {
  const contactLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Kontakt TechTrend Solutions",
    url: `${siteConfig.url}/kontakt`,
    inLanguage: "da-DK",
  };

  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Kontakt</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Lad os tale om din <span className="gradient-text">cybersikkerhed</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Udfyld formularen, så vender vi tilbage inden for 24 timer på hverdage.
            Samtalen er gratis og helt uforpligtende.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* FORM */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
              <h2 className="font-display text-2xl font-bold text-slate-900">Send os en besked</h2>
              <p className="mt-1 text-sm text-slate-600">
                Felter markeret med * er obligatoriske.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* SIDE INFO */}
          <aside className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl bg-slate-50 p-7 ring-1 ring-slate-200">
              <h2 className="font-display text-lg font-bold text-slate-900">Direkte kontakt</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <IconBox>
                    <path d="M3 5h18M3 12h18M3 19h18" />
                  </IconBox>
                  <div>
                    <dt className="font-medium text-slate-500">E-mail</dt>
                    <dd>
                      <a href={`mailto:${siteConfig.email}`} className="text-brand-700 hover:underline">
                        {siteConfig.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconBox>
                    <path d="M22 16.92V21a1 1 0 0 1-1.1 1A19.9 19.9 0 0 1 2 4.1 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7 11a16 16 0 0 0 6 6l2.25-1.82a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .75 1z" />
                  </IconBox>
                  <div>
                    <dt className="font-medium text-slate-500">Telefon</dt>
                    <dd>
                      <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-brand-700 hover:underline">
                        {siteConfig.phone}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconBox>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </IconBox>
                  <div>
                    <dt className="font-medium text-slate-500">Adresse</dt>
                    <dd className="text-slate-900">{siteConfig.address}</dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-brand-700 to-accent-600 p-7 text-white">
              <h2 className="font-display text-lg font-bold">Akut sikkerhedsbrud?</h2>
              <p className="mt-2 text-sm text-blue-100">
                Hvis du er ramt af et igangværende cyberangreb, så ring direkte til os på{" "}
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="font-semibold underline">
                  {siteConfig.phone}
                </a>{" "}
                – vi prioriterer akutte sager 24/7.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 ring-1 ring-slate-200">
              <h2 className="font-display text-lg font-bold text-slate-900">Hvad sker der efter du sender?</h2>
              <ol className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="flex gap-3">
                  <Step n="1" /> Vi læser din besked og finder den rigtige rådgiver.
                </li>
                <li className="flex gap-3">
                  <Step n="2" /> Du får et opkald eller en mail inden for 24 timer.
                </li>
                <li className="flex gap-3">
                  <Step n="3" /> Vi booker en uforpligtende samtale på 30 minutter.
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </div>

      <JsonLd data={contactLd} />
    </>
  );
}

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-white text-brand-700 ring-1 ring-slate-200">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
        {children}
      </svg>
    </span>
  );
}

function Step({ n }: { n: string }) {
  return (
    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
      {n}
    </span>
  );
}
