import React from "react";

type Props = {};

const LandingFooter = (props: Props) => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h2 className="text-2xl font-bold text-gray-100">Newly</h2>
          <p className="text-gray-400 mt-2">
            Connecting You to the Best Products
          </p>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-end space-x-6">
          <a
            href="/"
            className="text-gray-400 hover:text-white transition-colors duration-300">
            Home
          </a>
          <a
            href="/about"
            className="text-gray-400 hover:text-white transition-colors duration-300">
            About
          </a>
          <a
            href="/contact"
            className="text-gray-400 hover:text-white transition-colors duration-300">
            Contact
          </a>
          <a
            href="/privacy"
            className="text-gray-400 hover:text-white transition-colors duration-300">
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-6">
        <p>&copy; {new Date().getFullYear()} Newly. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default LandingFooter;
