'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { asset } from '@/lib/asset';
import { ArrowRightIcon } from '@/components/icons';
import { Sprig } from './LeafDecor';

const cards = [
  { a: -63, label: 'Moderne Gärten', img: '/images/garden-lawn.webp' },
  { a: -45, label: 'Rollrasen', img: '/images/new-lawn-house.webp' },
  { a: -27, label: 'Pflasterarbeiten', img: '/images/driveway-clinker.webp' },
  { a: -9, label: 'Terrassen', img: '/images/hero.webp' },
  { a: 9, label: 'Poolanlagen', img: '/images/pool-stone.webp' },
  { a: 27, label: 'Antik-Pflaster', img: '/images/paving-modern.webp' },
  { a: 45, label: 'Vorgärten', img: '/images/front-garden.webp' },
  { a: 63, label: 'Outdoor-Living', img: '/images/lawn-firepit.webp' },
];

export default function ServicesV2() {
  const fanRef = useRef<HTMLDivElement | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = fanRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setOn(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="leistungen"
      className="relative overflow-hidden bg-sand-50 pt-20 pb-24 lg:pb-28"
    >
      <div className="container-content section-padding">
        <div ref={fanRef} className={`v2fan ${on ? 'is-on' : ''}`}>
          <span className="v2fan__ring" aria-hidden />

          <div className="v2fan__rail">
            {cards.map((c) => (
              <figure
                key={c.label}
                className="v2fan__card"
                style={{ '--a': `${c.a}deg` } as React.CSSProperties}
              >
                <Image
                  src={asset(c.img)}
                  alt={c.label}
                  fill
                  sizes="150px"
                  className="object-cover"
                />
                <figcaption>{c.label}</figcaption>
              </figure>
            ))}
          </div>

          <div className="v2fan__say">
            <span className="eyebrow mb-4 justify-center text-brand-600">
              <Sprig className="h-4 w-4 text-brand-500" />
              Unsere Leistungen
            </span>
            <h2 className="font-serif text-4xl font-medium leading-tight text-forest-900 sm:text-5xl">
              Von der Idee bis zum fertigen Traumgarten
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[17px] leading-relaxed text-forest-700/80">
              Moderne Gartenanlagen, Terrassen, Pools und Pflasterarbeiten – wir
              planen und realisieren Ihren Außenbereich komplett aus einer Hand.
            </p>
            <a href="#kontakt" className="btn-primary group mt-7">
              Jetzt Projekt besprechen
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
