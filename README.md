# The Inner Path : site Next.js 16 + Tailwind CSS 4

    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Où modifier
- `src/data/content.ts` : épisodes (ordre, titres, IDs YouTube), album Bandcamp, liens Écouter / Suivre.
- `src/components/*` : une section par composant (Hero, Oeuvre, Episodes, Playlist, Avis, Guerre, Footer).
- `src/app/globals.css` : palette (`@theme`), grain, animations.
- `public/images/` : visuels. Les miniatures YouTube sont chargées en priorité, ces images servent de repli.
