export type Episode = {
  n: string;
  title: string;
  videoId: string;
  fallback: string;
  blurb?: string;
};

// Ordre = numérotation des épisodes. La miniature YouTube est chargée en priorité, l'image locale sert de repli.
export const episodes: Episode[] = [
  {
    n: "01",
    title: "Walking",
    videoId: "AeNqC8kaeXo",
    fallback: "/images/birds.jpg",
    blurb: "Le premier pas est le seul qui compte...",
  },
  {
    n: "02",
    title: "Universal Hatred",
    videoId: "8OD-fTqRp2Q",
    fallback: "/images/ep02.jpg",
    blurb:
      "Là où certains ont choisi d'haïr universellement, j'ai choisi d'ignorer, de m'abstenir et de détacher",
  },
  {
    n: "03",
    title: "Those Mountains I Wouldn’t Move",
    videoId: "GxbvnYUR7e4",
    fallback: "/images/ep03.jpg",
    blurb:
      "Courber l'échine et ne jamais s'arrêter, même si il était tentant de céder et de sombrer, ",
  },
  {
    n: "04",
    title: "Crows Procession",
    videoId: "Z8KV6EeEi34",
    fallback: "/images/ep04.jpg",
    blurb: "Nous frêres de la solitude éscortons le chemin des plus isolés",
  },
  {
    n: "05",
    title: "The Laughing Fool",
    videoId: "_pujliGuxiw",
    fallback: "/images/ep05.jpg",
    blurb: "Tu as beau jeu de fuir. Mon rire continura à resonner.",
  },
];

export const BANDCAMP_ALBUM_URL =
  "https://seasonsnovel.bandcamp.com/album/the-inner-path";
export const BANDCAMP_ALBUM_ID = "3843425004";

export const socials = [
  {
    group: "Écouter",
    links: [
      {
        label: "Spotify",
        href: "https://open.spotify.com/show/565UcNhs5unpPMLZTCOCdi",
      },
      {
        label: "Apple Podcasts",
        href: "https://podcasts.apple.com/fr/podcast/seasonsnovel/id1375773659",
      },
      { label: "Deezer", href: "https://www.deezer.com/en/show/1334752" },
      { label: "Bandcamp", href: "https://seasonsnovel.bandcamp.com" },
      { label: "PodCloud", href: "https://seasons.lepodcast.fr/" },
    ],
  },
  {
    group: "Suivre",
    links: [
      { label: "YouTube", href: "https://www.youtube.com/seasonsnovel" },
      { label: "Instagram", href: "https://www.instagram.com/seasonsnovel/" },
      {
        label: "Bluesky",
        href: "https://www.bsky.app/profile/seasonsnovel.ficson.fr",
      },
      { label: "Facebook", href: "https://www.facebook.com/seasonsnovel" },
    ],
  },
];
