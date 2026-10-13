import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import type { CSSProperties } from 'react';

const fontOverride = { '--font-heading': 'var(--font-pf)' } as CSSProperties;

// v2 uses Playfair Display for all headings. We load it here and override
// the shared --font-heading variable for this route subtree only, so every
// `font-serif` heading (new and reused components) renders in Playfair on
// /v2, while the main site keeps its own heading font.
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-pf',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gartentraum Schröder – Design v2',
  description:
    'Alternatives Design (v2) für Gartentraum Schröder – Garten- & Landschaftsbau Westoverledingen.',
  robots: { index: false, follow: false },
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={playfair.variable} style={fontOverride}>
      {children}
    </div>
  );
}
