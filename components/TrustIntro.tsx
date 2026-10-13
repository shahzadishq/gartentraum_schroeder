import Image from 'next/image';
import Reveal from './Reveal';
import Parallax from './Parallax';
import { asset } from '@/lib/asset';
import { CheckIcon } from './icons';

const trustPoints = [
  'Persönliche Beratung',
  'Professionelle 3D-Gartenplanung',
  'Komplettlösungen aus einer Hand',
  'Qualität vom ersten Entwurf bis zur Umsetzung',
];

export default function TrustIntro() {
  return (
    <section id="intro" className="relative bg-sand-50 py-24 lg:py-32">
      <div className="container-content section-padding">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image collage */}
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-card">
              <Parallax speed={28} className="absolute inset-x-0 -inset-y-10">
                <Image
                  src={asset('/images/team-portrait.webp')}
                  alt="Mitarbeiter von Gartentraum Schröder mit frischem Rollrasen"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </Parallax>
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-2 w-48 rounded-2xl bg-clay p-6 text-sand-50 shadow-card sm:-right-6">
              <p className="font-serif text-4xl font-semibold">3D</p>
              <p className="mt-1 text-sm leading-snug text-sand-200">
                Gartenplanung – Ihr Garten sichtbar, bevor gebaut wird.
              </p>
            </div>
            {/* Decorative leaf accent */}
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-forest-100/60 blur-2xl" />
          </Reveal>

          {/* Text */}
          <Reveal delay={120}>
            <span className="eyebrow mb-5">Gartentraum Schröder</span>
            <h2 className="heading-serif text-4xl sm:text-5xl">
              Gartenträume entstehen nicht zufällig.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-forest-700/80">
              Als regionaler Garten- und Landschaftsbaubetrieb in
              Westoverledingen begleiten wir Sie von der ersten Idee bis zum
              fertigen Traumgarten. Wir gehören zu den wenigen GaLaBauern der
              Region, die eine professionelle 3D-Gartenplanung anbieten – so
              sehen Sie Ihren neuen Außenbereich, bevor der erste Spatenstich
              erfolgt.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-forest-700/80">
              Ob Neubau oder Modernisierung, privat, gewerblich oder
              öffentlich: Wir entwickeln individuelle Lösungen und setzen sie
              zuverlässig und in höchster Qualität um.
            </p>

            <ul className="mt-9 grid gap-4 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-forest-800"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-700">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
