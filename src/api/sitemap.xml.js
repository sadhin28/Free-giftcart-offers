import { BASE_URL } from "../config";
import { posts } from "../posts";

export default function handler(req, res) {
  const urls = [
    `${BASE_URL}/`,
    ...posts.map(p => `${BASE_URL}/${p.slug}`)
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(xml);
}
