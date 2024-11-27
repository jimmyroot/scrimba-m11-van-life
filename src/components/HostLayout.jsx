import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HostLayout() {
    return (
        <>
            <nav className="host-nav">
                <NavLink to="." className={({isActive}) => isActive ? 'nav-active' : undefined} end>Dashboard</NavLink>
                <NavLink to="income" className={({isActive}) => isActive ? 'nav-active' : undefined}>Income</NavLink>
                <NavLink to="vans" className={({isActive}) => isActive ? 'nav-active' : undefined}>Vans</NavLink>
                <NavLink to="reviews" className={({isActive}) => isActive ? 'nav-active' : undefined}>Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    )
}