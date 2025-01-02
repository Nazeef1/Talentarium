import React, { useState } from 'react';
import './Dashboard.css';
import NavBarVertical from './components/Navbar-vertical';
import NavBarHorizontal from './components/Navbar-horizontal';
import CoursesSearch from './components/courses-search';
import CoursesList from './components/courses-list';
import Links from './data/coursedata';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [courses] = useState(Links);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCourses = courses.filter((course) =>
    course.coursename.toLowerCase().includes(searchTerm.toLowerCase())
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