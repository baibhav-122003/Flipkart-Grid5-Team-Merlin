import React, { useEffect, useState } from "react";
import "./LoyaltyTokens.css"; // Import the CSS file

const UserLoyaltyTokens = () => {
  const [loyaltyTokens, setLoyaltyTokens] = useState({ amount: 0 });
  const [earningRules, setEarningRules] = useState({});

  const fetchUserResponse = async (email) => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/user/getTokenBalance",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            email: email,
          },
        }
      );

      if (response.status === 200) {
        const responseData = await response.json();
        const { balance } = responseData;

        setLoyaltyTokens({ amount: balance }); // Update the state with the balance value
      } else {
        console.error("Error fetching:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchSellerResponse = async (email) => {
    console.log(email);
    try {
      const response = await fetch(
        "http://localhost:8000/api/seller/getTokenBalance",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            email: email,
          },
        }
      );

      if (response.status === 200) {
        const responseData = await response.json();
        const { balance } = responseData;

        console.log("Balance:", balance);

        setLoyaltyTokens({ amount: balance }); // Update the state with the balance value
      } else {
        console.error("Error fetching:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchEarningRules = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/tokenrules");
      if (response.status === 200) {
        const data = await response.json();
        setEarningRules(data);
      } else {
        console.error("Error fetching earning rules:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching earning rules:", error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userEmail")) {
      fetchUserResponse(localStorage.getItem("userEmail"));
    } else {
      fetchSellerResponse(localStorage.getItem("sellerEmail"));
    }
    fetchEarningRules();
  }, []);

  return (
    <div className="loyalty-tokens">
      <div className="loyalty-tokens-content">
        <div className="loyalty-tokens-section">
          <h2>Loyalty Tokens Earned</h2>
          <p className="token-amount">{loyaltyTokens.amount} Tokens</p>
        </div>
        <div className="earning-rules-section">
          <div className="earning-rules">
            <h3>Earning Rules</h3>
            <p>Points per Penny: {earningRules.pointsPerPenny}</p>
            <p>Points per Order: {earningRules.pointsPerOrder}</p>
            <p>Tokens per Loyalty Point: {earningRules.tokensPerLoyaltyPoint}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoyaltyTokens;
