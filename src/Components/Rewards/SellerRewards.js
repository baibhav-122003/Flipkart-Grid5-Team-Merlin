import React from 'react';
import UserLoyaltyTokens from './LoyaltyTokens.js';
import TransactionHistory from './TransactionHistory';
import CustomerList from './CustomerList.js';

const SellerRewards = () => {
  return (
    <div>
      <h1>Loyalty Points</h1>
      <UserLoyaltyTokens />
      <TransactionHistory />
      <CustomerList />
    </div>
  );
}

export default SellerRewards;
