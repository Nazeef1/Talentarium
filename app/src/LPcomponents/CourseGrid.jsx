import React from "react";
import CourseCard from "./CourseCard";




const CourseGrid=({ courses }) => {
  return (
    <div className="courses-grid-landingPage">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          image={course.image}
          title={course.title}
          time={course.time}
        />
      ))}
    </div>
  );
};

export default CourseGrid;
