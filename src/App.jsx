import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'
import RobotsPage from './pages/RobotsPage'

export default function App(){
  return (
    <div className="app-root">
      <nav className="nav">
        <div className="container">
          <Link to="/" className="logo">Daily Rewards</Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
          </div>
        </div>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<Post />} />
          <Route path="/sitemap.xml" element={<SitemapPage />} />
          <Route path="/robots.txt" element={<RobotsPage />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Daily Rewards | Built by Shadin</div>
      </footer>
    </div>
  )
}
