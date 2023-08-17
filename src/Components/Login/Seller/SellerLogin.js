import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sellerLogin.css";
import { ethers } from 'ethers';

const SellerLogin = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const connectMetamask = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
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
      if (
        localStorage.getItem("sellerEmail") &&
        localStorage.getItem("sellerName")
      ) {
        history("/seller/home");
      }

      const walletAddress = await connectMetamask();
      console.log(walletAddress);

      const response = await fetch("http://localhost:8000/api/seller/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          walletPublicAddress: walletAddress,
        }),
      });

      if (response.status === 200 && response) {
        console.log("Seller login successful!");

        const sellerData = await response.json();

        // Store user details in localStorage
        localStorage.setItem("sellerEmail", sellerData.email);
        localStorage.setItem("sellerName", sellerData.name);

        // You might handle seller-specific data here

        // Redirect to seller home page on successful login
        window.location.href = "/seller/home"
      } else {
        // Handle login failure
      }
    } catch (error) {
      console.error("Error during seller login:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Seller Login</h2>
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
        <div className="signup-link">
          New to Flipkart? <span className="signup-text">Sign up</span>
        </div>
      </div>
    </div>
  );
};

export default SellerLogin;
