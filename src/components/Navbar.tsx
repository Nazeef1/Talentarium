import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="header-landingPage">
      <nav className="nav-landingPage">
        <div className="logo-landingPage">
          <img src="/images/Blue Simple Education Logo.png" alt="Logo" />
        </div>
        <div className="links-landingPage">
          <ul className="nav-links-landingPage">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
          </ul>
          <div className="auth-buttons-landingPage">
            <a href="#" className="login-btn-landingPage">
              Login
            </a>
            <a href="#" className="signup-btn-landingPage">
              Signup
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
