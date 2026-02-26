import { useState } from "react";
import { HoverIconButton, Logo, SearchBar } from "../components";
import Navbar from "./Navbar";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

import { search } from "../../../assets/Ekomart_Assets";

 
const Header = () => {

      const [mobileOpen, setMobileOpen] = useState(false);
      const [mobileDropdown, setMobileDropdown] = useState(null);

  return (
    <header className="header">
  <div className="header-content">
    <Logo />
    <SearchBar />

    <div className="HoverButtonsDiv">
      <HoverIconButton
        iconClass="fa-regular fa-heart"
        buttonName='Wishlist'
        label=""
        count={0}
        
        variant="wishlist"
      >
        <div className="dropdown-content">
          <h4>Wishlist (00)</h4>

          <div className="subtotal-row">
            <span>Sub Total:</span>
            <span>$0.00</span>
          </div>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <p className="shipping-text">
            Spend More <strong>$125.00</strong> to reach
            <strong> Free Shipping</strong>
          </p>

          <button className="primary-btn">View Wishlist</button>
        </div>
      </HoverIconButton>

      <HoverIconButton
        iconClass="fa-solid fa-cart-shopping"
        label=""
        buttonName='Cart'
        count={0}
        variant="cart"
      >
        <div className="dropdown-content">
          <h4>Shopping Cart (00)</h4>

          <div className="subtotal-row">
            <span>Sub Total:</span>
            <span>$0.00</span>
          </div>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <p className="shipping-text">
            Spend More <strong>$125.00</strong> to reach
            <strong> Free Shipping</strong>
          </p>

          <button className="primary-btn">View Cart</button>
        </div>
      </HoverIconButton>

        <div className="searchButton">
          <img src={search} className="searchIcon" alt="searchIcon" />
        </div>

        { }
          <div className="mobile-toggle" onClick={() => setMobileOpen(true)}>
            <FaBars />
          </div>
    </div>

      { }
      <div className={`mobile-sidebar ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <FaTimes onClick={() => setMobileOpen(false)} />
        </div>

        <div className="mobile-menu">
          <a href="#">Home</a>
          <a href="#">About</a>

          { }
          <div
            className="mobile-dropdown"
            onClick={() =>
              setMobileDropdown(
                mobileDropdown === "shop" ? null : "shop"
              )
            }
          >
            <div className="mobile-dropdown-title">
              Shop <FaChevronDown />
            </div>

            {mobileDropdown === "shop" && (
              <div className="mobile-submenu">
                <a href="#">Shop Grid Sidebar</a>
                <a href="#">Shop List Sidebar</a>
                <a href="#">Shop Details</a>
              </div>
            )}
          </div>

          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
      </div>

      { }
      {mobileOpen && (
        <div
          className="overlay"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

  </div>

  <Navbar />
  </header>
  );
};

export default Header;