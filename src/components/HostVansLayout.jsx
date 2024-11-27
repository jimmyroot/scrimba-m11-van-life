import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HostVansLayout({ currentVan }) {

    return ( 
        <>
            <nav className="host-van-detail-nav">
                <NavLink to={`.`} className={({isActive}) => isActive ? 'nav-active' : undefined} end>Details</NavLink>
                <NavLink to={`pricing`} className={({isActive}) => isActive ? 'nav-active' : undefined} >Pricing</NavLink>
                <NavLink to={`photos`} className={({isActive}) => isActive ? 'nav-active' : undefined} >Photos</NavLink>
            </nav>
            <Outlet context={currentVan}/>
        </>
    )
}