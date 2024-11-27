import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export default function AuthRequired() {
    const isLoggedIn = localStorage.getItem("loggedIn")
    const location = useLocation()

    return isLoggedIn ? 
        <Outlet /> :
        <Navigate 
            to="/login"
            state={{
                message: "You need to log in first!",
                redirect: location.pathname}}
            replace
        />
}