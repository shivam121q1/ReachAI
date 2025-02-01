// Header.js
import React from 'react';

const Header = ({brandName}:any) => {
  return (
    <header>
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl">
            <h2>{brandName}</h2>
          </div>
          <div>
            <ul className="flex space-x-6 text-white">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">Shop</a></li>
              <li><a href="#" className="hover:text-gray-400">About</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
