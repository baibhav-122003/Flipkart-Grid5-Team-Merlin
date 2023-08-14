import React from "react";
import { Link } from "react-router-dom";

const ItemsList = () => {
  return (
    <div className="items-list">
      <h2>Item Categories</h2>
      <Link to="/user/products/laptops">
        <div className="item-card">Laptops</div>
      </Link>

      <Link to="/user/products/smartphones">
        <div className="item-card">Smartphones</div>
      </Link>
    </div>
  );
};

export default ItemsList;
