import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Products from './pages/Products';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
