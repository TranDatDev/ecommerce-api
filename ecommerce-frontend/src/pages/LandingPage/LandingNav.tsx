import React, { useState } from "react";

type Props = {};

const LandingNav = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý tìm kiếm ở đây
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Navigation Links */}
        <div className="hidden sm:flex space-x-6">
          <a
            href="/"
            className="text-gray-600 hover:text-indigo-600 transition-colors">
            Home
          </a>
          <a
            href="/shop"
            className="text-gray-600 hover:text-indigo-600 transition-colors">
            Shop
          </a>
          <a
            href="/offers"
            className="text-gray-600 hover:text-indigo-600 transition-colors">
            Offers
          </a>
          <a
            href="/about"
            className="text-gray-600 hover:text-indigo-600 transition-colors">
            About
          </a>
          <a
            href="/contact"
            className="text-gray-600 hover:text-indigo-600 transition-colors">
            Contact
          </a>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500"
          />
          <button type="submit" className="text-gray-600 hover:text-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 4a7 7 0 017 7v5h3v3h-3v5h-5v-5h-3v-3h3v-5a7 7 0 017-7z"
              />
            </svg>
          </button>
        </form>
      </div>
    </nav>
  );
};

export default LandingNav;
