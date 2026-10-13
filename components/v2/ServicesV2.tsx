import Reveal from '@/components/Reveal';
import {
  CubeIcon,
  TreeIcon,
  PathIcon,
  PoolIcon,
  DeckIcon,
  SproutIcon,
  ArrowRightIcon,
} from '@/components/icons';
import { LeafDecor } from './LeafDecor';

const services = [
  {
    icon: CubeIcon,
    title: 'Gartenplanung & 3D',
    text: 'Realistische 3D-Visualisierung Ihres Wunschgartens – Ideen sichtbar, bevor gebaut wird.',
  },
  {
    icon: TreeIcon,
    title: 'Garten- & Landschaftsbau',
    text: 'Komplette Gartenanlagen für Neubau und Modernisierung – fachgerecht umgesetzt.',
  },
  {
    icon: PathIcon,
    title: 'Pflasterarbeiten',
    text: 'Hochwertige Terrassen, Wege und Einfahrten für ein stimmiges Gesamtbild.',
  },
  {
    icon: PoolIcon,
    title: 'Poolbau & Außenbereiche',
    text: 'Moderne Poollösungen und Wellnessbereiche – Urlaubsgefühl im eigenen Garten.',
  },
  {
    icon: DeckIcon,
    title: 'Terrassen & Gestaltung',
    text: 'Outdoor Living mit hochwertigen Materialien – Ihr zweites Wohnzimmer im Grünen.',
  },
  {
    icon: SproutIcon,
    title: 'Pflege & mehr',
    text: 'Damit Ihr Garten dauerhaft schön bleibt – Pflege und individuelle Zusatzleistungen.',
  },
];

export default function ServicesV2() {
  return (
    <section id="leistungen" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <LeafDecor className="pointer-events-none absolute -left-24 top-10 h-96 w-96 -rotate-12 text-brand-50" />

      <div className="container-content section-padding relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-5 text-brand-600">Unsere Leistungen</span>
          <h2 className="font-serif text-4xl font-medium text-forest-900 sm:text-5xl">
            Alles für Ihren Außenbereich – aus einer Hand
          </h2>
          <p className="mt-5 text-lg text-forest-700/75">
            Ein breit gefächertes Angebot für private, gewerbliche und
            öffentliche Auftraggeber – von der ersten Idee bis zur Umsetzung.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(i % 3) * 90}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-forest-900/8 bg-sand-50/60 p-8 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-500/30 hover:bg-white hover:shadow-card">
                  {/* top accent line on hover */}
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-clay transition-transform duration-500 group-hover:scale-x-100" />

                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-500 group-hover:bg-clay group-hover:text-sand-50">
                    <Icon className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 font-serif text-xl font-medium text-forest-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-forest-700/75">
                    {service.text}
                  </p>
                  <a
                    href="#kontakt"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 opacity-0 transition-all duration-500 group-hover:opacity-100"
                  >
                    Mehr erfahren
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
