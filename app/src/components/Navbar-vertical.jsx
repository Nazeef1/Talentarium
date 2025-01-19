import React from 'react';
import './Navbar-vertical.css'

const NavBarVertical = () => {
    return(
        <div class="courses-navbar">
            <ul>
                <li><a class="Dashboard" href="/courses">Dashboard</a></li>
                <li><a class="Courses" href="/dashboard">Courses</a></li>
            </ul>
        </div>
    );
}

export default NavBarVertical;