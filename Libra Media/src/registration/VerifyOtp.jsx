import React from 'react'
import { NavLink } from 'react-router-dom'

function VerifyOtp() {
    return (
        <div className="login-container">
            <div className="logo">
                <span className="logo-text">OTP</span>
            </div>
            <p>We have sent SMS code to your mobile phone number: +9947777777</p>
            <form >
                <div className="input-box">
                    {/* <input
                        type="tel"
                        placeholder="+994"
                        className="login-input"
                    /> */}
                    <div className='inputNumber'>1</div>
                    <div className='inputNumber'>2</div>
                    <div className='inputNumber'>3</div>
                    <div className='inputNumber'>4</div>
                </div>

                <button type="submit" className="login-button">
                    Send OTP
                </button>
            </form>



            <div className="signup">
                Didn’t receive a code? <NavLink>Request again</NavLink>
            </div>
        </div>
    )
}

export default VerifyOtp