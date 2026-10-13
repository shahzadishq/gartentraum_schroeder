import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { asset } from '@/lib/asset';
import { site } from '@/lib/site';
import { InstagramIcon, ArrowRightIcon } from '@/components/icons';

type Tile = { src: string; label: string; span: string };

const tiles: Tile[] = [
  { src: '/images/garden-lawn.webp', label: 'Moderne Gärten', span: 'col-span-2 row-span-2' },
  { src: '/images/work-paving-stones.webp', label: 'Pflasterarbeiten', span: '' },
  { src: '/images/pool-stone.webp', label: 'Poolanlagen', span: '' },
  { src: '/images/work-excavator.webp', label: 'Erd- & Landschaftsbau', span: 'col-span-2' },
  { src: '/images/work-trimmer.webp', label: 'Gartenpflege', span: '' },
  { src: '/images/front-garden.webp', label: 'Vorgärten', span: '' },
  { src: '/images/work-hedge-lift.webp', label: 'Baum- & Heckenpflege', span: 'col-span-2' },
  { src: '/images/new-lawn-house.webp', label: 'Rollrasen', span: '' },
];

export default function ProjectsV2() {
  return (
    <section id="projekte" className="bg-sand-50 py-24 lg:py-32">
      <div className="container-content section-padding">
        <Reveal className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow mb-5 text-brand-600">Projekte & Referenzen</span>
            <h2 className="font-serif text-4xl font-medium text-forest-900 sm:text-5xl">
              Handwerk, das man sehen und fühlen kann
            </h2>
            <p className="mt-5 text-lg text-forest-700/75">
              Ein Einblick in realisierte Außenräume – und in das Team, das sie
              mit Leidenschaft umsetzt.
            </p>
          </div>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary shrink-0"
          >
            <InstagramIcon className="h-4 w-4" />
            Mehr auf Instagram
          </a>
        </Reveal>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:auto-rows-[210px]">
          {tiles.map((tile, i) => (
            <Reveal
              key={tile.src}
              delay={(i % 4) * 70}
              className={`group relative overflow-hidden rounded-3xl ${tile.span}`}
            >
              <Image
                src={asset(tile.src)}
                alt={tile.label}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bark/80 via-bark/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 translate-y-1 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-serif text-lg text-sand-50">{tile.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a href="#kontakt" className="btn-primary group">
            Eigenes Projekt besprechen
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
