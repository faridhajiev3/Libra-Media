import React from 'react'
import "../../scss/signup.scss";

function SignUp() {
  return (
    <>
       <div className="login-container">
      <div className="logo">
        <span className="logo-text">VEN</span>
        <span className="logo-icon">🏙</span>
        <span className="logo-text">DO</span>
      </div>
      <input type="tel" placeholder="Full name" className="login-input" />
      <input type="tel" placeholder="+971" className="login-input" />
      <div className="password-wrapper">
  <input
    type="password"
    placeholder="Password"
    className="login-input"
  />
  <span className="show-toggle">Show</span>
</div>
     

      <button className="login-button">Sign Up</button>

      <div className="other-choice">Other choice</div>

      <button className="oauth-button apple">
      <i class="fa-brands fa-apple"></i> Continue with Apple
      </button>

      <button className="oauth-button google">
      <i class="fa-brands fa-google"></i>Continue with Google
      </button>

      <div className="signup">
        Already registered <a href="#">Log in</a>
      </div>
    </div>
    </>
  )
}

export default SignUp
