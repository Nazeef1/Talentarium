import React from "react";
import CourseCard from "./CourseCard";

interface Course {
  title: string;
  description: string;
  image: string; // Optional property
  time: string; // Optional property
}

interface props {
  courses: Course[];
}

const CourseGrid: React.FC<props> = ({ courses }) => {
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
