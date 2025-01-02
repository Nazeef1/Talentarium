import React from 'react';
import './courses-list.css';

const CoursesList = () => {
    return (
        <div>
            <ul class="course-list-courses">
      <li class="course-item-courses">
        <h3>Introduction to Python</h3>
        <button>Enroll</button>
      </li>
      <li class="course-item-courses">
        <h3>Web Development Basics</h3>
        <button>Enroll</button>
      </li>
      <li class="course-item-courses">
        <h3>Data Science Essentials</h3>
        <button>Enroll</button>
      </li>
      <li class="course-item-courses">
        <h3>Machine Learning Advanced</h3>
        <button>Enroll</button>
      </li>
      <li class="course-item-courses">
        <h3>SQL for Beginners</h3>
        <button>Enroll</button>
      </li>
    </ul>
        </div>
    );
};

export default CoursesList;