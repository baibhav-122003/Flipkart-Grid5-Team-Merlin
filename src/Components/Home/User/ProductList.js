import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProductList.css";

const ProductList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend API with the category parameter
    fetch(`http://localhost:8000/api/productList/?category=${category}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from backend:", data); // Print the response
        setProducts(data.items); // Use data.items
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [category]);

  const userBuyService = (itemID) => {

    console.log(localStorage.getItem("userEmail"));
    console.log(localStorage.getItem("userName"));
    fetch(`http://localhost:8000/api/buyService`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: localStorage.getItem("userEmail"),
        itemID: itemID,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from backend:", data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

  return (
    <div className="product-list">
      <h2>{category === "laptop" ? "laptop" : "Smartphone"}</h2>
      <div className="product-tiles">
        {products.map((product) => (
          <div key={product.itemName} className="product-tile">
            <h3 className="product-name">{product.itemName}</h3>
            <p className="product-price">${product.itemPrice}</p>
            <Link to="/home">
              <button
                className="buy-button"
                onClick={() => userBuyService(product.itemID)}
              >
                Buy
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
