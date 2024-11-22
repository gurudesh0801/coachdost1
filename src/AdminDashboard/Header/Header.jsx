import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search Dashboard" />
        <i className="fas fa-search"></i>
      </div>
      <div className="header-icons">
        <div className="icon">
          <i className="fas fa-bell"></i>
          <span className="badge">3</span>
        </div>
        <div className="icon">
          <i className="fas fa-envelope"></i>
          <span className="badge">5</span>
        </div>
        <div className="profile-icon">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="profile-img"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
