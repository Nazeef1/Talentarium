import React, { useState } from 'react';
<<<<<<< HEAD
import './Signup-page.css';

const Signupcomponent = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="floating-elements">
        {[...Array(9)].map((_, i) => (
          <div key={i} className={`floating-item item-${i + 1}`}>
            {i % 2 === 0 ? '🎓' : '📚'}
          </div>
        ))}
      </div>
      <div className="form-section">
        <div className="logo">TALENTARIUM</div>
        <h2>Start your journey</h2>
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              placeholder="example@email.com" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••" 
              required 
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn">Sign Up</button>
          <div className="alternative-signup">
            <p>or</p>
          </div>
        </form>
        <p className="signin-text">
          Have an account? <a href="/login">Sign in</a>
        </p>
      </div>
      <div className="image-section">
        <img 
          src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg" 
          alt="Online learning illustration"
        />
=======
import { useNavigate } from 'react-router-dom'; // Use for navigation after login
import './Login-page.css';

const Loginpagecomponent = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/dashboard'); // Redirect to dashboard on successful login
      } else {
        const data = await response.json();
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="container-login">
        <div className="floating-elements-login">
          {[...Array(9)].map((_, i) => (
            <div key={i} className={`floating-item-login item-${i + 1}`}>
              {i % 2 === 0 ? '🎓' : '📚'}
            </div>
          ))}
        </div>
        <div className="form-section-login">
          <div className="logo-login">TALENTARIUM</div>
          <h2>Welcome Back!</h2>
          <h3>Sign In</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-group-login">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="example@email.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-group-login">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="btn-login">Sign In</button>
            <div className="alternative-signup-login">
              <p>or</p>
            </div>
          </form>
          <p className="signin-text-login">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
        <div className="image-section-login">
          <img
            src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg"
            alt="Online learning illustration"
          />
        </div>
>>>>>>> e29bb4e472a6f8defc60fd6ea175142dc4babd8f
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Signupcomponent; 
=======
export default Loginpagecomponent;
>>>>>>> e29bb4e472a6f8defc60fd6ea175142dc4babd8f
