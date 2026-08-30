import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import site, { rubrykaSlug } from "../site.config";

const origin = "https://www.ciekawa.com.pl";

export const GET: APIRoute = async () => {
  const posts = await getCollection("notatki");
  const pages = ["/", "/notatki/", "/rubryki/", "/redakcja/", "/kontakt/", "/polityka-prywatnosci/", "/regulamin/"];
  const urls = [
    ...pages.map((p) => `${origin}${p}`),
    ...site.rubryki.map((r) => `${origin}/rubryki/${rubrykaSlug(r.name)}/`),
    ...posts.map((p) => `${origin}/notatki/${p.slug}/`),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}
</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
