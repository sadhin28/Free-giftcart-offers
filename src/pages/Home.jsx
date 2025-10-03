import React from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../posts'

export default function Home(){
  return (
    <section className="home">
      <h1>ফ্রি রিওয়ার্ড & কুপন ব্লগ</h1>
      <p>ফ্রি গিফট কার্ড, কুপন এবং রিওয়ার্ড পাওয়ার সহজ উপায়</p>

      <div className="posts bg-red-200">
        {posts.map(p => (
          <article key={p.id} className="card">
            <h3>{p.title}</h3>
            <p>{p.excerpt}</p>
            <Link to={`/${p.slug}`} className="btn">Read & Claim</Link>
          </article>
        ))}
      </div>
    </section>
  )
}
