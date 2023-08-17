import React, { useState, useEffect } from "react";
import "./CustomerList.css";
import { approveService } from "../../BlockChain Service/approveService";


const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  const FetchResponse = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/seller/getLoyalCustomers",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            sellerEmail: localStorage.getItem("sellerEmail"),
          },
        }
      );

      if (response.status === 200) {
        const responseData = await response.json();

        const { loyalCustomers } = responseData;
        console.log("Loyal Customers:", loyalCustomers);
        setCustomers(loyalCustomers);
      } else {
        console.error("Error fetching:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    FetchResponse();
  }, []);

  const rewardUser = async (userEmail) => {

    const response = await fetch(
      "http://localhost:8000/api/seller/rewardCustomer",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sellerEmail: localStorage.getItem("sellerEmail"),
          userEmail: userEmail,
        }),
      }
    );
    if (response.status === 200) {
      console.log("Reward sent");
    } else {
      console.error("Error fetching:", response.statusText);
    }
    console.log("removed");
  };

  const sendToken = async (userEmail) => {

    await approveService(10);

    //requesting backend to update database
    await rewardUser(userEmail);
    //update the list of customers
    await FetchResponse();

    // Remove the rewarded customer from the list
  };

  return (
    <div className="customer-list">
      <h3>Customers Who Bought from You</h3>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((email) => (
            <tr key={email}>
              <td>{email}</td>
              <td>
                <button
                  className="reward-button"
                  onClick={() => sendToken(email)}
                >
                  Reward
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
