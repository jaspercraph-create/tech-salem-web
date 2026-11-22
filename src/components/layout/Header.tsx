import { UserRound } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';
import { Suspense } from 'react';

import { ButtonLink } from '@/components/ui/ButtonLink';
import { Logo } from '@/components/ui/Logo';
import { getContent } from '@/content';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/cn';
import type { InternalLinkItem } from '@/types/content';

import { LanguageSwitch } from './LanguageSwitch';
import { MobileMenu } from './MobileMenu';
import { NavLinks } from './NavLinks';

/**
 * Site header (spec: home.md, first block). White, 68px tall, 12px vertical padding, content in
 * the site container. Logo | navigation | language switch + CTA, spread with equal gaps
 * (justify-between reproduces the Figma positions exactly). Below `lg` the navigation, switch and
 * CTA move into the mobile menu. Not sticky: the design shows no sticky behaviour.
 */
export async function Header() {
  const locale = await getLocale();
  const [site, t] = await Promise.all([getContent(locale, 'site'), getTranslations('a11y')]);

  const navLinks = [
    site.navigation.home,
    site.navigation.about,
    site.navigation.services,
    site.navigation.contact,
  ];
  const { cta, supportCta } = site.header;

  return (
    <header className="relative z-40 bg-white">
      <div className="site-container flex h-header items-center justify-between gap-6 py-3">
        <Logo
          name={site.siteName}
          label={t('homeLink', { siteName: site.siteName })}
          variant="light"
        />

        <nav aria-label={t('mainNavigation')} className="hidden lg:block">
          <Suspense fallback={<NavLinkFallback links={navLinks} variant="desktop" />}>
            <NavLinks links={navLinks} variant="desktop" />
          </Suspense>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Suspense fallback={<LanguageSwitchFallback />}>
            <LanguageSwitch />
          </Suspense>
          <AdminDashboardLink />
          <ButtonLink href={supportCta.href} className="px-4">
            {supportCta.label}
          </ButtonLink>
          <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
        </div>

        <MobileMenu>
          <div className="site-container flex flex-col gap-8 pt-2 pb-10">
            <nav aria-label={t('mainNavigation')}>
              <Suspense fallback={<NavLinkFallback links={navLinks} variant="mobile" />}>
                <NavLinks links={navLinks} variant="mobile" />
              </Suspense>
            </nav>
            <Suspense fallback={<LanguageSwitchFallback className="self-start" />}>
              <LanguageSwitch className="self-start" />
            </Suspense>
            <div className="flex items-center gap-3">
              <AdminDashboardLink />
              <ButtonLink href={supportCta.href} className="w-full">
                {supportCta.label}
              </ButtonLink>
              <ButtonLink href={cta.href} className="w-full">
                {cta.label}
              </ButtonLink>
            </div>
          </div>
        </MobileMenu>
      </div>
    </header>
  );
}

function NavLinkFallback({
  links,
  variant,
}: {
  links: InternalLinkItem[];
  variant: 'desktop' | 'mobile';
}) {
  return (
    <ul className={variant === 'desktop' ? 'flex items-center gap-8 text-nav' : 'flex flex-col'}>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={cn(
              'text-navy/75 transition-colors hover:text-navy',
              variant === 'desktop'
                ? 'touch-target block'
                : 'block border-b border-line py-4 text-title-20 font-semibold',
            )}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function LanguageSwitchFallback({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn('inline-flex rounded-full bg-cloud p-1', className)}>
      <span className="inline-flex items-center rounded-full bg-white px-2.5 py-1.5 text-lang text-navy shadow-switch">
        EN
      </span>
      <span className="inline-flex items-center rounded-full px-2.5 py-1.5 text-lang text-ink-muted">
        SV
      </span>
    </div>
  );
}

function AdminDashboardLink() {
  return (
    <Link
      href="/admin"
      aria-label="Admin Dashboard"
      title="Admin Dashboard"
      className="inline-flex size-11 shrink-0 items-center justify-center rounded-sm text-navy transition-colors hover:bg-cloud hover:text-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
    >
      <UserRound aria-hidden="true" className="size-5" strokeWidth={1.8} />
    </Link>
  );
}
