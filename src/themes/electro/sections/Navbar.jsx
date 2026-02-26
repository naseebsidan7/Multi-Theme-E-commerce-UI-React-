import { useState } from "react";
import { FaBars, FaChevronDown, FaChevronRight } from "react-icons/fa";
 
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    { name: "Value of the Day", hasSub: false },
    { name: "Top 100 Offers", hasSub: false },
    { name: "New Arrivals", hasSub: false },
    { name: "Computers & Accessories", hasSub: true },
    { name: "Cameras, Audio & Video", hasSub: true },
    { name: "Mobiles & Tablets", hasSub: true },
    { name: "Movies, Music & Video Game", hasSub: true },
    { name: "TV & Audio", hasSub: true },
    { name: "Watches & Eyewear", hasSub: true },
    { name: "Car, Motorbike & Industrial", hasSub: true },
    { name: "Accessories", hasSub: true },
  ];

  return (
    <nav className="secondary-nav">
      <div className="nav-container">
        { }
        <div className="departments-wrapper">
          <div 
            className="departments-trigger" 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <FaBars className="menu-icon" />
            <span>All Departments</span>
          </div>

          { }
          {isDropdownOpen && (
            <div className="vertical-menu">
              {categories.map((cat, index) => (
                <div key={index} className="menu-item">
                  <span className={index < 3 ? "bold-text" : ""}>{cat.name}</span>
                  {cat.hasSub && <FaChevronRight className="arrow-icon" />}
                </div>
              ))}
            </div>
          )}
        </div>

        { }
        <ul className="nav-links">
          <li className="super-deals">
            Super Deals <FaChevronDown className="chevron-down" />
          </li>
          <li>Featured Brands</li>
          <li>Trending Styles</li>
          <li>Gift Cards</li>
        </ul>

        { }
        <div className="shipping-text">
          Free Shipping on Orders $50+
        </div>
      </div>
    </nav>
  );
};

export default Navbar;