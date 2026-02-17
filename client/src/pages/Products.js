import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Tydii Concierge',
      description: 'A digital customer assistant designed to help businesses manage inquiries, bookings, and customer interactions from a single platform.',
      status: 'Coming Soon'
    },
    {
      id: 2,
      name: 'FundPort',
      description: 'A financial utility platform designed to help users manage, organize, and move funds across multiple digital services from a single interface.',
      status: 'Coming Soon'
    },
    {
      id: 3,
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
          content="Explore Tydii Digital's innovative products: Tydii Concierge, FundPort, and Tydii Text. Coming soon."
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
