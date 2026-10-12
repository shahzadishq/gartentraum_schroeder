'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/site';
import { WhatsAppIcon } from './icons';

/** Floating WhatsApp action button that slides in after the hero. */
export default function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Kontakt über WhatsApp"
      className={`fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition-all duration-500 hover:-translate-y-0.5 sm:bottom-8 sm:right-8 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 motion-safe:animate-ping" aria-hidden />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
