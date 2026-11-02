import { episodes } from '@/data/content';
import Reveal from './Reveal';

export default function Episodes() {
  return (
    <section id="episodes" className="bg-linear-to-b from-ink to-night py-[clamp(4rem,9vw,8rem)]">
      <div className="mx-auto max-w-[1180px] px-[clamp(1.1rem,5vw,3rem)]">
        <span className="font-cin text-sm font-semibold tracking-[.3em] text-moss">II</span>
        <Reveal><h2 className="mt-2 font-cin text-[clamp(2.4rem,7.5vw,6rem)] leading-none font-bold tracking-[.06em] uppercase">Les épisodes</h2></Reveal>
        <ul className="mt-14 grid gap-10 md:grid-cols-2">
          {episodes.map((e, i) => {
            const last = i === episodes.length - 1;
            return (
              <Reveal as="li" key={e.n} className={last ? 'md:col-span-2' : ''}>
                <a href={`https://www.youtube.com/watch?v=${e.videoId}`} target="_blank" rel="noopener noreferrer" aria-label={`Regarder l’épisode ${e.n}, ${e.title}, sur YouTube`} className="group block">
                  <div className={`relative overflow-hidden border border-bone/25 bg-black ${last ? 'aspect-video md:aspect-[21/9]' : 'aspect-video'}`}>
                    <div
                      className="absolute inset-0 bg-cover bg-center brightness-[.8] grayscale-[.55] transition duration-1000 group-hover:scale-105 group-hover:brightness-100 group-hover:grayscale-0"
                      style={{ backgroundImage: `url(https://i.ytimg.com/vi/${e.videoId}/hqdefault.jpg), url(${e.fallback})` }}
                    />
                    <i className="absolute inset-0 m-auto grid size-[4.6rem] place-items-center rounded-full border-[1.5px] border-bone bg-ink/35 backdrop-blur transition group-hover:scale-110 group-hover:bg-moss">
                      <span className="ml-1 border-y-[.68rem] border-l-[1.1rem] border-y-transparent border-l-bone" />
                    </i>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 pt-3.5">
                    <h3 className="font-cin text-lg font-semibold tracking-[.14em] uppercase">{e.title}</h3>
                    <small className="font-cin text-[.72rem] font-semibold tracking-[.2em] whitespace-nowrap text-moss">EP {e.n}</small>
                  </div>
                  {e.blurb && <p className="mt-1.5 max-w-xl text-lg leading-snug text-mist italic">{e.blurb}</p>}
                </a>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
