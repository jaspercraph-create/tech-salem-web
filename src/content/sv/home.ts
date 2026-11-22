import type { HomePageContent } from '@/types/content';

const heroImage = {
  src: '/images/home-hero-team-meeting.jpg',
  alt: 'Affärsteam som diskuterar en teknikstrategi kring en laptop',
  width: 1024,
  height: 1280,
  // Phones/tablets: keep the seated woman and man in view.
  focalPoint: '68% 30%',
} satisfies HomePageContent['hero']['image'];

export const home: HomePageContent = {
  meta: {
    title: 'TechSalem | Teknik- och verksamhetsrådgivning',
    absoluteTitle: true,
    description:
      'TechSalem är ett teknik- och verksamhetskonsultföretag i Sverige. Vi hjälper företag att navigera i tekniken, effektivisera verksamheten och hitta smartare lösningar.',
    image: heroImage,
  },
  hero: {
    eyebrow: 'Teknik- och verksamhetsrådgivning',
    title: 'Vi driver verksamheter framåt med smartare teknik.',
    text: 'Vi hjälper företag att navigera i tekniken, effektivisera verksamheten och hitta smartare lösningar som skapar verklig affärsnytta.',
    image: heroImage,
    primaryCta: { label: 'Utforska våra tjänster', href: '/services' },
    secondaryCta: { label: 'Boka konsultation', href: '/booking' },
  },
  services: {
    eyebrow: 'Tjänster',
    title: 'Där vi gör störst skillnad',
    text: 'Praktisk expertis och skräddarsydda lösningar som hjälper företag att lösa utmaningar och skapa hållbara resultat.',
    cards: [
      {
        icon: 'network',
        areaLabel: 'Utveckling',
        title: 'Skräddarsydd webbutveckling',
        text: 'Moderna, anpassade webbplatser och webblösningar – från en tydlig enkel webbplats till avancerade, komplexa applikationer.',
        link: { label: 'Läs mer', href: '/services' },
      },
      {
        icon: 'workflow',
        areaLabel: 'Rådgivning',
        title: 'Teknisk och affärsmässig rådgivning',
        text: 'Tydliga beslutsunderlag för system, digitala satsningar och förändringar – kopplade till affärsnytta, risk och långsiktig hållbarhet.',
        link: { label: 'Läs mer', href: '/services' },
      },
      {
        icon: 'chart-column',
        areaLabel: 'Förbättring',
        title: 'Digital transformation och optimering',
        text: 'Vi kartlägger arbetssätt och befintliga system, identifierar flaskhalsar och prioriterar förbättringar som förenklar vardagen.',
      },
      {
        icon: 'shield-check',
        areaLabel: 'IT-support',
        title: 'Trygg drift och löpande support',
        text: 'Praktisk teknisk support som hjälper verksamheten att minska störningar, lösa problem snabbt och arbeta mer säkert och förutsägbart.',
        link: { label: 'Utforska support', href: '/support/support-01' },
      },
    ],
  },
  about: {
    image: {
      src: '/images/home-about-presentation.jpg',
      alt: 'Konsult som presenterar en strategi på en skärm för en kollega',
      width: 1200,
      height: 1024,
    },
    badge: { label: 'Vårt fokus', text: 'Tydliga beslut. Verklig effekt.' },
    eyebrow: 'Om TechSalem',
    title: 'Din partner för teknisk och affärsmässig förändring.',
    paragraphs: [
      'TechSalem samarbetar med företag för att navigera i tekniken, stärka verksamheten och omsätta idéer i fungerande lösningar. Vårt arbetssätt är praktiskt, utgår från affären och formas efter varje kunds unika situation.',
      'Från det första samtalet till ett levererat resultat håller vi oss nära dina mål och gör varje steg tydligt och förutsägbart.',
    ],
    link: { label: 'Upptäck TechSalem', href: '/about' },
  },
  why: {
    eyebrow: 'Varför TechSalem',
    title: 'Byggt kring din verksamhet, inte en mall.',
    items: [
      {
        title: 'Skräddarsydda affärslösningar',
        text: 'Vi formar varje lösning utifrån dina mål, förutsättningar och verksamhetens verkliga behov.',
      },
      {
        title: 'Professionell expertis',
        text: 'Teknisk och affärsmässig kompetens kombineras för att göra komplexa beslut tydligare.',
      },
      {
        title: 'Strategiskt tänkande',
        text: 'Vi kopplar dagens prioriteringar till ett hållbart nästa steg och en tydlig leveransväg.',
      },
      {
        title: 'Pålitligt partnerskap',
        text: 'Tydlig kommunikation, delaktighet och ansvar genom hela uppdraget.',
      },
    ],
  },
  roles: {
    title: 'Några av rollerna vi arbetar med',
    items: [
      { title: 'Cloud Engineer' },
      { title: 'DevOps Engineer' },
      { title: 'Backend Developer' },
      { title: 'Frontend Developer' },
      { title: 'Infrastructure Specialist' },
      { title: 'Cybersecurity Consultant' },
      { title: 'Azure Specialist' },
      { title: 'System Architect' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Rätt hjälp, precis när du behöver den.',
    image: {
      src: '/images/6305419613449164358.jpg',
      alt: 'TechSalems IT-supportbanner med två personer som arbetar vid datorer',
      width: 1254,
      height: 1254,
    },
    cards: [
      {
        icon: 'headphones',
        title: 'IT-support i hemmet',
        text: 'Praktisk hjälp med datorer, nätverk och IT i hemmet – på plats eller på distans.',
        link: { label: 'Utforska support', href: '/support/support-01' },
      },
      {
        icon: 'headphones',
        title: 'IT-support för företag',
        text: 'Pålitlig drift och praktisk support som hjälper småföretag att arbeta säkert och effektivt.',
        link: { label: 'Utforska support', href: '/support/support-02' },
      },
    ],
  },
  cta: {
    title: 'Låt oss bygga nästa steg. Tillsammans.',
    text: 'Har du en affärsutmaning eller en ny idé? Låt oss prata om hur TechSalem kan hjälpa dig framåt.',
    button: { label: 'Boka konsultation', href: '/booking' },
  },
};
