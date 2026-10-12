import type { SVGProps } from 'react';

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
};

export function LeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M11 20A7 7 0 0 1 4 13c0-4 2-7 7-9 2.5 4 5 5 7 7a7 7 0 0 1-7 9Z" />
      <path d="M11 20c0-4 1-7 5-10" />
    </svg>
  );
}

export function CubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
      <path d="M3 7l9 5 9-5" />
      <path d="M12 12v10" />
    </svg>
  );
}

export function TreeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 22v-6" />
      <path d="M12 16a5 5 0 0 1-5-5 4 4 0 0 1 1.3-3A4 4 0 0 1 12 4a4 4 0 0 1 3.7 4A4 4 0 0 1 17 11a5 5 0 0 1-5 5Z" />
    </svg>
  );
}

export function PathIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M8 22c0-5 1-8 2-10s2-5 2-9" />
      <path d="M16 22c0-5-1-8-2-10" />
      <rect x="4" y="3" width="6" height="4" rx="1" />
      <rect x="14" y="9" width="6" height="4" rx="1" />
    </svg>
  );
}

export function PoolIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M2 18c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1" />
      <path d="M2 22c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1" />
      <path d="M7 14V5a2 2 0 0 1 4 0" />
      <path d="M11 9h3" />
    </svg>
  );
}

export function DeckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 10l9-6 9 6" />
      <path d="M5 9v11" />
      <path d="M19 9v11" />
      <path d="M5 14h14" />
      <path d="M5 20h14" />
    </svg>
  );
}

export function SproutIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 22V9" />
      <path d="M12 12C9 12 7 10 7 7c3 0 5 2 5 5Z" />
      <path d="M12 10c0-3 2-5 5-5 0 3-2 5-5 5Z" />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 18.9 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L17 12l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M14 8.5V7c0-1 .5-1.5 1.5-1.5H17V2.5h-2.5C12 2.5 10.5 4 10.5 6.5v2H8v3h2.5V22h3.5v-10.5H16l.5-3H14Z" />
    </svg>
  );
}

export function QuoteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9 7H5a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2v1a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V8a1 1 0 0 0-1-1Zm11 0h-4a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2v1a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V8a1 1 0 0 0-1-1Z" />
    </svg>
  );
}
