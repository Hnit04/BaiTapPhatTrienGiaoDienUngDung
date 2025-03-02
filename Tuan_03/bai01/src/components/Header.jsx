import React from "react";
import "./Header.css";
import logo from "../img/chefify.png"; // Import logo
import avatar from "../img/avatar.png"; // Import avatar
import checkIcon from "../img/check.png"; // Import check icon

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <img src={logo} alt="Cheffy Logo" className="logo-img" />
     
      </div>


      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input type="search" placeholder="cakescascasa" />
      </div>


      <nav className="nav">
        <a href="#">What to cook</a>
        <a href="#">Recipes</a>
        <a href="#">Ingredients</a>
        <a href="#">Occasions</a>
        <a href="#">About Us</a>
      </nav>

      <div className="user-actions">
        <button className="recipe-box">
          <img src={checkIcon} alt="Check Icon" className="check-icon" />
          Your Recipe Box
        </button>
        <img src={avatar} alt="User Avatar" className="avatar" />
      </div>
    </header>
  );
}

export default Header;
