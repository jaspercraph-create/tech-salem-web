import { cacheLife, cacheTag } from 'next/cache';

import type { Locale } from '@/i18n/routing';
import { readPublished } from '@/lib/db/content';
import type { ContentKey, LocaleContent } from '@/types/content';

/**
 * Published content for the public site. Supabase/PostgreSQL is the live source; the files in
 * src/content seed missing documents but never replace an existing published database document.
 * Every request reads the published value so an admin save is visible immediately.
 */
export async function getContent<K extends ContentKey>(
  locale: Locale,
  key: K,
): Promise<LocaleContent[K]> {
  'use cache';
  cacheLife('max');
  cacheTag('content', `content:${locale}:${key}`);
  return await readPublished(locale, key);
}
