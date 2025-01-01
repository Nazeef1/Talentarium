import React, { useState } from 'react';
import './Login-page.css';

const Loginpagecomponent = () => {
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