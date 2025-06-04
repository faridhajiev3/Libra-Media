import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Forgot() {
    const navigate = useNavigate()
    return (
        <div className="login-container">
            <div className="logo">
                <span className="logo-text">Forgot</span>
                <span className="logo-icon">🏙</span>
                <span className="logo-text">Password</span>
            </div>

            <form >
                <div className="input-wrapper">
                    <input
                        type="tel"
                        placeholder="+994"
                        className="login-input"
                    />
                </div>

                <button onClick={()=>navigate("/otp")} type="submit" className="login-button">
                    Send OTP
                </button>
            </form>



            <div className="signup">
                Back to <NavLink to="/login">Log in</NavLink>
            </div>
        </div>
    )
}

export default Forgot