import { defineRouting } from 'next-intl/routing';

/**
 * Language routing.
 * - Swedish is the default (Swedish market).
 * - The locale is always in the URL: /sv/..., /en/... (`localePrefix: 'always'`).
 * - Both languages use the same slugs, e.g. /sv/about and /en/about.
 * - Visiting / always opens Swedish (`/sv`). English is used only when the visitor chooses it
 *   (flag switch or an `/en/...` URL). Browser language is ignored.
 */
export const routing = defineRouting({
  locales: ['sv', 'en'],
  defaultLocale: 'sv',
  localePrefix: 'always',
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
