import './Signup-page.css';

const Signup = () => {
    return (
        <div className="signup-page-container">
            <div className="signup-page-form-section">
                <h2>Create Account</h2>
                <form>
                    <div className="signup-page-input-group">
                        <label>Name</label>
                        <input type="text" required />
                    </div>
                    <div className="signup-page-input-group">
                        <label>Email</label>
                        <input type="email" required />
                    </div>
                    <div className="signup-page-input-group">
                        <label>Password</label>
                        <input type="password" required />
                    </div>
                    <button className="signup-page-btn" type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Signup; 