import React from "react";

import "./Home.css";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Heading from "../components/Heading";
import CourseContainer from "../components/CourseContainer";
import Footer from "../components/Footer";
import CategoryConatiner from "../components/CategoryConatiner";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Heading
        title="Invest in your career with "
        highlight="Talentarium"
      ></Heading>
      <CourseContainer></CourseContainer>
      <Heading title="Courses" highlight="Category"></Heading>
      <CategoryConatiner></CategoryConatiner>
      <Footer></Footer>
    </div>
  );
}

export default Home;
