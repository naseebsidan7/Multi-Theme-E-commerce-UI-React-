import { useState } from "react";
import { HoverIconButton, Logo, SearchBar } from "../components";
import Navbar from "./Navbar";

import Hamburger from "../components/Hamburger";

 
const Header = () => {


  return (
    <header className="header">
  <div className="header-content">
    <Logo />
    <Hamburger />
    <SearchBar />

    <div className="HoverButtonsDiv">
      <HoverIconButton
        iconClass="fa-regular fa-heart"
        buttonName='Wishlist'
        label=""
        count={0}
        
        variant="wishlist"
      >
      
      </HoverIconButton>

      <HoverIconButton
        iconClass="fa-solid fa-cart-shopping"
        label=""
        buttonName='Cart'
        count={2}
        variant="cart"
      >
      
      </HoverIconButton>

        
        <div className="cartPrice" >
            <p>$1785.00</p>
        </div>

  
    </div>

    

  </div>

  <Navbar />
  </header>
  );
};

export default Header;