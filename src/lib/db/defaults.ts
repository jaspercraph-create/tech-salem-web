import 'server-only';

import type { Prisma } from '@prisma/client';

import { about as aboutEn } from '@/content/en/about';
import { booking as bookingEn } from '@/content/en/booking';
import { contact as contactEn } from '@/content/en/contact';
import { contactStrip as contactStripEn } from '@/content/en/contact-strip';
import { cookiePolicy as cookiePolicyEn } from '@/content/en/cookie-policy';
import { home as homeEn } from '@/content/en/home';
import { notFound as notFoundEn } from '@/content/en/not-found';
import { privacyPolicy as privacyPolicyEn } from '@/content/en/privacy-policy';
import { services as servicesEn } from '@/content/en/services';
import { site as siteEn } from '@/content/en/site';
import { supportPages as supportPagesEn } from '@/content/en/support';
import { about as aboutSv } from '@/content/sv/about';
import { booking as bookingSv } from '@/content/sv/booking';
import { contact as contactSv } from '@/content/sv/contact';
import { contactStrip as contactStripSv } from '@/content/sv/contact-strip';
import { cookiePolicy as cookiePolicySv } from '@/content/sv/cookie-policy';
import { home as homeSv } from '@/content/sv/home';
import { notFound as notFoundSv } from '@/content/sv/not-found';
import { privacyPolicy as privacyPolicySv } from '@/content/sv/privacy-policy';
import { services as servicesSv } from '@/content/sv/services';
import { site as siteSv } from '@/content/sv/site';
import { supportPages as supportPagesSv } from '@/content/sv/support';
import type { Locale } from '@/i18n/routing';
import type { ContentKey, LocaleContent } from '@/types/content';

/** Every stored document. Both languages use the same keys. */
export const contentKeys = [
  'site',
  'contactStrip',
  'home',
  'about',
  'services',
  'supportPages',
  'contact',
  'booking',
  'privacyPolicy',
  'cookiePolicy',
  'notFound',
] as const satisfies readonly ContentKey[];

/** Source fallback used only for database seeding when a document is missing. */
export const defaultContent: Record<Locale, LocaleContent> = {
  sv: {
    site: siteSv,
    contactStrip: contactStripSv,
    home: homeSv,
    about: aboutSv,
    services: servicesSv,
    supportPages: supportPagesSv,
    contact: contactSv,
    booking: bookingSv,
    privacyPolicy: privacyPolicySv,
    cookiePolicy: cookiePolicySv,
    notFound: notFoundSv,
  },
  en: {
    site: siteEn,
    contactStrip: contactStripEn,
    home: homeEn,
    about: aboutEn,
    services: servicesEn,
    supportPages: supportPagesEn,
    contact: contactEn,
    booking: bookingEn,
    privacyPolicy: privacyPolicyEn,
    cookiePolicy: cookiePolicyEn,
    notFound: notFoundEn,
  },
};

export function contentJson(value: unknown): Prisma.InputJsonValue {
  return JSON.parse(JSON.stringify(value)) as Prisma.InputJsonValue;
}
