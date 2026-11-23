'use server';

import { createHash } from 'node:crypto';
import { updateTag } from 'next/cache';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import {
  adminExists,
  createSession,
  destroySession,
  ensureAdmin,
  findAdminByEmail,
  getAdminSession,
} from '@/lib/auth/session';
import { verifyPassword } from '@/lib/auth/password';
import { listBookings, setBookingStatus } from '@/lib/booking/repository';
import type { BookingStatus } from '@/lib/booking/types';
import { contentKeys } from '@/lib/db/defaults';
import { writePublished } from '@/lib/db/content';
import { allowRequest } from '@/lib/db/rate-limit';
import { routing, type Locale } from '@/i18n/routing';
import type { ContentKey } from '@/types/content';

export type LoginState = { error?: 'invalid' | 'limited' | 'unavailable' };

function isLocale(value: string): value is Locale {
  return (routing.locales as readonly string[]).includes(value);
}

function isContentKey(value: string): value is ContentKey {
  return (contentKeys as readonly string[]).includes(value);
}

const bookingStatuses = ['confirmed', 'cancelled', 'completed'] as const;

function isBookingStatus(value: string): value is BookingStatus {
  return (bookingStatuses as readonly string[]).includes(value);
}

export async function loginAdmin(_state: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get('email') ?? '')
    .trim()
    .toLowerCase();
  const password = String(formData.get('password') ?? '');
  const localeValue = String(formData.get('locale') ?? routing.defaultLocale);
  const locale = isLocale(localeValue) ? localeValue : routing.defaultLocale;

  await ensureAdmin();

  const bucket = `login:${createHash('sha256').update(email).digest('hex').slice(0, 24)}`;
  if (!(await allowRequest(bucket, 8, 15))) return { error: 'limited' };

  const admin = await findAdminByEmail(email);
  if (!admin) {
    return { error: (await adminExists()) ? 'invalid' : 'unavailable' };
  }
  if (!(await verifyPassword(password, admin.passwordHash))) return { error: 'invalid' };

  await createSession(admin.id);
  redirect(`/${locale}/admin`);
}

export async function logoutAdmin(formData: FormData) {
  const localeValue = String(formData.get('locale') ?? routing.defaultLocale);
  const locale = isLocale(localeValue) ? localeValue : routing.defaultLocale;
  await destroySession();
  redirect(`/${locale}/admin`);
}

async function requireAdmin() {
  const session = await getAdminSession();
  return session;
}

export async function saveContentPage(locale: string, key: string, data: unknown) {
  if (!(await requireAdmin())) return { ok: false as const, error: 'unauthorized' as const };
  if (!isLocale(locale) || !isContentKey(key)) {
    return { ok: false as const, error: 'invalid' as const };
  }

  const result = await writePublished(locale, key, data);
  if (!result.ok) return result;

  updateTag('content');
  updateTag(`content:${locale}:${key}`);
  revalidatePath(`/${locale}`, 'layout');
  revalidatePath(`/${locale === 'sv' ? 'en' : 'sv'}`, 'layout');
  return result;
}

export async function updateBookingStatus(id: string, status: string) {
  if (!(await requireAdmin())) return { ok: false as const, error: 'unauthorized' as const };
  if (!isBookingStatus(status) || !/^BK-[A-Z0-9]+$/.test(id)) {
    return { ok: false as const, error: 'invalid' as const };
  }

  const result = await setBookingStatus(id, status);
  if (result === 'conflict') return { ok: false as const, error: 'conflict' as const };
  if (result === 'missing') return { ok: false as const, error: 'invalid' as const };
  return { ok: true as const, bookings: await listBookings() };
}
