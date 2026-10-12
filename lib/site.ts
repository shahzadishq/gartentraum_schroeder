/**
 * Central brand & content configuration for Gartentraum Schröder.
 * Contact details are placeholders – update phone/email when confirmed.
 */

export const site = {
  name: 'Gartentraum Schröder',
  shortName: 'Gartentraum Schröder',
  tagline: 'Garten- & Landschaftsbau',
  location: 'Westoverledingen',
  region: 'Ostfriesland',
  url: 'https://garten-traum-schroeder.de',
  // Placeholder contact details – replace with the real ones.
  phone: '+49 (0) 000 000000',
  phoneHref: 'tel:+490000000000',
  email: 'info@garten-traum-schroeder.de',
  emailHref: 'mailto:info@garten-traum-schroeder.de',
  address: {
    locality: 'Westoverledingen',
    region: 'Niedersachsen',
    country: 'Deutschland',
  },
  social: {
    instagram: 'https://www.instagram.com/gartentraum_schroeder/',
    facebook:
      'https://web.facebook.com/p/Gartentraum-Schr%C3%B6der-100063633340283/',
  },
} as const;

export const navLinks = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Projekte', href: '#projekte' },
  { label: 'Über uns', href: '#warum-wir' },
  { label: 'Bewertungen', href: '#bewertungen' },
] as const;
