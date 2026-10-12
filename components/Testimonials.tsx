import Reveal from './Reveal';
import { StarIcon, QuoteIcon } from './icons';

// Placeholder cards – no fabricated reviews. Replace with real Google reviews.
const placeholders = [1, 2, 3];

export default function Testimonials() {
  return (
    <section id="bewertungen" className="bg-sand-100 py-24 lg:py-32">
      <div className="container-content section-padding">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-5">Kundenstimmen</span>
          <h2 className="heading-serif text-4xl sm:text-5xl">
            Was unsere Kunden sagen
          </h2>
          <p className="mt-5 text-lg text-forest-700/80">
            Echte Erfahrungen unserer Auftraggeber. Hier erscheinen in Kürze
            Bewertungen von Google.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {placeholders.map((n, i) => (
            <Reveal key={n} delay={i * 100}>
              <figure className="relative flex h-full flex-col rounded-3xl border border-forest-700/10 bg-sand-50 p-8 shadow-soft">
                <QuoteIcon className="h-9 w-9 text-forest-200" />
                <div className="mt-4 flex gap-1 text-sand-500">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} className="h-5 w-5" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1">
                  <p className="rounded-xl border border-dashed border-forest-700/20 bg-sand-100/60 p-4 text-sm italic leading-relaxed text-forest-700/60">
                    „Google Bewertung hier einfügen“
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-100 font-serif text-forest-700">
                    ✓
                  </span>
                  <span className="text-sm">
                    <span className="block font-semibold text-forest-900">
                      Name des Kunden
                    </span>
                    <span className="block text-forest-700/60">
                      Verifizierte Google Bewertung
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="text-sm text-forest-700/70">
            Sie waren bereits unser Kunde? Wir freuen uns über Ihre Bewertung
            auf Google.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
