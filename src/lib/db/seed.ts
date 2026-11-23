import 'server-only';

import { contentJson, contentKeys, defaultContent } from '@/lib/db/defaults';
import { prisma } from '@/lib/db/prisma';

let seeded: Promise<void> | null = null;

/** Insert the typed content files the first time the database is empty. Later edits stay. */
export function seedContent(): Promise<void> {
  seeded ??= seedContentOnce();
  return seeded;
}

async function seedContentOnce(): Promise<void> {
  const existing = await prisma.contentDocument.findMany({
    select: { locale: true, key: true },
  });
  const existingKeys = new Set(existing.map((row) => `${row.locale}:${row.key}`));
  const missing = (['sv', 'en'] as const).flatMap((locale) =>
    contentKeys
      .filter((key) => !existingKeys.has(`${locale}:${key}`))
      .map((key) => ({
        locale,
        key,
        data: contentJson(defaultContent[locale][key]),
      })),
  );

  if (missing.length > 0) {
    await prisma.contentDocument.createMany({ data: missing });
  }
}
