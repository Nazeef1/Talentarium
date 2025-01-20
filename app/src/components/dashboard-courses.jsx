import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './dashboard-courses.css';
import Links from '/src/data/coursedata';
import { Link } from 'react-router-dom';
import StatusBar from './dashboard-stat'; // Import StatusBar

const DashboardCourses = () => {
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const [completedCourses, setCompletedCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const navigate = useNavigate();

  const userEmail = localStorage.getItem('userEmail'); // Retrieve email from local storage

  useEffect(() => {
    if (!userEmail) {
      navigate('/login'); // Redirect to login if email is not found
      return;
    }

    const fetchWithHandling = async (url) => {
      const response = await fetch(url);
      const contentType = response.headers.get('content-type');

      if (!response.ok) {
        if (contentType && contentType.includes('application/json')) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Unknown error occurred');
        } else {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
      }

      if (contentType && contentType.includes('application/json')) {
        return response.json();
      } else {
        throw new Error('Invalid JSON response from server');
      }
    };

    const fetchCourses = async () => {
      try {
        // Fetch registered courses
        const regData = await fetchWithHandling(`http://localhost:8000/api/users/${userEmail}/coursesregs`);
        setRegisteredCourses(regData.coursesregs);

        // Fetch completed courses
        const compData = await fetchWithHandling(`http://localhost:8000/api/users/${userEmail}/coursescomp`);
        setCompletedCourses(compData.coursescomp);

        // Set all available courses
        setAllCourses(Links);  // Set allCourses to the Links JSON data
      } catch (error) {
        console.error('Error fetching courses:', error.message);
      }
    };

    fetchCourses();
  }, [userEmail, navigate]);

  const getCourseDetails = (courseId) => {
    // Ensure courseId is compared as a string (to avoid type issues)
    return allCourses.find(course => String(course.courseid) === String(courseId)) || {};
  };

  // Filter registeredCourses to exclude completedCourses
  const ongoingCourses = registeredCourses.filter(
    courseId => !completedCourses.includes(courseId)
  );

  return (
    <>
      <StatusBar 
        completedCount={completedCourses.length} 
        ongoingCount={ongoingCourses.length} 
      />
      <div className="course-section">
        <h2>Ongoing Courses</h2>
        <ul className="course-list">
          {ongoingCourses.map(courseId => {
            const { coursename, ytlink } = getCourseDetails(courseId);
            return (
              <li key={courseId} className="course-item">
                <div className="course-info">
                  <h3>{coursename || 'Unknown Course'}</h3>
                </div>
                <Link to={`/course/${courseId}`} className="continue-button">Continue</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="course-section">
        <h2>Completed Courses</h2>
        <ul className="course-list">
          {completedCourses.map(courseId => {
            const { coursename } = getCourseDetails(courseId);
            return (
              <li key={courseId} className="course-item">
                <div className="course-info">
                  <h3>{coursename || 'Unknown Course'}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default DashboardCourses;
