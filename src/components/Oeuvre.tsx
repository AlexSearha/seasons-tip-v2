import Reveal from './Reveal';

const ways = [
  ['Un chemin initiatique', 'Deux marcheurs que tout oppose prennent la route ensemble.'],
  ['Un récit poétique', 'Des voix, un orchestre, des images dessinées à la main.'],
  ['Un voyage dramatique', 'Un monde en ruines, de la violence, et la nature qui revient.'],
];
const catalogue = [
  ['Série principale', 'The Inner Path, en anglais'],
  ['Hors-séries anthologiques', 'Épisodes unitaires, en français'],
  ['Podcast', 'Seasons Loves'],
];

export default function Oeuvre() {
  return (
    <section id="oeuvre">
      <div role="img" aria-label="Montagnes dessinées au fusain, extrait de la série" className="banner-mask relative h-[92vh] min-h-120 bg-cover bg-top text-[#0b0e12] grayscale" style={{ backgroundImage: 'url(/images/mountains.jpg)' }}>
        <div className="mx-auto max-w-[1180px] px-[clamp(1.1rem,5vw,3rem)] pt-[clamp(5rem,12vh,8rem)]">
          <span className="font-cin text-sm font-semibold tracking-[.3em] text-[#2a3a2a]">I</span>
          <h2 className="mt-2 font-cin text-[clamp(2.4rem,7.5vw,6rem)] leading-none font-bold tracking-[.06em] uppercase [text-shadow:0_0_16px_rgba(255,255,255,.75),0_2px_6px_rgba(255,255,255,.5)]">L’œuvre</h2>
        </div>
      </div>
      <div className="relative mx-auto -mt-[6vh] grid max-w-[1180px] items-start gap-[clamp(2rem,6vw,5rem)] px-[clamp(1.1rem,5vw,3rem)] pb-[clamp(4rem,9vw,8rem)] md:grid-cols-[1.25fr_1fr]">
        <Reveal className="max-w-[58ch] space-y-5">
          <p>Chris fuit la civilisation. Perdu dans une course effrénée, il croise Neil, un vieil homme qui semble arpenter les routes depuis bien longtemps. À la croisée des chemins, ils prennent alors la route ensemble et entament un voyage initiatique. Cette quête va emmener Chris bien plus loin qu’il ne pensait aller un jour…</p>
          <p>Seasons, par ego et Alex : des fictions audio musicales, entre musique symphonique et Metal progressif. Un univers d’évasion vous attend. Le premier pas est le seul qui compte. Jusqu’où irez-vous ?</p>
          <p>La musique est un personnage à part entière : elle porte l’ambiance de chaque épisode, parfois rompue par quelques bruitages percutants. Les voix sont en anglais, et les visuels dessinés font partie du voyage : la version YouTube propose les sous-titres.</p>
          <p className="text-mist italic">À l’origine, un trio : ego, Alex et Pascal, musiciens, scénaristes et graphistes. Pascal nous a quittés. Ce qu’il a donné à Seasons reste vivant dans l’œuvre.</p>
        </Reveal>
        <Reveal>
          <ul className="grid gap-5">
            {ways.map(([t, d]) => (
              <li key={t} className="border-l-2 border-moss bg-slate/55 px-6 py-5 backdrop-blur-md">
                <b className="block font-cin text-base font-semibold tracking-[.14em] uppercase">{t}</b>
                <span className="mt-1 block text-lg leading-snug text-mist">{d}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-8 grid gap-3.5 border-t border-bone/20 pt-5">
            {catalogue.map(([t, d]) => (
              <li key={t} className="flex flex-wrap items-baseline justify-between gap-4">
                <b className="font-cin text-sm font-semibold tracking-[.14em] uppercase">{t}</b>
                <span className="text-lg text-mist italic">{d}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
