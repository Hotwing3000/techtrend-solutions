import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { JsonLd } from "./components/JsonLd";
import { CookieConsent } from "./components/CookieConsent";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} – ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "cybersikkerhed",
    "IT-sikkerhed for virksomheder",
    "firewall-løsninger",
    "netværksbeskyttelse",
    "cybersikkerhed SMV",
    "IT-sikkerhedsløsninger",
    "cybersikkerhed Danmark",
    "cybertrusler",
    "IT-overvågning",
    "sikkerhedskopiering",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} – ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} – ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    description: siteConfig.description,
    foundingDate: String(siteConfig.founded),
    founders: siteConfig.founders.map((name) => ({ "@type": "Person", name })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: siteConfig.email,
        telephone: siteConfig.phone,
        areaServed: "DK",
        availableLanguage: ["Danish", "English"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "DK",
      addressLocality: "København",
    },
  };

  return (
    <html lang="da" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Google Consent Mode v2 — default deny, will be updated by CookieConsent banner */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'functionality_storage': 'granted',
              'security_storage': 'granted',
              'wait_for_update': 500
            });

            // Apply previously stored choice (if any) immediately on load
            try {
              var saved = localStorage.getItem('cookie-consent');
              if (saved) {
                var parsed = JSON.parse(saved);
                if (parsed && parsed.analytics) {
                  gtag('consent', 'update', { 'analytics_storage': 'granted' });
                }
              }
            } catch (e) {}
          `}
        </Script>
      </head>
      <body className="flex min-h-full flex-col bg-white text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <JsonLd data={orgLd} />
        <GoogleAnalytics gaId={siteConfig.analytics.googleAnalyticsId} />
        <CookieConsent />
      </body>
    </html>
  );
}
