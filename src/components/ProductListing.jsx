// src/components/ProductListing.jsx
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import ProductCard from './ProductCard';
import allProducts from '../data/products'; // Import all products
import { useLocation } from 'react-router-dom';

const ProductListing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const categories = ['All', ...new Set(allProducts.map(p => p.category))];

  useEffect(() => {
    // Simulate fetching products
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      // Check for category query param when component mounts or location changes
      const params = new URLSearchParams(location.search);
      const categoryParam = params.get('category');
      if (categoryParam && categories.includes(categoryParam)) {
        setSelectedCategory(categoryParam);
      } else {
        setSelectedCategory('All'); // Reset if invalid or no param
      }
    }, 500); // Small delay to simulate loading
    return () => clearTimeout(timer);
  }, [location.search, categories]); // Re-run effect when query params change

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <section className="py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Loading Products...</h2>
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-indigo-500"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Our Products</h2>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <Package size={64} className="mx-auto text-gray-400 mb-4" />
            <p className="text-xl text-gray-600">No products found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductListing;