export type PostTone = "blue" | "slate" | "cyan";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  dateISO: string;
  author: string;
  readingTime: number;
  imageAlt: string;
  image: string;
  tone: PostTone;
  keywords: string[];
  content: { type: "h2" | "h3" | "p" | "ul" | "callout"; text?: string; items?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "hvad-er-en-firewall-og-hvorfor-har-du-brug-for-den",
    title: "Hvad er en firewall, og hvorfor har du brug for den?",
    excerpt:
      "En firewall er din virksomheds første forsvarslinje mod cyberangreb. Vi forklarer på dansk – uden teknisk jargon – hvad en firewall gør, og hvorfor enhver SMV bør have én.",
    category: "Cybersikkerhed 101",
    date: "22. april 2026",
    dateISO: "2026-04-22",
    author: "Camilla, medstifter af TechTrend Solutions",
    readingTime: 6,
    imageAlt: "Illustration af firewall der beskytter et virksomhedsnetværk",
    image: "/images/blog-firewall.png",
    tone: "blue",
    keywords: [
      "firewall",
      "firewall-løsninger",
      "cybersikkerhed",
      "IT-sikkerhed for virksomheder",
      "netværksbeskyttelse",
      "SMV",
    ],
    content: [
      {
        type: "p",
        text: "Hvis du driver en lille eller mellemstor virksomhed, har du sikkert hørt ordet 'firewall' mange gange. Men hvad er det egentlig, og hvorfor er det så vigtigt for din forretning? I denne artikel forklarer vi det på almindeligt dansk – uden teknisk jargon.",
      },
      { type: "h2", text: "Hvad er en firewall?" },
      {
        type: "p",
        text: "En firewall fungerer som en digital portvagt mellem dit virksomhedsnetværk og resten af internettet. Den undersøger al trafik, der kommer ind og ud af dit netværk, og bestemmer hvad der må passere – og hvad der skal stoppes.",
      },
      {
        type: "p",
        text: "Forestil dig en sikkerhedsvagt ved indgangen til en bygning. Vagten tjekker hver person, der vil ind: Har du adgangskort? Skal du være her? På samme måde tjekker firewallen hver dataforbindelse, der prøver at nå dit netværk.",
      },
      { type: "h2", text: "Hvorfor har din virksomhed brug for en firewall?" },
      {
        type: "p",
        text: "Cyberkriminelle leder konstant efter sårbare virksomheder, og særligt SMV'er er attraktive mål. Hvorfor? Fordi mange små virksomheder ikke har de samme sikkerhedsforanstaltninger som store enterprises – og det ved hackerne.",
      },
      { type: "h3", text: "1. Beskyttelse mod uautoriseret adgang" },
      {
        type: "p",
        text: "Uden en firewall er dit netværk i praksis åbent for alle. En firewall blokerer forbindelser fra ukendte og mistænkelige kilder, før de overhovedet når dine systemer.",
      },
      { type: "h3", text: "2. Forsvar mod ransomware og malware" },
      {
        type: "p",
        text: "Moderne firewalls genkender mønstre fra kendte cybertrusler og stopper dem automatisk. Det betyder færre risici for at en medarbejders fejlklik fører til en katastrofe.",
      },
      { type: "h3", text: "3. Kontrol over dataudstrømning" },
      {
        type: "p",
        text: "En firewall kan også overvåge data, der forlader dit netværk. Hvis en hacker har fået fat i adgang til et system, kan firewallen forhindre dem i at sende fortrolige data ud.",
      },
      { type: "h3", text: "4. Overholdelse af GDPR" },
      {
        type: "p",
        text: "GDPR kræver, at du beskytter persondata. En ordentligt opsat firewall er en grundlæggende del af den beskyttelse – og dokumentation for compliance.",
      },
      { type: "h2", text: "De forskellige typer firewalls" },
      {
        type: "p",
        text: "Der findes flere typer firewalls, og det rette valg afhænger af din virksomheds størrelse og behov:",
      },
      {
        type: "ul",
        items: [
          "Hardware-firewall: En fysisk enhed der beskytter hele dit kontornetværk.",
          "Software-firewall: Installeres på enkelte computere – godt som ekstra lag.",
          "Cloud-firewall: Beskytter dine cloud-tjenester og fjernarbejdere.",
          "Next-Generation Firewall (NGFW): Kombinerer traditionel firewall med avanceret trusselsdetektion.",
        ],
      },
      { type: "h2", text: "Hvad sker der hvis du ikke har en firewall?" },
      {
        type: "p",
        text: "Konsekvenserne kan være alvorlige. Cyberangreb mod danske SMV'er er steget markant, og et succesfuldt angreb kan koste hundredtusinder af kroner i mistet omsætning, GDPR-bøder og tab af kundetillid.",
      },
      {
        type: "callout",
        text: "I gennemsnit tager det 200+ dage at opdage et databrud. Med en firewall og ordentlig overvågning fanger du angreb i timer i stedet for måneder.",
      },
      { type: "h2", text: "Sådan kommer du i gang" },
      {
        type: "p",
        text: "Det behøver ikke at være kompliceret at få en firewall på plads. Hos TechTrend Solutions starter vi altid med en gratis sikkerhedssamtale, hvor vi kortlægger dine behov og foreslår den løsning, der passer til netop din virksomhed.",
      },
      {
        type: "p",
        text: "Vi tager hånd om implementering, opdateringer og overvågning – så du kan fokusere på din forretning uden at bekymre dig om cybertrusler.",
      },
    ],
  },
  {
    slug: "5-tegn-paa-at-din-virksomhed-er-saarbar",
    title: "5 tegn på at din virksomhed er sårbar over for cyberangreb",
    excerpt:
      "Cyberangreb mod danske SMV'er stiger hvert år. Her er fem advarselssignaler du bør kende – og hvad du kan gøre ved dem.",
    category: "Cybersikkerhed",
    date: "8. april 2026",
    dateISO: "2026-04-08",
    author: "Jonathan, medstifter af TechTrend Solutions",
    readingTime: 5,
    imageAlt: "Illustration af advarselssymboler på computerskærme i kontor",
    image: "/images/blog-vulnerable.png",
    tone: "cyan",
    keywords: [
      "cybersikkerhed SMV",
      "IT-sikkerhed for virksomheder",
      "cybertrusler",
      "netværksbeskyttelse",
    ],
    content: [
      {
        type: "p",
        text: "Mange virksomheder opdager først, at de er sårbare, når det er for sent. De her fem advarselssignaler er ofte de første tegn på, at noget bør gøres – før et brud sker.",
      },
      { type: "h2", text: "1. Medarbejderne deler kodeord" },
      {
        type: "p",
        text: "Hvis 'fælleskodeord' er hverdag på dit kontor, har du et problem. Adgangsstyring og to-faktor-godkendelse løser det med minimal friktion.",
      },
      { type: "h2", text: "2. Du har ikke testet din backup i over 6 måneder" },
      {
        type: "p",
        text: "En backup du ikke har testet er ikke en backup – det er et håb. Vi anbefaler månedlige genoprettelsestests.",
      },
      { type: "h2", text: "3. Routeren er den samme som da virksomheden blev grundlagt" },
      {
        type: "p",
        text: "Forældet hardware har sjældent moderne sikkerhedsfeatures. En opdateret firewall og router er en af de billigste investeringer i sikkerhed du kan lave.",
      },
      { type: "h2", text: "4. Ingen ved hvad de skal gøre ved et angreb" },
      {
        type: "p",
        text: "En beredskabsplan på én A4-side er bedre end ingen plan. Hvem ringer du til? Hvad slukker du først? Skriv det ned.",
      },
      { type: "h2", text: "5. Medarbejdere har ikke fået sikkerhedstræning" },
      {
        type: "p",
        text: "90% af brud starter med menneskelige fejl. En halv times træning om phishing kan spare dig hundredtusinder af kroner.",
      },
    ],
  },
  {
    slug: "gdpr-og-it-sikkerhed-for-smv",
    title: "GDPR og IT-sikkerhed: Det skal du som SMV have styr på",
    excerpt:
      "GDPR handler ikke bare om cookie-bannere. Vi gennemgår de IT-sikkerhedskrav, danske SMV'er reelt skal leve op til – og hvordan du kommer i mål.",
    category: "Compliance",
    date: "25. marts 2026",
    dateISO: "2026-03-25",
    author: "Camilla, medstifter af TechTrend Solutions",
    readingTime: 7,
    imageAlt: "Illustration af GDPR og databeskyttelse for små virksomheder",
    image: "/images/blog-gdpr.png",
    tone: "slate",
    keywords: ["GDPR", "IT-sikkerhed for virksomheder", "cybersikkerhed SMV"],
    content: [
      {
        type: "p",
        text: "GDPR er ikke kun en juridisk øvelse – det er først og fremmest et IT-sikkerhedsspørgsmål. Her gennemgår vi det vigtigste, danske SMV'er bør have på plads.",
      },
      { type: "h2", text: "Hvad kræver GDPR teknisk?" },
      {
        type: "p",
        text: "GDPR kræver 'passende tekniske og organisatoriske foranstaltninger'. I praksis betyder det kryptering, adgangsstyring, logning og en plan for håndtering af brud.",
      },
      { type: "h2", text: "Krypter, krypter, krypter" },
      {
        type: "p",
        text: "Persondata bør være krypteret både når de opbevares (at rest) og når de overføres (in transit). Det gælder backup, mails og cloud-lagring.",
      },
      { type: "h2", text: "Hvem har adgang til hvad?" },
      {
        type: "p",
        text: "Princippet om 'mindste privilegium' betyder, at en medarbejder kun skal have adgang til det, vedkommende har brug for – ikke alt.",
      },
      { type: "h2", text: "Logning og overvågning" },
      {
        type: "p",
        text: "Du skal kunne dokumentere, hvem der har tilgået persondata og hvornår. Det er også første skridt til at opdage et brud hurtigt.",
      },
    ],
  },
  {
    slug: "ransomware-saadan-undgaar-din-virksomhed-at-blive-ramt",
    title: "Ransomware: Sådan undgår din virksomhed at blive ramt",
    excerpt:
      "Ransomware-angreb mod danske virksomheder er steget kraftigt. Læs hvad ransomware er, hvordan det rammer, og hvordan du beskytter din virksomhed.",
    category: "Trusler",
    date: "12. marts 2026",
    dateISO: "2026-03-12",
    author: "Jonathan, medstifter af TechTrend Solutions",
    readingTime: 6,
    imageAlt: "Illustration af låst computer med ransomware-besked",
    image: "/images/blog-ransomware.png",
    tone: "blue",
    keywords: ["ransomware", "cybertrusler", "firewall-løsninger", "cybersikkerhed"],
    content: [
      {
        type: "p",
        text: "Ransomware er den type cyberangreb, der har den hurtigste vækst i Danmark. Her er hvad du som virksomhedsejer bør vide.",
      },
      { type: "h2", text: "Hvad er ransomware?" },
      {
        type: "p",
        text: "Ransomware er ondsindet software, der låser dine filer og kræver betaling – ofte i kryptovaluta – for at låse dem op igen.",
      },
      { type: "h2", text: "Sådan kommer ransomware ind" },
      {
        type: "p",
        text: "I 80% af tilfældene starter et angreb med en phishing-mail. En medarbejder klikker på et link eller åbner en vedhæftet fil, og ransomware-programmet bliver installeret.",
      },
      { type: "h2", text: "Sådan beskytter du dig" },
      {
        type: "ul",
        items: [
          "Hold systemer og software opdateret",
          "Brug en moderne firewall og endpoint-beskyttelse",
          "Træn medarbejdere i at spotte phishing",
          "Tag regelmæssige, krypterede backups offline",
          "Lav en beredskabsplan – og test den",
        ],
      },
      {
        type: "callout",
        text: "Betal aldrig løsesum. Politiets råd er klart: Det opmuntrer kriminelle og giver ingen garanti for, at du får dine data tilbage.",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
