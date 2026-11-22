import type { ServicesPageContent } from '@/types/content';

const heroImage = {
  src: '/images/hero-office-wide.png',
  alt: 'Kontorslandskap med människor som arbetar vid skrivbord',
  width: 1920,
  height: 720,
} satisfies ServicesPageContent['hero']['image'];

const processText = 'Varje uppdrag börjar med sammanhanget – inte med ett färdigt svar.';

export const services: ServicesPageContent = {
  meta: {
    title: 'Tjänster',
    description:
      'TechSalems tjänster inom skräddarsydd webbutveckling, affärsrådgivning och digital transformation – från strategi till praktiska lösningar.',
    image: heroImage,
  },
  hero: {
    eyebrow: 'Konsulttjänster och webbutveckling',
    title: 'Praktisk expertis för verkliga framsteg.',
    text: 'Vi hjälper organisationer att förstå rätt behov, prioritera nästa steg och omsätta teknik i konkreta affärsförbättringar. Erbjudandet omfattar skräddarsydd webbutveckling, verksamhetsrådgivning och digital förändring.',
    image: heroImage,
    primaryCta: { label: 'Starta ett samtal', href: '/contact' },
  },
  perspective: {
    label: '01 / Vårt perspektiv',
    title: 'Ett tydligt fokus. En samlad helhet.',
    titleAccent: 'Hållbara resultat.',
    text: 'Vi börjar i verksamhetens mål och nuvarande situation. Därefter formar vi ett genomförbart uppdrag där teknik, processer och människor arbetar tillsammans för att skapa långsiktig effekt.',
  },
  services: {
    areaLabel: 'Tjänst',
    items: [
      {
        title: 'Skräddarsydd webbutveckling',
        text: 'Vi designar och utvecklar moderna webbplatser och digitala applikationer utifrån verksamhetens mål – från snabba, tydliga lösningar till avancerade, integrationsbaserade system.',
        tone: 'navy',
      },
      {
        title: 'Teknisk och affärsmässig rådgivning',
        text: 'Få ett tydligt beslutsunderlag inför nya system, digitala satsningar eller förändringar. Vi kopplar teknikval och leveransmöjligheter till affärsnytta, risk och långsiktighet.',
        tone: 'lavender',
      },
      {
        title: 'Digital transformation och optimering',
        text: 'Vi kartlägger arbetssätt och befintliga system, identifierar flaskhalsar och hjälper er att prioritera förbättringar som förenklar vardagen och stärker verksamheten.',
        tone: 'red',
      },
    ],
    imageCard: {
      image: {
        src: '/images/services-card-office.jpg',
        alt: 'Ljust kontor med arbetsplatser och en loungedel',
        width: 1600,
        height: 1200,
      },
      text: 'Expertis som formas efter ert sammanhang.',
    },
  },
  process: {
    label: '02 / Från behov till resultat',
    title: 'Från fråga till tydlig riktning.',
    text: processText,
    steps: [
      {
        title: 'Förstå verksamhetsbehovet',
        text: 'Vi lyfter målen, utmaningarna och nuläget genom öppna samtal och en gemensam analys av vad som behöver förbättras.',
      },
      {
        title: 'Forma ett fokuserat uppdrag',
        text: 'Tillsammans prioriterar vi rätt omfattning, arbetsmetod och leverabler – med tydliga ansvar, tidsramar och förväntade resultat.',
      },
      {
        title: 'Leverera konkreta nästa steg',
        text: 'Vi omsätter beslut i praktiska handlingar och lämnar över lösningen på ett sätt som gör fortsatt drift, utveckling och ägarskap tydligt.',
      },
    ],
  },
  next: {
    label: '03 / Nästa steg',
    title: 'Rätt uppdrag börjar med rätt fråga.',
    text: 'Berätta vad du behöver förändra, förbättra eller förstå. Vi hjälper dig att forma nästa steg.',
    link: { label: 'Starta ett samtal', href: '/contact' },
  },
};
