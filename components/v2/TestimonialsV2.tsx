import Reveal from '@/components/Reveal';
import { StarIcon, QuoteIcon } from '@/components/icons';
import { LeafDecor, Sprig } from './LeafDecor';

const reviews = [
  {
    text: 'Die Firma Schröder hat bei uns Keramikplatten in Beton verlegt – saubere Arbeit, nette Leute.',
    name: 'Hans Reiners',
  },
  {
    text: 'Gartentraum Schröder hat bei uns einen 30m Zaun und Rasenborde gesetzt. Sehr schnelle Erledigung, super freundliche Mitarbeiter und saubere Ausführung. Wir sind sehr zufrieden und können sie sehr empfehlen.',
    name: 'Jens Nintemann',
  },
  {
    text: 'Von der Beratung bis zur Umsetzung super kompetent, zuverlässig und freundlich! Der nächste Auftrag ist schon erteilt! Kann ich nur weiterempfehlen – 1A Truppe.',
    name: 'Mats K.',
  },
  {
    text: 'Nach kurzer telefonischer Beratung wurde sehr zeitnah eine Besichtigung durchgeführt und in kürzester Zeit mit der Terrasse angefangen. Sehr schnelle und gute Ausführung. Empfehlenswert.',
    name: 'David Borsch',
  },
  {
    text: 'Wir sind super zufrieden! Unsere neue Einfahrt wurde richtig sauber gemacht – fleißig, freundlich und genau wie abgesprochen. Absolut empfehlenswert!',
    name: 'Ronald Nicolai',
  },
];

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function TestimonialsV2() {
  return (
    <section
      id="bewertungen"
      className="relative overflow-hidden bg-sand-100 py-24 lg:py-32"
    >
      {/* Leaf backdrop */}
      <LeafDecor className="pointer-events-none absolute -right-28 top-6 h-[32rem] w-[32rem] rotate-[18deg] text-brand-200/50" />
      <Sprig className="pointer-events-none absolute -left-8 bottom-10 hidden h-44 w-44 -rotate-12 text-brand-300/40 lg:block" />

      <div className="container-content section-padding relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-5 text-brand-600">Kundenstimmen</span>
          <h2 className="font-serif text-4xl font-medium text-forest-900 sm:text-5xl">
            Was unsere Kunden sagen
          </h2>
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="flex gap-0.5 text-sand-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-5 w-5" />
              ))}
            </span>
            <span className="text-sm font-medium text-forest-700/80">
              Echte Bewertungen von Google
            </span>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={(i % 3) * 90}>
              <figure className="relative flex h-full flex-col rounded-3xl bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card">
                <QuoteIcon className="h-9 w-9 text-brand-200" />
                <div className="mt-4 flex gap-1 text-sand-500">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-forest-800">
                  „{review.text}“
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-forest-900/8 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clay font-semibold text-sand-50">
                    {initials(review.name)}
                  </span>
                  <span className="text-sm">
                    <span className="block font-semibold text-forest-900">
                      {review.name}
                    </span>
                    <span className="block text-forest-700/60">Google Rezension</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}

          {/* CTA tile to balance the 5-card grid */}
          <Reveal delay={180}>
            <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-dashed border-clay/30 bg-brand-50/40 p-8 text-center">
              <Sprig className="h-10 w-10 text-brand-500" />
              <p className="mt-4 font-serif text-xl text-forest-900">
                Werden Sie unser nächstes zufriedenes Projekt.
              </p>
              <a href="#kontakt" className="btn-primary mt-6">
                Beratung anfragen
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
