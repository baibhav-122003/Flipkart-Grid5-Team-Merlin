import React from 'react';
import UserLoyaltyTokens from './LoyaltyTokens.js';
import TransactionHistory from './TransactionHistory';

const Rewards = () => {
  return (
    <div>
      <h1>Loyalty Points</h1>
      <UserLoyaltyTokens />
      <TransactionHistory />
    </div>
  );
}

export default Rewards;
