import React from 'react';
import './courses-list.css';

const CoursesList = ({ courses }) => {
  return (
    <div>
      <ul className="course-list-courses">
        {courses.map((course) => (
<<<<<<< HEAD
          <li key={course.id} className="course-item-courses">
            <h3>{course.name}</h3>
=======
          <li key={course.courseid} className="course-item-courses">
            <h3>{course.coursename}</h3>
>>>>>>> e29bb4e472a6f8defc60fd6ea175142dc4babd8f
            <button>Enroll</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

<<<<<<< HEAD
=======

>>>>>>> e29bb4e472a6f8defc60fd6ea175142dc4babd8f
export default CoursesList;