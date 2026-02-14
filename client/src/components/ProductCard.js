import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card-header">
        <h3 className="product-name">{product.name}</h3>
        <span className="product-status">{product.status}</span>
      </div>
      <p className="product-description">{product.description}</p>
      <div className="product-card-footer">
        <div className="product-placeholder-link">
          Learn More →
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
