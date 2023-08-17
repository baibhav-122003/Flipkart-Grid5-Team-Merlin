import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FlipkartHeader.css";

const FlipkartHeader = () => {
  const [showAccount, setShowAccount] = useState(false);
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));
  const [sellerEmail, setSellerEmail] = useState(
    localStorage.getItem("sellerEmail")
  );

  useEffect(() => {
    // Check for changes in user's login status
    if (!userEmail && !sellerEmail) {
      setShowAccount(false); // Don't show the My Account button when user or seller is not logged in
    } else if (userEmail || sellerEmail) {
      setShowAccount(true); // Show the My Account button when user or seller is logged in
    }
  }, [userEmail, sellerEmail]);

  const handleRewardsRoute = () => {
    if (      localStorage.getItem("sellerEmail")) {
      window.location.href = "/seller/rewards"
    }else if (localStorage.getItem("userEmail")) {

      window.location.href = "/user/rewards"

    }
  }

  const handleLogout = async () => {
    var response;
    if (userEmail) {
      response = await fetch("http://localhost:8000/api/user/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      response = await fetch("http://localhost:8000/api/seller/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    if (response.status === 200 && response) {
      console.log("Logout successful!");

      if (userEmail) {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userName");
      }

      if (sellerEmail) {
        localStorage.removeItem("sellerEmail");
        localStorage.removeItem("sellerName");
      }
      window.location.href = "/login";
    }
  };

  const toggleDropdown = () => {
    const dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.classList.toggle("show");
  };

  return (
    <header className="flipkart-header">
      <div className="logo-container">
        <Link to="/">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png"
            alt="Flipkart"
            className="logo"
          />
          Flipkart
        </Link>
      </div>

      {showAccount && (
        <div className="account-container">
          <button className="account-button" onClick={toggleDropdown}>
            My Account
          </button>
          <div className="dropdown-menu show">
            {/* <Link to="/user/rewards">
              <button className="dropdown-item">Loyalty Points</button> */}
            {/* </Link> */}
            <button className="dropdown-item" onClick={handleRewardsRoute}>Loyalty Points</button>

            <button className="dropdown-item" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default FlipkartHeader;
