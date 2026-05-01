import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "../components/CTASection";
import { BrandImage } from "../components/BrandImage";
import { ServiceIcon } from "../components/ServiceIcon";
import { JsonLd } from "../components/JsonLd";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Løsninger – IT-sikkerhed og firewall til SMV'er",
  description:
    "Se TechTrend Solutions' komplette tilbud af IT-sikkerhedsløsninger: firewall-løsninger, netværksbeskyttelse, sikkerhedskopiering, adgangsstyring og 24/7 IT-overvågning til danske SMV'er.",
  alternates: { canonical: "/loesninger" },
  openGraph: {
    title: "IT-sikkerhedsløsninger til SMV'er | TechTrend Solutions",
    description:
      "Firewall-løsninger, netværksbeskyttelse og IT-overvågning til danske små og mellemstore virksomheder.",
    url: `${siteConfig.url}/loesninger`,
  },
};

export default function LoesningerPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Forside", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Løsninger", item: `${siteConfig.url}/loesninger` },
    ],
  };

  const servicesLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        provider: { "@type": "Organization", name: siteConfig.name },
        areaServed: "DK",
      },
    })),
  };

  return (
    <>
      {/* HEADER */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Løsninger</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            IT-sikkerhedsløsninger til <span className="gradient-text">små og mellemstore virksomheder</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Vi leverer en sammenhængende cybersikkerhedspakke – fra firewall til 24/7 overvågning.
            Vælg det du har brug for nu, og udvid når din virksomhed vokser.
          </p>
        </div>
      </section>

      {/* SERVICES IN DETAIL */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {services.map((service, i) => (
            <section
              key={service.id}
              id={service.id}
              className="scroll-mt-24"
              aria-labelledby={`${service.id}-heading`}
            >
              <div className={`grid gap-12 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                <div className="lg:[direction:ltr]">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <ServiceIcon icon={service.icon} />
                  </div>
                  <h2
                    id={`${service.id}-heading`}
                    className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                  >
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg text-slate-600">{service.description}</p>

                  <ul className="mt-6 space-y-3">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-slate-700">
                        <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-100 text-brand-700">
                          <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                            <path d="M16.7 5.3l-8 8-3.7-3.7-1.4 1.4 5.1 5.1 9.4-9.4z" />
                          </svg>
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800"
                    >
                      Få et tilbud på {service.shortTitle.toLowerCase()}
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                        <path d="M7.5 4.5L13 10l-5.5 5.5-1.4-1.4L10.2 10 6.1 5.9z" />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="lg:[direction:ltr]">
                  <BrandImage
                    src={service.image}
                    alt={service.imageAlt}
                    ratio="square"
                  />
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* PROCESS */}
      <section className="bg-slate-50 py-20" aria-labelledby="proces-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Vores proces</p>
            <h2 id="proces-heading" className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Sådan kommer du sikkert i gang
            </h2>
          </div>

          <ol className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              { n: "1", t: "Gratis samtale", d: "Vi taler om din virksomhed og dine udfordringer – uforpligtende." },
              { n: "2", t: "Sikkerhedstjek", d: "Vi kortlægger sårbarheder og prioriterer det vigtigste først." },
              { n: "3", t: "Implementering", d: "Vi opsætter løsningerne uden at forstyrre din drift." },
              { n: "4", t: "Løbende support", d: "Vi overvåger, opdaterer og er der når du har brug for os." },
            ].map((step) => (
              <li key={step.n} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
                <div className="font-display text-3xl font-bold text-brand-700">{step.n}</div>
                <h3 className="mt-3 font-semibold text-slate-900">{step.t}</h3>
                <p className="mt-1 text-sm text-slate-600">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="h-20" />
      <CTASection />
      <div className="h-20" />

      <JsonLd data={breadcrumbLd} />
      <JsonLd data={servicesLd} />
    </>
  );
}
