import React, { useState } from "react";
import { FaChevronRight, FaArrowLeft } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import "../scss/profile.scss"
import { NavLink } from "react-router-dom";
import { ProfilData } from "./ProfilData";

function Profile() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="menu-wrapper">
      <div className="profile-header">
        <div className="avatar"></div>
        <div className="user-info">
          <h2>Gul Majid</h2>
          <p>gulkhar.majidova@gmail.com</p>
        </div>
      </div>
      <header className="header-nav">
        <div className="back-icon" onClick={() => setMenuOpen(true)}>
          <FaArrowLeft />
        </div>
      </header>

      {menuOpen && (
        <>
          <div
            className="mobile-blur-overlay"
            onClick={() => setMenuOpen(false)}
          ></div>
          <div className="mobile-port open">
            {ProfilData.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="mobile-item"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
                <span className="arrow">
                  <FaChevronRight />
                </span>
              </NavLink>
            ))}
            <button className="mobile-logout-btn">Log out</button>
          </div>
        </>
      )}
      <Outlet />
    </div>
  );
}

export default Profile;
