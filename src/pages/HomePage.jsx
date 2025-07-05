// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductListing from '../components/ProductListing';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      {/* Show only a selection of products on home, or all if preferred */}
      <ProductListing /> 
    </>
  );
};

export default HomePage;