import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto text-center space-y-2">
        <p className="text-sm">© {new Date().getFullYear()} My Image Gallery</p>
        <p className="text-xs text-gray-400">
          Built with Next.js • React • Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
