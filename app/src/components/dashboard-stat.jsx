import React from 'react';
import './dashboard-stat.css';

const StatusBar = ({ completedCount, ongoingCount }) => {
    return(
        <div className="stat-dashboard">
            <div className="stats">
                <div className="stat-card">
                    <h2>Courses Completed</h2>
                    <p>{completedCount}</p>
                </div>
                <div className="stat-card">
                    <h2>Ongoing Courses</h2>
                    <p>{ongoingCount}</p>
                </div>
            </div>
        </div>
    );
}

export default StatusBar;
