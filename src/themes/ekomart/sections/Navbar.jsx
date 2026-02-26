import React, { useState } from "react";


const Navbar = () => {
      const [activeMenu, setActiveMenu] = useState(null);

  return (
   <>
   <nav className="navbar desktop-only">
      <div className="nav-left">
        <a href="#">Home</a>
        <a href="#">About</a>

        { }
        <div
          className="nav-item dropdown-parent"
          onMouseEnter={() => setActiveMenu("shop")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <a href="#">Shop</a>

          <div className={`mega-menu ${activeMenu === "shop" ? "show" : ""}`}>
            <div className="mega-container">
              
              { }
              <div className="mega-column">
                <h4>Shop Layout</h4>
                <a href="#">Shop Grid Sidebar</a>
                <a href="#">Shop List Sidebar</a>
                <a href="#">Shop Top Filter Grid</a>
                <a href="#">Shop Top Filter List</a>
              </div>

              { }
              <div className="mega-column">
                <h4>Shop Details</h4>
                <a href="#">Shop Details</a>
                <a href="#">Shop Details V2</a>
                <a href="#">Shop Details V3</a>
                <a href="#">Shop Details V4</a>
              </div>

              { }
              <div className="mega-column">
                <h4>Product Feature</h4>
                <a href="#">Variable product</a>
                <a href="#">Affiliate product</a>
                <a href="#">Shop Compare</a>
              </div>

              { }
              <div className="mega-column">
                <h4>Shop Others</h4>
                <a href="#">Cart</a>
                <a href="#">Checkout</a>
                <a href="#">Track Order</a>
              </div>

              { }
              <div className="mega-promo">
                <h3>Everyday Fresh & Clean with Our Products</h3>
                <button>Read Details</button>
              </div>

            </div>
          </div>
        </div>

        <a href="#">Vendors</a>
        <a href="#">Pages</a>
        <a href="#">Blog</a>

        <div className="nav-item new-item">
          <span className="new-badge">New</span>
          <a href="#">Dashboard</a>
        </div>

        <a href="#">Contact</a>
      </div>

      <div className="nav-right">
        <span className="trending">Trending Products</span>

        <div className="promo-box">
          <span>Get 30% Discount Now</span>
          <span className="sale-badge">Sale</span>
        </div>
       
       

      </div>
    </nav>

    
    </>
  );
};

export default Navbar;