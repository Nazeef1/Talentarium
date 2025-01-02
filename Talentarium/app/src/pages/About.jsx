import React from "react";

import "./AboutPage.css";
import "./Home.css";
import Navbar from "../LPcomponents/Navbar";
import HeroSection from "../LPcomponents/HeroSection";
import MissionSection from "../LPcomponents/MissionSection";
import TeamSection from "../LPcomponents/TeamSection";
import Footer from "../LPcomponents/Footer";

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
