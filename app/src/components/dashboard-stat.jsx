import React from 'react';
import './dashboard-stat.css';

const StatusBar = () => {
    return(
        <div class="stat-dashboard">
            <div class="stats">
                <div class="stat-card">
                    <h2>Courses Completed</h2>
                    <p>5</p>
                </div>
                <div class="stat-card">
                    <h2>Ongoing Courses</h2>
                    <p>3</p>
                </div>
            </div>
      </div>
    );
}

export default StatusBar;