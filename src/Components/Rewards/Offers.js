import React, { useState, useEffect } from "react";
import "./Offers.css";

const Offers = () => {

  const [offers, setOffers] = useState([]);

  const fetchResponse = async () => {
    const response = await fetch("http://localhost:8000/api/user/getOffers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200 && response) {
      const data = await response.json();
      console.log(data);
      setOffers(data);
    }
  };

  useEffect(() => {
    fetchResponse();
  }, []);

  const availOffer = async () => {
    const response = await fetch("http://localhost:8000/api/user/availOffer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200 && response) {
    }
  };

  return (
    <div className="offers">
      <h2>Available Offers</h2>
      <div className="offer-tiles">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-tile">
            <h3 className="offer-name">{offer.name}</h3>
            <button className="token-button" onClick={availOffer}>
              {offer.cost} Tokens
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;


