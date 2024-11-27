import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link, Outlet, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/vans/Vans'
import VanDetail from './pages/vans/VanDetail'
import Income from './pages/host/income'
import Reviews from './pages/host/reviews'
import Layout from './components/Layout'
import HostVans from './pages/host/HostVans'
import HostVanDetail from './pages/host/HostVanDetail'
import HostLayout from './components/HostLayout'
import Dashboard from './pages/host/Dashboard'
import HostVanPricing from './pages/host/HostVanPricing'
import HostVanPhotos from './pages/host/HostVanPhotos'
import HostVanInfo from './pages/host/HostVanInfo'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import AuthRequired from './components/AuthRequired'

// Mirage JS
import '../server'
import Footer from './components/Footer'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="vans" element={<Vans />} />
                    <Route path="vans/:id" element={<VanDetail />} />
                    <Route path="login" element={<Login />} />
                    
                    {/* Protected routes */}
                    <Route element={<AuthRequired />} >
                        <Route path="host" element={<HostLayout />} >
                            <Route index element={<Dashboard />} />
                            <Route path="income" element={<Income />} />
                            <Route path="reviews" element={<Reviews />} />
                            <Route path="vans" element={<HostVans />} />
                            <Route path="vans/:id" element={<HostVanDetail />} >
                                <Route index element={<HostVanInfo />} />
                                <Route path="pricing" element={<HostVanPricing />} />
                                <Route path="photos" element={<HostVanPhotos />} />
                            </Route>
                        </Route>
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)