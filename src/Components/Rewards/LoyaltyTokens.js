import React, { useEffect, useState } from "react";
import "./LoyaltyTokens.css"; // Import the CSS file

const UserLoyaltyTokens = () => {
  const [loyaltyTokens, setLoyaltyTokens] = useState([]);

  const fetchResponse = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/user/getTokenBalance",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const responseData = await response.json();
        setLoyaltyTokens(responseData); // Update the state with fetched data
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchResponse();
  }, []);

  return (
    <div className="loyalty-tokens">
      <h2>Loyalty Tokens Earned</h2>
      <p className="token-amount">{loyaltyTokens[0].amount} Tokens</p>
    </div>
  );
};

export default UserLoyaltyTokens;
