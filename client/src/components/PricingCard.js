import React from 'react';
import { Link } from 'react-router-dom';
import './PricingCard.css';

const PricingCard = ({ plan, isPopular = false }) => {
  const { title, price, bestFor, features, buttonText, buttonLink } = plan;

  return (
    <div className={`pricing-card ${isPopular ? 'popular' : ''}`}>
      {isPopular && (
        <div className="pricing-badge">Most Popular</div>
      )}
      <div className="pricing-header">
        <h3 className="pricing-title">{title}</h3>
        <div className="pricing-price">{price}</div>
        <p className="pricing-best-for">{bestFor}</p>
      </div>
      <div className="pricing-features">
        <p className="pricing-includes">Includes:</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="pricing-footer">
        <Link to={buttonLink} className="pricing-button">
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
