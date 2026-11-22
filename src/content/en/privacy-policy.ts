/*
 * This policy describes how TechSalem handles personal data.
 * Review by a legal adviser is still recommended before launch.
 */
import type { PrivacyPolicyPageContent } from '@/types/content';

import { site } from './site';

const email = site.footer.connect.links.infoEmail;

export const privacyPolicy: PrivacyPolicyPageContent = {
  meta: {
    title: 'Privacy policy',
    description:
      'How TechSalem collects, uses and protects your personal data, and the rights you have under the GDPR.',
  },
  header: {
    eyebrow: 'Legal',
    title: 'Privacy policy',
    text: 'Last updated: 7 November 2026',
  },
  contentsLabel: 'Contents',
  sections: [
    {
      id: 'who-we-are',
      heading: 'Who we are',
      blocks: [
        {
          type: 'paragraph',
          text: 'This policy explains how TechSalem handles your personal data when you visit our website, book a consultation or contact us.',
        },
        {
          type: 'paragraph',
          text: [
            'The data controller is TechSalem AB, organisation number 559608-4847, Svampstigen 101, 144 40 Rönninge, Sweden. You can reach us about anything in this policy at ',
            email,
            '.',
          ],
        },
      ],
    },
    {
      id: 'data-we-collect',
      heading: 'What personal data we collect',
      blocks: [
        {
          type: 'list',
          items: [
            'When you book a consultation: your name, email address, company (if you enter it), your message (if you write one) and the time you choose.',
            'When you email us: your email address, your name and whatever you choose to write to us.',
            'When you visit the website: basic technical data that our server needs to deliver the site, such as your IP address, browser type and the pages you request (server logs).',
          ],
        },
        {
          type: 'paragraph',
          text: 'We do not ask for sensitive personal data. Please do not include it in a booking message or an email.',
        },
      ],
    },
    {
      id: 'why-we-use-it',
      heading: 'Why we use your data and our legal basis',
      blocks: [
        {
          type: 'list',
          items: [
            'To handle your booking or enquiry and stay in touch about it. The legal basis is taking steps at your request before a possible agreement, or our legitimate interest in answering people who contact us.',
            'To run, secure and improve the website, for example to prevent misuse and fix errors. The legal basis is our legitimate interest in a working and secure website.',
          ],
        },
        {
          type: 'paragraph',
          text: 'We do not use your data for automated decision-making or profiling.',
        },
      ],
    },
    {
      id: 'how-long',
      heading: 'How long we keep your data',
      blocks: [
        {
          type: 'paragraph',
          text: 'We keep booking and contact data for as long as we need it to handle your request and any assignment that follows from it, and then for no longer than 24 months. After that we delete it. If the law requires us to keep certain information longer, for example for accounting, we keep it only for that purpose.',
        },
        {
          type: 'paragraph',
          text: 'Server logs are kept for a short period and then deleted automatically.',
        },
      ],
    },
    {
      id: 'sharing',
      heading: 'Who we share your data with',
      blocks: [
        {
          type: 'paragraph',
          text: 'We only share your data with service providers that help us run the website and our email, such as our hosting and email delivery providers. They process the data on our behalf, under data processing agreements, and may not use it for their own purposes.',
        },
        {
          type: 'paragraph',
          text: 'We never sell your personal data.',
        },
      ],
    },
    {
      id: 'transfers',
      heading: 'Transfers outside the EU/EEA',
      blocks: [
        {
          type: 'paragraph',
          text: 'We aim to keep your data within the EU/EEA. If a service provider processes data outside the EU/EEA, we make sure there are appropriate safeguards in place, such as the European Commission’s standard contractual clauses.',
        },
      ],
    },
    {
      id: 'your-rights',
      heading: 'Your rights',
      blocks: [
        {
          type: 'paragraph',
          text: 'Under the GDPR you have the right to:',
        },
        {
          type: 'list',
          items: [
            'access the personal data we hold about you,',
            'have incorrect data corrected,',
            'have your data deleted,',
            'restrict how we use your data,',
            'object to processing based on our legitimate interest,',
            'receive your data in a structured, commonly used format (data portability).',
          ],
        },
        {
          type: 'paragraph',
          text: [
            'To use any of these rights, email us at ',
            email,
            '. We will reply within one month.',
          ],
        },
      ],
    },
    {
      id: 'complaints',
      heading: 'Complaints',
      blocks: [
        {
          type: 'paragraph',
          text: [
            'If you think we handle your personal data incorrectly, please contact us first so we can put it right. You also have the right to lodge a complaint with the Swedish Authority for Privacy Protection (Integritetsskyddsmyndigheten, IMY) at ',
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
            'Our website uses only one strictly necessary cookie and no analytics or marketing cookies. Read more in our ',
            { label: 'cookie policy', href: '/cookie-policy' },
            '.',
          ],
        },
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to this policy',
      blocks: [
        {
          type: 'paragraph',
          text: 'We may update this policy when our services or the law change. The date at the top of the page shows when it was last updated. If we make important changes, we will make that clear on the website.',
        },
      ],
    },
  ],
};
