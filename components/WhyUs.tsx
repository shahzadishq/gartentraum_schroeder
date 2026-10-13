import Image from 'next/image';
import Reveal from './Reveal';
import Parallax from './Parallax';
import { asset } from '@/lib/asset';
import {
  MapPinIcon,
  LeafIcon,
  CubeIcon,
  SproutIcon,
  CheckIcon,
  DeckIcon,
} from './icons';

const reasons = [
  {
    icon: MapPinIcon,
    title: 'Regionaler Ansprechpartner',
    text: 'Fest verwurzelt in Westoverledingen und Ostfriesland – kurze Wege, persönlicher Kontakt.',
  },
  {
    icon: LeafIcon,
    title: 'Alles aus einer Hand',
    text: 'Von Beratung und Planung bis zur Umsetzung und Pflege – ein Ansprechpartner für alles.',
  },
  {
    icon: SproutIcon,
    title: 'Kreative Gartenkonzepte',
    text: 'Individuelle Ideen statt Schema F – abgestimmt auf Sie, Ihr Grundstück und Ihren Stil.',
  },
  {
    icon: CubeIcon,
    title: 'Moderne Planungstechnologie',
    text: 'Professionelle 3D-Gartenplanung – eine Besonderheit unter den GaLaBauern der Region.',
  },
  {
    icon: DeckIcon,
    title: 'Hochwertige Umsetzung',
    text: 'Sauberes Handwerk, langlebige Materialien und ein Blick fürs Detail.',
  },
  {
    icon: CheckIcon,
    title: 'Leidenschaft für Außenräume',
    text: 'Wir lieben, was wir tun – und das sieht man jedem fertigen Projekt an.',
  },
];

export default function WhyUs() {
  return (
    <section id="warum-wir" className="relative overflow-hidden bg-clay py-24 lg:py-32">
      {/* Decorative blurred shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-bark/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-black/20 blur-3xl"
      />

      <div className="container-content section-padding relative">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow mb-5 text-brand-300">Warum Gartentraum Schröder?</span>
            <h2 className="heading-serif text-4xl text-sand-50 sm:text-5xl">
              Ihr Garten in besten Händen
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-sand-200/80">
              Wir verbinden handwerkliche Erfahrung mit moderner Planung und
              echter Leidenschaft für Außenräume. Das Ergebnis: Gärten, in denen
              man sich zuhause fühlt.
            </p>
            <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-[2rem] shadow-card">
              <Parallax speed={20} className="absolute inset-x-0 -inset-y-10">
                <Image
                  src={asset('/images/team-portrait.webp')}
                  alt="Mitarbeiter von Gartentraum Schröder mit frischem Rollrasen – Handwerk mit Leidenschaft"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </Parallax>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-5 sm:grid-cols-2">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={reason.title}
                    className="group moving-border relative rounded-2xl border border-sand-50/15 bg-black/15 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:bg-black/25 hover:shadow-card"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/20 text-sand-100 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-300 group-hover:text-[#1d2e22]">
                      <Icon className="h-6 w-6 transition-transform duration-700 ease-out group-hover:rotate-[360deg]" />
                    </span>
                    <h3 className="mt-4 font-serif text-lg font-medium text-sand-50">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-sand-200/75">
                      {reason.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
