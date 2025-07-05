import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Star, Search, Menu, X, Filter, Plus, Minus, Trash2, User, Package, CreditCard } from 'lucide-react';

const EcommerceApp = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 299000,
      originalPrice: 399000,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 128,
      category: "Electronics",
      description: "Premium wireless headphones with noise cancellation"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 1299000,
      originalPrice: 1599000,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 256,
      category: "Electronics",
      description: "Advanced fitness tracking and health monitoring"
    },
    {
      id: 3,
      name: "Laptop Backpack",
      price: 249000,
      originalPrice: 329000,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 89,
      category: "Accessories",
      description: "Durable and stylish laptop backpack with multiple compartments"
    },
    {
      id: 4,
      name: "Smartphone",
      price: 4999000,
      originalPrice: 5999000,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 412,
      category: "Electronics",
      description: "Latest smartphone with advanced camera and AI features"
    },
    {
      id: 5,
      name: "Coffee Maker",
      price: 899000,
      originalPrice: 1199000,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
      rating: 4.5,
      reviews: 67,
      category: "Home",
      description: "Automatic coffee maker with programmable brewing"
    },
    {
      id: 6,
      name: "Gaming Mouse",
      price: 199000,
      originalPrice: 249000,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 156,
      category: "Electronics",
      description: "High-precision gaming mouse with RGB lighting"
    }
  ]);

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = ['All', 'Electronics', 'Accessories', 'Home'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const isInWishlist = prev.some(item => item.id === product.id);
      if (isInWishlist) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const Header = () => (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer" onClick={() => setCurrentView('home')}>
              TechStore
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <button 
                onClick={() => setCurrentView('home')}
                className={`${currentView === 'home' ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600 transition-colors`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentView('products')}
                className={`${currentView === 'products' ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600 transition-colors`}
              >
                Products
              </button>
              <button className="text-gray-700 hover:text-indigo-600 transition-colors">About</button>
              <button className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-indigo-600 transition-colors">
              <User size={20} />
            </button>
            <button 
              onClick={() => setCurrentView('wishlist')}
              className="p-2 text-gray-700 hover:text-indigo-600 transition-colors relative"
            >
              <Heart size={20} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
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
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
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
    </header>
  );

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
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
              wishlist.some(item => item.id === product.id) 
                ? 'bg-red-500 text-white' 
                : 'bg-white/80 text-gray-700 hover:bg-red-500 hover:text-white'
            } transition-colors`}
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
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        
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
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
        >
          <ShoppingCart size={16} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );

  const CartSidebar = () => (
    <div className={`fixed inset-0 z-50 ${isCartOpen ? 'block' : 'hidden'}`}>
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsCartOpen(false)} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded">
            <X size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingCart size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <p className="text-indigo-600 font-semibold">{formatPrice(item.price)}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-2 py-1 bg-white rounded text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Plus size={14} />
                      </button>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 hover:bg-gray-200 rounded text-red-500 ml-2"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {cart.length > 0 && (
          <div className="border-t p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-xl font-bold text-indigo-600">{formatPrice(getTotalPrice())}</span>
            </div>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2">
              <CreditCard size={20} />
              <span>Checkout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const Hero = () => (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Amazing Products
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Shop the latest tech and lifestyle products at unbeatable prices
          </p>
          <button 
            onClick={() => setCurrentView('products')}
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );

  const ProductsSection = () => (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Featured Products</h2>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );

  const WishlistSection = () => (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">My Wishlist</h2>
        
        {wishlist.length === 0 ? (
          <div className="text-center py-16">
            <Heart size={64} className="mx-auto text-gray-400 mb-4" />
            <p className="text-xl text-gray-600 mb-4">Your wishlist is empty</p>
            <button 
              onClick={() => setCurrentView('products')}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
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

  const Footer = () => (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechStore</h3>
            <p className="text-gray-400">Your trusted destination for quality tech products and accessories.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Electronics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TechStore. All rights reserved. Built with React for portfolio demonstration.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CartSidebar />
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <button 
              onClick={() => { setCurrentView('home'); setIsMenuOpen(false); }}
              className="block w-full text-left py-2 text-gray-700 hover:text-indigo-600"
            >
              Home
            </button>
            <button 
              onClick={() => { setCurrentView('products'); setIsMenuOpen(false); }}
              className="block w-full text-left py-2 text-gray-700 hover:text-indigo-600"
            >
              Products
            </button>
            <button className="block w-full text-left py-2 text-gray-700 hover:text-indigo-600">About</button>
            <button className="block w-full text-left py-2 text-gray-700 hover:text-indigo-600">Contact</button>
          </div>
        </div>
      )}
      
      <main>
        {currentView === 'home' && (
          <>
            <Hero />
            <ProductsSection />
          </>
        )}
        {currentView === 'products' && <ProductsSection />}
        {currentView === 'wishlist' && <WishlistSection />}
      </main>
      
      <Footer />
    </div>
  );
};

export default EcommerceApp;