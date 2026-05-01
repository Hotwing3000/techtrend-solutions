import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalH2, LegalH3 } from "../components/LegalLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Persondatapolitik",
  description:
    "Sådan behandler TechTrend Solutions dine personoplysninger. Læs hvilke data vi indsamler, hvordan vi bruger dem, og hvilke rettigheder du har efter GDPR.",
  alternates: { canonical: "/persondatapolitik" },
  robots: { index: true, follow: true },
};

export default function PersondatapolitikPage() {
  return (
    <LegalLayout
      title="Persondatapolitik"
      intro="Hos TechTrend Solutions tager vi databeskyttelse alvorligt. Denne politik forklarer, hvilke personoplysninger vi behandler, hvorfor, og hvilke rettigheder du har."
      lastUpdated="29. april 2026"
    >
      <LegalH2 id="dataansvarlig">1. Dataansvarlig</LegalH2>
      <p>
        Den dataansvarlige for behandlingen af dine personoplysninger er:
      </p>
      <p>
        <strong>{siteConfig.name}</strong>
        <br />
        {siteConfig.address}
        <br />
        CVR: 00000000
        <br />
        E-mail:{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-brand-700 hover:underline">
          {siteConfig.email}
        </a>
        <br />
        Telefon: {siteConfig.phone}
      </p>

      <LegalH2 id="hvilke-data">2. Hvilke personoplysninger vi behandler</LegalH2>
      <p>
        Vi behandler kun de oplysninger, der er nødvendige for at levere vores ydelser
        og kommunikere med dig. Det kan inkludere:
      </p>

      <LegalH3>Når du udfylder kontaktformularen</LegalH3>
      <ul className="ml-5 list-disc space-y-1.5">
        <li>Virksomhedsnavn</li>
        <li>E-mailadresse</li>
        <li>Telefonnummer</li>
        <li>Emne for henvendelsen</li>
        <li>Eventuel besked du selv skriver</li>
      </ul>

      <LegalH3>Når du besøger vores hjemmeside</LegalH3>
      <ul className="ml-5 list-disc space-y-1.5">
        <li>IP-adresse (anonymiseret af Google Analytics, hvis du har accepteret det)</li>
        <li>Tekniske oplysninger om browser og enhed</li>
        <li>Sider du besøger og hvor lang tid du bruger</li>
      </ul>
      <p className="text-sm text-slate-600">
        Disse oplysninger behandles kun, hvis du har accepteret analyse-cookies. Læs mere i vores{" "}
        <Link href="/cookiepolitik" className="text-brand-700 hover:underline">
          cookiepolitik
        </Link>
        .
      </p>

      <LegalH2 id="formaal">3. Formål og retsgrundlag</LegalH2>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-left">
            <th className="py-3 pr-4 font-semibold text-slate-900">Formål</th>
            <th className="py-3 pr-4 font-semibold text-slate-900">Retsgrundlag (GDPR)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr>
            <td className="py-3 pr-4 align-top">Besvarelse af din henvendelse</td>
            <td className="py-3 pr-4 align-top">
              Art. 6, stk. 1, litra b – nødvendig for at indgå/opfylde aftale
            </td>
          </tr>
          <tr>
            <td className="py-3 pr-4 align-top">Forbedring af hjemmesiden via analyse</td>
            <td className="py-3 pr-4 align-top">
              Art. 6, stk. 1, litra a – dit samtykke (cookie-banner)
            </td>
          </tr>
          <tr>
            <td className="py-3 pr-4 align-top">Sikring af IT-systemer mod misbrug</td>
            <td className="py-3 pr-4 align-top">
              Art. 6, stk. 1, litra f – legitim interesse
            </td>
          </tr>
        </tbody>
      </table>

      <LegalH2 id="modtagere">4. Hvem vi deler data med</LegalH2>
      <p>
        Vi sælger eller udlejer aldrig dine personoplysninger. Vi deler kun data med
        databehandlere, der hjælper os med at drive vores forretning, og som har
        underskrevet en databehandleraftale:
      </p>
      <ul className="ml-5 list-disc space-y-1.5">
        <li>
          <strong>Vercel Inc.</strong> (USA) – hosting af hjemmeside. Overførsel sker
          under EU&apos;s standardkontraktbestemmelser.
        </li>
        <li>
          <strong>Google LLC</strong> (USA) – analyse via Google Analytics 4, kun ved samtykke.
          Anvender Consent Mode v2.
        </li>
      </ul>

      <LegalH2 id="opbevaring">5. Hvor længe vi opbevarer data</LegalH2>
      <ul className="ml-5 list-disc space-y-1.5">
        <li>
          <strong>Henvendelser via kontaktformular:</strong> opbevares i op til 2 år efter
          sidste kontakt, med mindre der opstår kundeforhold.
        </li>
        <li>
          <strong>Kundeoplysninger:</strong> opbevares i 5 år efter ophør af kundeforhold
          (jf. bogføringsloven).
        </li>
        <li>
          <strong>Analyse-data (Google Analytics):</strong> opbevares i op til 14 måneder.
        </li>
        <li>
          <strong>Samtykke til cookies:</strong> opbevares i din browser i op til 12 måneder.
        </li>
      </ul>

      <LegalH2 id="rettigheder">6. Dine rettigheder</LegalH2>
      <p>Som registreret har du følgende rettigheder efter GDPR:</p>
      <ul className="ml-5 list-disc space-y-1.5">
        <li>
          <strong>Indsigt</strong> – du kan få oplyst, hvilke data vi behandler om dig
        </li>
        <li>
          <strong>Berigtigelse</strong> – du kan få rettet forkerte oplysninger
        </li>
        <li>
          <strong>Sletning</strong> – du kan i visse tilfælde få slettet dine oplysninger
        </li>
        <li>
          <strong>Begrænsning</strong> – du kan få begrænset behandlingen
        </li>
        <li>
          <strong>Indsigelse</strong> – du kan gøre indsigelse mod behandlingen
        </li>
        <li>
          <strong>Dataportabilitet</strong> – du kan få udleveret dine data i et
          struktureret format
        </li>
        <li>
          <strong>Tilbagetrækning af samtykke</strong> – du kan til enhver tid trække dit
          samtykke tilbage. Det påvirker ikke lovligheden af tidligere behandling.
        </li>
      </ul>
      <p>
        Du kan udøve dine rettigheder ved at kontakte os på{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-brand-700 hover:underline">
          {siteConfig.email}
        </a>
        . Vi svarer inden for 30 dage.
      </p>

      <LegalH2 id="klage">7. Klage til Datatilsynet</LegalH2>
      <p>
        Hvis du er utilfreds med vores behandling af dine personoplysninger, kan du klage til
        Datatilsynet:
      </p>
      <p>
        <strong>Datatilsynet</strong>
        <br />
        Carl Jacobsens Vej 35
        <br />
        2500 Valby
        <br />
        Telefon: +45 33 19 32 00
        <br />
        E-mail: dt@datatilsynet.dk
        <br />
        Web:{" "}
        <a
          href="https://www.datatilsynet.dk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-700 hover:underline"
        >
          www.datatilsynet.dk
        </a>
      </p>

      <LegalH2 id="aendringer">8. Ændringer i denne politik</LegalH2>
      <p>
        Vi kan opdatere denne persondatapolitik fra tid til anden for at afspejle ændringer
        i vores praksis eller af juridiske årsager. Den gældende version vil altid være
        tilgængelig på denne side med oplysning om seneste opdateringsdato.
      </p>

      <div className="!mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="font-display text-lg font-bold text-slate-900">
          Spørgsmål til vores databehandling?
        </h2>
        <p className="mt-2 text-slate-600">
          Skriv til os – vi svarer hurtigt og forståeligt.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-800"
        >
          {siteConfig.email}
        </a>
      </div>
    </LegalLayout>
  );
}
