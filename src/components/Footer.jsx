import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = (event) => {
    const { clientY } = event;
    const windowHeight = window.innerHeight;
    const threshold = windowHeight - 100; // Adjust this value as needed
    setIsVisible(clientY >= threshold);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="footer"
      className={`bg-gray-800 ${
        isVisible ? 'visible-footer' : 'hidden-footer'
      }`}
    >
      <div className="border-t border-amber-500">
        <div className="container flex flex-col bg-gray-800 items-center px-6 pb-5 mx-auto mt-0 md:space-y-0 md:flex-row md:flex-wrap">
          <div className="flex justify-between mt-5 md:w-full">
            <div className="flex flex-col">
              <p className="max-w-full text-2xl font-bold text-amber-300 italic text-center md:text-center">
                Website Designed & Built by Adam Herdman
              </p>
              <p className="text-center text-1xl italic text-amber-300">2025</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/cleffei"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-amber-500"
              >
                <FaGithub size={50} />
              </a>
              <a
                href="https://www.linkedin.com/in/adam-herdman1999/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-amber-500"
              >
                <FaLinkedin size={50} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
