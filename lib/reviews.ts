/** Real Google reviews for Gartentraum Schröder. */
export type Review = { text: string; name: string };

export const reviews: Review[] = [
  {
    text: 'Die Firma Schröder hat bei uns Keramikplatten in Beton verlegt – saubere Arbeit, nette Leute.',
    name: 'Hans Reiners',
  },
  {
    text: 'Gartentraum Schröder hat bei uns einen 30m Zaun und Rasenborde gesetzt. Sehr schnelle Erledigung, super freundliche Mitarbeiter und saubere Ausführung. Wir sind sehr zufrieden und können sie sehr empfehlen.',
    name: 'Jens Nintemann',
  },
  {
    text: 'Von der Beratung bis zur Umsetzung super kompetent, zuverlässig und freundlich! Der nächste Auftrag ist schon erteilt! Kann ich nur weiterempfehlen – 1A Truppe.',
    name: 'Mats K.',
  },
  {
    text: 'Nach kurzer telefonischer Beratung wurde sehr zeitnah eine Besichtigung durchgeführt und in kürzester Zeit mit der Terrasse angefangen. Sehr schnelle und gute Ausführung. Top Kontakt, nette und engagierte Mitarbeiter. Empfehlenswert.',
    name: 'David Borsch',
  },
  {
    text: 'Wir sind super zufrieden! Unsere neue Einfahrt wurde richtig sauber gemacht – fleißig, freundlich und genau wie abgesprochen. Absolut empfehlenswert!',
    name: 'Ronald Nicolai',
  },
  {
    text: 'Sehr zufrieden! Gartentraum Schröder hat uns einen 20 m Doppelstabzaun mit einem 1,80 m Tor für unseren Hundeauslauf aufgestellt. Die Umsetzung war schnell und unkompliziert, der Preis absolut top. Gerne wieder – war bestimmt nicht das letzte Mal!',
    name: 'Carsten Rudolf',
  },
  {
    text: 'Alles hat zur vollsten Zufriedenheit geklappt. Wie besprochen wurde die Arbeit ausgeführt und ich bin vollkommen zufrieden. Auf jeden Fall kann ich „Gartentraum Schröder“ weiterempfehlen.',
    name: 'Uli',
  },
  {
    text: 'Kompetent, freundlich, pünktlich, zuverlässig – das Beste, was man bekommen kann. Wir sind mehr als zufrieden und würden ihn jederzeit wieder beauftragen. Durch Gartentraum Schröder wurde unser Garten zum Traum 👍',
    name: 'Annerose Menzel',
  },
  {
    text: 'Von der Planung bis zur Ausführung alles bestens geklappt. Tolle Arbeit, ich bin mehr als zufrieden. Ein zuverlässiges, freundliches und fleißiges Team. Auf jeden Fall sehr zu empfehlen.',
    name: 'Natalie Wunder',
  },
  {
    text: 'Alles wie abgesprochen … ist top geworden. 👌',
    name: 'Henry Strassburg',
  },
  {
    text: 'Gute Arbeiten durch die Firma.',
    name: 'Jörg Müller',
  },
];

export function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}
