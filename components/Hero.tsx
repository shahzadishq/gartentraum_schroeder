import Image from 'next/image';
import { asset } from '@/lib/asset';
import { ArrowRightIcon, LeafIcon } from './icons';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={asset('/images/hero.webp')}
          alt="Hochwertig angelegter Garten mit Natursteinterrasse und gepflegtem Rasen von Gartentraum Schröder"
          fill
          priority
          sizes="100vw"
          className="animate-slow-zoom object-cover object-center"
        />
        {/* Strong left-to-right dark overlay keeps the left-aligned text legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/70 via-forest-950/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-forest-950/25" />
      </div>

      {/* Content */}
      <div className="container-content section-padding relative z-10 pt-32 pb-24">
        <div className="max-w-2xl">
          <span className="eyebrow mb-6 animate-fade-up text-brand-300">
            <LeafIcon className="h-4 w-4" />
            Garten- & Landschaftsbau · Westoverledingen
          </span>

          <h1
            className="heading-serif hero-text-shadow animate-fade-up text-balance text-5xl text-sand-50 sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '80ms' }}
          >
            Vom Garten zum{' '}
            <span className="relative whitespace-nowrap text-brand-300">
              Traumraum.
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                className="hero-underline absolute -bottom-2 left-0 w-full text-brand-400"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C60 3 120 3 180 6s90 3 118 0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p
            className="mt-8 max-w-xl animate-fade-up text-lg leading-relaxed text-sand-100/90 hero-text-shadow"
            style={{ animationDelay: '160ms' }}
          >
            Professioneller Garten- und Landschaftsbau in Westoverledingen. Von
            der 3D-Gartenplanung bis zur kompletten Umsetzung – alles aus einer
            Hand.
          </p>

          <div
            className="mt-10 flex animate-fade-up flex-col gap-4 sm:flex-row"
            style={{ animationDelay: '240ms' }}
          >
            <a href="#kontakt" className="btn-light group">
              Kostenlose Beratung anfragen
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#leistungen" className="btn-ghost-light">
              Unsere Leistungen entdecken
            </a>
          </div>

          <div
            className="mt-14 flex animate-fade-up flex-wrap items-center gap-x-8 gap-y-4 text-sm text-sand-100/80"
            style={{ animationDelay: '320ms' }}
          >
            {['3D-Gartenplanung', 'Alles aus einer Hand', 'Regional in Ostfriesland'].map(
              (item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#intro"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-sand-100/70 transition-colors hover:text-sand-50 lg:flex"
        aria-label="Weiter scrollen"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-sand-100/40 p-1.5">
          <span className="h-2 w-1 animate-float rounded-full bg-sand-100/70" />
        </span>
      </a>
    </section>
  );
}
