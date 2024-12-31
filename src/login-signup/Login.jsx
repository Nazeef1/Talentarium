import './Login-page.css';

const Login = () => {
    return (
        <div className="login-page-container">
            <div className="login-page-form-section">
                <h2>Welcome Back</h2>
                <form>
                    <div className="login-page-input-group">
                        <label>Email</label>
                        <input type="email" required />
                    </div>
                    <div className="login-page-input-group">
                        <label>Password</label>
                        <input type="password" required />
                    </div>
                    <button className="login-page-btn" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login; 