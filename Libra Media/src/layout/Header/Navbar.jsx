import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiShoppingCart } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import "../../scss/navbar.scss";
import { SidebarData } from "./SidebarData";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/slice/searchSlice";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            <NavLink to="/" className="logo-text">
              Vendo App
            </NavLink>
          </div>

          <div className="nav-links desktop">
            {SidebarData.map((item, index) => (
              <NavLink key={index} to={item.path} className="nav-link">
                {item.name}
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
            <NavLink to="/cart">
              <TiShoppingCart className="basket-cart" />
            </NavLink>
          </div>

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

        {isMenuOpen &&
          SidebarData.map((item, index) => (
            <div className="nav-links mobile" key={index}>
              <NavLink
                to={item.path}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            </div>
          ))}
      </div>
    </nav>
  );
}

export default Navbar;
