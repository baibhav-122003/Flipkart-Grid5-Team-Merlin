import React from 'react';
import './TransactionHistory.css'; // Import the CSS file

const TransactionHistory = () => {
  // Replace with actual transaction data
  const transactions = [
    { id: 1, description: 'Purchase', amount: -50 },
    { id: 2, description: 'Referral Bonus', amount: 30 },
    // ... more transactions
  ];

  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {transactions.map(transaction => (
          <li key={transaction.id} className="transaction-item">
            <span className="transaction-description">{transaction.description}:</span> 
            <span className={`transaction-amount ${transaction.amount > 0 ? 'positive' : 'negative'}`}>
              {transaction.amount} Tokens
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;
