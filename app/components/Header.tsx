import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-gray-900 text-white p-4 shadow-sm shadow-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold"> My Image Gallery</h1>
        <nav className="space-x-6 text-sm">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            Gallery
          </a>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
