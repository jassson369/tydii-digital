import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Tydii Text',
      description: 'A business messaging tool built to automate and streamline communication across digital channels.',
      status: 'Coming Soon',
      link: '/tydii-text'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Products - Tydii Digital</title>
        <meta
          name="description"
          content="Explore Tydii Digital's innovative products: Tydii Text. Coming soon."
        />
      </Helmet>
      <div className="products-page">
        <div className="products-container">
          <h1 className="products-header">Our Products</h1>
          <div className="products-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
