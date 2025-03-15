import React from "react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import Photo from "../../assets/tarek.jpg";

const Introduction = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between  py-14">
      {/* Left Side - Introduction */}
      <div className="text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm <span className="text-[#6429ef]">Tarek Rahman</span>
        </h1>
        <p className="text-xl">
        MERN Stack Developer | Expert in React & Modern UI | Building Scalable & Dynamic Web Solutions.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="https://www.linkedin.com/in/tarek-rahman-494892355/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 text-4xl hover:scale-110 transition-transform duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/tarek.rahman.483355"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-4xl hover:scale-110 transition-transform duration-200"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/reyad9009"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:scale-110 transition-transform duration-200"
          >
            <FaGithub />
          </a>
        </div>

        <a
          className="btn font-bold text-xl text-white bg-[#9263ff] hover:text-[#6429ef] hover:bg-transparent hover:border-2"
        >
          Download Resume
        </a>
      </div>

      {/* Right Side - Profile Photo */}
      <div className="mt-10 md:mt-0">
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="w-[500px] h-[500px]" // Tailwind size
        >
          <defs>
            {/* Define the blob shape as a clip path */}
            <clipPath id="blob-clip">
              <path
                d="M25.7,-25.5C33.4,-18,39.9,-9,40.1,0.2C40.3,9.4,34.3,18.8,26.6,25.5C18.8,32.1,9.4,35.9,-0.5,36.4C-10.4,36.9,-20.8,34,-26.2,27.4C-31.7,20.8,-32.2,10.4,-31.3,0.9C-30.5,-8.7,-28.2,-17.3,-22.8,-24.8C-17.3,-32.4,-8.7,-38.8,0.2,-39C9,-39.1,18,-33.1,25.7,-25.5Z"
                transform="translate(50 50)"
              />
            </clipPath>
          </defs>

          {/* Image clipped inside the blob shape */}
          <image
            href={Photo} // Replace with your image URL
            width="100%"
            height="100%"
            clipPath="url(#blob-clip)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Introduction;
