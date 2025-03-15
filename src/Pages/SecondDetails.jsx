import React from "react";
import { FaGithub, FaLink } from "react-icons/fa"; // Importing icons from react-icons
import { IoMdArrowForward } from "react-icons/io";

const SecondDetails = () => {
  return (
    <div className="w-11/12 mx-auto p-8">
      {/* Project Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Fradel-and-Spies - A Restaurant Management System</h1>
      </div>

      {/* Main Technology Stack */}
      <div className="bg-[#ceb9ff] p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Main Technology Stack Used</h2>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li><strong>Frontend:</strong> React, React Router, Tailwind CSS, DaisyUI, React Awesome Reveal, React Tooltip</li>
          <li><strong>Backend:</strong> Node.js, Express.js, MongoDB Atlas</li>
          <li><strong>Authentication:</strong> Firebase with JWT</li>
          <li><strong>Tools & Packages:</strong> Axios, dotenv</li>
        </ul>
      </div>

      {/* Brief Description */}
      <div className="bg-[#ceb9ff] p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Brief Description</h2>
        <p className="mt-4 text-gray-700">
        The Restaurant Management Website is a full-stack project built using the MERN stack to streamline restaurant operations. It includes user authentication, food listing, purchase functionality, order management, and an interactive gallery. Key features include secure authentication (JWT, Firebase), a responsive UI, food search and filtering, pagination, and theme customization. The project follows best practices for security, deployment, and performance optimization, ensuring a smooth experience for both customers and administrators.
        </p>
      </div>

      {/* Live Project Link */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Live Project Link:-</h2>
        <a href="https://assignment-11-b5583.web.app/" className="text-blue-500 flex items-center mt-4">
          <FaLink className="mr-2" />
          View Live Project
        </a>
      </div>

      {/* GitHub Repository Link */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">GitHub Repository Link (Client):-</h2>
        <a href="https://github.com/reyad9009/Fradel-and-Spies" className="text-blue-500 flex items-center mt-4">
          <FaGithub className="mr-2" />
          View GitHub Repository
        </a>
      </div>

      {/* Challenges Faced */}
      <div className="bg-[#ceb9ff] p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Challenges Faced While Developing the Project</h2>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li><IoMdArrowForward className="inline mr-2" />Managing Authentication & Authorization – Implementing secure login, registration, and JWT-based authentication while ensuring protected routes worked smoothly.</li>

          <li><IoMdArrowForward className="inline mr-2" />Database Security & Environment Variables – Safeguarding MongoDB credentials and Firebase configuration keys using environment variables to prevent security vulnerabilities.</li>

          <li><IoMdArrowForward className="inline mr-2" />Ensuring Responsive Design – Making sure the website worked seamlessly across mobile, tablet, and desktop devices while maintaining a visually appealing UI.</li>

          <li><IoMdArrowForward className="inline mr-2" />State Management & API Handling – Managing real-time data updates and API calls efficiently, especially for search functionality, pagination, and filtering.</li>

          <li><IoMdArrowForward className="inline mr-2" />Handling Real-Time Data Updates – Updating the purchase count, order status, and user profile dynamically without requiring full page reloads.</li>
        </ul>
      </div>

      {/* Potential Improvements */}
      <div className="bg-[#ceb9ff] p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800">Potential Improvements and Future Plans</h2>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li><IoMdArrowForward className="inline mr-2" />Enhancing UI/UX Design – Improve the color contrast, alignment, and overall design aesthetics to make the platform more appealing to users.</li>

          <li><IoMdArrowForward className="inline mr-2" />Advanced Filtering & Sorting – Implement multiple filtering options for food items based on price, category, and ratings to improve search functionality.</li>

          <li><IoMdArrowForward className="inline mr-2" />Real-Time Order Tracking – Introduce live order tracking for customers to monitor their food delivery status in real-time.</li>

          <li><IoMdArrowForward className="inline mr-2" />AI-Powered Recommendations – Implement AI-based food recommendations based on user preferences, order history, and trending items.</li>

          <li><IoMdArrowForward className="inline mr-2" />Performance Optimization – Improve backend queries, implement caching, and optimize API calls for faster data retrieval and a smoother experience.</li>

          <li><IoMdArrowForward className="inline mr-2" />Admin Dashboard for Restaurant Owners – Create an admin panel to manage orders, food inventory, and user activity analytics efficiently.</li>
        </ul>
      </div>
    </div>
  );
};

export default SecondDetails;
