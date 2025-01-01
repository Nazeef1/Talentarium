import React, { useState } from 'react';
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
    <div className="signup-page-wrapper">
      <div className="container-signup">
        <div className="floating-elements-signup">
          {[...Array(9)].map((_, i) => (
            <div key={i} className={`floating-item-signup item-${i + 1}`}>
              {i % 2 === 0 ? '🎓' : '📚'}
            </div>
          ))}
        </div>
        <div className="form-section-signup">
          <div className="logo-signup">TALENTARIUM</div>
          <h2>Start your journey</h2>
          <h3>Sign Up</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-group-signup">
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
            <div className="input-group-signup">
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
            <button type="submit" className="btn-signup">Sign Up</button>
            <div className="alternative-signup-signup">
              <p>or</p>
            </div>
          </form>
          <p className="signin-text-signup">
            Have an account? <a href="/login">Sign in</a>
          </p>
        </div>
        <div className="image-section-signup">
          <img 
            src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg" 
            alt="Online learning illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Signupcomponent;