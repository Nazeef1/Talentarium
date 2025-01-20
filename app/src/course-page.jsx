import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './course-page.css';
import Links from './data/coursedata';

const Course = () => {
  const { courseid } = useParams();
  const course = Links.find(c => c.courseid === courseid);
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const [completedCourses, setCompletedCourses] = useState([]);

  const userEmail = localStorage.getItem('userEmail');

  // Fetch registered and completed courses
  const fetchCourses = async () => {
    try {
      const [regResponse, compResponse] = await Promise.all([
        fetch(`http://localhost:8000/api/users/${userEmail}/coursesregs`),
        fetch(`http://localhost:8000/api/users/${userEmail}/coursescomp`),
      ]);

      const regData = await regResponse.json();
      const compData = await compResponse.json();

      if (regResponse.ok) setRegisteredCourses(regData.coursesregs);
      if (compResponse.ok) setCompletedCourses(compData.coursescomp);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  // Mark course as completed
  const handleMarkAsCompleted = async () => {
    if (!userEmail) {
      alert('Please log in to complete this action.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/api/users/${userEmail}/move-course`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ courseId: courseid }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Course marked as completed!');
        // Update the state directly from the API response
        setRegisteredCourses(data.coursesregs);
        setCompletedCourses(data.coursescomp);
      } else {
        alert(`Failed to complete the course: ${data.message}`);
      }
    } catch (error) {
      console.error('Error marking course as completed:', error);
      alert('An error occurred while completing the course.');
    }
  };

  // Initial fetch for registered and completed courses
  useEffect(() => {
    if (userEmail) {
      fetchCourses();
    }
  }, [userEmail]);

  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <div className="course-container-page">
      <div className="course-header-page">
        <h1>{course.coursename}</h1>
      </div>
      <div className="course-video-page">
        <iframe
          src={course.ytlink}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="course-details-page">
        <h2>Course Details</h2>
        <p><strong>Author:</strong> {course.author}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Description:</strong> {course.description}</p>
      </div>
      <div className="course-action">
        <button className="mark-completed-button" onClick={handleMarkAsCompleted}>
          Mark as Completed
        </button>
      </div>
    </div>
  );
};

export default Course;
