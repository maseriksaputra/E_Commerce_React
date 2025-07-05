// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Frown } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)] bg-gray-50 text-center px-4">
      <Frown size={80} className="text-gray-400 mb-6 animate-bounce_slow" />
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link 
        to="/" 
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors transform hover:scale-105"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;