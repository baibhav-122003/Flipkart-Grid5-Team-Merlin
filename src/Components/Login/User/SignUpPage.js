import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpPage.css'; // Create the CSS file for styling

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameofuser, setNameofuser] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, nameofuser }),
      });

      if (response.status === 200 ) {
        console.log('Sign-up successful!');
        // Redirect to login page after successful sign-up
        window.location.href = '/login';
      } else {
        console.error('Sign-up failed');
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <img src="/path/to/flipkart-logo.png" alt="Flipkart Logo" className="signup-logo" />
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Email"
          className="signup-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="signup-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Full Name"
          className="signup-input"
          value={nameofuser}
          onChange={(e) => setNameofuser(e.target.value)}
        />
        <button className="signup-button" onClick={handleSignUp}>Sign Up</button>
        <div className="login-link">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
