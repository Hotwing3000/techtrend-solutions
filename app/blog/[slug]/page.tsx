import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "../../components/CTASection";
import { BrandImage } from "../../components/BrandImage";
import { JsonLd } from "../../components/JsonLd";
import { getPostBySlug, posts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artikel ikke fundet" };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      publishedTime: post.dateISO,
      authors: [post.author],
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: { "@type": "Person", name: post.author.split(",")[0] },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/icon.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/blog/${post.slug}` },
    inLanguage: "da-DK",
    keywords: post.keywords.join(", "),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Forside", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteConfig.url}/blog/${post.slug}` },
    ],
  };

  return (
    <article>
      <header className="border-b border-slate-200 bg-gradient-to-b from-brand-50/40 to-white">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <nav className="text-sm text-slate-500" aria-label="Brødkrumme">
            <Link href="/" className="hover:text-brand-700">Forside</Link>
            <span className="mx-1.5">›</span>
            <Link href="/blog" className="hover:text-brand-700">Blog</Link>
          </nav>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-brand-700">
            {post.category}
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-slate-600">{post.excerpt}</p>
          <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
            <span>{post.author}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.dateISO}>{post.date}</time>
            <span aria-hidden>·</span>
            <span>{post.readingTime} min læsning</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-2 mb-12">
          <BrandImage src={post.image} alt={post.imageAlt} ratio="wide" priority />
        </div>

        <div className="prose-content space-y-5 text-lg leading-relaxed text-slate-700">
          {post.content.map((block, i) => {
            if (block.type === "h2")
              return (
                <h2 key={i} className="!mt-12 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {block.text}
                </h2>
              );
            if (block.type === "h3")
              return (
                <h3 key={i} className="!mt-8 font-display text-xl font-semibold text-slate-900">
                  {block.text}
                </h3>
              );
            if (block.type === "ul")
              return (
                <ul key={i} className="ml-5 list-disc space-y-2 text-base text-slate-700">
                  {block.items?.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
              );
            if (block.type === "callout")
              return (
                <aside
                  key={i}
                  className="!my-8 rounded-xl border-l-4 border-brand-600 bg-brand-50 p-5 text-base text-slate-800"
                >
                  <strong className="font-semibold text-brand-800">Vidste du? </strong>
                  {block.text}
                </aside>
              );
            return (
              <p key={i} className="text-base leading-relaxed text-slate-700 sm:text-lg">
                {block.text}
              </p>
            );
          })}
        </div>

        <div className="my-14 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
          <h3 className="font-display text-xl font-bold text-slate-900">Har du brug for hjælp?</h3>
          <p className="mt-2 text-slate-600">
            Vi tilbyder en gratis sikkerhedssamtale, hvor vi kortlægger din virksomheds behov.
          </p>
          <Link
            href="/kontakt"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            Book en gratis samtale
            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path d="M7.5 4.5L13 10l-5.5 5.5-1.4-1.4L10.2 10 6.1 5.9z" />
            </svg>
          </Link>
        </div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 py-16" aria-label="Relaterede artikler">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
              Læs også
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex gap-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:shadow-md"
                >
                  <div className="w-32 flex-none">
                    <BrandImage src={p.image} alt={p.imageAlt} ratio="square" className="!rounded-xl" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center pr-3">
                    <p className="text-xs font-medium uppercase tracking-wider text-brand-700">
                      {p.category}
                    </p>
                    <h3 className="mt-1 font-display text-base font-semibold text-slate-900 group-hover:text-brand-700">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">{p.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
      <div className="h-20" />

      <JsonLd data={articleLd} />
      <JsonLd data={breadcrumbLd} />
    </article>
  );
}
