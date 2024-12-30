import React from "react";

interface Props {
  image: string;
  title: string;
  time: string;
}

function CourseCard({ image, title, time }: Props) {
  return (
    <div className="course-box-landingPage">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Total Time: {time}</p>
      <button className="enroll-now-landingPage">Enroll Now</button>
    </div>
  );
}

export default CourseCard;
