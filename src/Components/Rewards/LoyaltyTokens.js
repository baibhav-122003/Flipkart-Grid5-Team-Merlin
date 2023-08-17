import React, { useEffect, useState } from "react";
import "./LoyaltyTokens.css"; // Import the CSS file

const UserLoyaltyTokens = () => {
  const [loyaltyTokens, setLoyaltyTokens] = useState({ amount: 0 }); // Initialize with amount property

  const fetchResponse = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/user/getTokenBalance",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            email: localStorage.getItem("userEmail"),
          },
        }
      );

      if (response.status === 200) {
        const responseData = await response.json();
        const { balance } = responseData;

        console.log("Balance:", balance);

        setLoyaltyTokens({ amount: balance }); // Update the state with the balance value
      } else {
        console.error("Error fetching data:", response.statusText);
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
      <p className="token-amount">{loyaltyTokens.amount} Tokens</p>
    </div>
  );
};

export default UserLoyaltyTokens;
