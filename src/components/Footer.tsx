import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-custom text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center">
             
              <span className="ml-2 text-xl font-bold">SpendWise</span>
            </Link>
            <p className="mt-4 text-white/80">
              Automatic transaction tracking for smarter financial decisions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-white/80 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#features" className="text-white/80 hover:text-white">
                  Features
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="mailto:contact@spendwise.app" className="text-white/80 hover:text-white">
                <Mail className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/spendwise" className="text-white/80 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/spendwise" className="text-white/80 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} SpendWise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
