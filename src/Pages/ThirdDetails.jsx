import React from 'react';
import { FaLink, FaGithub } from 'react-icons/fa';
import { IoMdArrowForward } from 'react-icons/io';

const ThirdDetails = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Project Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">EquiSports - A Sports Equipment Store</h1>
      </div>

      {/* Main Technology Stack */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Main Technology Stack Used</h2>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li><strong>Frontend:</strong> React, React Router, Tailwind CSS, DaisyUI, React Awesome Reveal, React Tooltip</li>
          <li><strong>Backend:</strong> Node.js, Express.js, MongoDB Atlas</li>
          <li><strong>Authentication:</strong> Firebase</li>
          <li><strong>Deployment:</strong> Netlify (Client), Vercel (Server)</li>
        </ul>
      </div>

      {/* Brief Description */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Brief Description</h2>
        <p className="mt-4 text-gray-700">
          EquiSports is a responsive e-commerce platform designed for sports enthusiasts to browse, purchase, and review a variety of sports accessories.
          The platform includes user authentication, product management, and sorting functionalities, providing an intuitive and seamless shopping experience.
          Users can add, update, and delete products, view product details, and manage their own equipment list securely.
        </p>
      </div>

      {/* Live Project Link */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Live Project Link</h2>
        <a href="https://sportseqp.netlify.app" className="text-blue-500 flex items-center mt-4">
          <FaLink className="mr-2" />
          Visit the Live Project
        </a>
      </div>

      {/* GitHub Repository Link */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800">GitHub Repository (Client-side)</h2>
        <a href="https://github.com/pgrmrmortuja/sports-equipment-project" className="text-blue-500 flex items-center mt-4">
          <FaGithub className="mr-2" />
          View on GitHub
        </a>
      </div>

      {/* Challenges Faced */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Challenges Faced While Developing the Project</h2>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li><IoMdArrowForward className="inline mr-2" />State Management: Managing user authentication state across protected routes without unnecessary redirects.</li>
          <li><IoMdArrowForward className="inline mr-2" />Sorting Implementation: Implementing a price-based sorting feature dynamically using MongoDB queries.</li>
          <li><IoMdArrowForward className="inline mr-2" />Dark/Light Mode Toggle: Ensuring theme persistence even after page reloads.</li>
          <li><IoMdArrowForward className="inline mr-2" />Secure API Handling: Properly managing environment variables to protect sensitive Firebase and MongoDB credentials.</li>
        </ul>
      </div>

      {/* Potential Improvements */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800">Potential Improvements and Future Plans for the Project</h2>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li><IoMdArrowForward className="inline mr-2" />Wishlist Feature: Allow users to save items for later purchases.</li>
          <li><IoMdArrowForward className="inline mr-2" />User Reviews & Ratings: Enable users to leave reviews and ratings for products.</li>
          <li><IoMdArrowForward className="inline mr-2" />Advanced Search & Filters: Implement better filtering options based on categories, brands, and price ranges.</li>
          <li><IoMdArrowForward className="inline mr-2" />Admin Dashboard: A dedicated panel for managing users, orders, and inventory.</li>
          <li><IoMdArrowForward className="inline mr-2" />Payment Integration: Adding a secure payment gateway to facilitate real-time purchases.</li>
        </ul>
      </div>
    </div>
  );
};

export default ThirdDetails;
