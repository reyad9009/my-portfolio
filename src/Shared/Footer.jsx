import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import Photo from "../assets/tarek.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-16">
      <div className="container mx-auto flex flex-cols-1 justify-around items-center md:flex-cols-2 md:justify-around md:items-center">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-300">Email: tarekhossen105@gmail.com</p>
          <p className="text-gray-300">Phone: +8801585761668</p>

          {/* Social Icons */}
          <div className="mt-4 flex gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:justify-end">
          <svg
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            className="w-[200px] h-[200px]" // Tailwind size
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
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-gray-400 text-sm">
        © {new Date().getFullYear()} Tarek Rahman All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
