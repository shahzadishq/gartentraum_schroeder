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

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.78-1.31l-.34-.2-3.55.93.95-3.46-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.18 4.22-9.4 9.42-9.4 2.52 0 4.88.98 6.66 2.76a9.34 9.34 0 0 1 2.76 6.65c0 5.18-4.22 9.4-9.41 9.4Zm8-17.4A11.32 11.32 0 0 0 12.04 1C5.8 1 .73 6.07.73 12.3c0 1.99.52 3.93 1.51 5.64L.63 23.7l5.9-1.55a11.3 11.3 0 0 0 5.4 1.38h.01c6.24 0 11.31-5.07 11.31-11.3 0-3.02-1.18-5.86-3.2-8Z" />
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
