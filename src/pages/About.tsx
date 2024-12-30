import React from "react";

import "./AboutPage.css";
import "./Home.css";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MissionSection from "../components/MissionSection";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <MissionSection></MissionSection>
      <TeamSection></TeamSection>
      <Footer></Footer>
    </div>
  );
}

export default About;
