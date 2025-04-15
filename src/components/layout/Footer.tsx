
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-adventure-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Alpine Trekkers</h3>
            <p className="mb-4 text-gray-300">
              Your gateway to adventure. We organize treks and tours that connect you with nature, culture, and yourself.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-white hover:text-adventure-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-white hover:text-adventure-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-adventure-300 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/treks" className="text-gray-300 hover:text-white transition-colors">Treks</Link></li>
              <li><Link to="/tours" className="text-gray-300 hover:text-white transition-colors">Adventure Tours</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Popular Treks</h3>
            <ul className="space-y-2">
              <li><Link to="/treks/kalsubai" className="text-gray-300 hover:text-white transition-colors">Kalsubai Trek</Link></li>
              <li><Link to="/treks/rajgad" className="text-gray-300 hover:text-white transition-colors">Rajgad Fort Trek</Link></li>
              <li><Link to="/treks/harishchandragad" className="text-gray-300 hover:text-white transition-colors">Harishchandragad Trek</Link></li>
              <li><Link to="/treks/torna" className="text-gray-300 hover:text-white transition-colors">Torna Fort Trek</Link></li>
              <li><Link to="/treks/lohagad" className="text-gray-300 hover:text-white transition-colors">Lohagad Fort Trek</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Pet Clinic, DSK Vishwa, Dhayari, Pune, Maharashtra 411041
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+917337336001" className="text-gray-300 hover:text-white transition-colors">
                  +91 7337336001
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:alpinetrekkers26@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  alpinetrekkers26@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Alpine Trekkers. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
