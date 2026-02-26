import { FaTimes, FaChevronDown } from "react-icons/fa";
import { hamburger } from '../../../assets/Electro_Assets';
import { useState } from "react";
import Logo from "./Logo";

const Hamburger = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  const categories = [
    "Computers & Accessories",
    "Cameras, Audio & Video",
    "Mobiles & Tablets",
    "Movies, Music & Video",
    "TV & Audio",
    "Watches & Eyewear",
    "Car, Motorbike & Industrial",
    "Accessories"
  ];

  return (
    <div className='hamburger_wrapper'>
      { }
      <div className="mobile-toggle" onClick={() => setMobileOpen(true)}>
        <img className='hamburger' src={hamburger} alt="hamburger" />
      </div>

      { }
      <div className={`mobile-sidebar ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <Logo />
          <FaTimes className="closebtn" onClick={() => setMobileOpen(false)} />
        </div>

        <div className="mobile-menu-content">
          { }
          <nav className="primary-nav">
            <a href="#" className="nav-bold">Value of the Day</a>
            <a href="#" className="nav-bold">Top 100 Offers</a>
            <a href="#" className="nav-bold">New Arrivals</a>
          </nav>

          <div className="divider"></div>

          { }
          <div className="categories-list">
            {categories.map((cat) => (
              <div key={cat} className="category-item" onClick={() => toggleDropdown(cat)}>
                <span>{cat}</span>
                <FaChevronDown className={`chevron ${mobileDropdown === cat ? 'rotate' : ''}`} />
              </div>
            ))}
          </div>
        </div>

        { }
        <div className="sidebar-footer">
          <div className="wave-bg"></div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <span className="info-icon">i</span>
          </div>
        </div>
      </div>

      { }
      {mobileOpen && <div className="overlay" onClick={() => setMobileOpen(false)}></div>}
    </div>
  );
};

export default Hamburger;