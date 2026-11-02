import type { Metadata, Viewport } from 'next';
import { Cinzel, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600'], style: ['normal', 'italic'], variable: '--font-cormorant' });

export const metadata: Metadata = {
  title: 'The Inner Path : une fiction musicale par Seasons',
  description:
    'Chris fuit la civilisation. Sur sa route, il croise Neil, un vieil homme qui arpente les chemins depuis bien longtemps. Une fiction audio musicale, entre musique symphonique et Metal progressif.',
};
export const viewport: Viewport = { themeColor: '#07090c', viewportFit: 'cover' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cinzel.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
