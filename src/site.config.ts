const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${Math.round(w * 0.65)}&q=80`;

const site = {
  name: "Ciekawa",
  domain: "ciekawa.com.pl",
  tagline: "Skoroszyt rzeczy, które warto przeczytać w tramwaju — bez clickbaitu i bez moralizowania",
  city: "Łódź",
  address: "ul. Piotrkowska 86/2, 90-105 Łódź",
  issue: "nr 07 · 2026",
  author: "Marta Cieśla",
  authorBio: "Zbiera ciekawostki jak ktoś inny znaczki. Pisze krótko, zostawia miejsce na Twoje własne „a propos”.",
  authorRole: "Redakcja skoroszytu",
  authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80",
  heroImage: u("photo-1456513080510-7bf3a84b82f8", 1400),
  covers: {
    Codzienność: u("photo-1499750310157-fd0e02f4c87c"),
    Miasto: u("photo-1449824913935-59a10b8d2000"),
    "Nauka lite": u("photo-1532012197268-da8011a104fd"),
    Ludzie: u("photo-1529156069898-49953e39b3ac"),
    Rzeczy: u("photo-1586023492125-27b2c045efd7"),
    default: u("photo-1507003211169-0a1dd7228f2d"),
  } as Record<string, string>,
  rubryki: [
    { name: "Codzienność", blurb: "Małe obserwacje z kuchni, korytarza i kolejki." },
    { name: "Miasto", blurb: "Łódź i inne miejsca — detale, które mijamy na autopilocie." },
    { name: "Nauka lite", blurb: "Fakty bez wykładu: krótko, z kontekstem, bez egzaminu." },
    { name: "Ludzie", blurb: "Historie zwykłych decyzji, nie biografii celebrytów." },
    { name: "Rzeczy", blurb: "Przedmioty, które coś mówią o naszych nawykach." },
  ],
};

export function rubrykaSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/ą/g, "a").replace(/ć/g, "c").replace(/ę/g, "e")
    .replace(/ł/g, "l").replace(/ń/g, "n").replace(/ó/g, "o")
    .replace(/ś/g, "s").replace(/ź|ż/g, "z")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function coverFor(rubryka?: string, image?: string) {
  if (image && !image.includes("source.unsplash.com")) return image;
  return site.covers[rubryka || ""] || site.covers.default;
}

export default site;
