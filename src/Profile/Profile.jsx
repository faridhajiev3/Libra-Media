import { NavLink } from 'react-router-dom';
import '../scss/profile.scss';
import { FaChevronRight, FaArrowLeft } from 'react-icons/fa';
import { useState } from 'react';

const menuItems = [
  { name: 'My orders', path: '/my-orders' },
  { name: 'My returns', path: '/my-returns' },
  { name: 'Personal information', path: '/personal-info' },
  { name: 'Addresses', path: '/addresses' },
  { name: 'My payment methods', path: '/payment-methods' },
  { name: 'Terms and conditions', path: '/terms' },
  { name: 'Language', path: '/language' },
];

const Profile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="menu-wrapper">
      <header className="header-nav">
        <div className="back-icon" onClick={() => setMenuOpen(true)}>
          <FaArrowLeft />
        </div>
      </header>

      {menuOpen && (
        <>
          <div className="mobile-blur-overlay" onClick={() => setMenuOpen(false)}></div>
          <div className="mobile-menu open">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="mobile-item"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
                <span className="arrow"><FaChevronRight /></span>
              </NavLink>
            ))}
            <button className="mobile-logout-btn">Log out</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;