import React from "react";
import { FaGithub, FaLink } from "react-icons/fa"; // Importing icons from react-icons
import { IoMdArrowForward } from "react-icons/io";

const SecondDetails = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Project Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Language Exchange - Learn Language in a Friendly Atmosphere</h1>
      </div>

      {/* Main Technology Stack */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Main Technology Stack Used</h2>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li><strong>Frontend:</strong> React, React Router, Tailwind CSS, DaisyUI, React Awesome Reveal, React Tooltip</li>
          <li><strong>Backend:</strong> Node.js, Express.js, MongoDB Atlas</li>
          <li><strong>Authentication:</strong> Firebase with JWT</li>
          <li><strong>Tools & Packages:</strong> Axios, dotenv</li>
        </ul>
      </div>

      {/* Brief Description */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Brief Description</h2>
        <p className="mt-4 text-gray-700">
          Language Exchange is an online tutor booking platform designed to connect users with tutors from various languages and subjects.
          The platform offers a seamless way to search for tutors, book sessions, and manage tutor profiles. Key features include browsing language categories,
          booking tutorials, adding new tutorials, and reviewing tutors. With secure user authentication via Firebase and JWT, the platform ensures a safe
          and personalized learning experience. The application is fully responsive and user-friendly, promoting accessible global learning.
        </p>
      </div>

      {/* Live Project Link */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Live Project Link</h2>
        <a href="https://lingua-connect.netlify.app" className="text-blue-500 flex items-center mt-4">
          <FaLink className="mr-2" />
          View Live Project
        </a>
      </div>

      {/* GitHub Repository Link */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800">GitHub Repository Link (Client)</h2>
        <a href="https://github.com/pgrmrmortuja/language-exchange-client" className="text-blue-500 flex items-center mt-4">
          <FaGithub className="mr-2" />
          View GitHub Repository
        </a>
      </div>

      {/* Challenges Faced */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Challenges Faced While Developing the Project</h2>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li><IoMdArrowForward className="inline mr-2" />Complex Authentication: Implementing secure authentication with Firebase, managing JWT tokens, and ensuring private routes worked seamlessly across different pages proved to be challenging.</li>
          <li><IoMdArrowForward className="inline mr-2" />Dynamic Content Handling: Managing and displaying dynamic content, such as the language category cards and tutor profiles, required efficient data fetching and state management across various components.</li>
          <li><IoMdArrowForward className="inline mr-2" />Integration of External APIs: Fetching and displaying tutors' data in a responsive and interactive way, while managing backend communication with MongoDB Atlas, posed initial difficulties.</li>
          <li><IoMdArrowForward className="inline mr-2" />Responsive Design: Ensuring the application remained fully responsive across all devices (desktop, tablet, and mobile) while maintaining a clean and intuitive UI with Tailwind CSS and DaisyUI.</li>
        </ul>
      </div>

      {/* Potential Improvements */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800">Potential Improvements and Future Plans</h2>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li><IoMdArrowForward className="inline mr-2" />Pagination: Implement pagination for the tutor listing to improve the user experience, especially when dealing with large amounts of tutor data.</li>
          <li><IoMdArrowForward className="inline mr-2" />Enhanced Search Functionality: Expand the search feature to include filters like price range, tutor rating, and subjects, improving the ease of finding relevant tutors.</li>
          <li><IoMdArrowForward className="inline mr-2" />Dark/Light Theme: Implement a dark mode and light mode toggle for better accessibility and to cater to users' preferences.</li>
          <li><IoMdArrowForward className="inline mr-2" />User Reviews & Ratings: Allow users to leave more detailed reviews and ratings for tutors, with additional fields such as comments or specific areas of expertise.</li>
          <li><IoMdArrowForward className="inline mr-2" />Multi-Language Support: Add support for multiple languages to cater to a broader user base, especially for non-English speakers.</li>
          <li><IoMdArrowForward className="inline mr-2" />Mobile App: Transition the platform into a mobile app for both iOS and Android, leveraging React Native to bring the Language Exchange experience to mobile users.</li>
        </ul>
      </div>
    </div>
  );
};

export default SecondDetails;
