import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="text-gray-300 pr-4 flex items-center px-4">
          <a
            href="https://github.com/DrFidget"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neon-green"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmadhassan-drfidget/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neon-green ml-4"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>
        <div className="text-gray-300 ml-auto">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Ahmad . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
