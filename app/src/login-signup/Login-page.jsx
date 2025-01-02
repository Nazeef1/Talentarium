import React, { useState } from 'react';
<<<<<<< HEAD
import './Login-page.css';

const Loginpagecomponent = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
=======
import { useNavigate } from 'react-router-dom';
import './Login-page.css';

const Loginpagecomponent = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
>>>>>>> e29bb4e472a6f8defc60fd6ea175142dc4babd8f

  const handleChange = (e) => {
    setFormData({
      ...formData,
<<<<<<< HEAD
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
        <h2>Welcome Back!</h2>
        <h3>Sign In</h3>
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
          <div className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">Sign In</button>
          <div className="alternative-signup">
            <p>or</p>
          </div>
        </form>
        <p className="signin-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
      <div className="image-section">
        <img 
          src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg" 
          alt="Online learning illustration"
        />
=======
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/users/authenticate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
      } else {
        localStorage.setItem('token', data.token); // Save token locally
        navigate('/dashboard'); // Redirect to dashboard
      }
    } catch (error) {
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="container-login">
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
            <button type="submit" className="btn-login">
              Sign In
            </button>
          </form>
          <p className="signin-text-login">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
>>>>>>> e29bb4e472a6f8defc60fd6ea175142dc4babd8f
      </div>
    </div>
  );
};

export default Loginpagecomponent;