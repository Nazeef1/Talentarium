import React from 'react';
import './Navbar-horizontal.css'
import { useNavigate } from 'react-router-dom';
const NavBarhorizontal = () => {

    const navigate = useNavigate();
      
    const handleLogoutClick = () => {
    navigate("/"); // Navigate to the Signup page
    };

    return (
        <nav className="navbar-horizontal">
            <label className='logo-horizontal'><a href='#home'>Talentarium</a></label>
            <div className="rightNav">
                <button className="btn btn-sm" onClick={handleLogoutClick}>Log out</button>
            </div>
        </nav>
    );
}

export default NavBarhorizontal;