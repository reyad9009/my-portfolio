import React from "react";
import { FaGithub, FaLink } from "react-icons/fa"; // Importing icons from react-icons
import { IoMdArrowForward } from "react-icons/io";

const FirstDetails = () => {
  return (
    <div className="w-11/12 mx-auto p-8">
      {/* Project Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">EstateLink - A Real Estate Platform</h1>
      </div>

      {/* Main Technology Stack */}
      <div className="bg-green-200 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Main Technology Stack Used</h2>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li><strong>Frontend:</strong> React, Tailwind CSS, React Router, Axios, TanStack Query</li>
          <li><strong>Backend:</strong> Express.js, MongoDB, Firebase Admin SDK</li>
          <li><strong>Authentication:</strong> Firebase Authentication</li>
          <li><strong>Hosting:</strong> Vercel (Server), Netlify (Client)</li>
        </ul>
      </div>

      {/* Brief Description */}
      <div className="bg-green-200 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Brief Description</h2>
        <p className="mt-4 text-gray-700">
          EstateLink is a comprehensive real estate platform designed to cater to three user roles: Admin, Agent, and User. The platform allows users to browse and purchase properties, leave reviews, and manage wishlists. Agents can add and manage their property listings, while admins oversee the overall platform management, including users, properties, and reviews. EstateLink integrates seamless authentication with Firebase Authentication and employs a modern tech stack to ensure a dynamic and responsive experience.
        </p>
      </div>

      {/* Live Project Link */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Live Project Link:-</h2>
        <a href="https://estatelink.netlify.app" className="text-blue-500 flex items-center mt-4">
          <FaLink className="mr-2" />
          Visit the Live Project
        </a>
      </div>

      {/* GitHub Repository Link */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">GitHub Repository (Client-side):-</h2>
        <a href="https://github.com/pgrmrmortuja/estate-link-client" className="text-blue-500 flex items-center mt-4">
          <FaGithub className="mr-2" />
          View on GitHub
        </a>
      </div>

      {/* Challenges Faced */}
      <div className="bg-green-200 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Challenges Faced While Developing the Project</h2>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li><IoMdArrowForward className="inline mr-2" />Complex Role Management: Implementing distinct features for Admins, Agents, and Users required careful planning and dynamic rendering of components. Ensuring proper role-based access control was challenging.</li>
          <li><IoMdArrowForward className="inline mr-2" />Property Listing Management: Managing a large number of properties in the backend, allowing agents to add, edit, and track listings while ensuring a seamless user experience on the front end, was a complex task.</li>
          <li><IoMdArrowForward className="inline mr-2" />Authentication and Authorization: Integrating Firebase Authentication to securely manage user login and roles while ensuring smooth user redirection based on roles (admin, agent, or user) was initially challenging.</li>
          <li><IoMdArrowForward className="inline mr-2" />Handling Async Data: Managing the data flow, especially with TanStack Query and Axios, was tricky at times, particularly with fetching large data sets efficiently.</li>
        </ul>
      </div>

      {/* Potential Improvements */}
      <div className="bg-green-200 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800">Potential Improvements and Future Plans for the Project</h2>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li><IoMdArrowForward className="inline mr-2" />Search and Filter Functionality: Add advanced search and filter options to allow users to narrow down their property searches by price, location, amenities, and more.</li>
          <li><IoMdArrowForward className="inline mr-2" />Payment Integration: Integrate a secure payment system (such as Stripe or PayPal) for property purchases to enhance the user experience.</li>
          <li><IoMdArrowForward className="inline mr-2" />Improved Admin Dashboard: Expand the admin dashboard to include features like analytics, property performance, and user management for better control over the platform.</li>
          <li><IoMdArrowForward className="inline mr-2" />User Reviews and Ratings: Implement a more robust review and rating system for properties, allowing users to rate properties on different criteria (e.g., location, amenities, value for money).</li>
          <li><IoMdArrowForward className="inline mr-2" />Mobile Optimization: Enhance the mobile responsiveness to improve user experience on smaller screens, ensuring that users can easily browse and interact with the platform on any device.</li>
        </ul>
      </div>
    </div>
  );
};

export default FirstDetails;
