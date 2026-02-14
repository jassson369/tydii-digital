import React from 'react';
import { Link } from 'react-router-dom';
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
        {product.link ? (
          <Link to={product.link} className="product-placeholder-link">
            Learn More →
          </Link>
        ) : (
          <div className="product-placeholder-link">
            Learn More →
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
