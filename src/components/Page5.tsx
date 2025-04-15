import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Page5: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-red-500">YOLO</span> Bike Rentals
            </h3>
            <p className="text-gray-300 mb-6">
              Redefining urban mobility with community-powered transportation solutions. Ride with YOLO and experience the future of bike sharing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-600 -mb-2"></span>
            </h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'How It Works', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-red-400 flex items-center">
                    <ArrowRight size={16} className="mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 relative">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-600 -mb-2"></span>
            </h4>
            <ul className="space-y-3">
              {['Bike Rentals', 'Scooter Sharing', 'List Your Vehicle', 'Corporate Plans', 'Maintenance', 'Insurance'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-red-400 flex items-center">
                    <ArrowRight size={16} className="mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-600 -mb-2"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-red-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-300">123 Bike Avenue, Greenville, CA 94107</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-red-500 flex-shrink-0" size={18} />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-red-500 flex-shrink-0" size={18} />
                <span className="text-gray-300">support@yolobikerentals.com</span>
              </li>
            </ul>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">Subscribe to our newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-gray-200 px-4 py-2 rounded-l-md border-0 focus:ring-2 focus:ring-red-500 focus:outline-none w-full"
                />
                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r-md transition-colors">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 md:px-12 flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            © {currentYear} YOLO Bike Rentals. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-400 hover:text-red-400 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 text-sm">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Page5;