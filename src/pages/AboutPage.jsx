// src/pages/AboutPage.jsx
import React from 'react';

const AboutPage = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8">About TechStore</h2>
        
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Welcome to TechStore, your ultimate destination for the latest and greatest in electronics and accessories.
          Founded in 2024, our mission is to bring high-quality tech products directly to your doorstep at competitive prices.
        </p>
        
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          We believe in empowering our customers with technology that enhances their lives. From cutting-edge smartphones
          and immersive headphones to smart home devices and essential accessories, we meticulously curate our selection
          to ensure every product meets our stringent standards for performance, reliability, and value.
        </p>
        
        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Our Vision</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          To be the leading online retailer for technology products, known for our exceptional customer service,
          diverse product range, and commitment to innovation.
        </p>
        
        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Our Values</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 leading-relaxed space-y-2">
          <li>**Customer Centricity**: Putting our customers at the heart of everything we do.</li>
          <li>**Quality Assurance**: Offering only products that meet high standards of quality.</li>
          <li>**Innovation**: Staying ahead with the latest tech trends and products.</li>
          <li>**Transparency**: Honest and clear communication with our customers.</li>
          <li>**Sustainability**: Committing to eco-friendly practices where possible.</li>
        </ul>
        
        <p className="text-lg text-gray-700 text-center pt-4">
          Thank you for choosing TechStore. We look forward to serving all your technology needs!
        </p>
      </div>
    </section>
  );
};

export default AboutPage;