import type { Metadata } from "next";
import { CTASection } from "../components/CTASection";
import { JsonLd } from "../components/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ofte stillede spørgsmål om cybersikkerhed",
  description:
    "Få svar på de mest stillede spørgsmål om cybersikkerhed, firewall-løsninger, IT-sikkerhed og priser hos TechTrend Solutions. Skrevet på dansk uden teknisk jargon.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | TechTrend Solutions",
    description: "Svar på de mest stillede spørgsmål om cybersikkerhed for SMV'er.",
    url: `${siteConfig.url}/faq`,
  },
};

const faqs = [
  {
    q: "Hvad koster cybersikkerhed for en lille virksomhed?",
    a: "Prisen afhænger af din virksomheds størrelse og behov. De fleste af vores SMV-kunder ligger i intervallet 2.000–8.000 kr. om måneden for en samlet pakke med firewall, overvågning og support. Vi giver altid et fast tilbud efter den indledende sikkerhedssamtale, så der er ingen overraskelser.",
  },
  {
    q: "Er min virksomhed for lille til at være et mål for cyberangreb?",
    a: "Nej. Faktisk er små og mellemstore virksomheder ofte de første mål, fordi de typisk har færre sikkerhedsforanstaltninger end store virksomheder. Cyberkriminelle ved det – og mange angreb mod SMV'er er automatiserede, så de rammer alle der har en sårbarhed, uanset størrelse.",
  },
  {
    q: "Hvad er en firewall, og hvorfor har min virksomhed brug for én?",
    a: "En firewall fungerer som en digital portvagt mellem dit netværk og internettet. Den blokerer uautoriseret adgang og stopper kendte cybertrusler. Uden en moderne firewall er dit netværk i praksis åbent for angreb. Vi har skrevet en hel artikel om emnet på vores blog.",
  },
  {
    q: "Hvor lang tid tager det at få sat op?",
    a: "For en typisk SMV tager den indledende opsætning 1–3 uger fra vi siger ja til hinanden. De første sikkerhedstiltag (f.eks. firewall og adgangsstyring) er ofte på plads inden for den første uge. Vi tilrettelægger altid implementeringen, så det ikke forstyrrer din daglige drift.",
  },
  {
    q: "Hvad sker der hvis vi bliver ramt af et cyberangreb?",
    a: "Hvis du er kunde hos os, aktiverer vi vores beredskabsplan med det samme. Vi isolerer det berørte system, finder kilden, genopretter fra backup og hjælper dig med at kommunikere både internt og eksternt. Vi støtter dig også med eventuel anmeldelse til Datatilsynet og politiet.",
  },
  {
    q: "Skal vi have et helt IT-team for at bruge jer?",
    a: "Nej, slet ikke. Mange af vores kunder har slet ingen intern IT-funktion. Vi fungerer som dit eksterne IT-sikkerhedsteam, og vi tilpasser kommunikationen til det niveau, der passer dig. Du behøver ikke at være teknisk for at få sikkerhed i top.",
  },
  {
    q: "Er I GDPR-compliant – og hjælper I med vores GDPR-arbejde?",
    a: "Ja. Vi opbevarer alle data sikkert og lever fuldt op til GDPR. Vi hjælper også vores kunder med den tekniske side af GDPR: kryptering, adgangsstyring, logning og dokumentation af tekniske foranstaltninger.",
  },
  {
    q: "Kan I integrere med vores eksisterende systemer?",
    a: "I langt de fleste tilfælde, ja. Vi arbejder med Microsoft 365, Google Workspace, branchespecifikke ERP-systemer og de fleste cloud-tjenester. Hvis du er i tvivl, så book en gratis sikkerhedssamtale, så ser vi på det sammen.",
  },
  {
    q: "Hvor sidder I, og hvor hurtigt svarer I?",
    a: "Vi sidder i Danmark og har dansk support i kontortid (kl. 8–16 mandag-fredag). Akutte sikkerhedssager prioriteres 24/7, og vi har en gennemsnitlig responstid på under 15 minutter for kunder med managed service-aftale.",
  },
  {
    q: "Hvad sker der i den gratis sikkerhedssamtale?",
    a: "Det er en uforpligtende snak på 30 minutter, hvor vi lærer din virksomhed at kende, gennemgår de største risici og giver dig konkrete anbefalinger – også selvom du vælger ikke at gå videre med os. Du behøver ikke at forberede noget, og du modtager intet salgsmateriale efter samtalen, medmindre du beder om det.",
  },
];

export default function FAQPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">FAQ</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Ofte stillede <span className="gradient-text">spørgsmål</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Svar på det vores kunder oftest spørger om – fra priser til praktik.
            Mangler du noget? Skriv til os.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition open:border-brand-300 open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <h2 className="font-display text-lg font-semibold text-slate-900 group-open:text-brand-700">
                  {item.q}
                </h2>
                <span className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-700 transition group-open:rotate-45 group-open:bg-brand-700 group-open:text-white">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>

      <CTASection />
      <div className="h-20" />

      <JsonLd data={faqLd} />
    </>
  );
}
