<<<<<<< HEAD
import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
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
      </div>
    </div>
  );
};

=======
import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
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
      </div>
    </div>
  );
};

>>>>>>> e29bb4e472a6f8defc60fd6ea175142dc4babd8f
export default Signup; 