import { site } from '@/lib/site';
import { GoogleIcon, ArrowRightIcon } from './icons';

/**
 * Compact "leave us a Google review" band, shown below the testimonials.
 * Inspired by the review prompt on abdullahnurseryfarm.com.
 */
export default function ReviewCTA({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative flex flex-col items-center justify-between gap-5 overflow-hidden rounded-[1.75rem] bg-clay px-7 py-6 text-center shadow-card sm:flex-row sm:px-9 sm:text-left ${className}`}
    >
      <p className="max-w-xl text-[15px] leading-relaxed text-sand-100 sm:text-base">
        Waren Sie bei <span className="font-semibold text-white">Gartentraum Schröder</span>?
        Ihre Bewertung dauert weniger als eine Minute.
      </p>
      <a
        href={site.googleReviewHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-forest-900 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
      >
        <GoogleIcon className="h-5 w-5" />
        Bewertung schreiben
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
}
