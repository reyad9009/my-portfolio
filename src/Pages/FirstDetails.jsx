import React from "react";
import { FaGithub, FaLink } from "react-icons/fa"; // Importing icons from react-icons
import { IoMdArrowForward } from "react-icons/io";

const FirstDetails = () => {
  return (
    <div className="w-11/12 mx-auto p-8">
      {/* Project Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Wardiere-Inc - A Employee Management System</h1>
      </div>

      {/* Main Technology Stack */}
      <div className="bg-[#ceb9ff] p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Main Technology Stack Used</h2>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li><strong>Frontend:</strong> React, Tailwind CSS, React Router, Axios, TanStack Query</li>
          <li><strong>Backend:</strong> Express.js, MongoDB, Firebase Admin SDK</li>
          <li><strong>Authentication:</strong> Firebase Authentication</li>
          <li><strong>Hosting:</strong> Vercel (Server), Firebase (Client)</li>
        </ul>
      </div>

      {/* Brief Description */}
      <div className="bg-[#ceb9ff] p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Brief Description</h2>
        <p className="mt-4 text-gray-700">
        The Employee Management System is a web application designed for a company to monitor employee workload, manage salaries, and handle HR functions efficiently. The system enables employees to log their work, allows HR executives to verify employees and process salary payments, and provides an admin panel for managing roles and payroll approvals.
        </p>
      </div>

      {/* Live Project Link */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Live Project Link:-</h2>
        <a href="https://bistro-boss-fdc96.web.app/" className="text-blue-500 flex items-center mt-4">
          <FaLink className="mr-2" />
          Visit the Live Project
        </a>
      </div>

      {/* GitHub Repository Link */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">GitHub Repository (Client-side):-</h2>
        <a href="https://github.com/reyad9009/Wardiere-Inc" className="text-blue-500 flex items-center mt-4">
          <FaGithub className="mr-2" />
          View on GitHub
        </a>
      </div>

      {/* Challenges Faced */}
      <div className="bg-[#ceb9ff] p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Challenges Faced While Developing the Project</h2>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li><IoMdArrowForward className="inline mr-2" />Role-Based Authentication & Authorization: Implementing different user roles (Employee, HR, Admin) with proper access control using JWT authentication and middleware was complex.</li>

          <li><IoMdArrowForward className="inline mr-2" />Real-Time Data Updates Without Reloading: Implementing features like updating employee status, salary payments, and work logs dynamically without page refresh was challenging.  TanStack Query helped in optimizing data fetching, but handling cache updates correctly took effort.</li>

          <li><IoMdArrowForward className="inline mr-2" />Secure Payment Integration:
          Ensuring secure salary transactions and preventing duplicate payments for the same month/year required payment gateway integration and proper database validation.</li>

          <li><IoMdArrowForward className="inline mr-2" />Implementing CRUD Operations with UI Feedback: Making sure Create, Read, Update, and Delete (CRUD) operations worked smoothly with real-time updates and proper user notifications using SweetAlert instead of default browser alerts.</li>

          <li><IoMdArrowForward className="inline mr-2" />Error Handling & Validation: Implementing proper form validation for login, registration, work logs, and payments to prevent incorrect data entry. Displaying meaningful error messages instead of generic browser alerts.</li>
        </ul>
      </div>

      {/* Potential Improvements */}
      <div className="bg-[#ceb9ff] p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800">Potential Improvements and Future Plans for the Project</h2>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li><IoMdArrowForward className="inline mr-2" />Advanced Role Management:
          Implement a Role-Based Access Control (RBAC) system with more granular permissions. Allow Admins to assign custom permissions to HRs and Employees dynamically.</li>

          <li><IoMdArrowForward className="inline mr-2" />Real-Time Notifications:
          Introduce real-time notifications using WebSockets (Socket.io) or Firebase Cloud Messaging for updates like salary payments, HR approvals, and work progress.</li>

          <li><IoMdArrowForward className="inline mr-2" />Enhanced UI/UX Improvements: Improve the design with modern UI components from ShadCN, Flowbite, or Material Tailwind to make it more visually appealing.
          Add dark mode for a better user experience.</li>

          <li><IoMdArrowForward className="inline mr-2" />Integration of Payroll System with Banks: Implement direct salary deposit by integrating with payment gateways like Stripe or PayPal. Allow employees to choose preferred payment methods.</li>

          <li><IoMdArrowForward className="inline mr-2" />Multi-Language Support:
          Add support for multiple languages to make the platform accessible to a wider audience.</li>
        </ul>
      </div>
    </div>
  );
};

export default FirstDetails;
