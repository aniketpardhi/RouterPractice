import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Services</h2>
          <ul>
            <li>Web Design</li>
            <li>Graphic Design</li>
            <li>App Development</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact</h2>
          <p>Email: example@email.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h2>Navigation</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Company</p>
      </div>
    </footer>
  );
};

export default Footer;
