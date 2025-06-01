import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiShoppingCart } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import "../../scss/navbar.scss";
import { SidebarData } from "./SidebarData";
import { useDispatch, useSelector } from "react-redux"; 
import { setSearch } from "../../redux/slice/searchSlice";
import { useTranslation } from "react-i18next";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.basket)

  const { i18n, t } = useTranslation();

  return (
    <nav className="navbarmain">
      <div className="navbar-container">
        <div className="nav-content">
          <div className="logoo">
            <NavLink to="/" className="logotext">
              Vendo App
            </NavLink>
          </div>

          <div className="nav-links desktop">
            {SidebarData.map((item, index) => (
              <NavLink key={index} to={item.path} className="nav-li">
                {t(item.nameKey)}
              </NavLink>
            ))}
          </div>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              onChange={(e) => dispatch(setSearch(e.target.value))}
            />
            <CiSearch className="search-icon" />
          </div>
{/* 
          <div className="language-select">
            <button
              onClick={() => i18n.changeLanguage('az')}
              className={i18n.language === 'az' ? 'active-lang' : ''}
            >AZE</button>
            <button
              onClick={() => i18n.changeLanguage('en')}
              className={i18n.language === 'en' ? 'active-lang' : ''}
            >ENG</button>
          </div> */}


          {/* mobile navbar */}

          <div className="mobile-menu-button">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-btn"
            >
              {isMenuOpen ? (
                <IoMdClose className="icon" />
              ) : (
                <RxHamburgerMenu className="icon" />
              )}
            </button>
          </div>
        </div>

        <div className={`nav-links mobile ${isMenuOpen ? "open" : ""}`}>
          {SidebarData.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="nav-li"
              onClick={() => setIsMenuOpen(false)}
            >
              {t(item.nameKey)}
            </NavLink>
          ))}
        </div>


      </div>
    </nav>
  );
}

export default Navbar;
