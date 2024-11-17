import React from "react";
import "./StickyFooterBar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const StickyFooterBar = () => {
  return (
    <div className="sticky-footer-bar">
      <button className="footer-button1">
        <i className="fas fa-search"></i> Search
      </button>
      <button className="footer-button2">
        <i className="fas fa-phone-alt"></i> Contact
      </button>
    </div>
  );
};

export default StickyFooterBar;
