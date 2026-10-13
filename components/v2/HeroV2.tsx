import Image from 'next/image';
import { site } from '@/lib/site';
import { asset } from '@/lib/asset';
import { ArrowRightIcon, StarIcon } from '@/components/icons';
import { LeafDecor, Sprig } from './LeafDecor';

export default function HeroV2() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-sand-50 pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28"
    >
      {/* Decorative leaf watermarks */}
      <LeafDecor className="pointer-events-none absolute -right-20 -top-16 h-[34rem] w-[34rem] rotate-12 text-brand-100" />
      <Sprig className="pointer-events-none absolute -left-10 bottom-10 hidden h-48 w-48 -rotate-12 text-brand-200/60 lg:block" />

      <div className="container-content section-padding relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Text */}
          <div>
            <span className="eyebrow mb-6 text-brand-600">
              <Sprig className="h-4 w-4 text-brand-500" />
              Garten- & Landschaftsbau · Westoverledingen
            </span>

            <h1 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight text-forest-900 sm:text-6xl lg:text-[4.4rem]">
              Ihr Traumgarten
              <br />
              beginnt mit einer{' '}
              <span className="italic text-brand-600">Idee.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-forest-700/80">
              Professioneller Garten- und Landschaftsbau in Westoverledingen –
              von der 3D-Gartenplanung bis zur schlüsselfertigen Umsetzung,
              alles aus einer Hand.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#kontakt" className="btn-primary group">
                Kostenlose Beratung anfragen
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#leistungen"
                className="group inline-flex items-center gap-2 px-2 text-sm font-semibold text-forest-800"
              >
                <span className="border-b border-brand-500/40 pb-0.5 transition-colors group-hover:border-brand-500">
                  Unsere Leistungen entdecken
                </span>
                <ArrowRightIcon className="h-4 w-4 text-brand-600 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-10 flex items-center gap-4">
              <span className="flex gap-0.5 text-sand-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5" />
                ))}
              </span>
              <span className="text-sm text-forest-700/80">
                <span className="font-semibold text-forest-900">5,0</span> · echte
                Google&#8209;Bewertungen
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-card">
              <Image
                src={asset('/images/hero.webp')}
                alt="Hochwertig angelegter Garten mit Natursteinterrasse und Rasen"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>

            {/* soft organic blob behind */}
            <div className="absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-[42%_58%_60%_40%/50%_44%_56%_50%] bg-brand-200/50 blur-xl" />

            {/* 3D planning badge */}
            <div className="absolute -left-4 top-8 flex items-center gap-3 rounded-2xl bg-sand-50 p-3 pr-5 shadow-card sm:-left-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-clay font-serif text-lg font-semibold text-sand-50">
                3D
              </span>
              <span className="text-sm leading-tight">
                <span className="block font-semibold text-forest-900">3D-Gartenplanung</span>
                <span className="block text-forest-700/70">Sehen, bevor gebaut wird</span>
              </span>
            </div>

            {/* floating mini review */}
            <div className="absolute -bottom-6 -right-2 w-64 rounded-2xl bg-sand-50 p-5 shadow-card sm:-right-6">
              <span className="flex gap-0.5 text-sand-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </span>
              <p className="mt-2 text-sm leading-snug text-forest-800">
                „Saubere Arbeit, nette Leute – absolut empfehlenswert.“
              </p>
              <p className="mt-2 text-xs font-semibold text-forest-700/70">
                — Google Rezension
              </p>
            </div>

            <Sprig className="pointer-events-none absolute -bottom-10 left-6 h-24 w-24 rotate-[30deg] text-brand-500/70" />
          </div>
        </div>
      </div>
    </section>
  );
}
