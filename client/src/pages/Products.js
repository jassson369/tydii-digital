import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';
import PricingCard from '../components/PricingCard';
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
      link: '/privacy'
    }
  ];

  const pricingPlans = [
    {
      title: 'Starter',
      price: 'BWP 299 / month',
      bestFor: 'Small businesses & solo entrepreneurs',
      features: [
        '1 channel (WhatsApp or Instagram)',
        'Up to 1,000 messages / month',
        'Product & price auto-replies',
        'Business info & FAQs',
        'Business hours logic',
        'Manual human takeover',
        'Basic usage stats'
      ],
      buttonText: 'Get Started',
      buttonLink: '/about#contact'
    },
    {
      title: 'Business',
      price: 'BWP 599 / month',
      bestFor: 'Growing SMEs handling many customer messages',
      features: [
        'Everything in Starter',
        '2 channels (WhatsApp + Instagram)',
        'Up to 5,000 messages / month',
        'Larger product catalog (up to 300 items)',
        'Smarter intent detection (sales vs info)',
        'Human handoff notifications',
        'Editable AI tone/personality',
        'Chat history (7–14 days)'
      ],
      buttonText: 'Most Popular',
      buttonLink: '/about#contact',
      isPopular: true
    },
    {
      title: 'Pro',
      price: 'Book a demo',
      bestFor: 'Hotels, agencies, high-volume businesses',
      features: [
        'Everything in Business',
        'All channels',
        '20,000+ messages / month',
        'Unlimited product catalog',
        'Custom AI personality',
        'Knowledge base upload (PDFs, menus, policies)',
        'Priority processing & support'
      ],
      buttonText: 'Book a Demo',
      buttonLink: '/about#contact'
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

          <section className="pricing-section">
            <h2 className="pricing-section-title">Tydii Text Pricing</h2>
            <p className="pricing-section-subtitle">Simple plans for businesses of all sizes.</p>
            <div className="pricing-grid">
              {pricingPlans.map((plan, index) => (
                <PricingCard 
                  key={index} 
                  plan={plan} 
                  isPopular={plan.isPopular}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Products;
