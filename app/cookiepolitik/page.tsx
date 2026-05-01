import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalH2, LegalH3 } from "../components/LegalLayout";
import { CookieSettingsLink } from "../components/CookieSettingsLink";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookiepolitik",
  description:
    "TechTrend Solutions' cookiepolitik: Hvilke cookies vi bruger, hvorfor, og hvordan du ændrer dit valg. Vi følger Google Consent Mode v2 og dansk lovgivning.",
  alternates: { canonical: "/cookiepolitik" },
  robots: { index: true, follow: true },
};

export default function CookiepolitikPage() {
  return (
    <LegalLayout
      title="Cookiepolitik"
      intro="Denne politik forklarer, hvilke cookies vi bruger på techtrendsolutions.dk, hvorfor vi bruger dem, og hvordan du selv styrer dit samtykke."
      lastUpdated="29. april 2026"
    >
      <LegalH2 id="hvad-er-cookies">1. Hvad er cookies?</LegalH2>
      <p>
        Cookies er små tekstfiler, som gemmes i din browser, når du besøger en hjemmeside.
        De gør det muligt for hjemmesiden at huske dine valg og indstillinger og indsamle
        anonym statistik om, hvordan siden bruges.
      </p>
      <p>
        Cookies kan ikke i sig selv identificere dig som person, men kan i visse tilfælde
        kombineres med andre oplysninger til at gøre dig identificerbar.
      </p>

      <LegalH2 id="samtykke">2. Dit samtykke</LegalH2>
      <p>
        Vi bruger kun cookies, der er strengt nødvendige for, at hjemmesiden fungerer,
        med mindre du giver dit samtykke til andre kategorier. Du kan til enhver tid
        ændre eller trække dit samtykke tilbage.
      </p>
      <p>
        <CookieSettingsLink className="font-semibold text-brand-700 hover:text-brand-800" />
      </p>

      <LegalH2 id="cookies-vi-bruger">3. Cookies vi bruger</LegalH2>

      <LegalH3>Nødvendige cookies</LegalH3>
      <p>
        Disse cookies er nødvendige for, at hjemmesiden virker. De kan ikke fravælges.
      </p>
      <div className="!my-5 overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr className="text-left">
              <th className="px-4 py-3 font-semibold text-slate-900">Navn</th>
              <th className="px-4 py-3 font-semibold text-slate-900">Udbyder</th>
              <th className="px-4 py-3 font-semibold text-slate-900">Formål</th>
              <th className="px-4 py-3 font-semibold text-slate-900">Levetid</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="px-4 py-3 align-top">cookie-consent</td>
              <td className="px-4 py-3 align-top">techtrendsolutions.dk</td>
              <td className="px-4 py-3 align-top">Husker dit cookie-valg</td>
              <td className="px-4 py-3 align-top">12 mdr.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <LegalH3>Analyse-cookies (Google Analytics 4)</LegalH3>
      <p>
        Disse cookies hjælper os med at forstå, hvordan besøgende bruger vores hjemmeside,
        så vi kan forbedre den. De aktiveres kun, hvis du giver dit samtykke.
      </p>
      <div className="!my-5 overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr className="text-left">
              <th className="px-4 py-3 font-semibold text-slate-900">Navn</th>
              <th className="px-4 py-3 font-semibold text-slate-900">Udbyder</th>
              <th className="px-4 py-3 font-semibold text-slate-900">Formål</th>
              <th className="px-4 py-3 font-semibold text-slate-900">Levetid</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="px-4 py-3 align-top">_ga</td>
              <td className="px-4 py-3 align-top">Google LLC</td>
              <td className="px-4 py-3 align-top">Skelner mellem besøgende</td>
              <td className="px-4 py-3 align-top">24 mdr.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 align-top">_ga_P9VXM6HQ00</td>
              <td className="px-4 py-3 align-top">Google LLC</td>
              <td className="px-4 py-3 align-top">Bevarer sessionsstatus</td>
              <td className="px-4 py-3 align-top">24 mdr.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-slate-600">
        Vi bruger Google Consent Mode v2, så Google Analytics ikke gemmer cookies på din enhed,
        før du giver samtykke. Hvis du afviser, sendes kun anonyme samlede tal uden cookies.
      </p>

      <LegalH2 id="tredjeparter">4. Tredjepartscookies</LegalH2>
      <p>
        Vi bruger Google Analytics 4 leveret af Google LLC. Data overføres til USA
        under EU-Kommissionens standardkontraktbestemmelser samt EU-US Data Privacy Framework.
        Google kan i visse tilfælde behandle data som selvstændig dataansvarlig.
      </p>
      <p>
        Læs mere om Googles databehandling:{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-700 hover:underline"
        >
          policies.google.com/privacy
        </a>
      </p>

      <LegalH2 id="aendre-samtykke">5. Sådan ændrer du dit samtykke</LegalH2>
      <p>Du kan til enhver tid ændre eller trække dit cookie-samtykke tilbage:</p>
      <ul className="ml-5 list-disc space-y-1.5">
        <li>
          Brug knappen{" "}
          <CookieSettingsLink className="font-semibold text-brand-700 hover:text-brand-800" />{" "}
          (også tilgængelig i bunden af alle sider).
        </li>
        <li>
          Eller slet cookies direkte i din browser. Se vejledning hos browser-udbyderen.
        </li>
      </ul>

      <LegalH2 id="oplysninger">6. Mere information</LegalH2>
      <p>
        Læs også vores{" "}
        <Link href="/persondatapolitik" className="text-brand-700 hover:underline">
          persondatapolitik
        </Link>
        , hvor du kan se hvilke personoplysninger vi behandler i øvrigt, og hvilke
        rettigheder du har efter GDPR.
      </p>
      <p>
        Har du spørgsmål til vores brug af cookies, så skriv til{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-brand-700 hover:underline">
          {siteConfig.email}
        </a>
        .
      </p>

      <LegalH2 id="aendringer">7. Ændringer i cookiepolitikken</LegalH2>
      <p>
        Vi kan løbende opdatere denne cookiepolitik. Den gældende version findes altid på
        denne side. Hvis vi laver væsentlige ændringer, beder vi dig om nyt samtykke via
        cookie-banneret.
      </p>
    </LegalLayout>
  );
}
