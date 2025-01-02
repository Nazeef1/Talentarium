import React from "react";

import "./Home.css";
import Navbar from "../LPcomponents/Navbar";
import Carousel from "../LPcomponents/Carousel";
import Heading from "../LPcomponents/Heading";
import CourseContainer from "../LPcomponents/CourseContainer";
import Footer from "../LPcomponents/Footer";
import CategoryConatiner from "../LPcomponents/CategoryConatiner";

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
