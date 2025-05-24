import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Simply Probate</h3>
            <p className="text-gray-400 mb-4">
              Professional probate services throughout New Zealand. Fixed fees, expert guidance, and compassionate support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition-colors" aria-label="Facebook">
                <span>👥</span>
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors" aria-label="LinkedIn">
                <span>💼</span>
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors" aria-label="Twitter">
                <span>🐦</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="mr-2 text-secondary">📞</span>
                <a href="tel:0276036144" className="hover:text-white transition-colors">027 603 6144</a>
              </li>
              <li>
                <span className="mr-2 text-secondary">✉️</span>
                <a href="mailto:rion@rionnorris.com" className="hover:text-white transition-colors">rion@rionnorris.com</a>
              </li>
              <li>
                <span className="mr-2 text-secondary">📍</span>
                Auckland, Wellington, Christchurch
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="https://simplyprobate.co.nz/services" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Services</a>
              </li>
              <li>
                <a href="https://simplyprobate.co.nz/faq" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">FAQs</a>
              </li>
              <li>
                <a href="https://simplyprobate.co.nz/privacy-policy" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              </li>
              <li>
                <a href="https://simplyprobate.co.nz/terms-of-service" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Simply Probate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
