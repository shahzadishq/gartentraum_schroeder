import Image from 'next/image';
import { asset } from '@/lib/asset';
import { ArrowRightIcon, PhoneIcon, StarIcon } from '@/components/icons';
import { site } from '@/lib/site';
import { LeafDecor, Sprig } from './LeafDecor';

const stats = [
  { value: '5,0★', label: 'Google-Bewertungen' },
  { value: '3D', label: 'Gartenplanung' },
  { value: '100%', label: 'aus einer Hand' },
];

export default function HeroV2() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background image + white overlay */}
      <div className="absolute inset-0">
        <Image
          src={asset('/images/garden-lawn.webp')}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/88" />
        <div className="absolute inset-0 bg-gradient-to-r from-sand-50 via-sand-50/80 to-sand-50/40" />
      </div>

      {/* Decorative branch */}
      <LeafDecor className="pointer-events-none absolute right-6 top-24 hidden h-32 w-64 text-brand-500/25 lg:block" />

      <div className="container-content section-padding relative pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          {/* Text */}
          <div>
            <span className="eyebrow mb-6 text-brand-600">
              <Sprig className="h-4 w-4 text-brand-500" />
              Garten- & Landschaftsbau · Westoverledingen
            </span>

            <h1 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight text-forest-900 sm:text-6xl lg:text-[4.2rem]">
              Ihr Traumgarten
              <br />
              beginnt mit einer{' '}
              <span className="italic text-brand-600">Idee.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-forest-700/80">
              Professioneller Garten- und Landschaftsbau in Westoverledingen –
              von der 3D-Gartenplanung bis zur schlüsselfertigen Umsetzung,
              alles aus einer Hand.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#kontakt" className="btn-primary group">
                Kostenlose Beratung anfragen
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={site.phoneHref}
                className="group inline-flex items-center gap-2 px-1 text-sm font-semibold text-forest-800"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-clay/25 text-clay transition-colors group-hover:bg-clay group-hover:text-sand-50">
                  <PhoneIcon className="h-4 w-4" />
                </span>
                Rufen Sie uns an
              </a>
            </div>

            {/* Stats */}
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-serif text-3xl font-semibold text-clay sm:text-4xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-sm text-forest-700/75">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Two images */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-[6px] border-white shadow-card">
              <Image
                src={asset('/images/hero-grinder.webp')}
                alt="Mitarbeiter von Gartentraum Schröder schneidet einen Pflasterstein mit dem Trennschleifer"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover"
              />
            </div>

            {/* second overlapping image */}
            <div className="absolute -bottom-8 -left-6 h-44 w-36 overflow-hidden rounded-2xl border-[6px] border-white shadow-card sm:h-52 sm:w-44">
              <Image
                src={asset('/images/hero-carry.webp')}
                alt="Mitarbeiter von Gartentraum Schröder trägt einen Pflasterstein auf der Baustelle"
                fill
                sizes="12rem"
                className="object-cover"
              />
            </div>

            {/* floating review badge */}
            <div className="absolute -right-3 top-6 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-card sm:-right-5">
              <span className="flex gap-0.5 text-sand-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5" />
                ))}
              </span>
              <span className="text-xs font-semibold text-forest-800">5,0 · Google</span>
            </div>

            <Sprig className="pointer-events-none absolute -right-4 -bottom-6 h-16 w-16 text-brand-500/70" />
          </div>
        </div>
      </div>
    </section>
  );
}
