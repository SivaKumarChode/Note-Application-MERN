import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Brand Name */}
        <div className="text-lg font-bold">NoteMe</div>
        
        {/* Navigation Links */}
        <div className="flex space-x-6 mt-2 md:mt-0">
          <a href="#about" className="hover:text-gray-400 transition">About</a>
          <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
          <a href="#privacy" className="hover:text-gray-400 transition">Privacy Policy</a>
        </div>
        
        {/* Copyright */}
        <div className="text-sm mt-2 md:mt-0">&copy; {new Date().getFullYear()} NoteMe. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
