// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cart, wishlist, getTotalItems, setIsCartOpen } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavLinkClick = (path) => {
    setIsMenuOpen(false); // Close menu on navigation
    navigate(path);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              TechStore
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Products
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-indigo-600 transition-colors">
              <User size={20} />
            </button>
            <button 
              onClick={() => handleNavLinkClick('/wishlist')}
              className="p-2 text-gray-700 hover:text-indigo-600 transition-colors relative"
            >
              <Heart size={20} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                  {wishlist.length}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-gray-700 hover:text-indigo-600 transition-colors relative"
            >
              <ShoppingCart size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-ping_once">
                  {getTotalItems()}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <button 
              onClick={() => handleNavLinkClick('/')}
              className="block w-full text-left py-2 text-gray-700 hover:text-indigo-600"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavLinkClick('/products')}
              className="block w-full text-left py-2 text-gray-700 hover:text-indigo-600"
            >
              Products
            </button>
            <button 
              onClick={() => handleNavLinkClick('/about')}
              className="block w-full text-left py-2 text-gray-700 hover:text-indigo-600"
            >About</button>
            <button 
              onClick={() => handleNavLinkClick('/contact')}
              className="block w-full text-left py-2 text-gray-700 hover:text-indigo-600"
            >Contact</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;