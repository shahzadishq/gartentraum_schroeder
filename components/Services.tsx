import Reveal from './Reveal';
import {
  CubeIcon,
  TreeIcon,
  PathIcon,
  PoolIcon,
  DeckIcon,
  SproutIcon,
  ArrowRightIcon,
} from './icons';

const services = [
  {
    icon: CubeIcon,
    title: 'Gartenplanung & 3D-Visualisierung',
    text: 'Realistische Planung Ihres Wunschgartens. Wir machen Ideen sichtbar, bevor gebaut wird.',
    points: ['Fotorealistische 3D-Entwürfe', 'Planungssicherheit von Anfang an'],
  },
  {
    icon: TreeIcon,
    title: 'Garten- & Landschaftsbau',
    text: 'Komplette Gartenanlagen für Neubau und Modernisierung – fachgerecht umgesetzt.',
    points: ['Neuanlage & Umgestaltung', 'Bepflanzung & Erdarbeiten'],
  },
  {
    icon: PathIcon,
    title: 'Pflasterarbeiten',
    text: 'Hochwertige Pflasterflächen für ein stimmiges und langlebiges Gesamtbild.',
    points: ['Terrassen & Wege', 'Einfahrten & Stellplätze'],
  },
  {
    icon: PoolIcon,
    title: 'Poolbau & Außenbereiche',
    text: 'Moderne Poollösungen und Wellnessbereiche – Urlaubsgefühl im eigenen Garten.',
    points: ['Individuelle Poolkonzepte', 'Wellness im Garten'],
  },
  {
    icon: DeckIcon,
    title: 'Terrassen & Gestaltung',
    text: 'Outdoor Living mit hochwertigen Materialien – Ihr zweites Wohnzimmer unter freiem Himmel.',
    points: ['Holz, Stein & WPC', 'Lounge- & Essbereiche'],
  },
  {
    icon: SproutIcon,
    title: 'Pflege & weitere Gartenlösungen',
    text: 'Damit Ihr Garten dauerhaft schön bleibt – von der Pflege bis zu Sonderlösungen.',
    points: ['Regelmäßige Gartenpflege', 'Individuelle Zusatzleistungen'],
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="relative bg-forest-950 py-24 lg:py-32">
      {/* subtle texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="container-content section-padding relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-5 text-forest-300">Unsere Leistungen</span>
          <h2 className="heading-serif text-4xl text-sand-50 sm:text-5xl">
            Alles rund um Ihren Außenbereich – aus einer Hand
          </h2>
          <p className="mt-5 text-lg text-sand-200/80">
            Ein breit gefächertes Angebotsspektrum für private, gewerbliche und
            öffentliche Auftraggeber – von der Idee bis zur Umsetzung.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(i % 3) * 90}>
                <article className="group moving-border relative flex h-full flex-col rounded-3xl border border-sand-50/10 bg-forest-900/60 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:bg-forest-800/70 hover:shadow-card">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-700/60 text-forest-200 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-400 group-hover:text-forest-950">
                    <Icon className="h-7 w-7 transition-transform duration-700 ease-out group-hover:rotate-[360deg]" />
                  </span>
                  <h3 className="mt-6 font-serif text-xl font-medium text-sand-50">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-sand-200/75">
                    {service.text}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-sand-200/90">
                    {service.points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-forest-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#kontakt"
                    className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-300 transition-colors group-hover:text-sand-50"
                  >
                    Mehr erfahren
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
