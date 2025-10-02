import { BASE_URL } from "../config";

export default function handler(req, res) {
  const txt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/api/sitemap.xml`;

  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(txt);
}
