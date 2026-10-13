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
  phone: '+49 15562 320387',
  phoneHref: 'tel:+4915562320387',
  whatsapp: '+49 1525 5829796',
  whatsappHref: 'https://wa.me/4915255829796',
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
  // Opens the Google listing where customers can leave a review.
  googleReviewHref:
    'https://www.google.com/maps/search/?api=1&query=Gartentraum+Schr%C3%B6der+Westoverledingen',
} as const;

export const navLinks = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Projekte', href: '#projekte' },
  { label: 'Über uns', href: '#warum-wir' },
  { label: 'Bewertungen', href: '#bewertungen' },
] as const;
