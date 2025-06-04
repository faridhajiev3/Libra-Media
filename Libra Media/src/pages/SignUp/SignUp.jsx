import React from "react";
// import "../../scss/signup.scss";
import "../../scss/login.scss";
import { NavLink } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

function SignUp() {
  return (
    <>
      <div className="login-container">
        <div className="logo">
          <span className="logo-text">VEN</span>
          <span className="logo-icon">🏙</span>
          <span className="logo-text">DO</span>
        </div>

        <form >
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Name"
              className="login-input"
            />
          </div>


          <div className="input-wrapper">
            <input
              type="tel"
              placeholder="+994"
              className="login-input"
            />
          </div>

          <div className="password-wrapper">
            <input
              placeholder="Password"
              className="login-input"
            />
          </div>

          <a href="#" className="forgot-password">
            Forgot password?
          </a>

          <button type="submit" className="login-button">
            Log in
          </button>
        </form>


        <div className="other-choice">Other choice</div>

        <button className="oauth-button apple" >
          <FaApple /> Continue with Apple
        </button>

        <button className="oauth-button google">
          <FaGoogle /> Continue with Google
        </button>

        <div className="signup">
          No account? <NavLink to="/login">Log in</NavLink>
        </div>
      </div>
    </>
  );
}

export default SignUp;
