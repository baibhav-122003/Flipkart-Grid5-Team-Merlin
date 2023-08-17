import React, { useState, useEffect } from "react";
import "./Offers.css";
import { approveService } from "../../BlockChain Service/approveService";

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
      setOffers(data.allOffers);
    }
  };

  useEffect(() => {
    fetchResponse();
  }, []);

  const availOffer = async (offerId, tokensRequired) => {

    //user must approve flipkart to spend offer.tokensRequired tokens
    // await approveService(tokensRequired);

    const response = await fetch("http://localhost:8000/api/user/availOffer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          userEmail: localStorage.getItem("userEmail"),
         sellerEmail: "seller@gmail.com", 
         offerId: offerId,
      }),
    });

    if (response.status === 200 && response) {
      const data = await response.json();
      const { message } = data;
      console.log(message);
    }
  };

  return (
    <div className="offers">
      <h2>Available Offers</h2>
      <div className="offer-tiles">
        {offers.map((offer) => (
          <div key={offer._id} className="offer-tile">
            <h3 className="offer-name">{offer.details}</h3>
            <button className="token-button" onClick={()=> availOffer(offer._id, offer.tokensRequired)}>
              {offer.tokensRequired} Tokens
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;


