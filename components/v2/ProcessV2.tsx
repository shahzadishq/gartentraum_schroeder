'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from '@/components/Reveal';
import { Sprig } from './LeafDecor';

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

export default function ProcessV2() {
  const ref = useRef<HTMLOListElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.7 - rect.top) / (rect.height * 0.85);
      setProgress(Math.max(0, Math.min(1, p)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const last = steps.length - 1;

  return (
    <section id="ablauf" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="container-content section-padding">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-5 justify-center text-brand-600">
            <Sprig className="h-4 w-4 text-brand-500" />
            So arbeiten wir
          </span>
          <h2 className="font-serif text-4xl font-medium text-forest-900 sm:text-5xl">
            In fünf Schritten zu Ihrem Traumgarten
          </h2>
          <p className="mt-5 text-lg text-forest-700/75">
            Ein klarer, transparenter Prozess – von der ersten Idee bis zur
            Übergabe.
          </p>
        </Reveal>

        <ol ref={ref} className="relative mx-auto mt-16 max-w-2xl">
          {/* base vertical line */}
          <span
            aria-hidden
            className="absolute left-7 top-3 bottom-3 w-0.5 rounded-full bg-forest-900/10"
          />
          {/* scroll-driven fill */}
          <span
            aria-hidden
            className="absolute left-7 top-3 w-0.5 rounded-full bg-brand-500"
            style={{ height: `calc(${progress * 100}% - 12px)` }}
          />

          {steps.map((step, i) => {
            const active = progress >= i / last - 0.05;
            return (
              <li key={step.number} className="relative pl-24 pb-12 last:pb-0">
                <span
                  className={`absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-full border font-serif text-lg font-semibold shadow-soft transition-all duration-500 ${
                    active
                      ? 'scale-105 border-brand-500 bg-brand-500 text-white'
                      : 'border-forest-900/10 bg-white text-forest-700'
                  }`}
                >
                  {step.number}
                </span>
                <Reveal delay={i * 60}>
                  <h3 className="font-serif text-2xl font-medium text-forest-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-md leading-relaxed text-forest-700/75">
                    {step.text}
                  </p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
