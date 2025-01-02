import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  
  const handleEnrollNowClick = () => {
    navigate("/signup"); // Navigate to the Signup page
  };
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
              <Link to="/coursesLP">Courses</Link>
            </li>
          </ul>
          <div className="auth-buttons-landingPage">
            <a href="#" className="login-btn-landingPage" onClick={handleEnrollNowClick}>
              Login
            </a>
            <a href="#" className="signup-btn-landingPage" onClick={handleEnrollNowClick}>
              Signup
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
