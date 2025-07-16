import React from 'react';
import './HeaderBelow.css';

const HeaderBelow = () => {
  return (
    <div className="header-below-bar">
      <div className="header-below-logo">
        <span className="logo-main">transport</span>
        <span className="logo-sub">Logistic</span>
      </div>
      <div className="header-below-links">
        <a href="#" className="active">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
        <a href="#">Team</a>
        <a href="#">Blog</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="header-below-cart-btn">
        <div className="cart-icon">
          <span className="cart-badge">2</span>
          <span role="img" aria-label="cart">🛒</span>
        </div>
        <button className="track-order-btn">Track Your Order</button>
      </div>
    </div>
  );
};

export default HeaderBelow; 