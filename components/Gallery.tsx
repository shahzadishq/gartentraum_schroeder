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
  span?: boolean;
};

// Real projects from Gartentraum Schröder.
const projects: Project[] = [
  {
    src: '/images/pool.jpg',
    alt: 'Moderne Poolanlage mit anthrazitfarbenem Sichtschutz und Bepflanzung',
    label: 'Poolanlage mit Sichtschutz',
    categories: ['Poolanlagen', 'Moderne Gärten'],
    span: true,
  },
  {
    src: '/images/fence.jpg',
    alt: 'Moderne Doppelstabmatten-Einfriedung mit integrierter Paketbox',
    label: 'Moderne Einfriedung',
    categories: ['Moderne Gärten'],
  },
  {
    src: '/images/pavers-terrace.jpg',
    alt: 'Hochwertig verlegte großformatige Terrassenplatten',
    label: 'Terrassenplatten verlegt',
    categories: ['Pflasterarbeiten', 'Terrassen'],
    span: true,
  },
  {
    src: '/images/terrace.jpg',
    alt: 'Überdachte Terrasse mit Natursteinpflaster',
    label: 'Überdachte Terrasse',
    categories: ['Terrassen'],
  },
  {
    src: '/images/pavers-work.jpg',
    alt: 'Pflasterarbeiten in Ausführung – präzise Verlegung',
    label: 'Pflasterarbeiten',
    categories: ['Pflasterarbeiten'],
  },
  {
    src: '/images/earthworks.jpg',
    alt: 'Erdarbeiten mit Radlader für eine neue Gartenanlage',
    label: 'Erd- & Grundarbeiten',
    categories: ['Gartenneugestaltung'],
  },
  {
    src: '/images/pool-build.jpg',
    alt: 'Poolbau – Aushub und Bewehrung für ein neues Schwimmbecken',
    label: 'Poolbau im Neubau',
    categories: ['Poolanlagen', 'Gartenneugestaltung'],
    span: true,
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
                  ? 'bg-forest-700 text-sand-50 shadow-soft'
                  : 'border border-forest-700/15 text-forest-700 hover:border-forest-700/40 hover:bg-forest-700/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid auto-rows-[260px] grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {filtered.map((project, i) => (
            <Reveal
              key={project.src}
              delay={(i % 4) * 70}
              className={`group relative overflow-hidden rounded-2xl ${
                project.span ? 'col-span-2 row-span-1' : ''
              }`}
            >
              <Image
                src={asset(project.src)}
                alt={project.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
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
