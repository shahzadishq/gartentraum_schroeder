import Image from 'next/image';
import { site } from '@/lib/site';
import { asset } from '@/lib/asset';
import { ArrowRightIcon, LeafIcon, CheckIcon, WhatsAppIcon } from './icons';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-sand-50 pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24"
    >
      {/* Decorative organic shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-[32rem] w-[32rem] rounded-full bg-brand-100/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-sand-200/50 blur-3xl"
      />

      <div className="container-content section-padding relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Text column */}
          <div>
            <span className="eyebrow mb-6 animate-fade-up">
              <LeafIcon className="h-4 w-4 text-brand-500" />
              Garten- & Landschaftsbau · Westoverledingen
            </span>

            <h1
              className="heading-serif animate-fade-up text-balance text-5xl sm:text-6xl lg:text-[4.2rem]"
              style={{ animationDelay: '80ms' }}
            >
              Vom Garten zum{' '}
              <span className="relative whitespace-nowrap text-brand-600">
                Traumraum.
                <svg
                  aria-hidden
                  viewBox="0 0 300 12"
                  className="absolute -bottom-2 left-0 w-full text-brand-300"
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
              className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-forest-700/80"
              style={{ animationDelay: '160ms' }}
            >
              Professioneller Garten- und Landschaftsbau in Westoverledingen.
              Von der 3D-Gartenplanung bis zur kompletten Umsetzung – alles aus
              einer Hand.
            </p>

            <div
              className="mt-9 flex animate-fade-up flex-col gap-4 sm:flex-row"
              style={{ animationDelay: '240ms' }}
            >
              <a href="#kontakt" className="btn-primary group">
                Kostenlose Beratung anfragen
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#leistungen" className="btn-secondary">
                Unsere Leistungen entdecken
              </a>
            </div>

            <div
              className="mt-10 flex animate-fade-up flex-wrap gap-x-6 gap-y-3 text-sm text-forest-700/80"
              style={{ animationDelay: '320ms' }}
            >
              {['3D-Gartenplanung', 'Alles aus einer Hand', 'Regional in Ostfriesland'].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Image column */}
          <div className="relative animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="relative aspect-[5/6] overflow-hidden rounded-[2rem] shadow-card sm:aspect-[4/5]">
              <Image
                src={asset('/images/pool.jpg')}
                alt="Moderne Poolanlage mit Terrasse und Bepflanzung – realisiert von Gartentraum Schröder"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/25 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl bg-sand-50 p-4 pr-5 shadow-card sm:-left-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 font-serif text-lg font-semibold text-white">
                3D
              </span>
              <span className="text-sm leading-tight">
                <span className="block font-semibold text-forest-900">
                  3D-Gartenplanung
                </span>
                <span className="block text-forest-700/70">
                  Sehen, bevor gebaut wird
                </span>
              </span>
            </div>

            {/* WhatsApp quick action */}
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group absolute -right-2 top-6 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-card transition-transform hover:-translate-y-0.5 sm:-right-5"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
