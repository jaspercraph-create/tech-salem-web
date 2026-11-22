import { getLocale } from 'next-intl/server';

import { CtaBanner } from '@/components/sections/CtaBanner';
import { HomeAbout } from '@/components/sections/home/HomeAbout';
import { HomeHero } from '@/components/sections/home/HomeHero';
import { HomeServices } from '@/components/sections/home/HomeServices';
import { HomeSupport } from '@/components/sections/home/HomeSupport';
import { HomeWhy } from '@/components/sections/home/HomeWhy';
import { getContent } from '@/content';
import { getPageMetadata } from '@/lib/metadata';

export function generateMetadata() {
  return getPageMetadata('home');
}

export default async function HomePage() {
  const locale = await getLocale();
  const home = await getContent(locale, 'home');

  return (
    <>
      <HomeHero content={home.hero} />
      <HomeServices content={home.services} />
      <HomeAbout content={home.about} />
      <HomeWhy content={home.why} />
      {/* <HomeSupport content={home.support} /> */}
      <CtaBanner content={home.cta} id="home-cta-title" />
    </>
  );
}
