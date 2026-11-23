import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { SkipLink } from '@/components/layout/SkipLink';
import { getContent } from '@/content';
import { routing } from '@/i18n/routing';
import { fontVariables } from '@/lib/fonts';
/**import { siteUrl } from '@/lib/site-url';*/
import { siteUrl } from '@/lib/site-env';

import '../globals.css';

/** Generate locale params while page content stays dynamic and database-backed. */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { siteName } = await getContent(locale, 'site');

  // Fallback only. Pages set their full title through getPageMetadata (src/lib/metadata.ts).
  return { metadataBase: siteUrl, title: siteName };
}

/**
 * Root layout and page shell: skip link, header, main content, footer. Every page (including the
 * 404 page) renders inside it. The locale comes from the [locale] segment (validated in
 * src/i18n/request.ts, which returns a 404 for unknown locales).
 *
 * `data-menu-inert` marks what the open mobile menu makes inert (see MobileMenu).
 */
export default async function LocaleLayout({ children }: LayoutProps<'/[locale]'>) {
  const locale = await getLocale();

  // data-motion: global switch for scroll-reveal animations ('on' | 'off'), see CLAUDE.md.
  return (
    <html lang={locale} className={fontVariables} data-motion="on" data-scroll-behavior="smooth">
      <body className="flex flex-col" suppressHydrationWarning>
        <NextIntlClientProvider>
          <SkipLink />
          <div data-site-chrome className="print:hidden">
            <Header />
          </div>
          <main id="main" tabIndex={-1} data-menu-inert className="flex-1 outline-none">
            {children}
          </main>
          <div data-site-chrome className="print:hidden">
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
