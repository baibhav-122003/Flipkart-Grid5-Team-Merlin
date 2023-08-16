import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./userLogin.css";
import { ethers } from 'ethers';


const UserLogin = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("userEmail") && localStorage.getItem("userName")) {
      history("/home");
    }
  }, []);

  const connectMetamask = async () => {

    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      return address.toString();
    } else {
      console.log("Metamask not detected.");
      return "";
    }


  };

  const handleLogin = async () => {
    try {
      // if (localStorage.getItem('userEmail') && localStorage.getItem('userName')) {
      //   history('/home');
      // }

      const walletAddress = await connectMetamask();
      console.log(walletAddress);
      

      const response = await fetch("http://localhost:8000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, walletPublicAddress: walletAddress }),
      });

      if (response.status === 200 && response) {
        console.log("Login successful!");

        const userData = await response.json();

        // Store user details in localStorage
        console.log("User data:", userData)

        localStorage.setItem("userEmail", userData.email);
        localStorage.setItem("userName", userData.nameofuser);

        // Redirect to home page on successful login
        window.location.href = "/home";
      
      } 


    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
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
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <div className="forgot-password">Forgot Password?</div>
        <hr />
        <Link to="/signup" className="signup-link">
          <div className="signup-link">
            <span className="signup-text">New to Flipkart? Sign up</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
