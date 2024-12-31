import React from 'react';
import './course-page.css';

const CoursesPage = () => {
    return(
  <div class="course-container">
    <div class="course-header">
      <h1>Learn Web Development</h1>
    </div>
    <div class="course-video">
      <iframe 
        src="https://www.youtube.com/embed/dGcsHMXbSOA" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
    <div class="course-details">
      <h2>Course Details</h2>
      <p><strong>Author:</strong> John Doe</p>
      <p><strong>Duration:</strong> 2 hours</p>
      <p><strong>Description:</strong> This course covers the basics of web development, including HTML, CSS, and JavaScript. Perfect for beginners!</p>
    </div>
    <div class="save-progress">
      <button onclick="alert('Progress Saved!')">Save Progress</button>
    </div>
  </div>
    );
};

export default CoursesPage;