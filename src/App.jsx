import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'

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
         
        </Routes>
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Daily Rewards | Built by Shadin</div>
      </footer>
    </div>
  )
}
