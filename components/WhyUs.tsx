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
    <section id="warum-wir" className="relative overflow-hidden bg-forest-900 py-24 lg:py-32">
      {/* Decorative blurred shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-forest-700/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-forest-800/50 blur-3xl"
      />

      <div className="container-content section-padding relative">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow mb-5 text-forest-300">Warum Gartentraum Schröder?</span>
            <h2 className="heading-serif text-4xl text-sand-50 sm:text-5xl">
              Gründe, uns Ihren Garten anzuvertrauen
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-sand-200/80">
              Wir verbinden handwerkliche Erfahrung mit moderner Planung und
              echter Leidenschaft für Außenräume. Das Ergebnis: Gärten, in denen
              man sich zuhause fühlt.
            </p>
            <div className="relative mt-10 aspect-[16/11] overflow-hidden rounded-[2rem] shadow-card">
              <Parallax speed={26} className="absolute inset-x-0 -inset-y-10">
                <Image
                  src={asset('/images/garden-lawn.webp')}
                  alt="Gepflegter Garten mit Rasen, Hecke und Terrasse – umgesetzt von Gartentraum Schröder"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
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
                    className="rounded-2xl border border-sand-50/10 bg-forest-800/40 p-6 transition-all duration-500 hover:border-forest-400/40 hover:bg-forest-800/70"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-700/60 text-forest-200">
                      <Icon className="h-6 w-6" />
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
