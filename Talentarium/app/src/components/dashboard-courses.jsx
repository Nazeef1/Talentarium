import React from "react";
import './dashboard-courses.css';
import { Link } from 'react-router-dom';

const DashboardCourses = () => {
    
    return (
        <>
            <div className="course-section">
                <h2>Ongoing Courses</h2>
                <ul className="course-list">
                    <li className="course-item">
                        <h3>Introduction to Python</h3>
                        <div className="progress-bar-container">
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '70%' }}></div>
                            </div>
                        </div>
                        <Link to="/course/1" className="continue-button">Continue</Link>
                    </li>
                    <li className="course-item">
                        <h3>Web Development Basics</h3>
                        <div className="progress-bar-container">
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '50%' }}></div>
                            </div>
                        </div>
                        <Link to="/course/2" className="continue-button">Continue</Link>
                    </li>
                    <li className="course-item">
                        <h3>Data Science Essentials</h3>
                        <div className="progress-bar-container">
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '30%' }}></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="course-section">
                <h2>Completed Courses</h2>
                <ul className="course-list">
                    <li className="course-item">
                        <h3>Java For Beginners</h3>
                    </li>
                    <li className="course-item">
                        <h3>Machine Learning Basics</h3>
                    </li>
                    <li className="course-item">
                        <h3>SQL for Beginners</h3>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default DashboardCourses;