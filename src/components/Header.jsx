import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import avatarURL from "../assets/images/avatar-icon.png"

export default function Header() {

    function fakeLogOut() {
        localStorage.removeItem("loggedIn")
        console.log(localStorage.getItem("loggedIn"))
    }

    return (
        <header>    
                <Link className="site-logo" to="/">#VanLife</Link>
                <nav>
                    <NavLink to="/host" className={({isActive}) => isActive ? 'nav-active' : undefined}>Host</NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? 'nav-active' : undefined}>About</NavLink>
                    <NavLink to="/vans" className={({isActive}) => isActive ? 'nav-active' : undefined}>Vans</NavLink>
                    <NavLink to="/login" className={({isActive}) => isActive ? 'nav-active' : undefined}>
                        <img src={avatarURL} className="login-icon" />
                    </NavLink>
                    <button onClick={fakeLogOut}>✖</button>
                </nav>
        </header>
    )
}