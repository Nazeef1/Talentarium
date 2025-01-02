//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';
import Courses from './Courses';
import Dashboard from './Dashboard';
import Course from './course-page';
import Signup from './Signup';
import Login from './Login';

import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
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
