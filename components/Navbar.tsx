'use client';

import { useEffect, useState } from 'react';
import { navLinks, site } from '@/lib/site';
import Logo from './Logo';
import { PhoneIcon, WhatsAppIcon } from './icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-sand-50/90 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Hauptnavigation"
        className="container-content section-padding flex h-[72px] items-center justify-between lg:h-[88px]"
      >
        <a href="#hero" aria-label="Gartentraum Schröder – Startseite" className="flex items-center">
          <Logo
            priority
            variant={scrolled ? 'color' : 'white'}
            className="h-9 w-auto lg:h-11"
          />
        </a>

        {/* Desktop links */}
        <ul
          className={`hidden items-center gap-8 lg:flex ${
            scrolled ? 'text-forest-800' : 'text-sand-50'
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium transition-colors hover:opacity-80"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              scrolled
                ? 'text-forest-700 hover:bg-brand-50 hover:text-brand-600'
                : 'text-sand-100 hover:bg-sand-50/10'
            }`}
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a
            href={site.phoneHref}
            aria-label="Anrufen"
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              scrolled
                ? 'text-forest-700 hover:bg-brand-50 hover:text-brand-600'
                : 'text-sand-100 hover:bg-sand-50/10'
            }`}
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <a href="#kontakt" className="btn-primary !px-6 !py-3 text-[13px]">
            Kostenlose Beratung
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          className={`relative z-50 flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
            open || scrolled ? 'text-forest-800' : 'text-sand-50'
          } ${open ? '!text-sand-50' : ''}`}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ${
                open ? 'top-1.5 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-6 bg-current transition-all duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ${
                open ? 'top-1.5 -rotate-45' : 'top-3'
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 overflow-y-auto overflow-x-hidden bg-forest-950 transition-opacity duration-300 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="mx-auto flex min-h-full w-full max-w-sm flex-col px-6 pb-12 pt-24">
          <Logo variant="white" className="mb-10 h-9 w-auto self-start" />

          <ul className="w-full">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block w-full border-b border-sand-50/10 py-4 font-serif text-2xl text-sand-50 transition-colors active:text-brand-300 hover:text-brand-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 w-full space-y-3">
            <a href="#kontakt" onClick={() => setOpen(false)} className="btn-primary w-full">
              Kostenlose Beratung anfragen
            </a>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={site.phoneHref}
                onClick={() => setOpen(false)}
                className="btn-ghost-light w-full !px-2"
              >
                <PhoneIcon className="h-4 w-4 shrink-0" /> Anrufen
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-ghost-light w-full !px-2"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
