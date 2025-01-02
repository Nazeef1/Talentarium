import React from "react";
import CourseCard from "./CourseCard";

function CourseContainer() {
  return (
    <div className="course-container-landingPage">
      <CourseCard
        image="https://innovationspace.ansys.com/wp-content/uploads/2024/03/intro-to-python-1024x683.jpg"
        title="Python for Data Science and Machine Learning Bootcamp"
        time="10h"
      />
      <CourseCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYhGbnMLd8ateGJUq_pi5dlpJ0VyVeItGnmmrdZpJr7BtrAIDc2dJAdFdeDssZME1UZQ&usqp=CAU"
        title="Machine Learning, Data Science and Generative AI"
        time="8h"
      />
      <CourseCard
        image="https://www.cdmi.in/courses@2x/web-developments.webp"
        title="Web Development Masterclass - Online Certification Course"
        time="15h"
      />
      <CourseCard
        image="https://www.creativeboom.com/upload/articles/4f/4f9395bd330966529891b4621f49a41eb263c0a3_1280.jpeg"
        title="Digital Photography for Beginners with DSLR cameras"
        time="12h"
      />
      <CourseCard
        image="https://t3.ftcdn.net/jpg/04/70/19/68/360_F_470196860_BHSMvCPDrna4OCjvmMNUOqXCv8dNn46t.jpg"
        title="Complete Guitar Lessons- Beginner to Advanced"
        time="20h"
      />
      <CourseCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlpY52bO0I-GF8fyqqcVKeS6_zktKEouTGCbVbkCiV1YPKM-KDqSFIsSS2aikwhrIR_eI&usqp=CAU"
        title="Sketching for Fashion Design ~ Beginner Course for Designers"
        time="18h"
      />
    </div>
  );
}

export default CourseContainer;
