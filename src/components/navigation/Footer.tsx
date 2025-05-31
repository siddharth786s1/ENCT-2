import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h4 className="text-xl font-bold mb-4">ENCT</h4>
            <p className="text-primary-100 mb-4">
              Engineering & Technology College providing quality education since 1975. 
              Building tomorrow's leaders through innovation and excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-100 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/departments" className="text-primary-100 hover:text-white transition-colors">Departments</Link>
              </li>
              <li>
                <Link to="/courses" className="text-primary-100 hover:text-white transition-colors">Courses</Link>
              </li>
              <li>
                <Link to="/admissions" className="text-primary-100 hover:text-white transition-colors">Admissions</Link>
              </li>
              <li>
                <Link to="/news-events" className="text-primary-100 hover:text-white transition-colors">News & Events</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-100 hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-100 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-xl font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">Research</a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">Library</a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">Student Portal</a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">Faculty Portal</a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">Career Opportunities</a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">Alumni Network</a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-accent-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-primary-100">
                  123 College Road, Education District,<br />
                  Tech City, TC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-accent-500 mr-2 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-primary-100 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-accent-500 mr-2 flex-shrink-0" />
                <a href="mailto:info@enct.edu" className="text-primary-100 hover:text-white transition-colors">
                  info@enct.edu
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-300 text-sm mb-4 md:mb-0">
              &copy; {currentYear} ENCT. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-primary-300 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-primary-300 text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-primary-300 text-sm hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;