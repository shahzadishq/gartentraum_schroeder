'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { asset } from '@/lib/asset';

type Props = {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  /** aspect ratio as width/height, e.g. 968 / 526 */
  ratio?: number;
  alt?: string;
};

export default function BeforeAfterSlider({
  before,
  after,
  beforeLabel = 'Vorher',
  afterLabel = 'Nachher',
  ratio = 968 / 526,
  alt = 'Vorher-Nachher-Vergleich',
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
  }, [setFromClientX]);

  const onDown = (e: React.PointerEvent) => {
    dragging.current = true;
    setFromClientX(e.clientX);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 4));
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 4));
  };

  return (
    <div
      ref={ref}
      onPointerDown={onDown}
      className="group relative w-full touch-none select-none overflow-hidden rounded-[1.5rem] border-[6px] border-white shadow-card"
      style={{ aspectRatio: String(ratio) }}
    >
      {/* After (base) */}
      <Image
        src={asset(after)}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 92vw, 46vw"
        className="object-cover"
        priority
      />
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-forest-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
        {afterLabel}
      </span>

      {/* Before (clipped overlay) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={asset(before)}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 92vw, 46vw"
          className="object-cover"
        />
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-forest-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
          {beforeLabel}
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
        style={{ left: `${pos}%` }}
      >
        <button
          type="button"
          role="slider"
          aria-label="Vorher-Nachher vergleichen"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={onKey}
          onPointerDown={onDown}
          className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-forest-900/10 bg-white text-forest-900 shadow-card transition-transform group-hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 7-5 5 5 5" />
            <path d="m15 7 5 5-5 5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
