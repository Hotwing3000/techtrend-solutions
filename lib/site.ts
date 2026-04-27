export const siteConfig = {
  name: "TechTrend Solutions",
  tagline: "Cybersikkerhed for små og mellemstore virksomheder",
  description:
    "TechTrend Solutions leverer firewall-løsninger, netværksbeskyttelse og IT-sikkerhed til danske SMV'er. Beskyt din virksomhed mod cybertrusler – kontakt os for en gratis sikkerhedssamtale.",
  url: "https://techtrendsolutions.dk",
  locale: "da_DK",
  email: "kontakt@techtrendsolutions.dk",
  phone: "+45 70 70 70 70",
  address: "København, Danmark",
  founders: ["Jonathan", "Camilla"],
  founded: 2015,
  social: {
    linkedin: "https://www.linkedin.com/company/techtrend-solutions",
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
