'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

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

export default function Process() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0); // 0 → 1 as the section scrolls past

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Start filling when the timeline enters the lower viewport,
      // complete as it scrolls up past the middle.
      const p = (vh * 0.78 - rect.top) / (rect.height * 0.9);
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

  const lastIndex = steps.length - 1;

  return (
    <section id="ablauf" className="relative bg-sand-100 py-24 lg:py-32">
      <div className="container-content section-padding">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-5">So arbeiten wir</span>
          <h2 className="heading-serif text-4xl sm:text-5xl">
            In fünf Schritten zu Ihrem Traumgarten
          </h2>
          <p className="mt-5 text-lg text-forest-700/80">
            Ein klarer, transparenter Prozess – damit Sie von der ersten Idee
            bis zur Übergabe genau wissen, was passiert.
          </p>
        </Reveal>

        <div ref={ref} className="relative mt-20">
          {/* Base line (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[39px] hidden h-1 rounded-full bg-forest-200/70 lg:block"
          />
          {/* Scroll-driven fill bar (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 top-[39px] hidden h-1 rounded-full bg-brand-500 shadow-[0_0_12px_rgba(95,131,57,0.5)] lg:block"
            style={{ width: `${progress * 100}%` }}
          />

          {/* Vertical fill bar (mobile only) */}
          <div
            aria-hidden
            className="absolute bottom-0 left-[39px] top-0 w-1 rounded-full bg-forest-200/60 sm:hidden"
          />
          <div
            aria-hidden
            className="absolute left-[39px] top-0 w-1 rounded-full bg-brand-500 sm:hidden"
            style={{ height: `${progress * 100}%` }}
          />

          <ol className="grid gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6">
            {steps.map((step, i) => {
              const active = progress >= i / lastIndex - 0.02;
              return (
                <Reveal key={step.number} as="li" delay={i * 90} className="relative pl-24 sm:pl-0">
                  <div className="flex flex-col items-start text-left sm:items-center sm:text-center lg:items-start lg:text-left">
                    <span
                      className={`absolute left-0 top-0 z-10 flex h-20 w-20 items-center justify-center rounded-full border font-serif text-2xl font-semibold shadow-soft transition-all duration-500 sm:relative sm:left-auto sm:top-auto ${
                        active
                          ? 'scale-105 border-brand-500 bg-brand-500 text-white shadow-card'
                          : 'border-forest-200 bg-sand-50 text-forest-700'
                      }`}
                    >
                      {step.number}
                    </span>
                    <h3 className="mt-6 font-serif text-xl font-medium text-forest-900">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-forest-700/75">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
