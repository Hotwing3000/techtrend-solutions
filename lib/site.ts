export const siteConfig = {
  name: "TechTrend Solutions",
  tagline: "Cybersikkerhed for små og mellemstore virksomheder",
  description:
    "TechTrend Solutions leverer firewall-løsninger, netværksbeskyttelse og IT-sikkerhed til danske SMV'er. Beskyt din virksomhed mod cybertrusler – kontakt os for en gratis sikkerhedssamtale.",
  url: "https://techtrendsolutions-dk.vercel.app",
  locale: "da_DK",
  email: "kontakt@example.com",
  phone: "+45 00 00 00 00",
  address: "København, Danmark",
  founders: ["Jonathan", "Camilla"],
  founded: 2015,
  // Sociale profiler er ikke oprettet endnu (caseprojekt).
  // Tilføj fx 'linkedin' her, og opdater Footer.tsx + JSON-LD i layout.tsx.
  social: {} as { linkedin?: string },
  analytics: {
    googleAnalyticsId: "G-P9VXM6HQ00",
  },
};

export type NavLink = { href: string; label: string };

export const mainNav: NavLink[] = [
  { href: "/", label: "Forside" },
  { href: "/loesninger", label: "Løsninger" },
  { href: "/blog", label: "Blog" },
  { href: "/om-os", label: "Om os" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];
