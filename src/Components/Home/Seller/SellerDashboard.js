import React, { useState, useEffect } from 'react';

const SellerDashboard = () => {
  const [products, setProducts] = useState([]);

  const FetchResponse = async () => {
    try {
      console.log("Fetching loyal customers...")
      const response = await fetch(
        "http://localhost:8000/api/seller/getItems",
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

        const { items } = responseData;
        setProducts(items);
      } else {
        console.error("Error fetching:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  // Simulating fetching products from an API
  useEffect(() => {

    FetchResponse();
  }, []);

  return (
    <div>
      <h1>Seller Dashboard</h1>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <strong>{product.name}</strong> - {product.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellerDashboard;
