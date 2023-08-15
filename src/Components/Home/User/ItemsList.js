import React from "react";
import { Link } from "react-router-dom";

const ItemsList = () => {
  return (
    <div className="items-list">
      <h2>Item Categories</h2>
      <Link to="/user/products/laptops">
        <div className="item-card">Laptops</div>
      </Link>

      <Link to="/user/products/smartphone">
        <div className="item-card">Smartphone</div>
      </Link>
    </div>
  );
};

export default ItemsList;
