import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { loginUser } from '../api'

export default function Login() {

    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [loginStatus, setLoginStatus] = React.useState({state: "idle"})
    const [err, setErr] = React.useState(null)
    
    const location = useLocation()
    const redirect = location.state?.redirect || "/host"
    let navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        
        !(async () => {
            setErr(null)
            setLoginStatus(() => ({state: "submitting"}))
            try {
                const creds = await loginUser(loginFormData)
                localStorage.setItem("loggedIn", true)
                navigate(redirect, { replace: true })
            } catch (err) {
                setErr(err)
            } finally {
                setLoginStatus(() => ({state: "idle"}))
            }
        })()

    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(oldData => ({
            ...oldData,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            {location.state?.message && <p className="login-first">{location.state.message}</p>}
            {err && <p className="login-first">{err.message}</p>}
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input 
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input 
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
            {
                loginStatus.state === "submitting" ? 
                <button disabled={true}>Log in</button> : 
                <button disabled={false}>Log in</button>
            }
            </form>
        </div>
    )
}