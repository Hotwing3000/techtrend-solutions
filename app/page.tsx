import Link from "next/link";
import type { Metadata } from "next";
import { CTASection } from "./components/CTASection";
import { BrandImage } from "./components/BrandImage";
import { ServiceIcon } from "./components/ServiceIcon";
import { JsonLd } from "./components/JsonLd";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: `${siteConfig.name} – Cybersikkerhed til SMV'er i Danmark`,
  description:
    "Beskyt din virksomhed med firewall-løsninger, netværksbeskyttelse og IT-sikkerhed fra TechTrend Solutions. Specialiseret i cybersikkerhed for små og mellemstore virksomheder. Få en gratis sikkerhedssamtale.",
  alternates: { canonical: "/" },
};

const valueProps = [
  {
    title: "Specialister i SMV'er",
    description:
      "Vi forstår udfordringerne for små og mellemstore virksomheder – og leverer løsninger uden enterprise-kompleksitet.",
    icon: "users",
  },
  {
    title: "Dansk support",
    description:
      "Vores team sidder i Danmark og taler dit sprog. Hurtig respons når det brænder på.",
    icon: "flag",
  },
  {
    title: "Helhedsorienteret",
    description:
      "Fra firewall til medarbejdertræning. Vi dækker hele din IT-sikkerhed – ikke kun en bid.",
    icon: "puzzle",
  },
  {
    title: "Proaktiv overvågning",
    description:
      "Vi opdager trusler før de rammer. 24/7 overvågning og månedlige rapporter du faktisk forstår.",
    icon: "eye",
  },
];

const stats = [
  { value: "10+", label: "års erfaring" },
  { value: "150+", label: "danske virksomheder beskyttet" },
  { value: "24/7", label: "overvågning og support" },
  { value: "<15 min", label: "gennemsnitlig responstid" },
];

const valueIcons: Record<string, React.ReactNode> = {
  users: (
    <>
      <path d="M16 11a4 4 0 1 0-4-4M8 11a4 4 0 1 0 4-4" />
      <path d="M2 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M14 21v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" />
    </>
  ),
  flag: (
    <>
      <path d="M4 21V4M4 4h11l3 4-3 4H4" />
    </>
  ),
  puzzle: (
    <>
      <path d="M10 3h4v4h3a2 2 0 0 1 2 2v3h-4v4h4v3a2 2 0 0 1-2 2h-3v-4h-4v4H7a2 2 0 0 1-2-2v-3h4v-4H5V9a2 2 0 0 1 2-2h3z" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
};

export default function HomePage() {
  const homeLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "da-DK",
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  const featuredPosts = posts.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="hero-glow absolute inset-0" aria-hidden />
        <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pb-28 lg:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                Cybersikkerhed for danske SMV&apos;er siden 2015
              </div>
              <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Beskyt din virksomhed mod{" "}
                <span className="gradient-text">cybertrusler</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                Vi leverer firewall-løsninger, netværksbeskyttelse og IT-sikkerhed
                til små og mellemstore virksomheder. Enkelt at forstå, effektivt at bruge,
                og bygget til den måde du driver forretning på.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-700 px-6 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-brand-800 hover:shadow-lg"
                >
                  Få en gratis sikkerhedssamtale
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path d="M7.5 4.5L13 10l-5.5 5.5-1.4-1.4L10.2 10 6.1 5.9z" />
                  </svg>
                </Link>
                <Link
                  href="/loesninger"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-900 transition hover:border-brand-600 hover:text-brand-700"
                >
                  Se vores løsninger
                </Link>
              </div>
              <p className="mt-4 text-sm text-slate-500">
                Ingen forpligtelser · Svar inden for 24 timer · Dansk team
              </p>
            </div>

            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-brand-200/40 to-accent-400/20 blur-2xl" aria-hidden />
              <BrandImage
                src="/images/hero.png"
                alt="Skjold med datapartikler – cybersikkerhed for SMV'er"
                ratio="square"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR / STATS */}
      <section className="border-y border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <dt className="text-sm font-medium text-slate-500">{s.label}</dt>
                <dd className="mt-1 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="loesninger-heading">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Vores løsninger</p>
          <h2 id="loesninger-heading" className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            IT-sikkerhedsløsninger der passer til din virksomhed
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Fra firewall til overvågning – alt det din virksomhed har brug for, samlet ét sted.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                <ServiceIcon icon={service.icon} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-slate-900">
                {service.shortTitle}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
              <Link
                href={`/loesninger#${service.id}`}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:gap-2"
              >
                Læs mere
                <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path d="M7.5 4.5L13 10l-5.5 5.5-1.4-1.4L10.2 10 6.1 5.9z" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-slate-50 py-20" aria-labelledby="hvorfor-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Hvorfor TechTrend Solutions?</p>
              <h2 id="hvorfor-heading" className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Cybersikkerhed der er bygget til virkeligheden
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Vi taler ikke i tekniske termer for tekniske termers skyld. Vi forklarer hvad vi gør,
                hvorfor det er vigtigt, og hvilken forskel det gør for din forretning.
              </p>
              <dl className="mt-10 grid gap-6 sm:grid-cols-2">
                {valueProps.map((vp) => (
                  <div key={vp.title} className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
                        {valueIcons[vp.icon]}
                      </svg>
                    </div>
                    <dt className="mt-3 font-semibold text-slate-900">{vp.title}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-slate-600">{vp.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <BrandImage
                src="/images/team-meeting.jpg"
                alt="TechTrend Solutions-team i møde med kunde"
                ratio="portrait"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8" aria-label="Kundeudtalelse">
        <figure className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm sm:p-14">
          <svg width="40" height="32" viewBox="0 0 40 32" fill="currentColor" className="mx-auto text-brand-200" aria-hidden>
            <path d="M0 32V20.8C0 14.4 1.6 9.2 4.8 5.2 8 1.7 12.4 0 18 0v6.4c-3.2 0-5.7 1-7.5 2.9-1.8 1.9-2.7 4.5-2.7 7.7H18V32H0zm22 0V20.8c0-6.4 1.6-11.6 4.8-15.6 3.2-3.5 7.6-5.2 13.2-5.2v6.4c-3.2 0-5.7 1-7.5 2.9-1.8 1.9-2.7 4.5-2.7 7.7H40V32H22z" />
          </svg>
          <blockquote className="mt-6 font-display text-2xl font-medium leading-relaxed text-slate-900 sm:text-3xl">
            &ldquo;TechTrend gjorde cybersikkerhed forståeligt for os. De forklarer det som det er,
            uden tekniske termer, og vi har ikke haft et eneste sikkerhedsbrud siden de tog over.&rdquo;
          </blockquote>
          <figcaption className="mt-8 flex items-center justify-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-200 to-accent-400" aria-hidden />
            <div className="text-left">
              <div className="font-semibold text-slate-900">M. N. <span className="font-normal text-slate-400">(eksempel)</span></div>
              <div className="text-sm text-slate-500">CEO i en dansk detailvirksomhed</div>
            </div>
          </figcaption>
        </figure>
      </section>

      {/* FEATURED POSTS */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" aria-labelledby="blog-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Indsigt & viden</p>
            <h2 id="blog-heading" className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Seneste fra bloggen
            </h2>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-brand-700 hover:text-brand-800">
            Se alle artikler →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <BrandImage src={post.image} alt={post.imageAlt} ratio="video" />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-brand-700">
                  {post.category}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-slate-900 group-hover:text-brand-700">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-sm text-slate-600">{post.excerpt}</p>
                <p className="mt-4 text-xs text-slate-500">
                  {post.date} · {post.readingTime} min læsning
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />

      <div className="h-20" />

      <JsonLd data={homeLd} />
    </>
  );
}
