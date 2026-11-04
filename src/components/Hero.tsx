"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const chips = [
  "Musique orchestrale et Metal progressif",
  "Visuels dessinés",
  "Chemin initiatique",
];

export default function Hero() {
  const plate = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => {
      if (plate.current && scrollY < innerHeight * 1.3)
        plate.current.style.marginTop = `${scrollY * 0.18}px`;
    };
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="relative flex min-h-svh items-center justify-center overflow-hidden px-4 pt-20 pb-28 text-center">
      <div
        ref={plate}
        aria-hidden
        className="plate absolute -inset-[6%] bg-cover bg-center brightness-[.78] contrast-[1.12] grayscale-[.45]"
        style={{ backgroundImage: "url(/images/hero.jpg)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,12,.7),rgba(7,9,12,.28)_38%,rgba(7,9,12,.5)_70%,var(--color-ink)),radial-gradient(ellipse_at_50%_38%,rgba(7,9,12,.45),transparent_70%)]"
      />
      <div className="relative z-[5] flex max-w-4xl flex-col items-center">
        <Image
          src="/images/logo-seasons.png"
          alt="Seasons"
          width={571}
          height={620}
          priority
          className="h-16 w-auto opacity-95"
        />
        <p className="mt-4 font-cin text-sm font-semibold tracking-[.3em] text-mist uppercase">
          Une fiction musicale post-apocalyptique
        </p>
        <h1 className="mt-3 font-cin text-[clamp(2.7rem,9.5vw,8rem)] leading-none font-bold tracking-[.07em] uppercase [text-shadow:0_4px_40px_rgba(0,0,0,.7)]">
          The Inner Path
        </h1>
        <p className="mt-6 max-w-xl text-[clamp(1.3rem,2.2vw,1.65rem)] leading-snug [text-shadow:0_2px_20px_rgba(0,0,0,.8)]">
          Chris fuit la civilisation. Sur sa route, il croise Neil, un vieil
          homme qui arpente les chemins depuis bien longtemps. Ensemble, ils
          entament un voyage initiatique dans un monde en ruines que la nature
          reprend peu à peu.
        </p>
        <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
          {chips.map((c) => (
            <li
              key={c}
              className="border border-bone/40 bg-ink/45 px-3.5 py-2 font-cin text-[.72rem] font-semibold tracking-[.16em] uppercase backdrop-blur-md"
            >
              {c}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <a
            href="#episodes"
            className="inline-flex min-h-12 items-center bg-bone px-7 py-3 font-cin text-sm font-bold tracking-[.16em] text-ink uppercase transition hover:bg-moss"
          >
            Regarder les épisodes
          </a>
          <a
            href="#oeuvre"
            className="font-cin text-sm font-semibold tracking-[.16em] uppercase underline underline-offset-[6px]"
          >
            Découvrir l’œuvre
          </a>
        </div>
      </div>
    </header>
  );
}
