import React from 'react';
import './Navbar-vertical.css'

const NavBarVertical = () => {
    return(
        <div class="courses-navbar">
            <ul>
                <li><a class="courses" href="/courses">Courses</a></li>
                <li><a class="dashboard" href="/dashboard">Dashboard</a></li>
            </ul>
        </div>
    );
}

export default NavBarVertical;