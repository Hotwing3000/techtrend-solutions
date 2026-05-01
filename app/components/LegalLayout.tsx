import Link from "next/link";

type Props = {
  title: string;
  intro?: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export function LegalLayout({ title, intro, lastUpdated, children }: Props) {
  return (
    <article>
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/40 to-white">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <nav className="text-sm text-slate-500" aria-label="Brødkrumme">
            <Link href="/" className="hover:text-brand-700">Forside</Link>
            <span className="mx-1.5">›</span>
            <span>{title}</span>
          </nav>
          <h1 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {intro && <p className="mt-4 text-lg text-slate-600">{intro}</p>}
          <p className="mt-6 text-sm text-slate-500">
            Senest opdateret: {lastUpdated}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="legal-prose space-y-5 text-base leading-relaxed text-slate-700">
          {children}
        </div>
      </div>
    </article>
  );
}

export function LegalH2({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="!mt-12 scroll-mt-20 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
    >
      {children}
    </h2>
  );
}

export function LegalH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="!mt-7 font-display text-lg font-semibold text-slate-900">{children}</h3>
  );
}
