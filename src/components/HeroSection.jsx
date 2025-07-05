// src/components/HeroSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Discover Amazing Products
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up delay-200">
            Shop the latest tech and lifestyle products at unbeatable prices
          </p>
          <button 
            onClick={() => navigate('/products')}
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 animate-fade-in-up delay-400"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;