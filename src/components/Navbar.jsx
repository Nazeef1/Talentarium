import { useNavigate } from 'react-router-dom';
import './Navbar-horizontal.css';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleSignup = () => {
        navigate('/signup');
    };

    return (
        <nav className="navbar-horizontal">
            <div className="logo-horizontal">
                <a href="/">Talentarium</a>
            </div>
            <div className="nav-list">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/courses">Courses</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
            <div className="auth-buttons">
                <button className="nav-btn" onClick={handleLogin}>
                    Login
                </button>
                <button className="nav-btn" onClick={handleSignup}>
                    Sign Up
                </button>
            </div>
        </nav>
    );
};

export default Navbar; 