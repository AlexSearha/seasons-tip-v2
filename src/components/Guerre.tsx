import Reveal from './Reveal';

export default function Guerre() {
  return (
    <section id="guerre" className="relative overflow-hidden bg-cover bg-top py-[clamp(6rem,14vw,12rem)] text-center" style={{ backgroundImage: 'url(/images/war.jpg)' }}>
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(var(--color-ink),rgba(7,9,12,.45)_25%,rgba(7,9,12,.7)_75%,var(--color-ink)),radial-gradient(ellipse_60%_50%_at_50%_55%,rgba(180,73,43,.38),transparent_70%)]" />
      <div className="relative mx-auto max-w-[1180px] px-[clamp(1.1rem,5vw,3rem)]">
        <span className="font-cin text-sm font-semibold tracking-[.3em] text-[#d8896b]">V</span>
        <p className="font-cin text-sm font-semibold tracking-[.3em] text-[#d8896b] uppercase">Prochain projet</p>
        <Reveal><p aria-label="Guerre" className="mt-5 font-cin text-[clamp(3.4rem,17vw,15rem)] leading-[.95] font-bold tracking-[.06em] [text-shadow:0_0_80px_rgba(180,73,43,.55)]">Guerre</p></Reveal>
        <p className="mx-auto mt-6 max-w-xl">Le prochain chapitre est en cours de création. D’ici là, la route continue ici.</p>
        <a href="https://www.youtube.com/seasonsnovel" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center bg-bone px-7 py-3 font-cin text-sm font-bold tracking-[.16em] text-ink uppercase transition hover:bg-moss">Suivre la chaîne YouTube</a>
      </div>
    </section>
  );
}
