import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./Courses.css";
import "./Home.css";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";

interface Course {
  title: string;
  description: string;
  image: string;
  time: string;
}

interface Categories {
  [key: string]: Course[];
}

const categories: Categories = {
  "Web Development": [
    {
      title: "React Basics",
      description: "Learn the basics of React.js",
      image: "/images/react.jpg",
      time: "4 hours",
    },
    {
      title: "Advanced JavaScript",
      description: "Deep dive into JavaScript",
      image: "/images/advJS.jpg",
      time: "6 hours",
    },
    {
      title: "HTML & CSS",
      description: "Master web layout and styling",
      image: "/images/htmlCss.jpg",
      time: "3 hours",
    },
    {
      title: "Node.js Essentials",
      description: "Build backend with Node.js",
      image: "/images/node.png",
      time: "5 hours",
    },
  ],
  "Data Science": [
    {
      title: "Python for Data Science",
      description: "Learn Python for analysis",
      image: "/images/pyDS.png",
      time: "7 hours",
    },
    {
      title: "Machine Learning",
      description: "Introduction to ML concepts",
      image: "/images/ML.jpg",
      time: "8 hours",
    },
    {
      title: "Data Visualization",
      description: "Create stunning data visuals",
      image: "/images/dataVS.png",
      time: "4 hours",
    },
    {
      title: "Statistics 101",
      description: "Understand basic statistics",
      image: "/images/stat.png",
      time: "3 hours",
    },
  ],
  Design: [
    {
      title: "Graphic Design",
      description: "Learn tools like Photoshop",
      image: "/images/graph.jpg",
      time: "5 hours",
    },
    {
      title: "UI/UX Fundamentals",
      description: "Understand UI/UX principles",
      image: "/images/uiux.jpg",
      time: "6 hours",
    },
    {
      title: "Typography",
      description: "Master the art of text design",
      image: "/images/typg.png",
      time: "4 hours",
    },
    {
      title: "Illustration Basics",
      description: "Learn digital illustration",
      image: "/images/ill.jpg",
      time: "5 hours",
    },
  ],
  Marketing: [
    {
      title: "Digital Marketing",
      description: "Learn SEO and SEM strategies",
      image: "/images/dm.jpg",
      time: "6 hours",
    },
    {
      title: "Content Marketing",
      description: "Create compelling content",
      image: "/images/cm.jpg",
      time: "5 hours",
    },
    {
      title: "Social Media Marketing",
      description: "Master social platforms",
      image: "/images/sm.png",
      time: "4 hours",
    },
    {
      title: "Email Marketing",
      description: "Engage audiences via email",
      image: "/images/em.jpg",
      time: "4 hours",
    },
  ],
  Business: [
    {
      title: "Entrepreneurship",
      description: "Start and grow your business",
      image: "/images/enp.jpg",
      time: "7 hours",
    },
    {
      title: "Financial Management",
      description: "Learn to manage finances",
      image: "/images/fm.png",
      time: "6 hours",
    },
    {
      title: "Leadership Skills",
      description: "Develop strong leadership",
      image: "/images/lskl.jpg",
      time: "5 hours",
    },
    {
      title: "Business Analytics",
      description: "Analyze business performance",
      image: "/images/banl.jpg",
      time: "6 hours",
    },
  ],
  "Personal Development": [
    {
      title: "Time Management",
      description: "Boost your productivity",
      image: "/images/tm.jpg",
      time: "3 hours",
    },
    {
      title: "Public Speaking",
      description: "Improve your presentation skills",
      image: "/images/ps.jpg",
      time: "4 hours",
    },
    {
      title: "Mindfulness",
      description: "Learn to stay present",
      image: "/images/mind.jpg",
      time: "3 hours",
    },
    {
      title: "Self-Discipline",
      description: "Achieve your goals",
      image: "/images/sdis.jpg",
      time: "5 hours",
    },
  ],
  Photography: [
    {
      title: "Photography Basics",
      description: "Master your camera",
      image: "/images/phb.jpg",
      time: "4 hours",
    },
    {
      title: "Photo Editing",
      description: "Enhance your images",
      image: "/images/phed.jpg",
      time: "5 hours",
    },
    {
      title: "Portrait Photography",
      description: "Capture stunning portraits",
      image: "/images/port.jpg",
      time: "6 hours",
    },
    {
      title: "Landscape Photography",
      description: "Shoot beautiful landscapes",
      image: "/images/lpg.jpg",
      time: "5 hours",
    },
  ],
  "Health & Fitness": [
    {
      title: "Yoga for Beginners",
      description: "Learn basic yoga poses",
      image: "/images/yb.jpg",
      time: "3 hours",
    },
    {
      title: "Fitness Training",
      description: "Get fit with structured plans",
      image: "/images/ftr.jpg",
      time: "5 hours",
    },
    {
      title: "Healthy Eating",
      description: "Plan balanced meals",
      image: "/images/hlet.jpg",
      time: "4 hours",
    },
    {
      title: "Meditation",
      description: "Relax and focus your mind",
      image: "/images/med.jpg",
      time: "3 hours",
    },
  ],
};

const allCourses = Object.values(categories).flat();

function Courses() {
  const { categoryName } = useParams(); // Get the category name from URL
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(
    categoryName || "All Courses"
  );

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setSelectedCategory(selected);
    navigate(
      selected === "All Courses"
        ? "/courses"
        : `/category/${encodeURIComponent(selected)}`
    );
  };

  // Determine courses to display
  const coursesToDisplay =
    selectedCategory === "All Courses"
      ? allCourses
      : categories[selectedCategory] || [];

  return (
    <div className="courses-page-landingPage">
      <Navbar></Navbar>
      <h1 className="course-heading-landingPage">{selectedCategory}</h1>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="category-dropdown-landingPage"
      >
        <option value="All Courses">All Courses</option>
        {Object.keys(categories).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <div className="courses-grid-landingPage">
        {coursesToDisplay.map((course, index) => (
          <CourseCard
            key={index}
            image={course.image}
            title={course.title}
            time={course.time}
          />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Courses;
