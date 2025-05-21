import React from 'react';
import { BatteryCharging, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <BatteryCharging className="text-green-400" size={32} />
            <span className="font-bold text-2xl">ChargeDock</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-green-400 transition-colors duration-300">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-green-400 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-green-400 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between text-gray-400 text-sm">
          <div className="mb-4 md:mb-0 flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-300">About</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Development Brief</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
          </div>
          
          <div>
            <p>© {new Date().getFullYear()} ChargeDock. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;