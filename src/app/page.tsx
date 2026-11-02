import Ash from '@/components/Ash';
import Avis from '@/components/Avis';
import Dock from '@/components/Dock';
import Episodes from '@/components/Episodes';
import Footer from '@/components/Footer';
import Guerre from '@/components/Guerre';
import Hero from '@/components/Hero';
import Oeuvre from '@/components/Oeuvre';
import Playlist from '@/components/Playlist';
import Vines from '@/components/Vines';

export default function Page() {
  return (
    <>
      <Ash />
      <Vines />
      <Dock />
      <main id="top" className="relative z-[3]">
        <Hero />
        <Oeuvre />
        <Episodes />
        <Playlist />
        <Avis />
        <Guerre />
      </main>
      <Footer />
    </>
  );
}
