/**
 * Content types. All visible text, links and images come from typed content (src/content), so a
 * CMS can replace the content source later without touching components.
 */

import type { supportSlugs } from '@/content/shared';
import type { IconName } from '@/types/icons';

/** Slug of a support page, e.g. 'support-01'. The list lives in src/content/shared.ts. */
export type SupportSlug = (typeof supportSlugs)[number];

/** Internal routes. The locale prefix is added by the locale-aware Link from src/i18n. */
export type InternalPath =
  | '/'
  | '/about'
  | '/services'
  | `/support/${SupportSlug}`
  | '/contact'
  | '/booking'
  | '/privacy-policy'
  | '/cookie-policy';

/** External targets. '#' is only for links whose real URL is not known yet. */
export type ExternalHref = `https://${string}` | `mailto:${string}` | `tel:${string}` | '#';

export type Href = InternalPath | ExternalHref;

/** A link or button that navigates somewhere. */
export interface LinkItem {
  label: string;
  href: Href;
  /** Open in a new tab (external links such as social media). */
  openInNewTab?: boolean;
}

/** A link that must stay inside the site (navigation, buttons). */
export interface InternalLinkItem extends LinkItem {
  href: InternalPath;
}

/** A section on the same page, e.g. '#lets-talk' (the id of the target section). */
export type AnchorHref = `#${string}`;

/** A button target: another page of the site, or a section on the same page. */
export interface ActionLinkItem {
  label: string;
  href: InternalPath | AnchorHref;
}

/** A designed image in public/images, or an upload stored in Supabase Storage. */
export interface ImageAsset {
  src: `/images/${string}` | `https://${string}`;
  alt: string;
  width: number;
  height: number;
  /** object-position below `lg` (phones/tablets), e.g. '68% 30%' to keep the subject in view. */
  focalPoint?: string;
}

/** Page metadata. The title is shown as "<title> | <siteName>" unless `absoluteTitle` is set. */
export interface PageMeta {
  title: string;
  /** Use `title` as the full browser title, without the " | <siteName>" suffix. */
  absoluteTitle?: boolean;
  /** Not in the design yet for most pages: add when the client provides it. */
  description?: string;
  /** Open Graph / social sharing image. */
  image?: ImageAsset;
}

/** Fixed-length lists: both languages must have the same number of items. */
export type Tuple2<T> = [T, T];
export type Tuple3<T> = [T, T, T];
export type Tuple4<T> = [T, T, T, T];
export type Tuple6<T> = [T, T, T, T, T, T];
export type Tuple7<T> = [T, T, T, T, T, T, T];

/** A heading whose last part has another colour; rendered as one heading. */
export interface SplitTitle {
  title: string;
  titleAccent: string;
}

/** Inner-page hero (About, Services, Support, Contact, Booking). */
export interface PageHeroContent {
  eyebrow: string;
  title: string;
  text: string;
  image: ImageAsset;
  primaryCta: ActionLinkItem;
  secondaryCta?: ActionLinkItem;
}

/** "04 / Contact" strip, shared by About and Services. */
export interface ContactStripContent extends SplitTitle {
  label: string;
  /** Each row is a full-width link: `label` on the left, `link.label` (the value) on the right. */
  rows: Tuple3<{ label: string; link: LinkItem }>;
}

/** Reusable call-to-action banner (Home "Let's build what's next"). */
export interface CtaBannerContent {
  title: string;
  text: string;
  button: InternalLinkItem;
}

/** Shared content for the header and footer. */
export interface SiteSettings {
  siteName: string;
  navigation: {
    home: InternalLinkItem;
    about: InternalLinkItem;
    services: InternalLinkItem;
    support: InternalLinkItem;
    contact: InternalLinkItem;
  };
  header: {
    cta: InternalLinkItem;
    supportCta: InternalLinkItem;
  };
  footer: {
    tagline: string;
    quickLinks: {
      heading: string;
      links: {
        home: LinkItem;
        about: LinkItem;
        services: LinkItem;
        support: LinkItem;
      };
    };
    support: {
      heading: string;
      links: {
        supportPage1: LinkItem;
        supportPage2: LinkItem;
        privacy: LinkItem;
        cookies: LinkItem;
      };
    };
    connect: {
      heading: string;
      links: {
        linkedin: LinkItem;
        facebook: LinkItem;
        infoEmail: LinkItem;
        supportEmail: LinkItem;
      };
    };
    /** Written out (not calculated) so the client can edit the year. */
    copyright: string;
    slogan: string;
  };
}

export interface HomePageContent {
  meta: PageMeta;
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    image: ImageAsset;
    primaryCta: InternalLinkItem;
    secondaryCta: InternalLinkItem;
  };
  services: {
    eyebrow: string;
    title: string;
    text: string;
    cards: Tuple4<{
      icon: IconName;
      title: string;
      text: string;
      areaLabel?: string;
      link?: InternalLinkItem;
    }>;
  };
  about: {
    image: ImageAsset;
    badge: { label: string; text: string };
    eyebrow: string;
    title: string;
    paragraphs: Tuple2<string>;
    link: InternalLinkItem;
  };
  why: {
    eyebrow: string;
    title: string;
    items: Tuple4<{ title: string; text: string }>;
  };
  support: {
    eyebrow: string;
    title: string;
    image: ImageAsset;
    cards: Tuple2<{ icon: IconName; title: string; text: string; link: InternalLinkItem }>;
  };
  cta: CtaBannerContent;
  roles: {
    title: string;
    items: readonly [
      { title: string },
      { title: string },
      { title: string },
      { title: string },
      { title: string },
      { title: string },
      { title: string },
      { title: string },
    ];
  };
}
export interface AboutPageContent {
  meta: PageMeta;
  hero: PageHeroContent;
  perspective: SplitTitle & { label: string; text: string };
  stat: { image: ImageAsset; value: string; label: string };
  values: { label: string; items: Tuple3<{ title: string; text: string }> };
  capabilities: SplitTitle & {
    label: string;
    text: string;
    items: Tuple6<{ title: string; text: string }>;
  };
  quote: { image: ImageAsset; label: string; text: string; source: string };
}
/** Colour scheme of a services card (from content, so a CMS can reorder or restyle cards). */
export type ServiceCardTone = 'navy' | 'lavender' | 'red';

export interface ServicesPageContent {
  meta: PageMeta;
  hero: PageHeroContent;
  perspective: SplitTitle & { label: string; text: string };
  services: {
    /** Small label above each card title ("Consulting area"). */
    areaLabel: string;
    items: Tuple3<{ title: string; text: string; tone: ServiceCardTone }>;
    imageCard: { image: ImageAsset; text: string };
  };
  process: {
    label: string;
    title: string;
    text: string;
    steps: Tuple3<{ title: string; text: string }>;
  };
  next: { label: string; title: string; text: string; link: InternalLinkItem };
}
/** Colour of a support path card (from content). */
/** One support page. All support pages share one template; only the content differs. */
export interface SupportPageContent {
  meta: PageMeta;
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    image: ImageAsset;
  };
  services: {
    label: string;
    title: string;
    text: string;
    items: Tuple7<{ title: string; text: string; price: string; link: InternalLinkItem }>;
  };
  cta: {
    title: string;
    text: string;
    button: InternalLinkItem;
  };
}
export interface ContactPageContent {
  meta: PageMeta;
  hero: PageHeroContent;
  talk: {
    label: string;
    title: string;
    text: string;
    /** Full-row links: small `label` above the value (`link.label`). */
    links: Tuple2<{ label: string; link: LinkItem }>;
  };
  direct: {
    image: ImageAsset;
    label: string;
    title: string;
    text: string;
    facts: Tuple2<{ label: string; value: string }>;
  };
  steps: { label: string; items: Tuple3<string> };
}
/**
 * Booking form texts. Placeholders in braces are filled in by the form:
 * {email} (site email, or the customer's email in success.text), {weekday}, {date}, {time}.
 */
export interface BookingFormContent {
  /** "Available times · UTC" (keep the time zone in sync with src/lib/booking/config.ts). */
  slotsLabel: string;
  /** Screen-reader text while the times load. */
  loading: string;
  fields: { name: string; email: string; company: string; message: string };
  /** Label of the hidden honeypot field (never shown). */
  honeypotLabel: string;
  submit: string;
  sending: string;
  /** Accessible name of a slot: "{weekday} {date} at {time}". */
  slotAria: string;
  slotUnavailable: string;
  chooseTimeHint: string;
  errors: { slot: string; name: string; email: string; tooLong: string; submit: string };
  success: { title: string; text: string; again: string };
  /** Shown instead of the slot grid when there are no available times. */
  empty: string;
  /** "By booking, you agree to our" + link + "." */
  privacyNote: { before: string; link: InternalLinkItem; after: string };
}

export interface BookingPageContent {
  meta: PageMeta;
  hero: PageHeroContent;
  intro: {
    label: string;
    title: string;
    text: string;
    facts: Tuple3<{ label: string; value: string }>;
  };
  form: BookingFormContent;
}
/** Text with optional inline links, e.g. ['Read our ', { label: 'cookie policy', href: '/cookie-policy' }, '.']. */
export type RichText = string | readonly (string | LinkItem)[];

/** Building blocks of a text page (no raw HTML, so a CMS can take it over). */
export type ProseBlock =
  | { type: 'paragraph'; text: RichText }
  | { type: 'subheading'; text: string }
  | { type: 'list'; items: readonly RichText[] }
  | {
      type: 'table';
      /** Accessible name of the table (read by screen readers). */
      caption: string;
      columns: readonly string[];
      rows: readonly (readonly string[])[];
    };

export interface ProseSection {
  /** Anchor id for the contents list, e.g. 'your-rights'. */
  id: string;
  heading: string;
  blocks: readonly ProseBlock[];
}

/** Compact page header for text pages (Privacy, Cookies, 404). */
export interface SimplePageHeaderContent {
  eyebrow: string;
  title: string;
  /** Optional short line under the title, e.g. "Last updated: …". */
  text?: string;
}

/** Privacy policy, cookie policy and future text pages. */
export interface LegalPageContent {
  meta: PageMeta;
  header: SimplePageHeaderContent;
  /** Heading of the contents list ("Contents"). */
  contentsLabel: string;
  sections: readonly ProseSection[];
}

export type PrivacyPolicyPageContent = LegalPageContent;
export type CookiePolicyPageContent = LegalPageContent;

export interface NotFoundPageContent {
  meta: PageMeta;
  header: SimplePageHeaderContent;
  actions: { home: InternalLinkItem; contact: InternalLinkItem };
}

/** All content for one locale. Every locale must match this shape exactly. */
export interface LocaleContent {
  site: SiteSettings;
  contactStrip: ContactStripContent;
  home: HomePageContent;
  about: AboutPageContent;
  services: ServicesPageContent;
  /** Keyed by slug, so every language must provide every support page. */
  supportPages: Record<SupportSlug, SupportPageContent>;
  contact: ContactPageContent;
  booking: BookingPageContent;
  privacyPolicy: PrivacyPolicyPageContent;
  cookiePolicy: CookiePolicyPageContent;
  notFound: NotFoundPageContent;
}

export type ContentKey = keyof LocaleContent;

/** Keys of single pages (have page metadata). Support pages are looked up by slug instead. */
export type PageKey = Exclude<ContentKey, 'site' | 'contactStrip' | 'supportPages'>;
