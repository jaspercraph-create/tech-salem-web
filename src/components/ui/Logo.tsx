import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/cn';

interface LogoProps {
  /** Visible word mark, e.g. "TechSalem". */
  name: string;
  /** Accessible name of the link, e.g. "TechSalem – home". */
  label: string;
  /** light: navy mark + navy text (header). dark: white mark + white text (footer). */
  variant: 'light' | 'dark';
  className?: string;
}

/**
 * TechSalem mark from the spec: a 36x36 square (radius 4px) with two 8x24px bars crossing in the
 * centre (Figma: purple rotated 45deg, red rotated -45deg on top).
 */
export function LogoMark({
  variant = 'light',
  className,
}: {
  variant?: LogoProps['variant'];
  className?: string;
}) {
  const isLight = variant === 'light';

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 36 36"
      aria-hidden="true"
      focusable="false"
      className={cn('size-10 shrink-0', className)}
    >
      <rect width="36" height="36" rx="4" className={isLight ? 'fill-navy' : 'fill-white'} />
      <rect
        x="14"
        y="6"
        width="8"
        height="24"
        transform="rotate(45 18 18)"
        className="fill-purple"
      />
      <rect x="14" y="6" width="8" height="24" transform="rotate(-45 18 18)" className="fill-red" />
    </svg>
  );
}

/**
 * TechSalem logo: the mark, then the word mark with a 10px gap. Links to the home page of the
 * current language.
 */
export function Logo({ name, label, variant, className }: LogoProps) {
  const isLight = variant === 'light';

  return (
    <Link
      href="/"
      aria-label={label}
      className={cn('touch-target inline-flex items-center gap-2.5', className)}
    >
      <LogoMark variant={variant} />
      <span className={cn('text-logo', isLight ? 'text-navy' : 'text-white')}>{name}</span>
    </Link>
  );
}
