import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { logo } from '../assets'; // Adjust based on your assets folder

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll effect
    });
  };

  return (
    <footer className="bg-quaternary text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">

          {/* Logo and Name on the Left */}
          <div className="flex items-center mb-4 sm:mb-0">
            <img
              src={logo}
              alt="BlazeWild Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
            <span className="ml-3 text-base sm:text-lg font-bold">
              Ashok | BlazeWild
            </span>
          </div>

          {/* Copyright Text in the Center */}
          <div className="text-center flex-grow mb-4 sm:mb-0">
            <p className="text-xs sm:text-sm text-gray-400">
              © {new Date().getFullYear()} Ashok | BlazeWild. All rights reserved.
            </p>
          </div>

          {/* Scroll to Top on the Right */}
          <div className="ml-auto">
            <div
              onClick={scrollToTop} // Scroll function triggered on click
              className="flex items-center cursor-pointer"
            >
              <FaArrowUp className="text-white hover:text-secondary w-8 h-8" />
              <span className="ml-2 text-sm sm:text-base">Scroll to Top</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
