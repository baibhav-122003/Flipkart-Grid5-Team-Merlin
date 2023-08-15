import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FlipkartHeader.css";
import { approveService } from "../../BlockChain Service/approveService";

// const FlipkartHeader = () => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));
//   const [sellerEmail, setSellerEmail] = useState(localStorage.getItem("sellerEmail"));

//   useEffect(() => {
//     //run window. location. reload() one time

//     setUserEmail(localStorage.getItem("userEmail"));
//     setSellerEmail(localStorage.getItem("sellerEmail"));
//   }, []);

//   useEffect(() => {
//     // Check for changes in user's login status
//     if (!userEmail && !sellerEmail) {
//       setDropdownOpen(false); // Close dropdown when user logs out
//     }
//   }, [userEmail, sellerEmail]);

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   const handleLogout = () => {
//     if (userEmail && localStorage.getItem("userName")) {
//       localStorage.removeItem("userEmail");
//       localStorage.removeItem("userName");
//     }

//     if (sellerEmail && localStorage.getItem("sellerName")) {
//       localStorage.removeItem("sellerEmail");
//       localStorage.removeItem("sellerName");
//     }
//     window.location.href = "/login";
//     // approveService(1000);
//   };

//   return (
//     <header className="flipkart-header">
//       <div className="logo-container">
//         <Link to="/">
//           <img
//             src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png"
//             alt="Flipkart"
//             className="logo"
//           />
//           Flipkart</Link>
//       </div>
//       { (userEmail || sellerEmail) && (
//         <div className="account-container">
//           <button className="account-button" onClick={toggleDropdown}>
//             My Account
//           </button>
//           {isDropdownOpen && (
//             <div className="dropdown-menu">
//               <Link to="/user/rewards">
//                 <button className="dropdown-item">Loyalty Points</button>
//               </Link>
//               <button className="dropdown-item" onClick={handleLogout}>
//                   Logout
//                 </button>
//             </div>
//           )}
//         </div>
//       )}
//     </header>
//   );
// };

const FlipkartHeader = () => {
  const [showAccount, setShowAccount] = useState(false);
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));
  const [sellerEmail, setSellerEmail] = useState(
    localStorage.getItem("sellerEmail")
  );

  // Of no use
  // useEffect(() => {
  //   //run window. location. reload() one time

  //   setUserEmail(localStorage.getItem("userEmail"));
  //   setSellerEmail(localStorage.getItem("sellerEmail"));
  // }, []);

  useEffect(() => {
    // Check for changes in user's login status
    if (!userEmail && !sellerEmail) {
      setShowAccount(false); // Don't show the My Account button when user or seller is not logged in
    } else if (userEmail || sellerEmail) {
      setShowAccount(true); // Show the My Account button when user or seller is logged in
    }
  }, [userEmail, sellerEmail]);

  const handleLogout = () => {
    if (userEmail && localStorage.getItem("userName")) {
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userName");
    }

    if (sellerEmail && localStorage.getItem("sellerName")) {
      localStorage.removeItem("sellerEmail");
      localStorage.removeItem("sellerName");
    }
    window.location.href = "/login";
    // approveService(1000);
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
          <button className="account-button">My Account</button>
          <div className="dropdown-menu">
            <Link to="/user/rewards">
              <button className="dropdown-item">Loyalty Points</button>
            </Link>
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
