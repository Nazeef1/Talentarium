import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Carousel() {
  const handleSignUpClick = () => {
    navigate("/signup"); // Navigate to the Signup page
  };
  const slides = [
    {
      backgroundImage:
        "https://i.pinimg.com/736x/de/8f/1a/de8f1a4ca43755f76a86e5ca93ca639a.jpg",
      title: "Share Your Knowledge, Inspire the World!",
      description:
        "Join our platform and make a difference by sharing your unique skills.",
      buttonLabel: "Get Started",
    },
    {
      backgroundImage:
        "https://img-c.udemycdn.com/notices/web_carousel_slide/image/10ca89f6-811b-400e-983b-32c5cd76725a.jpg",
      title: "Empower Others While Growing Yourself",
      description:
        "Teach, learn, and grow in a community that values knowledge sharing.",
      buttonLabel: "Get Started",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-landingPage">
      <div className="slides-landingPage">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              display: index === currentIndex ? "block" : "none",
            }}
          >
            <div className="content-box-landingPage">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button className="get-started-landingPage" onClick={handleSignUpClick}>
                <span>▶</span> {slide.buttonLabel}
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="next-landingPage" onClick={handleNext}>
        ›
      </button>
    </div>
  );
}

export default Carousel;
