import React from 'react'
import "../../scss/login.scss";

function Login() {
  return (
    <>
      <div className="login-container">
      <div className="logo">
        <span className="logo-text">VEN</span>
        <span className="logo-icon">🏙</span>
        <span className="logo-text">DO</span>
      </div>
      <input type="tel" placeholder="+971" className="login-input" />
      <div className="password-wrapper">
  <input
    type="password"
    placeholder="Password"
    className="login-input"
  />
  <span className="show-toggle">Show</span>
</div>

      <a href="#" className="forgot-password">Forgot password?</a>

      <button className="login-button">Log in</button>

      <div className="other-choice">Other choice</div>

      <button className="oauth-button apple">
      <i class="fa-brands fa-apple"></i> Continue with Apple
      </button>

      <button className="oauth-button google">
      <i class="fa-brands fa-google"></i> Continue with Google
      </button>

      <div className="signup">
        No account? <a href="#">Sign up</a>
      </div>
    </div>
    </>
  )
}

export default Login
