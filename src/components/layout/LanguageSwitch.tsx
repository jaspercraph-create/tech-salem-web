'use client';

import { useLocale } from 'next-intl';

import { Link, usePathname } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { cn } from '@/lib/cn';

/** Order as in the design: EN first, then SV. */
const SWITCH_LOCALES = ['en', 'sv'] as const satisfies readonly Locale[];

interface LanguageSwitchProps {
  className?: string;
}

/**
 * EN/SV switch: a pill track with two pill links. Each link points to the current page in the
 * other language (same path, same support slug). Links rather than buttons, because switching
 * language is navigation and should also work without JavaScript. The active language is marked
 * with aria-current.
 */
export function LanguageSwitch({ className }: LanguageSwitchProps) {
  const activeLocale = useLocale();
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label="Switch language"
      className={cn(
        'inline-flex rounded-full bg-cloud p-1 forced-color-adjust-none',
        // Windows High Contrast: system colours, the active language as a highlighted pill.
        'forced-colors:border forced-colors:border-[CanvasText] forced-colors:bg-[Canvas]',
        className,
      )}
    >
      {SWITCH_LOCALES.map((locale) => {
        const isActive = locale === activeLocale;
        return (
          <Link
            key={locale}
            href={pathname}
            locale={locale}
            hrefLang={locale}
            lang={locale}
            aria-current={isActive ? 'true' : undefined}
            className={cn(
              // The two pills touch: their hit areas grow in height only, so they never overlap.
              'touch-target inline-flex items-center justify-center rounded-full px-2.5 py-1.5 text-lang transition-colors [--touch-target-width:100%]',
              isActive
                ? 'bg-white text-navy shadow-switch forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]'
                : 'text-ink-muted hover:text-navy forced-colors:text-[LinkText]',
            )}
          >
            <LanguageFlag locale={locale} />
            {/* <span>{labels[locale].short}</span>
            <span className="sr-only"> ({labels[locale].name})</span> */}
          </Link>
        );
      })}
    </div>
  );
}

function LanguageFlag({ locale }: { locale: Locale }) {
  if (locale === 'en') {
    return (
      <svg
        aria-hidden="true"
        className="h-3 w-4 shrink-0 rounded-[1px]"
        focusable="false"
        viewBox="0 0 60 30"
      >
        <path fill="#012169" d="M0 0h60v30H0z" />
        <path fill="#fff" d="M0 0h6.7L60 26.65V30h-6.7L0 3.35zm60 0h-6.7L0 26.65V30h6.7L60 3.35z" />
        <path fill="#c8102e" d="M0 0h2.7L60 27.3V30h-2.7L0 2.7zm60 0h-2.7L0 27.3V30h2.7L60 2.7z" />
        <path fill="#fff" d="M24 0h12v30H24zM0 9h60v12H0z" />
        <path fill="#c8102e" d="M26.4 0h7.2v30h-7.2zM0 11.4h60v7.2H0z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="h-3 w-4 shrink-0 rounded-[1px]"
      focusable="false"
      viewBox="0 0 16 10"
    >
      <path fill="#006aa7" d="M0 0h16v10H0z" />
      <path fill="#fecc00" d="M5.5 0h2v10h-2zM0 4h16v2H0z" />
    </svg>
  );
}
