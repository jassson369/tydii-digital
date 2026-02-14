import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '../contexts/ThemeContext';
import Dither from '../components/Dither';
import './Landing.css';

const Landing = () => {
  const { theme } = useTheme();
  
  return (
    <>
      <Helmet>
        <title>Tydii Digital</title>
        <meta
          name="description"
          content="Tydii Digital builds practical software products to help modern businesses operate, automate, and grow."
        />
      </Helmet>
      <div className="landing-page">
        <div className="dither-background">
          <Dither
            waveSpeed={0.05}
            waveFrequency={3}
            waveAmplitude={0.3}
            waveColor={[0.0, 1.0, 0.0]}
            colorNum={4}
            pixelSize={2}
            enableMouseInteraction={true}
            mouseRadius={0.5}
            theme={theme}
          />
        </div>
        <div className="landing-content">
          <div className="hero-section">
            <h1 className="hero-title">
              Welcome to <span className="accent-text">Tydii Digital</span>
            </h1>
            <p className="hero-description">
              Tydii Digital builds practical software products to help modern businesses operate, automate, and grow.
            </p>
            <Link to="/products" className="cta-button">
              View Products
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
