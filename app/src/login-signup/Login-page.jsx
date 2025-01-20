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
    setError('');
    console.log('Attempting login with:', formData); // Log the form data
    
    try {
      console.log('Sending request to server...');
      const response = await fetch('http://localhost:8000/api/users/authenticate', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      });
  
      console.log('Response received:', response.status); // Log the response status
      const data = await response.json();
      console.log('Response data:', data); // Log the response data
      
      if (!response.ok) {
        console.log('Login failed:', data.message);
        setError(data.message);
        alert(data.message);
        return;
      }
      
      // Success case
      console.log('Login successful, navigating to dashboard...');
      localStorage.setItem('token', data.token);
      localStorage.setItem('userEmail', formData.email);
      navigate('/dashboard');
      
    } catch (error) {
      console.error('Login error:', error);
      const errorMessage = 'Invalid login. Please try again later.';
      setError(errorMessage);
      alert(errorMessage);
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
          {error && <div className="error-message">{error}</div>}
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
      </div>
    </div>
  );
};

export default Loginpagecomponent;