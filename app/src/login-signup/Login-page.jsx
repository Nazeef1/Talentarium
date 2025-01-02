import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login-page.css';

const Loginpagecomponent = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
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
      </div>
    </div>
  );
};

export default Loginpagecomponent;