import React from 'react';
import './userLogin.css'; // You'll need to create this CSS file for styling

const UserLogin = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/path/to/flipkart-logo.png" alt="Flipkart Logo" className="login-logo" />
        <h2>User Login</h2>
        <input type="text" placeholder="Email or Mobile Number" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button className="login-button">Login</button>
        <div className="forgot-password">Forgot Password?</div>
        <hr />
        <div className="signup-link">New to Flipkart? <span className="signup-text">Sign up</span></div>
      </div>
    </div>
  );
};

export default UserLogin;
