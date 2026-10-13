import Reveal from '@/components/Reveal';
import { ArrowRightIcon } from '@/components/icons';
import { Sprig } from './LeafDecor';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function FeaturedProjectV2() {
  return (
    <section className="relative overflow-hidden bg-clay py-24 text-sand-50 lg:py-32">
      <div className="container-content section-padding">
        {/* Intro row */}
        <Reveal className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <span className="eyebrow mb-5 text-brand-400">
              <Sprig className="h-4 w-4 text-brand-400" />
              Echte Arbeit. Sichtbare Veränderung.
            </span>
            <h2 className="font-serif text-4xl font-medium leading-tight sm:text-5xl">
              Aus Ideen <span className="text-brand-400">werden Gärten.</span>
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-sand-200/80">
            Eine neue Terrasse verändert mehr als die Fläche: Sie schafft einen
            Platz, den Sie wieder gern nutzen. Sehen Sie selbst.
          </p>
        </Reveal>

        {/* Before/after + details */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <BeforeAfterSlider
              before="/images/ba-before.webp"
              after="/images/ba-after.webp"
              ratio={968 / 526}
              alt="Terrasse vorher und nachher – Gartentraum Schröder"
            />
            <p className="mt-4 text-sm text-sand-200/60">
              Vorher und nachher: Originalaufnahmen aus einem realisierten
              Projekt. Ziehen Sie den Regler, um den Unterschied zu sehen.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <span className="eyebrow mb-4 text-brand-400">Terrassen-Umgestaltung</span>
            <h3 className="font-serif text-3xl font-medium leading-tight sm:text-4xl">
              Vorher Sand.
              <br />
              Jetzt Terrasse.
            </h3>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-sand-200/80">
              Vorher eine Fläche mit Sand und provisorischer Nutzung. Danach ein
              gepflasterter Außenbereich mit klarer Struktur und Platz zum
              Verweilen.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-sand-50/15 pt-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
                  Das Ziel
                </span>
                <p className="mt-2 text-sand-100">Den Außenbereich wieder gern nutzen.</p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
                  Das Ergebnis
                </span>
                <p className="mt-2 text-sand-100">Eine Terrasse als Teil des Zuhauses.</p>
              </div>
            </div>

            <a
              href="#kontakt"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-forest-900 shadow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-card"
            >
              Ähnliches Projekt anfragen
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
