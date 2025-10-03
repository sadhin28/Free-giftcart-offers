import React from 'react'
import { useParams } from 'react-router-dom'
import { posts } from '../posts'

import { Helmet } from 'react-helmet'

export default function Post(){
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  if(!post) return <h2>Post not found</h2>
  return (
    <article className="post">
      <Helmet>
        <title>{post.title} | Free Rewards</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <a href='https://locked-content.com/?68d8722' target="_blank" rel="noopener noreferrer" className="btn-claim">Claim Offer</a>
    </article>
  )
}
