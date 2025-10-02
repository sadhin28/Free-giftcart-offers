import React from 'react'
import { BASE_URL } from '../config'
import { posts } from '../posts'

export default function SitemapPage(){
  const urls = [
    `${BASE_URL}/`,
    ...posts.map(p => `${BASE_URL}/${p.slug}`)
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url>\n    <loc>${u}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.7</priority>\n  </url>`).join('\n')}\n</urlset>`

  return (<pre className="sitemap" dangerouslySetInnerHTML={{__html: xml}} />)
}
