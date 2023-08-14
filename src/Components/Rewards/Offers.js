import React from 'react';
import './Offers.css';

const Offers = () => {
  // Replace with actual offer data
  const offers = [
    { id: 1, name: 'Discount on Product A', cost: 50 },
    { id: 2, name: 'Free Shipping', cost: 30 },
    // ... more offers
  ];

  return (
    <div className="offers">
      <h2>Available Offers</h2>
      <div className="offer-tiles">
        {offers.map(offer => (
          <div key={offer.id} className="offer-tile">
            <h3 className="offer-name">{offer.name}</h3>
            <button className="token-button">{offer.cost} Tokens</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
