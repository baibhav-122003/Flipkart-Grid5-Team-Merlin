import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FlipkartHeader.css";
import { approveService } from "../../BlockChain Service/approveService";

const FlipkartHeader = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flipkart-header">
      <div className="logo-container">
        <Link to="/home">Flipkart</Link>
      </div>
      <div className="account-container">
        <button className="account-button" onClick={toggleDropdown}>
          My Account
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <Link to="/user/rewards">
              <button className="dropdown-item">Loyalty Points</button>{" "}
            </Link>

            <button
              className="dropdown-item"
              onClick={() => approveService(1000)}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default FlipkartHeader;
