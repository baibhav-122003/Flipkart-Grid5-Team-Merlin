import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProductList.css";

const ProductList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend API with the category parameter
    fetch(`http://localhost:8000/api/user/productList/?category=${category}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from backend:", data); // Print the response
        setProducts(data.items); // Use data.items
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [category]);
  const userBuyService = async (itemID) => {
    try {
      console.log(localStorage.getItem("userEmail"));
      console.log(localStorage.getItem("userName"));

      const response = await fetch(`http://localhost:8000/api/user/buy`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: localStorage.getItem("userEmail"),
          itemID: itemID,
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log("Response from backend:", data);
      } else {
        console.error("Error fetching:", response.statusText);
      }
      window.location.href = "/home";
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="product-list">
      <h2>{category === "laptop" ? "Laptops" : "Smartphones"}</h2>
      <div className="product-tiles">
        {products.map((product) => (
          <div key={product.itemName} className="product-tile">
            <div className="product-image">
              <img
                src="https://img.freepik.com/free-vector/realistic-display-smartphone-with-different-apps_52683-30241.jpg"
                alt={product.itemName}
              />
            </div>
            <h3 className="product-name">{product.itemName}</h3>
            <p className="product-price">${product.itemPrice}</p>
            <button
              className="buy-button"
              onClick={() => userBuyService(product.itemID)}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
