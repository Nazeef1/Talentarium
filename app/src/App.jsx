//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';
import Courses from './Courses';
import Dashboard from './Dashboard';
import Course from './course-page';
import Signup from './Signup';
import Login from './Login';
<<<<<<< HEAD
import Home from './pages/Home';
import About from './pages/About';
import CoursesLP from './pages/CoursesLP';

import {HashRouter, Routes, Route, BrowserRouter} from 'react-router-dom';
=======

import {Routes, Route, BrowserRouter} from 'react-router-dom';
>>>>>>> e29bb4e472a6f8defc60fd6ea175142dc4babd8f

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/coursesLP" element={<CoursesLP />} />
          <Route path="/category/:categoryName" element={<CoursesLP />} />
=======
>>>>>>> e29bb4e472a6f8defc60fd6ea175142dc4babd8f
          <Route path="/courses" element={<Courses />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/course/:courseid" element={<Course />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
