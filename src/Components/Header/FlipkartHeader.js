import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FlipkartHeader.css";
import { approveService } from "../../BlockChain Service/approveService";

const FlipkartHeader = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const userEmail = localStorage.getItem("userEmail");
  const sellerEmail = localStorage.getItem("sellerEmail");

  //print
  console.log("userEmail: " + userEmail);
  console.log("sellerEmail: " + sellerEmail);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flipkart-header">
      <div className="logo-container">
        <Link to="/">Flipkart</Link>
      </div>
      { (localStorage.getItem("userEmail") ||
        localStorage.getItem("sellerEmail")) && (
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
                <button
                  className="dropdown-item"
                  onClick={() => {
                    if (
                      localStorage.getItem("userEmail") &&
                      localStorage.getItem("userName")
                    ) {
                      localStorage.removeItem("userEmail");
                      localStorage.removeItem("userName");
                    }

                    if (
                      localStorage.getItem("sellerEmail") &&
                      localStorage.getItem("sellerName")
                    ) {
                      localStorage.removeItem("sellerEmail");
                      localStorage.removeItem("sellerName");
                    }
                    // approveService(1000);
                  }}
                >
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
