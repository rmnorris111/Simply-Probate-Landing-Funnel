import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Simply Probate</h1>
        </div>
        <div>
          <a href="tel:0800777123" className="text-white font-bold text-sm md:text-base">
            <span className="mr-2">📞</span>0800 777 123
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
