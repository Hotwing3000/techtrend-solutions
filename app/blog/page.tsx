import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "../components/CTASection";
import { BrandImage } from "../components/BrandImage";
import { JsonLd } from "../components/JsonLd";
import { posts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog & nyheder om cybersikkerhed",
  description:
    "Læs vores guides og artikler om cybersikkerhed, firewall-løsninger, GDPR og IT-sikkerhed for små og mellemstore virksomheder. Få konkrete råd du kan bruge i din virksomhed.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog om cybersikkerhed | TechTrend Solutions",
    description:
      "Guides, artikler og nyheder om cybersikkerhed for danske SMV'er.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogIndexPage() {
  const [featured, ...rest] = posts;

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.name} blog`,
    url: `${siteConfig.url}/blog`,
    description: "Artikler og guides om cybersikkerhed for danske SMV'er.",
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.dateISO,
      author: { "@type": "Person", name: p.author.split(",")[0] },
      url: `${siteConfig.url}/blog/${p.slug}`,
    })),
  };

  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Blog & nyheder</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Cybersikkerhed forklaret <span className="gradient-text">på dansk</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Praktiske guides, nyheder og indsigt – skrevet i et sprog du faktisk kan bruge.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* FEATURED POST */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid gap-8 overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-sm transition hover:shadow-lg lg:grid-cols-2"
        >
          <BrandImage src={featured.image} alt={featured.imageAlt} ratio="video" priority />
          <div className="flex flex-col justify-center p-6 lg:p-8">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                Udvalgt
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                {featured.category}
              </span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-slate-900 group-hover:text-brand-700 sm:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-3 text-base text-slate-600">{featured.excerpt}</p>
            <p className="mt-5 text-sm text-slate-500">
              {featured.date} · {featured.readingTime} min læsning
            </p>
          </div>
        </Link>

        {/* ALL POSTS */}
        <h2 className="mt-16 font-display text-2xl font-bold tracking-tight text-slate-900">
          Alle artikler
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
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
                <p className="mt-2 line-clamp-3 flex-1 text-sm text-slate-600">{post.excerpt}</p>
                <p className="mt-4 text-xs text-slate-500">
                  {post.date} · {post.readingTime} min læsning
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <CTASection />
      <div className="h-20" />

      <JsonLd data={blogLd} />
    </>
  );
}
