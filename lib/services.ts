export type Service = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  features: string[];
  icon: "shield" | "network" | "backup" | "key" | "monitor";
};

export const services: Service[] = [
  {
    id: "firewall",
    slug: "firewall",
    shortTitle: "Firewall-løsninger",
    title: "Avancerede firewall-løsninger",
    description:
      "Stop uautoriseret adgang og cybertrusler ved døren. Vi implementerer og vedligeholder firewalls, der passer til netop din virksomheds størrelse og behov.",
    features: [
      "Skræddersyet opsætning til SMV'er",
      "Beskyttelse mod ransomware og malware",
      "Løbende opdateringer og patching",
      "24/7 trusselsovervågning",
    ],
    icon: "shield",
  },
  {
    id: "netvaerk",
    slug: "netvaerksbeskyttelse",
    shortTitle: "Netværksbeskyttelse",
    title: "Netværksbeskyttelse mod uautoriseret adgang",
    description:
      "Hold din virksomheds netværk lukket for uvedkommende. Vi sikrer dit netværk fra slutpunkt til server – også for medarbejdere på farten.",
    features: [
      "Segmentering af netværk",
      "Sikker fjernadgang (VPN)",
      "WiFi-sikkerhed for kontor og gæster",
      "Detektion af mistænkelig trafik",
    ],
    icon: "network",
  },
  {
    id: "backup",
    slug: "sikkerhedskopiering",
    shortTitle: "Sikkerhedskopiering",
    title: "Sikkerhedskopiering du kan stole på",
    description:
      "Når uheldet er ude, er backup forskellen mellem en lille forstyrrelse og en katastrofe. Vi opsætter automatisk og krypteret backup, der genskaber dine data hurtigt.",
    features: [
      "Automatisk daglig backup",
      "Krypteret cloud- og lokal-opbevaring",
      "Test af genoprettelse hver måned",
      "GDPR-compliant dataopbevaring",
    ],
    icon: "backup",
  },
  {
    id: "adgang",
    slug: "adgangsstyring",
    shortTitle: "Adgangsstyring",
    title: "Adgangsstyring til systemer og data",
    description:
      "Giv de rigtige medarbejdere adgang til de rigtige systemer – og luk hurtigt af, når en medarbejder stopper. Enkel administration, høj sikkerhed.",
    features: [
      "Single Sign-On (SSO)",
      "To-faktor-godkendelse (2FA)",
      "Rollebaseret adgangskontrol",
      "Hurtig on- og offboarding",
    ],
    icon: "key",
  },
  {
    id: "overvaagning",
    slug: "it-overvaagning",
    shortTitle: "IT-overvågning",
    title: "Proaktiv overvågning af din IT-infrastruktur",
    description:
      "Vi overvåger dine systemer døgnet rundt og reagerer på trusler, før de bliver til problemer. Du får ro i maven og tid til at fokusere på din forretning.",
    features: [
      "24/7 overvågning af systemer",
      "Alarmering ved unormal aktivitet",
      "Månedlige sikkerhedsrapporter",
      "Hurtig respons fra dansk team",
    ],
    icon: "monitor",
  },
];
