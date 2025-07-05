// src/components/CartSidebar.jsx
import React from 'react';
import { X, ShoppingCart, Plus, Minus, Trash2, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartSidebar = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getTotalPrice, formatPrice } = useCart();

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsCartOpen(false)} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
                <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg animate-fade-in">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <p className="text-indigo-600 font-semibold">{formatPrice(item.price)}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-2 py-1 bg-white rounded text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <Plus size={14} />
                      </button>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 hover:bg-gray-200 rounded text-red-500 ml-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <CreditCard size={20} />
              <span>Checkout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;