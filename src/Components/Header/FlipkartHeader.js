import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FlipkartHeader.css";
import { approveService } from "../../BlockChain Service/approveService";

const FlipkartHeader = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));
  const [sellerEmail, setSellerEmail] = useState(localStorage.getItem("sellerEmail"));

  useEffect(() => {
    setUserEmail(localStorage.getItem("userEmail"));
    setSellerEmail(localStorage.getItem("sellerEmail"));
  }, []);

  useEffect(() => {
    // Check for changes in user's login status
    if (!userEmail && !sellerEmail) {
      setDropdownOpen(false); // Close dropdown when user logs out
    }
  }, [userEmail, sellerEmail]);

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
    </header>
  );
};

export default FlipkartHeader;
