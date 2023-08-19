import React, { useState, useEffect } from "react";
import "./SellerDashboard.css"; // Import the corresponding CSS file

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
      <div className="product-tiles">
        {products.map(product => (
          <div className="product-tile" key={product.id}>
            <img
              src={
                product.category === "laptop"
                  ? "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-xlarge.jpg"
                  : product.category === "smartphone"
                  ? "https://m.media-amazon.com/images/I/71Ap5hKZoJL.jpg"
                  : "https://www.businessinsider.in/photo/47452951.cms" // Provide a default image path
              }
              alt={product.name}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerDashboard;
