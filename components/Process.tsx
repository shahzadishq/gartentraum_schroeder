import Reveal from './Reveal';

const steps = [
  {
    number: '01',
    title: 'Beratung & Ideen',
    text: 'Wir lernen Ihre Wünsche, Ihr Grundstück und Ihre Vorstellungen kennen – persönlich und unverbindlich.',
  },
  {
    number: '02',
    title: '3D-Gartenplanung',
    text: 'Ihr zukünftiger Garten wird realistisch visualisiert, sodass Sie das Ergebnis vorab erleben.',
  },
  {
    number: '03',
    title: 'Detailplanung',
    text: 'Materialien, Pflanzen und Konstruktionen werden exakt geplant – bis ins kleinste Detail.',
  },
  {
    number: '04',
    title: 'Professionelle Umsetzung',
    text: 'Unser erfahrenes Team setzt Ihr Projekt sauber, termingerecht und in höchster Qualität um.',
  },
  {
    number: '05',
    title: 'Ihr fertiger Traumgarten',
    text: 'Übergabe Ihres neuen Außenbereichs – auf Wunsch inklusive dauerhafter Pflege.',
  },
];

export default function Process() {
  return (
    <section id="ablauf" className="relative bg-sand-100 py-24 lg:py-32">
      <div className="container-content section-padding">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-5">So arbeiten wir</span>
          <h2 className="heading-serif text-4xl sm:text-5xl">
            In fünf Schritten zu Ihrem Traumgarten
          </h2>
          <p className="mt-5 text-lg text-forest-700/80">
            Ein klarer, transparenter Prozess – damit Sie von der ersten Idee
            bis zur Übergabe genau wissen, was passiert.
          </p>
        </Reveal>

        <div className="relative mt-20">
          {/* Connecting line (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[39px] hidden h-px bg-gradient-to-r from-transparent via-forest-300 to-transparent lg:block"
          />

          <ol className="grid gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6">
            {steps.map((step, i) => (
              <Reveal key={step.number} as="li" delay={i * 90} className="relative">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-forest-200 bg-sand-50 font-serif text-2xl font-semibold text-forest-700 shadow-soft">
                    {step.number}
                  </span>
                  <h3 className="mt-6 font-serif text-xl font-medium text-forest-900">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-forest-700/75">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
