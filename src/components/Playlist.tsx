import { BANDCAMP_ALBUM_ID, BANDCAMP_ALBUM_URL } from '@/data/content';
import Reveal from './Reveal';

const player = `https://bandcamp.com/EmbeddedPlayer/album=${BANDCAMP_ALBUM_ID}/size=large/bgcol=0d1218/linkcol=748e56/tracklist=true/artwork=small/transparent=true/`;

export default function Playlist() {
  return (
    <section id="playlist" className="bg-linear-to-b from-night to-ink py-[clamp(4rem,9vw,8rem)]">
      <div className="mx-auto grid max-w-[1180px] items-center gap-[clamp(2rem,6vw,5rem)] px-[clamp(1.1rem,5vw,3rem)] md:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <span className="font-cin text-sm font-semibold tracking-[.3em] text-moss">III</span>
          <h2 className="mt-2 font-cin text-[clamp(2.4rem,7.5vw,6rem)] leading-none font-bold tracking-[.06em] uppercase">Écouter</h2>
          <p className="mt-6 mb-7 max-w-[30rem]">L’album <em className="text-bone">The Inner Path</em>, sorti le 4 janvier 2018 : les cinq épisodes, chacun suivi de la chanson qu’il a inspirée.</p>
          <a href={BANDCAMP_ALBUM_URL} target="_blank" rel="noopener noreferrer" className="font-cin text-sm font-semibold tracking-[.16em] uppercase underline underline-offset-[6px]">Ouvrir sur Bandcamp</a>
        </Reveal>
        <Reveal className="border border-bone/20 bg-night/70 p-2">
          <iframe title="The Inner Path, par Seasons, sur Bandcamp" src={player} loading="lazy" className="block h-[472px] w-full border-0 bg-night" />
        </Reveal>
      </div>
    </section>
  );
}
