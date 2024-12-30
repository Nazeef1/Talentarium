import './Courses.css';
import NavBarVertical from './components/Navbar-vertical';
import NavBarHorizontal from './components/Navbar-horizontal';
import StatusBar from './components/dashboard-stat';
import DashboardCourses from './components/dashboard-courses';

function Courses() {

    return (
      <>
      <NavBarHorizontal></NavBarHorizontal>
      <NavBarVertical></NavBarVertical>
      <StatusBar></StatusBar>
      <DashboardCourses></DashboardCourses>
      </>
    );
  };
  
  export default Courses;