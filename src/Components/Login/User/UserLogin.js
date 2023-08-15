import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './userLogin.css';

const UserLogin = () => {
  const history = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Redirect to home page on successful login
        history('/home'); // Replace '/home' with your actual home page route
      } else {
        // Handle login failure
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/path/to/flipkart-logo.png" alt="Flipkart Logo" className="login-logo" />
        <h2>User Login</h2>
        <input
          type="text"
          placeholder="Email or Mobile Number"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>Login</button>
        <div className="forgot-password">Forgot Password?</div>
        <hr />
        <div className="signup-link">
          New to Flipkart? <span className="signup-text">Sign up</span>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
