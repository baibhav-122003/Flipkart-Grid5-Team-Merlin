import React from 'react';
import './LoyaltyTokens.css'; // Import the CSS file

const UserLoyaltyTokens = () => {
  // Replace with actual loyalty token data
  const loyaltyTokens = [
    { id: 1, amount: 100 },
  ];

  return (
    <div className="loyalty-tokens">
      <h2>Loyalty Tokens Earned</h2>
      <p className="token-amount">{loyaltyTokens[0].amount} Tokens</p>
    </div>
  );
}

export default UserLoyaltyTokens;
