const links = [
  { href: '#oeuvre', label: 'L’œuvre' },
  { href: '#episodes', label: 'Épisodes' },
  { href: '#playlist', label: 'Écouter' },
  { href: '#avis', label: 'Avis' },
  { href: '#guerre', label: 'Guerre' },
];

export default function Dock() {
  return (
    <nav aria-label="Navigation" className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] left-1/2 z-[95] flex -translate-x-1/2 gap-0.5 border border-bone/25 bg-ink/80 p-1 backdrop-blur-xl">
      {links.map((l) => (
        <a key={l.href} href={l.href} className="px-2.5 py-3 font-cin text-[.62rem] font-semibold tracking-[.08em] whitespace-nowrap uppercase transition hover:bg-bone hover:text-ink sm:px-4 sm:text-[.72rem] sm:tracking-[.14em]">
          {l.label}
        </a>
      ))}
    </nav>
  );
}
