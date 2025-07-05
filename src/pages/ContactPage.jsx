// src/pages/ContactPage.jsx
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8">Contact Us</h2>
        
        <p className="text-lg text-gray-700 mb-6 text-center leading-relaxed">
          Have questions, feedback, or need support? We're here to help! Reach out to us through any of the following methods.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
          <div className="flex flex-col items-center p-6 bg-indigo-50 rounded-lg shadow-sm">
            <Mail size={40} className="text-indigo-600 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Support</h3>
            <p className="text-indigo-600 font-medium">support@techstore.com</p>
            <p className="text-sm text-gray-600">We aim to respond within 24 hours.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-indigo-50 rounded-lg shadow-sm">
            <Phone size={40} className="text-indigo-600 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone Support</h3>
            <p className="text-indigo-600 font-medium">+62 812-3456-7890</p>
            <p className="text-sm text-gray-600">Available Mon-Fri, 9 AM - 5 PM WIB</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-indigo-50 rounded-lg shadow-sm">
            <MapPin size={40} className="text-indigo-600 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Office</h3>
            <p className="text-indigo-600 font-medium">Jl. Contoh No. 123, Purwodadi</p>
            <p className="text-sm text-gray-600">Central Java, Indonesia</p>
          </div>
        </div>

        <div className="p-8 bg-gray-100 rounded-lg">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Send Us a Message</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
              <input 
                type="text" 
                id="name" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
              <input 
                type="email" 
                id="email" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;