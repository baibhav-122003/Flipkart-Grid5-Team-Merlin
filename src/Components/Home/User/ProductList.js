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
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [category]);
  

  return (
    <div className="product-list">
      <h2>{category === "laptops" ? "Laptops" : "Smartphones"}</h2>
      <div className="product-tiles">
        {products.map((product) => (
          <div key={product.id} className="product-tile">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <Link to="/home">
              <button className="buy-button">Buy</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
