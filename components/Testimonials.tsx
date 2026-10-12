'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import { StarIcon, QuoteIcon, ArrowRightIcon } from './icons';

// Real Google reviews provided by the client.
const reviews = [
  {
    text: 'Die Firma Schröder hat bei uns Keramikplatten in Beton verlegt – saubere Arbeit, nette Leute.',
    name: 'Hans Reiners',
  },
  {
    text: 'Gartentraum Schröder hat bei uns einen 30m Zaun und Rasenborde gesetzt. Sehr schnelle Erledigung, super freundliche Mitarbeiter und saubere Ausführung. Wir sind sehr zufrieden und können Gartentraum Schröder sehr empfehlen.',
    name: 'Jens Nintemann',
  },
  {
    text: 'Von der Beratung bis zur Umsetzung super kompetent, zuverlässig und freundlich! Der nächste Auftrag ist schon erteilt! Kann ich nur weiterempfehlen! 1A Truppe.',
    name: 'Mats K.',
  },
  {
    text: 'Nach kurzer telefonischer Beratung wurde sehr zeitnah eine Besichtigung durchgeführt und in kürzester Zeit mit der Terrasse angefangen. Eine sehr schnelle und gute Ausführung. Top Kontakt, nette und engagierte Mitarbeiter. Empfehlenswert.',
    name: 'David Borsch',
  },
  {
    text: 'Wir sind super zufrieden mit Gartentraum Schröder! Sie haben unsere neue Einfahrt richtig sauber gemacht! Fleißig, freundlich und genau wie abgesprochen. Absolut empfehlenswert! Bei der nächsten Arbeit werden wir Gartentraum Schröder auf jeden Fall wieder fragen.',
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

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = reviews.length;

  const go = useCallback(
    (next: number) => setIndex((prev) => (next + count) % count),
    [count],
  );

  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer.current = setInterval(() => go(index + 1), 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [index, paused, go]);

  return (
    <section id="bewertungen" className="bg-sand-100 py-24 lg:py-32">
      <div className="container-content section-padding">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-5">Kundenstimmen</span>
          <h2 className="heading-serif text-4xl sm:text-5xl">
            Was unsere Kunden sagen
          </h2>
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="flex gap-0.5 text-sand-500">
              {Array.from({ length: 5 }).map((_, s) => (
                <StarIcon key={s} className="h-5 w-5" />
              ))}
            </span>
            <span className="text-sm font-medium text-forest-700/80">
              Echte Bewertungen von Google
            </span>
          </div>
        </Reveal>

        {/* Carousel */}
        <Reveal
          className="relative mx-auto mt-14 max-w-3xl"
          as="div"
        >
          <div
            className="overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {reviews.map((review) => (
                <figure
                  key={review.name}
                  className="w-full shrink-0 px-1"
                  aria-hidden={reviews[index].name !== review.name}
                >
                  <div className="relative flex flex-col items-center rounded-[2rem] border border-forest-700/10 bg-sand-50 p-8 text-center shadow-soft sm:p-12">
                    <QuoteIcon className="h-10 w-10 text-brand-200" />
                    <div className="mt-4 flex gap-1 text-sand-500">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <StarIcon key={s} className="h-5 w-5" />
                      ))}
                    </div>
                    <blockquote className="mt-6 max-w-2xl font-serif text-lg italic leading-relaxed text-forest-800 sm:text-xl">
                      „{review.text}“
                    </blockquote>
                    <figcaption className="mt-8 flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 font-semibold text-white">
                        {initials(review.name)}
                      </span>
                      <span className="text-left text-sm">
                        <span className="block font-semibold text-forest-900">
                          {review.name}
                        </span>
                        <span className="block text-forest-700/60">
                          Google Rezension
                        </span>
                      </span>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Vorherige Bewertung"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-forest-700/15 text-forest-700 transition-colors hover:border-brand-500 hover:bg-brand-500 hover:text-white"
            >
              <ArrowRightIcon className="h-4 w-4 rotate-180" />
            </button>

            <div className="flex items-center gap-2">
              {reviews.map((review, i) => (
                <button
                  key={review.name}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Bewertung ${i + 1} anzeigen`}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? 'w-7 bg-brand-500'
                      : 'w-2 bg-forest-700/20 hover:bg-forest-700/40'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Nächste Bewertung"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-forest-700/15 text-forest-700 transition-colors hover:border-brand-500 hover:bg-brand-500 hover:text-white"
            >
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>
        </Reveal>

        <Reveal className="mt-12 text-center">
          <p className="text-sm text-forest-700/70">
            Sie waren bereits unser Kunde? Wir freuen uns über Ihre Bewertung auf
            Google.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
