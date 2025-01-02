import React from 'react';
import './courses-list.css';

const CoursesList = ({ courses }) => {
  return (
    <div>
      <ul className="course-list-courses">
        {courses.map((course) => (
          <li key={course.id} className="course-item-courses">
            <h3>{course.name}</h3>
            <button>Enroll</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesList;