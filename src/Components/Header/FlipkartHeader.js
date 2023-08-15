import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FlipkartHeader.css";
import { approveService } from "../../BlockChain Service/approveService";

const FlipkartHeader = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const userEmail = localStorage.getItem("userEmail");
  const sellerEmail = localStorage.getItem("sellerEmail");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    if (userEmail && localStorage.getItem("userName")) {
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userName");
    }

    if (sellerEmail && localStorage.getItem("sellerName")) {
      localStorage.removeItem("sellerEmail");
      localStorage.removeItem("sellerName");
    }
    // approveService(1000);
    
    // Reload the page after logout
    window.location.reload();
  };

  return (
    <header className="flipkart-header">
      <div className="logo-container">
        <Link to="/">Flipkart</Link>
      </div>
      { (userEmail || sellerEmail) && (
        <div className="account-container">
          <button className="account-button" onClick={toggleDropdown}>
            My Account
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/user/rewards">
                <button className="dropdown-item">Loyalty Points</button>{" "}
              </Link>
              <Link to="/login">
                <button className="dropdown-item" onClick={handleLogout}>
                  Logout
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
      {/* Render account button if logged in */}
      { !(userEmail || sellerEmail) && (
        <div className="account-container">
          <Link to="/login">
            <button className="account-button">Login</button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default FlipkartHeader;
