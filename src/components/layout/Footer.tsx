import { getLocale, getTranslations } from 'next-intl/server';
import { MapPin, Phone, Building2 } from 'lucide-react';

import { ContentLink } from '@/components/ui/ContentLink';
import { Logo } from '@/components/ui/Logo';
import { getContent } from '@/content';

/**
 * Site footer (spec: home.md, "Frame 2147240631"). Navy-dark, 80px top / 40px bottom padding,
 * 1136px content (200px + 32px side padding at 1600px). A 4-column grid with a 1px white/10
 * line under it, then the copyright bar. Total height at 1600px: 377px, as in the frame.
 */
export async function Footer() {
  const locale = await getLocale();
  const [site, t] = await Promise.all([getContent(locale, 'site'), getTranslations('a11y')]);
  const { footer } = site;

  const columns = [
    { id: 'footer-quick-links', ...footer.quickLinks },
    { id: 'footer-support', ...footer.support },
    { id: 'footer-connect', ...footer.connect },
  ];

  return (
    <footer data-menu-inert className="bg-navy-dark pt-20 pb-10 on-dark">
      <div className="site-container">
        <div className="mx-auto max-w-inner">
          <div className="grid gap-x-8 gap-y-10 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-5">
            <div>
              <Logo
                name={site.siteName}
                label={t('homeLink', { siteName: site.siteName })}
                variant="dark"
                className="flex w-fit"
              />
              <p className="mt-7.5 max-w-62 text-body-sm-loose text-white/55">{footer.tagline}</p>
            </div>

            <div>
              <h2 className="text-button text-white">Company Info</h2>
              <ul className="mt-5 grid gap-3 text-body-sm text-white/55">
                <li className="flex items-start gap-2">
                  <Building2 className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>TechSalem AB</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    Svampstigen 101
                    <br />
                    14440 Rönninge
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>0700141376, 0704005858</span>
                </li>
              </ul>
            </div>

            {columns.map((column) => (
              <nav key={column.id} aria-labelledby={column.id}>
                <h2 id={column.id} className="text-button text-white">
                  {column.heading}
                </h2>
                <ul className="mt-5 grid gap-3 text-body-sm pointer-coarse:gap-6">
                  {Object.values(column.links).map((link) => (
                    <li key={link.label}>
                      <ContentLink
                        link={link}
                        newTabLabel={t('newTab')}
                        className="touch-target text-white/55 transition-colors hover:text-white"
                      />
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-7 sm:flex-row sm:justify-between sm:gap-3">
            <p className="text-caption text-white/40">{footer.copyright}</p>
            <p className="text-caption text-white/40">{footer.slogan}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
