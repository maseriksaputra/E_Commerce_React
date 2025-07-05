// src/components/ProductCard.jsx
import React from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = React.memo(({ product }) => {
  const { addToCart, toggleWishlist, wishlist, formatPrice } = useCart();
  const isInWishlist = wishlist.some(item => item.id === product.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group relative">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <button 
            onClick={() => toggleWishlist(product)}
            className={`p-2 rounded-full ${
              isInWishlist 
                ? 'bg-red-500 text-white' 
                : 'bg-white/80 text-gray-700 hover:bg-red-500 hover:text-white'
            } transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`}
          >
            <Heart size={16} />
          </button>
        </div>
        {product.originalPrice > product.price && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-indigo-600">{formatPrice(product.price)}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
        </div>
        
        <button 
          onClick={() => addToCart(product)}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <ShoppingCart size={16} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
});

export default ProductCard;