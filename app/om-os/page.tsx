import type { Metadata } from "next";
import { CTASection } from "../components/CTASection";
import { BrandImage } from "../components/BrandImage";
import { JsonLd } from "../components/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Om os – din partner i cybersikkerhed",
  description:
    "Lær TechTrend Solutions at kende: vores historie, mission og det danske team bag virksomheden. Vi har leveret cybersikkerhed til SMV'er siden 2015.",
  alternates: { canonical: "/om-os" },
  openGraph: {
    title: "Om TechTrend Solutions",
    description:
      "Cybersikkerhed for danske SMV'er siden 2015. Mød teamet bag TechTrend Solutions.",
    url: `${siteConfig.url}/om-os`,
  },
};

const values = [
  {
    title: "Klar tale",
    description:
      "Vi forklarer cybersikkerhed i et sprog du forstår. Ingen tekniske termer for tekniske termers skyld.",
  },
  {
    title: "Proaktivitet",
    description:
      "Vi venter ikke på, at problemer opstår. Vi forudser dem og handler før de bliver til kriser.",
  },
  {
    title: "Helhed",
    description:
      "Vi sætter sikkerhed ind i din forretning. Det handler om hele din virksomhed, ikke kun teknik.",
  },
  {
    title: "Langsigtet partnerskab",
    description:
      "Vi vil ikke bare sælge dig en løsning – vi vil vokse med dig som strategisk partner.",
  },
];

const milestones = [
  { year: "2015", title: "Grundlagt", text: "Jonathan og Camilla starter TechTrend Solutions med en mission om at gøre cybersikkerhed tilgængelig for danske SMV'er." },
  { year: "2018", title: "Vækst", text: "Vi runder de første 50 kunder og udvider med faste medarbejdere." },
  { year: "2022", title: "24/7 overvågning", text: "Vi lancerer vores managed service for døgnovervågning af kunders IT-infrastruktur." },
  { year: "2025", title: "Næste kapitel", text: "Vi vokser videre i Danmark og forbereder international udvidelse." },
];

export default function OmOsPage() {
  const aboutLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Om TechTrend Solutions",
    url: `${siteConfig.url}/om-os`,
    inLanguage: "da-DK",
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Om os</p>
              <h1 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                Cybersikkerhed der er <span className="gradient-text">menneskelig</span>
              </h1>
              <p className="mt-5 text-lg text-slate-600">
                TechTrend Solutions blev stiftet i 2015 af Jonathan og Camilla med én vision:
                at give danske små og mellemstore virksomheder den samme stærke cybersikkerhed
                som de største – uden kompleksitet og uden enterprise-prislappen.
              </p>
              <p className="mt-4 text-lg text-slate-600">
                I dag er vi syv medarbejdere i Danmark, der hver dag hjælper SMV&apos;er med
                at navigere i en verden, hvor cybertrusler bliver mere avancerede.
              </p>
            </div>
            <BrandImage
              src="/images/founders.jpg"
              alt="Jonathan og Camilla – medstiftere af TechTrend Solutions"
              ratio="square"
              priority
            />
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="mission-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <BrandImage
            src="/images/team-collab.jpg"
            alt="TechTrend Solutions-teamet i samarbejde på kontoret"
            ratio="video"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Vores mission</p>
            <h2 id="mission-heading" className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              At gøre cybersikkerhed til en styrke – ikke en byrde
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Vi tror på, at god cybersikkerhed gør virksomheder stærkere. Når du ved at dine systemer er
              beskyttet, kan du fokusere på det du er bedst til: at drive forretning og betjene dine kunder.
            </p>
            <p className="mt-4 text-slate-600">
              Vores tilgang er proaktiv og pragmatisk. Vi sætter os ind i din virksomhed, finder de største
              risici, og bygger løsninger der passer til dig – ikke omvendt.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-slate-50 py-20" aria-labelledby="vaerdier-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Vores værdier</p>
            <h2 id="vaerdier-heading" className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Det vi står for
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-7 ring-1 ring-slate-200">
                <h3 className="font-display text-lg font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="rejse-heading">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Vores rejse</p>
        <h2 id="rejse-heading" className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Fra startup til betroet partner
        </h2>

        <ol className="mt-12 space-y-8 border-l-2 border-brand-100 pl-6">
          {milestones.map((m) => (
            <li key={m.year} className="relative">
              <span className="absolute -left-[33px] flex h-6 w-6 items-center justify-center rounded-full bg-brand-700 text-xs font-bold text-white ring-4 ring-white" aria-hidden>
                ●
              </span>
              <div className="font-display text-sm font-bold uppercase tracking-wider text-brand-700">{m.year}</div>
              <h3 className="mt-1 font-display text-xl font-semibold text-slate-900">{m.title}</h3>
              <p className="mt-1 text-slate-600">{m.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <CTASection />
      <div className="h-20" />

      <JsonLd data={aboutLd} />
    </>
  );
}
