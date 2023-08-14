import React from 'react';
import UserLoyaltyTokens from './LoyaltyTokens.js';
import TransactionHistory from './TransactionHistory';
import Offers from './Offers';

const Rewards = () => {
  return (
    <div>
      <h1>Loyalty Points</h1>
      <UserLoyaltyTokens />
      <TransactionHistory />
      <Offers />
    </div>
  );
}

export default Rewards;
