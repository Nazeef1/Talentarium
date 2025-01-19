import React from 'react';
import './courses-list.css';
import { useNavigate } from 'react-router-dom';

const CoursesList = ({ courses }) => {
  const navigate = useNavigate();

  const enrollCourse = async (courseId) => {
    const userEmail = localStorage.getItem('userEmail'); // Make sure the email is in local storage

    if (!userEmail) {
      alert('You need to be logged in to enroll in a course');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/api/users/${userEmail}/coursesregs`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ courseId }),
      });

      if (response.ok) {
        alert('Course enrolled successfully!');
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        const data = await response.json();
        alert(data.message || 'Failed to enroll in the course');
      }
    } catch (error) {
      console.error('Error enrolling course:', error);
      alert('An error occurred while enrolling in the course');
    }
  };

  return (
    <div>
      <ul className="course-list-courses">
        {courses.map((course) => (
          <li key={course.courseid} className="course-item-courses">
            <h3>{course.coursename}</h3>
            <button onClick={() => enrollCourse(course.courseid)}>Enroll</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesList;
