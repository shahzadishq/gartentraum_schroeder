import { LeafIcon } from './icons';

const items = [
  'Gartenplanung',
  '3D-Visualisierung',
  'Landschaftsbau',
  'Pflasterarbeiten',
  'Poolbau',
  'Terrassen',
  'Rollrasen',
  'Zäune & Einfriedungen',
  'Gartenpflege',
  'Außenanlagen',
];

export default function Marquee() {
  // Rendered twice back-to-back so the -50% translate loops seamlessly.
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-black/20 bg-bark py-5">
      <div className="flex w-max animate-marquee items-center gap-10 pr-10">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-sm font-medium uppercase tracking-[0.2em] text-sand-100/80"
          >
            {item}
            <LeafIcon className="h-4 w-4 text-brand-400" />
          </span>
        ))}
      </div>
    </div>
  );
}
