'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Subtle vertical parallax: translates children as the element scrolls
 * through the viewport. Disabled when the user prefers reduced motion.
 */
export default function Parallax({
  children,
  speed = 24,
  className = '',
}: {
  children: ReactNode;
  /** Max travel in px across the viewport pass. */
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 (just entering bottom) → 1 (leaving top)
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      setOffset(Math.max(-1, Math.min(1, progress)) * speed);
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
  }, [speed]);

  return (
    <div ref={ref} className={`parallax ${className}`} style={{ transform: `translate3d(0, ${offset}px, 0)` }}>
      {children}
    </div>
  );
}
