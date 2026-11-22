import { ArrowLink } from '@/components/ui/ArrowLink';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Icon } from '@/components/ui/Icon';
import { Section } from '@/components/ui/Section';

import type { HomePageContent } from '@/types/content';

interface HomeServicesProps {
  content: HomePageContent['services'];
}

/**
 * Home "Services" (spec: "Frame 2147240630"). Cloud background, 120px vertical padding, 64px
 * between the heading block and the cards. This section uses Inter.
 * Cards: 326x296 at 1600px with 13px gaps; the row is 1342px wide, 11px wider than the
 * content column on each side, exactly as in the spec.
 */
export function HomeServices({ content }: HomeServicesProps) {
  return (
    <Section labelledBy="home-services-title" className="bg-cloud py-20 font-inter lg:py-30">
      {/* No 672px limit on the heading: in Inter it needs 672.4px on one line (Figma rounds to 672). */}
      <div className="mx-auto flex flex-col items-center text-center">
        <Eyebrow font="inter" withLine className="text-purple">
          {content.eyebrow}
        </Eyebrow>
        {/* 20px: 8px gap + 12px heading margin in the spec. */}
        <h2 id="home-services-title" className="mt-5 text-inter-h2 text-navy">
          {content.title}
        </h2>
        <p className="mt-4 max-w-147.75 text-inter-lead text-ink-soft">{content.text}</p>
      </div>

      <ul
        data-reveal
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:-mx-2.75 lg:mt-16 lg:grid-cols-4"
      >
        {content.cards.map((card, index) => {
          const tones = ['bg-purple', 'bg-navy', 'bg-charcoal', 'bg-warm'];
          const tone = tones[index] ?? 'bg-navy';

          return (
            <li
              key={card.title}
              className={`group hover:shadow-lg flex min-h-72 flex-col justify-between rounded-lg p-6 text-white transition-all hover:-translate-y-1 ${tone}`}
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white">
                  <Icon name={card.icon} className="size-5" />
                </span>
                <span aria-hidden="true" className="text-inter-caption font-semibold text-white/50">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div>
                {card.areaLabel ? (
                  <p className="mb-3 text-inter-caption font-semibold tracking-caps-13 text-white/75 uppercase">
                    {card.areaLabel}
                  </p>
                ) : null}
                <h3 className="text-inter-title text-white">{card.title}</h3>
                <p className="mt-3 text-inter-body text-white/75">{card.text}</p>
                {card.link ? (
                  <ArrowLink
                    link={card.link}
                    icon="arrow-up-right"
                    className="mt-5 flex w-fit gap-1 text-white"
                  />
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
