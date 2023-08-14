import React, { useState, useEffect } from 'react';

const SellerDashboard = () => {
  const [products, setProducts] = useState([]);
  
  // Simulating fetching products from an API
  useEffect(() => {
    // Replace this with your actual API call
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Seller Dashboard</h1>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong> - {product.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellerDashboard;
