import type { SiteSettings } from '@/types/content';

const navigation = {
  home: { label: 'Hem', href: '/' },
  services: { label: 'Tjänster', href: '/services' },
  contact: { label: 'Kontakt', href: '/contact' },
  about: { label: 'Om oss', href: '/about' },
  support: { label: 'Support', href: '/support/support-01' },
} satisfies SiteSettings['navigation'];

export const site: SiteSettings = {
  siteName: 'TechSalem',
  navigation,
  header: {
    cta: { label: 'Boka konsultation', href: '/booking' },
    supportCta: { label: 'IT-support', href: '/support/support-01' },
  },
  footer: {
    tagline:
      'Teknik- och verksamhetsrådgivning för organisationer som vill gå framåt med tydlighet och självförtroende.',
    quickLinks: {
      heading: 'Snabblänkar',
      links: {
        home: navigation.home,
        about: navigation.about,
        services: navigation.services,
        support: navigation.support,
      },
    },
    support: {
      heading: 'Support',
      links: {
        supportPage1: { label: 'Supportsida 01', href: '/support/support-01' },
        supportPage2: { label: 'Supportsida 02', href: '/support/support-02' },
        privacy: { label: 'Integritetspolicy', href: '/privacy-policy' },
        cookies: { label: 'Cookiepolicy', href: '/cookie-policy' },
      },
    },
    connect: {
      heading: 'Följ oss',
      links: {
        linkedin: {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/jasperorieny',
          openInNewTab: true,
        },
        facebook: {
          label: 'Facebook',
          href: 'https://www.facebook.com/share/18tQ7RMEeC/',
          openInNewTab: true,
        },
        infoEmail: { label: 'info@techsalem.se', href: 'mailto:info@techsalem.se' },
        supportEmail: { label: 'support@techsalem.se', href: 'mailto:support@techsalem.se' },
      },
    },
    copyright: '© 2026 TechSalem. Alla rättigheter förbehållna.',
    slogan: 'Teknik med syfte.',
  },
};
