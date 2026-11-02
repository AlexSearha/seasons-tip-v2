import Reveal from './Reveal';

export default function Avis() {
  return (
    <section id="avis" className="relative overflow-hidden py-[clamp(5rem,12vw,11rem)]">
      <div aria-hidden className="fade-y absolute inset-0 bg-cover bg-center opacity-50 saturate-[.8]" style={{ backgroundImage: 'url(/images/birds.jpg)' }} />
      <div className="relative mx-auto max-w-[1180px] px-[clamp(1.1rem,5vw,3rem)]">
        <span className="font-cin text-sm font-semibold tracking-[.3em] text-moss">IV</span>
        <Reveal><h2 className="mt-2 font-cin text-[clamp(2.4rem,7.5vw,6rem)] leading-none font-bold tracking-[.06em] uppercase">Ce qu’on en dit</h2></Reveal>
        <Reveal as="figure" className="mt-10 max-w-5xl">
          <blockquote className="text-[clamp(2.4rem,7vw,5.6rem)] leading-[1.05] italic [text-shadow:0_4px_40px_rgba(0,0,0,.7)]">« poétique, violent, immersif, prenant »</blockquote>
          <figcaption className="mt-7 font-cin text-xs font-semibold tracking-[.2em] text-mist uppercase">
            Studio TJP, revue d’été des fictions sonores, 2018.{' '}
            <a className="underline underline-offset-4" href="https://www.studiotjp.com/seasons-the-inner-path-review-dete-des-fictions-sonores-2018-episode-05/" target="_blank" rel="noopener noreferrer">Lire l’article</a>
          </figcaption>
        </Reveal>
      </div>
    </section>
  );
}
