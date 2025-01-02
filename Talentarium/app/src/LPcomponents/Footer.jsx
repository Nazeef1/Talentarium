import React from "react";

function Footer() {
  return (
    <footer className="footer-landingPage">
      <div className="footer-left-landingPage">
        <img
          src="/images/Logo.png"
          alt="Website Logo"
          className="footer-logo-landingPage"
        />
        <p>
          Welcome to our platform where knowledge meets opportunity. Join us to
          explore, learn, and grow together.
        </p>
        <div className="social-icons-landingPage">
          <img src="/images/facebook.png" alt="Facebook" />
          <img src="/images/twitter.png" alt="Twitter" />
          <img src="/images/linkedin.png" alt="LinkedIn" />
          <img src="/images/instagram.png" alt="Instagram" />
        </div>
      </div>
      <div className="footer-right-landingPage">
        <div className="footer-column">
          <h4>Categories</h4>
          <ul>
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">Data Science</a>
            </li>
            <li>
              <a href="#">Design</a>
            </li>
            <li>
              <a href="#">Marketing</a>
            </li>
          </ul>
        </div>
        <div className="footer-column-landingPage">
          <h4>Terms</h4>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-column-landingPage">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Email Us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
