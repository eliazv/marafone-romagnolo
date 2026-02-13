// Shared articles data for blog components
export const allArticles = [
  {
    id: "tornei-articolo",
    title: "Tornei di Marafone Romagnolo",
    description:
      "Scopri tutti i tornei locali di Marafone Romagnolo nella tua zona. Iscriviti agli eventi, sfida altri appassionati e vivi la tradizione!",
    date: "2026-02-13",
    image: "/img/carte/r-bastoni.png",
    slug: "tornei",
    category: "Eventi",
    isExternalLink: true,
    isCustomPath: true,
    content: `...`, // Will be filled below
  },
  {
    id: "regole-articolo",
    title: "Regole Complete del Marafone",
    description:
      "Scopri tutte le regole ufficiali del Marafone Romagnolo: dalle basi per principianti alle strategie avanzate. Impara a giocare come un vero romagnolo!",
    date: "2026-02-13",
    image: "/img/carte/A- Bastoni.png",
    slug: "regole",
    category: "Regole",
    isExternalLink: true,
    isCustomPath: true,
    content: `...`, // Will be filled below
  },
  {
    id: "beccaccino",
    title: "Beccaccino: La Variante di Ravenna",
    description:
      "Scopri la storia e le tradizioni del Beccaccino, la celebre variante del Marafone diffusa nella zona di Ravenna e dintorni.",
    date: "2026-02-13",
    image: "/img/carte/3-bastoni.png",
    slug: "beccaccino",
    category: "Varianti",
    content: "Articolo sul Beccaccino...",
    isCustomPath: true,
  },
  {
    id: "trionfo",
    title: "Trionfo: Nobiltà e Tradizione a Ferrara",
    description:
      "Il Trionfo rappresenta la versione più antica e 'nobile' del gioco, radicata nella cultura ferrarese e del basso delta del Po.",
    date: "2026-02-13",
    image: "/img/carte/c-coppe.png",
    slug: "trionfo",
    category: "Varianti",
    content: "Articolo sul Trionfo...",
    isCustomPath: true,
  },
  {
    id: "maraffa",
    title: "Maraffa: L'Anima di Cesena",
    description:
      "A Cesena e nel comprensorio cesenate il gioco prende il nome di Maraffa, mantenendo intatto lo spirito competitivo.",
    date: "2026-02-13",
    image: "/img/carte/r-denara.png",
    slug: "maraffa",
    category: "Varianti",
    content: "Articolo sulla Maraffa...",
    isCustomPath: true,
  },
];

// Get only preview articles (first 3) for BlogSection
export const previewArticles = allArticles.slice(0, 3);
