import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProductList.css";

const ProductList = () => {
  const { category } = useParams();

  // Replace this with actual product data or API calls
  const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 150 },
    { id: 3, name: "Product 3", price: 200 },
    // ... more products
  ];

  return (
    <div className="product-list">
      <h2>{category === "laptops" ? "Laptops" : "Smartphones"}</h2>
      <div className="product-tiles">
        {products.map((product) => (
          <div key={product.id} className="product-tile">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <Link to="/">
              <button className="buy-button">Buy</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
