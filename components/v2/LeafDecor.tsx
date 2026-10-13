import type { SVGProps } from 'react';

/**
 * Decorative botanical leaf, used as a soft watermark behind v2 sections
 * to reinforce the garden theme. Purely decorative (aria-hidden).
 */
export function LeafDecor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden {...props}>
      <path
        d="M100 12C58 30 30 70 30 118c0 38 28 66 70 70 42-4 70-32 70-70 0-48-28-88-70-106Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M100 20v160"
        stroke="#ffffff"
        strokeOpacity="0.35"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {Array.from({ length: 7 }).map((_, i) => {
        const y = 40 + i * 20;
        const spread = 18 + i * 6;
        return (
          <g key={i} stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" strokeLinecap="round">
            <path d={`M100 ${y}c-${spread} 4 -${spread + 8} 16 -${spread + 12} 30`} />
            <path d={`M100 ${y}c${spread} 4 ${spread + 8} 16 ${spread + 12} 30`} />
          </g>
        );
      })}
    </svg>
  );
}

/** A single simple leaf silhouette (for small accents / sprigs). */
export function Sprig(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden {...props}>
      <path
        d="M60 110C40 95 22 78 20 54 18 34 30 18 48 12c6 20 22 30 34 44 12 14 16 34 4 48-10 10-20 8-26 6Z"
        fill="currentColor"
      />
      <path d="M48 16c6 34 8 64 8 92" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
