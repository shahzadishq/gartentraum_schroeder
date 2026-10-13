import Reveal from '@/components/Reveal';
import { ArrowRightIcon } from '@/components/icons';
import { Sprig } from './LeafDecor';
import BeforeAfterSlider from './BeforeAfterSlider';

/**
 * Prominent "featured project" block shown at the top of the projects
 * section: a before/after drag slider on the left and a green text panel
 * on the right (only the text panel is green, not the whole section).
 */
export default function FeaturedProjectV2() {
  return (
    <Reveal className="mb-16 lg:mb-24">
      <span className="eyebrow mb-4 text-brand-600">
        <Sprig className="h-4 w-4 text-brand-500" />
        Echte Arbeit. Sichtbare Veränderung.
      </span>
      <h2 className="font-serif text-4xl font-medium leading-tight text-forest-900 sm:text-5xl">
        Aus Ideen <span className="text-brand-600">werden Gärten.</span>
      </h2>

      <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8">
        {/* Before / after slider */}
        <BeforeAfterSlider
          before="/images/ba-before.webp"
          after="/images/ba-after.webp"
          ratio={1000 / 625}
          alt="Terrasse vorher und nachher – Gartentraum Schröder"
        />

        {/* Green text panel */}
        <div className="flex flex-col justify-center rounded-[1.75rem] bg-clay p-8 text-sand-50 shadow-card sm:p-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
            Terrassen-Umgestaltung
          </span>
          <h3 className="mt-3 font-serif text-2xl font-medium leading-tight sm:text-3xl">
            Vorher Sand. Jetzt Terrasse.
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-sand-200/85">
            Vorher eine Fläche mit Sand und provisorischer Nutzung. Danach ein
            gepflasterter Außenbereich mit klarer Struktur und Platz zum
            Verweilen.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-5 border-t border-sand-50/15 pt-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-400">
                Das Ziel
              </span>
              <p className="mt-1.5 text-sm text-sand-100">
                Den Außenbereich wieder gern nutzen.
              </p>
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-400">
                Das Ergebnis
              </span>
              <p className="mt-1.5 text-sm text-sand-100">
                Eine Terrasse als Teil des Zuhauses.
              </p>
            </div>
          </div>

          <a
            href="#kontakt"
            className="group mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-forest-900 shadow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-card"
          >
            Ähnliches Projekt anfragen
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <p className="mt-4 text-sm text-forest-700/60">
        Vorher und nachher: Originalaufnahmen aus einem realisierten Projekt.
        Ziehen Sie den Regler, um den Unterschied zu sehen.
      </p>
    </Reveal>
  );
}
