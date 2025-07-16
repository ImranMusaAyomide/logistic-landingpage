import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-newsletter">
        <h2>Subscribe To Our Newsletter &nbsp;To<br/>Get Latest Update</h2>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-main">
        <div className="footer-about">
          <div className="footer-logo">
            <span className="footer-logo-orange">transport</span>
            <span className="footer-logo-white"> Logistic</span>
          </div>
          <p>We are a dedicated logistics provider offering fast, secure, and global transport solutions tailored to meet your business needs.</p>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Support (FAQ)</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-services">
          <h4>Our Services</h4>
          <ul>
            <li>International Shipping</li>
            <li>Ocean Freight</li>
            <li>Atlantic Pacific move</li>
            <li>Road Mass</li>
            <li>Local Truck Transport</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Official Info</h4>
          <ul>
            <li><i className="fas fa-phone"></i> (254)87 790570</li>
            <li><i className="fas fa-phone"></i> (254)87 790570</li>
            <li><i className="fas fa-envelope"></i> example@gmail.com</li>
            <li><i className="fas fa-envelope"></i> example@outlook.com</li>
            <li><i className="fas fa-map-marker-alt"></i> 4409 Washington Ave. Manchester, 120231</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <div className="footer-bottom-content">
          <span>2023 Transport Logistics. All right and reserved | Efficient Reliable Global.</span>
          <div className="footer-bottom-links">
            <a href="#">Support</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy and Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
