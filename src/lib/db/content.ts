import 'server-only';

import { persistImages } from '@/lib/db/images';
import { matchesShape } from '@/lib/db/shape';
import { contentJson, defaultContent } from '@/lib/db/defaults';
import { prisma } from '@/lib/db/prisma';
import { seedContent } from '@/lib/db/seed';
import type { Locale } from '@/i18n/routing';
import type { ContentKey, LocaleContent } from '@/types/content';

export async function readPublished<K extends ContentKey>(
  locale: Locale,
  key: K,
): Promise<LocaleContent[K]> {
  const fallback = defaultContent[locale][key];
  await seedContent();
  const row = await prisma.contentDocument.findUnique({
    where: { locale_key: { locale, key } },
  });
  if (!row || !matchesShape(fallback, row.data, key)) return fallback;
  return row.data as unknown as LocaleContent[K];
}

export async function writePublished<K extends ContentKey>(
  locale: Locale,
  key: K,
  value: unknown,
): Promise<{ ok: true; data: LocaleContent[K] } | { ok: false; error: 'invalid' }> {
  const fallback = defaultContent[locale][key];
  if (!matchesShape(fallback, value, key)) return { ok: false, error: 'invalid' };
  const stored = await persistImages(value);
  if (!matchesShape(fallback, stored, key)) return { ok: false, error: 'invalid' };
  const data = contentJson(stored);
  await prisma.contentDocument.upsert({
    where: { locale_key: { locale, key } },
    create: { locale, key, data },
    update: { data },
  });
  return { ok: true, data: stored as LocaleContent[K] };
}
