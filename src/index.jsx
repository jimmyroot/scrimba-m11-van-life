import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'

// Import pages
// import Home from './pages/Home'
// import About from './pages/About'

function App() {
    return (
        <Router>
            <header>
                <Link className="site-logo" to="/">#VanLife</Link>
                <Nav />
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)