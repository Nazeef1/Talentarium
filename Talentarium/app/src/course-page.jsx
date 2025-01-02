import React from 'react';
import { useParams } from 'react-router-dom';
import './course-page.css';
import Links from './data/coursedata';

const Course = () => {

  const { courseid } = useParams();
  const course = Links.find(c => c.courseid === courseid);

  if (!course) {
    return <div>Course not found.</div>;
  }

    return(
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
    </div>
  
    );
};

export default Course;