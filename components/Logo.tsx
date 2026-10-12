import Image from 'next/image';
import { asset } from '@/lib/asset';

/**
 * Official Gartentraum Schröder logo.
 * Use `color` on light surfaces and `white` (knockout) on dark surfaces.
 */
export default function Logo({
  variant = 'color',
  className = '',
  priority = false,
}: {
  variant?: 'color' | 'white';
  className?: string;
  priority?: boolean;
}) {
  const src = variant === 'white' ? '/images/logo-white.png' : '/images/logo.png';
  return (
    <Image
      src={asset(src)}
      alt="Gartentraum Schröder – Garten- & Landschaftsbau Westoverledingen"
      width={481}
      height={243}
      priority={priority}
      className={className}
    />
  );
}
