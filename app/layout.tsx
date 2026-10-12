import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { site } from '@/lib/site';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      'Gartentraum Schröder | Garten- & Landschaftsbau Westoverledingen',
    template: '%s | Gartentraum Schröder',
  },
  description:
    'Professioneller Garten- und Landschaftsbau in Westoverledingen. Von der 3D-Gartenplanung über Pflasterarbeiten und Poolbau bis zur kompletten Umsetzung – Ihr Traumgarten aus einer Hand.',
  keywords: [
    'Gartenbau Westoverledingen',
    'Garten Landschaftsbau Westoverledingen',
    '3D Gartenplanung Ostfriesland',
    'Poolbau Westoverledingen',
    'Gartengestaltung Ostfriesland',
    'GaLaBau Westoverledingen',
    'Pflasterarbeiten Ostfriesland',
    'Terrassenbau Westoverledingen',
  ],
  authors: [{ name: 'Gartentraum Schröder' }],
  creator: 'Gartentraum Schröder',
  publisher: 'Gartentraum Schröder',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: site.url,
    siteName: 'Gartentraum Schröder',
    title:
      'Gartentraum Schröder | Garten- & Landschaftsbau Westoverledingen',
    description:
      'Ihr Traumgarten aus einer Hand – professionelle 3D-Gartenplanung, Landschaftsbau, Pflasterarbeiten und Poolbau in Westoverledingen & Ostfriesland.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Moderner, professionell angelegter Garten von Gartentraum Schröder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Gartentraum Schröder | Garten- & Landschaftsbau Westoverledingen',
    description:
      'Ihr Traumgarten aus einer Hand – 3D-Gartenplanung, Landschaftsbau, Pflasterarbeiten & Poolbau in Westoverledingen.',
    images: [
      'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Garten- & Landschaftsbau',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': site.url,
  name: 'Gartentraum Schröder',
  image:
    'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=80',
  url: site.url,
  telephone: site.phone,
  description:
    'Garten- & Landschaftsbau in Westoverledingen. Professionelle 3D-Gartenplanung, Pflasterarbeiten, Poolbau und komplette Gartenanlagen – alles aus einer Hand.',
  areaServed: ['Westoverledingen', 'Ostfriesland', 'Leer'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: 'DE',
  },
  sameAs: [site.social.instagram, site.social.facebook],
  knowsAbout: [
    'Gartenplanung',
    '3D-Gartenplanung',
    'Landschaftsbau',
    'Pflasterarbeiten',
    'Poolbau',
    'Terrassenbau',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#hauptinhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest-800 focus:px-5 focus:py-2 focus:text-sm focus:text-sand-50"
        >
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
