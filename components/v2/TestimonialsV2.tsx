import Reveal from '@/components/Reveal';
import { StarIcon } from '@/components/icons';
import { reviews, initials, type Review } from '@/lib/reviews';
import ReviewCTA from '@/components/ReviewCTA';
import { LeafDecor } from './LeafDecor';

const row1 = reviews.slice(0, 6);
const row2 = reviews.slice(6);

function Card({ review }: { review: Review }) {
  return (
    <figure className="flex w-[300px] shrink-0 flex-col rounded-3xl border border-forest-900/8 bg-white p-6 shadow-soft sm:w-[360px]">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clay text-sm font-semibold text-sand-50">
          {initials(review.name)}
        </span>
        <span className="text-sm">
          <span className="block font-semibold text-forest-900">{review.name}</span>
          <span className="flex gap-0.5 text-sand-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-3.5 w-3.5" />
            ))}
          </span>
        </span>
      </div>
      <blockquote className="mt-4 line-clamp-5 text-[14px] leading-relaxed text-forest-800">
        „{review.text}“
      </blockquote>
      <figcaption className="mt-3 text-xs font-medium text-forest-700/55">
        Google Rezension
      </figcaption>
    </figure>
  );
}

function Marquee({ items, reverse }: { items: Review[]; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden py-3">
      <div
        className="flex w-max gap-6 animate-marquee"
        style={{ animationDuration: '60s', animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {loop.map((r, i) => (
          <Card key={`${r.name}-${i}`} review={r} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsV2() {
  return (
    <section
      id="bewertungen"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <LeafDecor className="pointer-events-none absolute -right-20 top-6 hidden h-32 w-64 text-brand-500/12 lg:block" />

      <Reveal className="container-content section-padding mb-14 text-center">
        <span className="eyebrow mb-5 justify-center text-brand-600">Kundenstimmen</span>
        <h2 className="font-serif text-4xl font-medium text-forest-900 sm:text-5xl">
          Was unsere Kunden sagen
        </h2>
        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="flex gap-0.5 text-sand-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-5 w-5" />
            ))}
          </span>
          <span className="text-sm font-medium text-forest-700/80">
            Echte Bewertungen von Google
          </span>
        </div>
      </Reveal>

      {/* Full-width auto-playing rows */}
      <div className="space-y-2">
        <Marquee items={row1} />
        <Marquee items={row2} reverse />
      </div>

      <Reveal className="container-content section-padding mt-16">
        <ReviewCTA />
      </Reveal>
    </section>
  );
}
