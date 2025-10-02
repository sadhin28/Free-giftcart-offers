import React from 'react'
import { BASE_URL } from '../config'

export default function RobotsPage(){
  const txt = `User-agent: *\nAllow: /\n\nSitemap: ${BASE_URL}/sitemap.xml`
  return (<pre className="robots">{txt}</pre>)
}
