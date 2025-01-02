import React, { useState } from 'react';
import './Dashboard.css';
import NavBarVertical from './components/Navbar-vertical';
import NavBarHorizontal from './components/Navbar-horizontal';
import CoursesSearch from './components/courses-search';
import CoursesList from './components/courses-list';
<<<<<<< HEAD

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [courses] = useState([
    { id: 1, name: 'Introduction to Python' },
    { id: 2, name: 'Web Development Basics' },
    { id: 3, name: 'Data Science Essentials' },
    { id: 4, name: 'Machine Learning Advanced' },
    { id: 5, name: 'SQL for Beginners' },
  ]);
=======
import Links from './data/coursedata';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [courses] = useState(Links);
>>>>>>> e29bb4e472a6f8defc60fd6ea175142dc4babd8f

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCourses = courses.filter((course) =>
<<<<<<< HEAD
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
=======
    course.coursename.toLowerCase().includes(searchTerm.toLowerCase())
>>>>>>> e29bb4e472a6f8defc60fd6ea175142dc4babd8f
  );

  return (
    <>
      <NavBarHorizontal />
      <NavBarVertical />
      <CoursesSearch searchTerm={searchTerm} handleSearch={handleSearch} />
      <CoursesList courses={filteredCourses} />
    </>
  );
};

export default Dashboard;