import './Courses.css';
import NavBarVertical from './components/Navbar-vertical';
import NavBarHorizontal from './components/Navbar-horizontal';
import DashboardCourses from './components/dashboard-courses';

function Courses() {

    return (
      <>
      <NavBarHorizontal></NavBarHorizontal>
      <NavBarVertical></NavBarVertical>
      <DashboardCourses></DashboardCourses>
      </>
    );
  };
  
  export default Courses;