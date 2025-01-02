import React from 'react';
import './Navbar-horizontal.css'

const NavBarhorizontal = () => {
    return (
        <nav className="navbar-horizontal">
            <label className='logo-horizontal'><a href='#home'>Talentarium</a></label>
            <div className="rightNav">
                <button className="btn btn-sm">Log out</button>
            </div>
        </nav>
    );
}

export default NavBarhorizontal;