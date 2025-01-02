import React from "react";
import { useNavigate } from "react-router-dom";

function CourseCard({ image, title, time }) {
  const navigate = useNavigate();

  const handleEnrollNowClick = () => {
    navigate("/signup"); // Navigate to the Signup page
  };
  return (
    <div className="course-box-landingPage">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Total Time: {time}</p>
      <button className="enroll-now-landingPage" onClick={handleEnrollNowClick}>Enroll Now</button>
    </div>
  );
}

export default CourseCard;
