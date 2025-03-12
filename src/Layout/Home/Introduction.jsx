import React from "react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import Photo from "../../assets/myphoto.jpg";

const Introduction = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 min-h-screen">
      {/* Left Side - Introduction */}
      <div className="text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm <span className="text-blue-500">G. M. Mortuja</span>
        </h1>
        <p className="text-lg">
          MERN Stack Developer | Passionate about building scalable web
          applications
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 text-4xl hover:scale-110 transition-transform duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-4xl hover:scale-110 transition-transform duration-200"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:scale-110 transition-transform duration-200"
          >
            <FaGithub />
          </a>
        </div>

        {/* Download Resume Button */}
        <a
        //   href="/resume.pdf"
        //   download
          className="btn inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold shadow-md"
        >
          Download Resume
        </a>
      </div>

      {/* Right Side - Profile Photo */}
      <div className="mt-10 md:mt-0">
        <img
          src={Photo}
          alt="G. M. Mortuja"
          className="w-60 md:w-80 rounded-full shadow-lg border-4 border-blue-500"
        />
      </div>
    </section>
  );
};

export default Introduction;
