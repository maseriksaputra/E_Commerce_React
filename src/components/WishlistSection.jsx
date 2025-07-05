// src/components/WishlistSection.jsx
import React from 'react';
import { Heart } from 'lucide-react';
import ProductCard from './ProductCard';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const WishlistSection = () => {
  const { wishlist } = useCart();
  const navigate = useNavigate();

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">My Wishlist</h2>
        
        {wishlist.length === 0 ? (
          <div className="text-center py-16">
            <Heart size={64} className="mx-auto text-gray-400 mb-4" />
            <p className="text-xl text-gray-600 mb-4">Your wishlist is empty. Add some products!</p>
            <button 
              onClick={() => navigate('/products')}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors transform hover:scale-105"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlist.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WishlistSection;