import React from 'react';
import './herosection.css';
import bgImg from './assets/background-img-hero-section.svg';

const HeroSection = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="hero-content">
        <div className="hero-top-row">
          <span className="hero-dot" />
          <span className="hero-subtitle">Delivering Smarter Logistics Solutions.</span>
        </div>
        <h1 className="hero-title">Reliable Transport.<br/>On Time. Every<br/>Time.</h1>
        <p className="hero-desc">
          At Transport Logistics, we specialize in fast, secure, and cost-effective shipping solutions – from local deliveries to cross border logistics. Your cargo, our commitment.
        </p>
        <div className="hero-actions">
          <button className="hero-quote-btn">Get A Free Quote</button>
          <div className="hero-customers">
            {/* Placeholder for avatars */}
            <div className="hero-avatars">
              <span className="avatar avatar-1" />
              <span className="avatar avatar-2" />
              <span className="avatar avatar-3" />
            </div>
            <div className="hero-reviews">
              <span className="hero-review-label">Satisfied Customers</span>
              <span className="hero-review-count">4.8/5k (Review)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 