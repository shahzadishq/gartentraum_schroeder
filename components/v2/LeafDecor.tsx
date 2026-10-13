import type { SVGProps } from 'react';

// Leaf positions along the branch stem (x, y, rotation in deg).
const leaves: [number, number, number][] = [
  [40, 138, 0],
  [68, 130, 0],
  [96, 122, 0],
  [124, 114, 0],
  [152, 106, 0],
  [180, 98, 0],
  [208, 90, 0],
  [236, 82, 0],
  [264, 74, 0],
];

/**
 * Decorative botanical branch (stroke style) used as a soft watermark
 * behind v2 sections to reinforce the garden theme. Purely decorative.
 */
export function LeafDecor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 320 160"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      aria-hidden
      {...props}
    >
      <path d="M4 150C60 120 120 96 200 78c40-9 78-12 114-12" />
      {leaves.map(([x, y], i) => (
        <g key={i}>
          <path d={`M${x} ${y}c10-18 30-26 46-22-4 18-22 30-46 22z`} />
          <path d={`M${x} ${y}c-6-16-2-34 12-42 10 14 8 34-12 42z`} />
        </g>
      ))}
    </svg>
  );
}

/** A single leaf sprig (stroke style) for small accents. */
export function Sprig(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden
      {...props}
    >
      <path d="M14 56c22-2 34-14 36-36" />
      <path d="M20 44c12-4 22-14 26-30-16 2-28 12-26 30z" />
    </svg>
  );
}
