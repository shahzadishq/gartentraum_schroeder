import Reveal from './Reveal';
import { StarIcon } from './icons';
import { reviews, initials, type Review } from '@/lib/reviews';
import ReviewCTA from './ReviewCTA';

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

export default function Testimonials() {
  const loop = [...reviews, ...reviews];

  return (
    <section id="bewertungen" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <Reveal className="container-content section-padding mb-14 text-center">
        <span className="eyebrow mb-5 justify-center">Kundenstimmen</span>
        <h2 className="heading-serif text-4xl sm:text-5xl">Was unsere Kunden sagen</h2>
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

      {/* Full-width auto-playing row */}
      <div className="overflow-hidden py-3">
        <div
          className="flex w-max gap-6 animate-marquee"
          style={{ animationDuration: '95s' }}
        >
          {loop.map((r, i) => (
            <Card key={`${r.name}-${i}`} review={r} />
          ))}
        </div>
      </div>

      <Reveal className="container-content section-padding mt-14">
        <ReviewCTA />
      </Reveal>
    </section>
  );
}
