import type { AboutPageContent } from '@/types/content';

const officeImage = {
  src: '/images/office-open-space.jpg',
  alt: 'Öppet kontor med ett långt mötesbord och stora fönster',
  width: 1600,
  height: 1068,
} satisfies AboutPageContent['hero']['image'];

const values = [
  {
    title: 'Tydlighet först',
    text: 'Vi skapar en gemensam bild av utmaningen innan vi definierar lösningen.',
  },
  {
    title: 'Affärsmässigt förankrat',
    text: 'Teknikbeslut kopplas till mål, människor och verksamhetens verklighet.',
  },
  {
    title: 'Byggt tillsammans',
    text: 'Nära samarbete ger starkare beslut och lösningar som håller.',
  },
] satisfies AboutPageContent['values']['items'];

export const about: AboutPageContent = {
  meta: {
    title: 'Om oss',
    description:
      'Lär känna TechSalem, en partner inom teknik- och verksamhetsrådgivning i Sverige som kopplar ihop strategiska ambitioner med praktiska framsteg.',
    image: officeImage,
  },
  hero: {
    eyebrow: 'Teknik- och verksamhetsrådgivning',
    title: 'Teknisk insikt, förankrad i affären.',
    text: 'TechSalem är en partner inom teknik- och verksamhetsrådgivning för organisationer som söker en tydligare väg genom förändring.',
    image: officeImage,
    primaryCta: { label: 'Starta ett samtal', href: '/contact' },
    secondaryCta: { label: 'Boka konsultation', href: '/booking' },
  },
  perspective: {
    label: '01 / Vårt perspektiv',
    title: 'Vi gör det komplexa lättare att agera på.',
    titleAccent: 'Om TechSalem.',
    text: 'Vår roll är att koppla ihop strategiska ambitioner med praktiska framsteg. Vi lyssnar noga, ställer rätt frågor och formar lösningar efter verkligheten i din organisation.',
  },
  stat: {
    image: {
      src: '/images/about-quote-office.jpg',
      alt: 'Team som arbetar vid skrivbord i ett ljust, modernt kontor',
      width: 1800,
      height: 1350,
    },
    value: '100%',
    label: 'Fokuserade på din verklighet',
  },
  values: {
    label: '02 / Det vi värdesätter',
    items: values,
  },
  capabilities: {
    label: '03 / Våra förmågor',
    title: 'Ett fokuserat, mänskligt arbetssätt.',
    titleAccent: 'Varje dag.',
    text: 'Vi kombinerar teknisk förståelse med tydligt affärstänkande och använder rätt expertis i varje del av uppdraget.',
    items: [
      {
        title: 'Förstå affärssammanhanget',
        text: 'Vi utforskar dina mål, utmaningar och nuvarande arbetssätt innan vi rekommenderar nästa steg.',
      },
      {
        title: 'Göra teknikbeslut tydliga',
        text: 'Vi översätter tekniska val till tydliga fördelar, risker, kostnader och praktiska konsekvenser.',
      },
      {
        title: 'Forma praktiska lösningar',
        text: 'Vi omsätter behov och möjligheter i lösningar som passar organisationen och de människor som använder dem.',
      },
      {
        title: 'Bygga moderna digitala upplevelser',
        text: 'Vi utvecklar tydliga och tillförlitliga webbplatser och applikationer som stödjer verkliga affärsbehov och kan växa över tid.',
      },
      {
        title: 'Förbättra arbetssätt',
        text: 'Vi identifierar ineffektivhet, förenklar processer och kopplar digitala förbättringar till mätbara resultat.',
      },
      {
        title: 'Stödja hållbar förändring',
        text: 'Vi följer upp genomförande, leverans och överlämning så att utvecklingen fortsätter även efter projektets slut.',
      },
    ],
  },
  quote: {
    image: officeImage,
    label: 'Det vi tror på',
    text: '”Inga onödiga lager. Ingen standardmall. Bara genomtänkt expertis där den gör skillnad.”',
    source: 'TechSalem / Sverige',
  },
};
