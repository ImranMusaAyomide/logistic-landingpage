import React from "react";
import "./AboutUs.css";
import planeImg from "./assets/plane.svg";
import trainImg from "./assets/train.svg";
import welcomeImg from "./assets/welcome.svg";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-text">
        <div className="aboutus-label">ABOUT US</div>
        <h2 className="aboutus-title">
          Driven by Expertise Built <br />
          <span className="aboutus-title-highlight">for Logistics</span>
        </h2>
        <p className="aboutus-desc">
          As a trusted logistics partner Transport Logistics plays key roles in streamlining global supply chains. From first mile to final destination, we deliver reliable flexible and efficient transport solutions that empower business mobility.
        </p>
        <div className="aboutus-features">
          <div className="aboutus-feature">
            <div className="aboutus-feature-icon">🌍</div>
            <div>
              <div className="aboutus-feature-title">Worldwide Service</div>
              <div className="aboutus-feature-desc">We deliver goods to locations within and across the globe at network you can rely on.</div>
            </div>
          </div>
          <div className="aboutus-feature">
            <div className="aboutus-feature-icon">⏰</div>
            <div>
              <div className="aboutus-feature-title">24/7 Online Support</div>
              <div className="aboutus-feature-desc">Our support team is available round the clock to assist your shipping anywhere.</div>
            </div>
          </div>
        </div>
        <div className="aboutus-cta-row">
          <button className="aboutus-readmore-btn">Read More</button>
          <div className="aboutus-founder">
            <img className="aboutus-founder-img" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Founder" />
            <div>
              <div className="aboutus-founder-name">Adenekan Segun</div>
              <div className="aboutus-founder-role">Co Founder</div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutus-images">
        <div className="aboutus-main-img">
          <img src={planeImg} alt="Airport" />
        </div>
        <div className="aboutus-side-imgs">
          <div className="aboutus-side-img aboutus-side-img-top">
            {/* No suitable local asset for team image, keeping empty or add a placeholder if needed */}
            <div className="aboutus-side-img-overlay">
              <div className="aboutus-rating">
                <span>⭐ 5.0 (3.7k Reviews)</span>
              </div>
              <div className="aboutus-years">
                <span>40+</span>
                <span>Years of Experience</span>
              </div>
              <button className="aboutus-watch-btn">Watch Video</button>
            </div>
          </div>
          <div className="aboutus-side-img aboutus-side-img-bottom">
            <img src={trainImg} alt="Train" />
            <div className="aboutus-side-img-circle">
              <img src={welcomeImg} alt="Welcome" style={{width: '40px', height: '40px', marginBottom: '6px'}} />
              <div>Welcome to our Company Portal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 