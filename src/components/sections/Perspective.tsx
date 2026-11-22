import { Section } from '@/components/ui/Section';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SplitHeading } from '@/components/ui/SplitHeading';
import { cn } from '@/lib/cn';
import type { SplitTitle } from '@/types/content';

interface PerspectiveProps {
  content: SplitTitle & { label: string; text: string };
  id: string;

  labelSize: 'sm' | 'lg';
  className?: string;
}

export function Perspective({ content, id, labelSize, className }: PerspectiveProps) {
  return (
    <Section
      labelledBy={id}
      width="inner"
      className={cn('bg-cloud py-20 lg:py-30', className)}
      innerClassName="grid gap-6 xl:grid-cols-[149px_minmax(0,741px)] xl:gap-x-36.75"
    >
      <SectionLabel size={labelSize} tracking="wide" className="text-ink-muted">
        {content.label}
      </SectionLabel>
      <div>
        <SplitHeading
          id={id}
          content={content}
          className="text-h2-xl-snug text-zinc-950"
          accentClassName="text-red"
        />
        <p className="mt-9 max-w-2xl text-body-loose text-ink-muted">{content.text}</p>
      </div>
    </Section>
  );
}
