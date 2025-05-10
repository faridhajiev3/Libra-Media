import React, { useEffect } from "react";
import "../../scss/login.scss";
import { useDispatch, useSelector } from "react-redux";
import { FaApple } from "react-icons/fa";
import { loginUser } from "../../redux/slice/authSlice";
import { FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loginUser());
  }, [dispatch]);

  // console.log(user)
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

        <a href="#" className="forgot-password">
          Forgot password?
        </a>

        <button className="login-button">Log in</button>

        <div className="other-choice">Other choice</div>

        <button className="oauth-button apple">
          <FaApple /> Continue with Apple
        </button>

        <button className="oauth-button google">
          <FaGoogle /> Continue with Google
        </button>

        <div className="signup">
          No account? <NavLink to="/signup">Sign up</NavLink>
        </div>
      </div>
    </>
  );
}

export default Login;
