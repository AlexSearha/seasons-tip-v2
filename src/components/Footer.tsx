import Image from 'next/image';
import { socials } from '@/data/content';

export default function Footer() {
  return (
    <footer className="relative z-[7] overflow-hidden border-t border-bone/15 bg-ink pt-16 pb-28">
      <Image src="/images/logo-seasons.png" alt="" aria-hidden width={571} height={620} className="pointer-events-none absolute top-1/2 -right-12 h-104 w-auto -translate-y-1/2 opacity-10" />
      <div className="relative mx-auto flex max-w-[1180px] flex-wrap items-end justify-between gap-8 px-[clamp(1.1rem,5vw,3rem)]">
        <div>
          <p className="font-cin text-3xl font-bold tracking-[.2em] uppercase">Seasons</p>
          <p className="mt-1.5 max-w-[26rem] text-mist italic">Des fictions audio musicales, par ego et Alex. Prochain projet : GUERRE.</p>
        </div>
        <div className="flex flex-col gap-5 max-md:items-start md:items-end">
          <nav aria-label="Écouter et suivre Seasons" className="flex gap-14">
            {socials.map((s) => (
              <div key={s.group} className="flex flex-col items-start">
                <h2 className="mb-2 font-cin text-[.7rem] font-semibold tracking-[.3em] text-moss uppercase">{s.group}</h2>
                {s.links.map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="border-b border-transparent py-1.5 font-cin text-xs font-semibold tracking-[.16em] text-mist uppercase transition hover:border-moss hover:text-bone">{l.label}</a>
                ))}
              </div>
            ))}
          </nav>
          <p className="font-cin text-xs font-semibold tracking-[.16em] text-mist uppercase">©{new Date().getFullYear()} Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}
