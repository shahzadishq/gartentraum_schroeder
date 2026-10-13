'use client';

import { useState } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import { site } from '@/lib/site';
import { asset } from '@/lib/asset';
import { InstagramIcon, ArrowRightIcon } from './icons';

type Category =
  | 'Alle'
  | 'Moderne Gärten'
  | 'Terrassen'
  | 'Pflasterarbeiten'
  | 'Poolanlagen'
  | 'Gartenneugestaltung';

type Project = {
  src: string;
  alt: string;
  label: string;
  categories: Exclude<Category, 'Alle'>[];
  w: number;
  h: number;
};

// Real projects from Gartentraum Schröder.
const projects: Project[] = [
  {
    src: '/images/pool-stone.webp',
    alt: 'Pool mit Natursteineinfassung und Sichtschutz, abendlich beleuchtet',
    label: 'Pool mit Natursteineinfassung',
    categories: ['Poolanlagen'],
    w: 1360,
    h: 1020,
  },
  {
    src: '/images/driveway-clinker.webp',
    alt: 'Neue Einfahrt mit Klinkerpflaster und angelegten Pflanzbeeten',
    label: 'Einfahrt in Klinkerpflaster',
    categories: ['Pflasterarbeiten', 'Gartenneugestaltung'],
    w: 1360,
    h: 1020,
  },
  {
    src: '/images/modern-house-path.webp',
    alt: 'Moderner Weg mit Rasen an einem holzverkleideten Neubau',
    label: 'Moderner Hauszugang',
    categories: ['Moderne Gärten', 'Terrassen'],
    w: 778,
    h: 1020,
  },
  {
    src: '/images/paving-modern.webp',
    alt: 'Antik-Pflaster-Weg an einem modernen, holzverkleideten Haus',
    label: 'Antik-Pflaster am Neubau',
    categories: ['Pflasterarbeiten', 'Moderne Gärten'],
    w: 1024,
    h: 768,
  },
  {
    src: '/images/work-paving-stones.webp',
    alt: 'Mitarbeiter von Gartentraum Schröder verlegt Pflastersteine von Hand',
    label: 'Pflasterarbeiten im Einsatz',
    categories: ['Pflasterarbeiten'],
    w: 960,
    h: 1200,
  },
  {
    src: '/images/work-excavator.webp',
    alt: 'Mitarbeiter von Gartentraum Schröder bei Erdarbeiten mit dem Minibagger',
    label: 'Erdarbeiten mit Minibagger',
    categories: ['Gartenneugestaltung'],
    w: 960,
    h: 1200,
  },
  {
    src: '/images/lawn-firepit.webp',
    alt: 'Gepflegter Rasen mit Lounge- und Feuerstellenbereich auf Kies',
    label: 'Outdoor-Living mit Feuerstelle',
    categories: ['Terrassen', 'Moderne Gärten'],
    w: 1360,
    h: 930,
  },
  {
    src: '/images/front-garden.webp',
    alt: 'Neu gestalteter Vorgarten mit Klinkerpflaster und Beeten',
    label: 'Vorgarten neu gestaltet',
    categories: ['Pflasterarbeiten', 'Moderne Gärten'],
    w: 1360,
    h: 1020,
  },
  {
    src: '/images/new-lawn-house.webp',
    alt: 'Frisch angelegter Rasen mit Einfriedung vor einem Wohnhaus',
    label: 'Neuer Rollrasen',
    categories: ['Gartenneugestaltung'],
    w: 1360,
    h: 765,
  },
  {
    src: '/images/backyard-lawn.webp',
    alt: 'Gepflegter Gartenrasen mit Hecke und Spielbereich',
    label: 'Gartenneuanlage',
    categories: ['Gartenneugestaltung'],
    w: 1360,
    h: 1020,
  },
];

const categories: Category[] = [
  'Alle',
  'Moderne Gärten',
  'Terrassen',
  'Pflasterarbeiten',
  'Poolanlagen',
  'Gartenneugestaltung',
];

export default function Gallery() {
  const [active, setActive] = useState<Category>('Alle');

  const filtered =
    active === 'Alle'
      ? projects
      : projects.filter((p) => p.categories.includes(active));

  return (
    <section id="projekte" className="bg-sand-50 py-24 lg:py-32">
      <div className="container-content section-padding">
        <Reveal className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow mb-5">Projekte & Referenzen</span>
            <h2 className="heading-serif text-4xl sm:text-5xl">
              Handwerk, das man sehen und fühlen kann
            </h2>
            <p className="mt-5 text-lg text-forest-700/80">
              Ein Einblick in realisierte Außenräume – von modernen Gärten über
              Terrassen bis zu Pool- und Pflasteranlagen.
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

        {/* Category filter */}
        <Reveal className="mt-10 flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-clay text-sand-50 shadow-soft'
                  : 'border border-clay/20 text-clay hover:border-clay/40 hover:bg-clay/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* Masonry grid – fills the full width in every filter state */}
        <div className="mt-10 columns-2 gap-4 sm:gap-5 lg:columns-3">
          {filtered.map((project, i) => (
            <Reveal
              key={project.src}
              delay={(i % 3) * 70}
              className="group relative mb-4 block break-inside-avoid overflow-hidden rounded-2xl sm:mb-5"
            >
              <Image
                src={asset(project.src)}
                alt={project.alt}
                width={project.w}
                height={project.h}
                sizes="(max-width: 640px) 50vw, 33vw"
                className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
                  {project.categories[0]}
                </span>
                <span className="mt-1 block font-serif text-lg text-sand-50">
                  {project.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-forest-700/70">
            Für diese Kategorie folgen in Kürze neue Projekte.
          </p>
        )}

        <Reveal className="mt-14 text-center">
          <a href="#kontakt" className="btn-primary group">
            Eigenes Projekt besprechen
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
