import type { SiteSettings } from '@/types/content';

const navigation = {
  home: { label: 'Home', href: '/' },
  services: { label: 'Services', href: '/services' },
  contact: { label: 'Contact', href: '/contact' },
  about: { label: 'About', href: '/about' },
  support: { label: 'Support', href: '/support/support-01' },
} satisfies SiteSettings['navigation'];

export const site: SiteSettings = {
  siteName: 'TechSalem',
  navigation,
  header: {
    cta: { label: 'Book a consultation', href: '/booking' },
    supportCta: { label: 'IT Support', href: '/support/support-01' },
  },
  footer: {
    tagline:
      'Technology and business consulting for organizations ready to move with clarity and confidence.',
    quickLinks: {
      heading: 'Quick links',
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
        supportPage1: { label: 'Support page 01', href: '/support/support-01' },
        supportPage2: { label: 'Support page 02', href: '/support/support-02' },
        privacy: { label: 'Privacy policy', href: '/privacy-policy' },
        cookies: { label: 'Cookie policy', href: '/cookie-policy' },
      },
    },
    connect: {
      heading: 'Connect',
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
    copyright: '© 2026 TechSalem. All rights reserved.',
    slogan: 'Technology with purpose.',
  },
};
