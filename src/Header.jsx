import React from "react";
import "./Header.css";

const Header = () => (
  <header className="header-bar">
    <div className="header-left">
      <span className="header-item">
        <i className="fa fa-phone"></i> +1234 567 890
      </span>
      <span className="header-item">
        <i className="fa fa-comment-alt"></i> info@transportlog.com
      </span>
      <span className="header-item">
        <i className="fa fa-map-marker-alt"></i> 8301 Elgin St. Celina, Delaware 10299
      </span>
    </div>
    <div className="header-right">
      <span className="header-item working-hours">
        <i className="fa fa-clock"></i> Mon - Fri: 08:00 - 05:00
      </span>
      <span className="header-social">
        <a href="#"><i className="fa fa-facebook-f"></i></a>
        <a href="#"><i className="fa fa-x-twitter"></i></a>
        <a href="#"><i className="fa fa-pinterest-p"></i></a>
        <a href="#"><i className="fa fa-instagram"></i></a>
      </span>
    </div>
  </header>
);

export default Header; 