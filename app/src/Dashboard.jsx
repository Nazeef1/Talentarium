import './Dashboard.css';
import NavBarVertical from './components/Navbar-vertical';
import NavBarHorizontal from './components/Navbar-horizontal';
import CoursesSearch from './components/courses-search';
import CoursesList from './components/courses-list';

function Dashboard() {

    return (
      <>
      <NavBarHorizontal></NavBarHorizontal>
      <NavBarVertical></NavBarVertical>
      <CoursesSearch></CoursesSearch>
      <CoursesList></CoursesList> 
      </>
    );
  };
  
  export default Dashboard;