/*
 * Policyn beskriver hur TechSalem hanterar personuppgifter.
 * Juridisk slutgranskning rekommenderas före offentlig lansering.
 */
import type { PrivacyPolicyPageContent } from '@/types/content';

import { site } from './site';

const email = site.footer.connect.links.infoEmail;

export const privacyPolicy: PrivacyPolicyPageContent = {
  meta: {
    title: 'Integritetspolicy',
    description:
      'Så samlar TechSalem in, använder och skyddar dina personuppgifter, och vilka rättigheter du har enligt GDPR.',
  },
  header: {
    eyebrow: 'Juridiskt',
    title: 'Integritetspolicy',
    text: 'Senast uppdaterad: 7 november 2026',
  },
  contentsLabel: 'Innehåll',
  sections: [
    {
      id: 'who-we-are',
      heading: 'Vilka vi är',
      blocks: [
        {
          type: 'paragraph',
          text: 'Den här policyn beskriver hur TechSalem hanterar dina personuppgifter när du besöker vår webbplats, bokar en konsultation eller kontaktar oss.',
        },
        {
          type: 'paragraph',
          text: [
            'Personuppgiftsansvarig är TechSalem AB, organisationsnummer 559608-4847, Svampstigen 101, 144 40 Rönninge. Har du frågor om policyn når du oss på ',
            email,
            '.',
          ],
        },
      ],
    },
    {
      id: 'data-we-collect',
      heading: 'Vilka personuppgifter vi samlar in',
      blocks: [
        {
          type: 'list',
          items: [
            'När du bokar en konsultation: namn, e-postadress, företag (om du anger det), ditt meddelande (om du skriver ett) och den tid du väljer.',
            'När du mejlar oss: din e-postadress, ditt namn och det du själv väljer att skriva.',
            'När du besöker webbplatsen: grundläggande tekniska uppgifter som vår server behöver för att visa sidorna, till exempel IP-adress, webbläsartyp och vilka sidor du besöker (serverloggar).',
          ],
        },
        {
          type: 'paragraph',
          text: 'Vi efterfrågar inga känsliga personuppgifter. Skriv därför inte sådana uppgifter i ett bokningsmeddelande eller mejl.',
        },
      ],
    },
    {
      id: 'why-we-use-it',
      heading: 'Varför vi använder uppgifterna och med vilket stöd',
      blocks: [
        {
          type: 'list',
          items: [
            'För att hantera din bokning eller förfrågan och hålla kontakten med dig om den. Den rättsliga grunden är åtgärder som du begärt innan ett eventuellt avtal ingås, eller vårt berättigade intresse av att svara den som kontaktar oss.',
            'För att driva, skydda och förbättra webbplatsen, till exempel för att förhindra missbruk och rätta fel. Den rättsliga grunden är vårt berättigade intresse av en fungerande och säker webbplats.',
          ],
        },
        {
          type: 'paragraph',
          text: 'Vi använder inte dina uppgifter för automatiserade beslut eller profilering.',
        },
      ],
    },
    {
      id: 'how-long',
      heading: 'Hur länge vi sparar uppgifterna',
      blocks: [
        {
          type: 'paragraph',
          text: 'Uppgifter från bokningar och kontakter sparar vi så länge vi behöver dem för att hantera din förfrågan och ett eventuellt uppdrag som följer av den, och därefter som längst 24 månader. Sedan raderar vi dem. Om lagen kräver att vissa uppgifter sparas längre, till exempel för bokföringen, sparar vi dem enbart för det ändamålet.',
        },
        {
          type: 'paragraph',
          text: 'Serverloggar sparas en kort tid och raderas sedan automatiskt.',
        },
      ],
    },
    {
      id: 'sharing',
      heading: 'Vilka vi delar uppgifterna med',
      blocks: [
        {
          type: 'paragraph',
          text: 'Vi delar bara dina uppgifter med leverantörer som hjälper oss att driva webbplatsen och vår e-post, till exempel vår webbhotell- och e-postleverantör. De behandlar uppgifterna för vår räkning enligt personuppgiftsbiträdesavtal och får inte använda dem för egna syften.',
        },
        {
          type: 'paragraph',
          text: 'Vi säljer aldrig dina personuppgifter.',
        },
      ],
    },
    {
      id: 'transfers',
      heading: 'Överföring utanför EU/EES',
      blocks: [
        {
          type: 'paragraph',
          text: 'Vi strävar efter att behandla dina uppgifter inom EU/EES. Om en leverantör behandlar uppgifter utanför EU/EES ser vi till att det finns lämpliga skyddsåtgärder, till exempel EU-kommissionens standardavtalsklausuler.',
        },
      ],
    },
    {
      id: 'your-rights',
      heading: 'Dina rättigheter',
      blocks: [
        {
          type: 'paragraph',
          text: 'Enligt dataskyddsförordningen (GDPR) har du rätt att:',
        },
        {
          type: 'list',
          items: [
            'få veta vilka personuppgifter vi har om dig (registerutdrag),',
            'få felaktiga uppgifter rättade,',
            'få dina uppgifter raderade,',
            'begränsa hur vi använder uppgifterna,',
            'invända mot behandling som grundar sig på vårt berättigade intresse,',
            'få ut dina uppgifter i ett strukturerat och vanligt format (dataportabilitet).',
          ],
        },
        {
          type: 'paragraph',
          text: [
            'Vill du använda någon av dina rättigheter? Mejla oss på ',
            email,
            '. Vi svarar inom en månad.',
          ],
        },
      ],
    },
    {
      id: 'complaints',
      heading: 'Klagomål',
      blocks: [
        {
          type: 'paragraph',
          text: [
            'Om du tycker att vi hanterar dina personuppgifter fel vill vi gärna att du kontaktar oss först, så att vi kan rätta till det. Du har också rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY), ',
            { label: 'imy.se', href: 'https://www.imy.se', openInNewTab: true },
            '.',
          ],
        },
      ],
    },
    {
      id: 'cookies',
      heading: 'Cookies',
      blocks: [
        {
          type: 'paragraph',
          text: [
            'Webbplatsen använder bara en nödvändig cookie och inga cookies för statistik eller marknadsföring. Läs mer i vår ',
            { label: 'cookiepolicy', href: '/cookie-policy' },
            '.',
          ],
        },
      ],
    },
    {
      id: 'changes',
      heading: 'Ändringar i policyn',
      blocks: [
        {
          type: 'paragraph',
          text: 'Vi kan komma att uppdatera policyn när våra tjänster eller lagarna förändras. Datumet högst upp på sidan visar när den senast uppdaterades. Gör vi viktiga ändringar informerar vi tydligt om det på webbplatsen.',
        },
      ],
    },
  ],
};
