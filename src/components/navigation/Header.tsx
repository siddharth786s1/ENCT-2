import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const getDashboardLink = () => {
    if (!user) return '/login';
    
    switch (user.role) {
      case 'student':
        return '/dashboard/student';
      case 'faculty':
        return '/dashboard/faculty';
      case 'admin':
        return '/dashboard/admin';
      default:
        return '/login';
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-bold font-heading ${
              scrolled ? 'text-primary-500' : 'text-white'
            }`}>
              ENCT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${
                scrolled ? 'text-neutral-700 hover:text-primary-500' : 'text-white hover:text-accent-500'
              } transition-colors duration-200`}
            >
              Home
            </Link>
            
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('about')}
                className={`flex items-center ${
                  scrolled ? 'text-neutral-700 hover:text-primary-500' : 'text-white hover:text-accent-500'
                } transition-colors duration-200`}
              >
                About <ChevronDown size={16} className="ml-1" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'about' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                  >
                    <Link 
                      to="/about" 
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-500"
                      onClick={() => setActiveDropdown(null)}
                    >
                      About Us
                    </Link>
                    <Link 
                      to="/about#history" 
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-500"
                      onClick={() => setActiveDropdown(null)}
                    >
                      History
                    </Link>
                    <Link 
                      to="/about#leadership" 
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-500"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Leadership
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('academics')}
                className={`flex items-center ${
                  scrolled ? 'text-neutral-700 hover:text-primary-500' : 'text-white hover:text-accent-500'
                } transition-colors duration-200`}
              >
                Academics <ChevronDown size={16} className="ml-1" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'academics' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                  >
                    <Link 
                      to="/departments" 
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-500"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Departments
                    </Link>
                    <Link 
                      to="/courses" 
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-500"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Courses
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link 
              to="/admissions" 
              className={`${
                scrolled ? 'text-neutral-700 hover:text-primary-500' : 'text-white hover:text-accent-500'
              } transition-colors duration-200`}
            >
              Admissions
            </Link>
            
            <Link 
              to="/news-events" 
              className={`${
                scrolled ? 'text-neutral-700 hover:text-primary-500' : 'text-white hover:text-accent-500'
              } transition-colors duration-200`}
            >
              News & Events
            </Link>
            
            <Link 
              to="/contact" 
              className={`${
                scrolled ? 'text-neutral-700 hover:text-primary-500' : 'text-white hover:text-accent-500'
              } transition-colors duration-200`}
            >
              Contact
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link 
                  to={getDashboardLink()} 
                  className="btn btn-primary"
                >
                  Dashboard
                </Link>
                <button 
                  onClick={handleLogout}
                  className="btn btn-outline"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="btn btn-outline"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="btn btn-primary"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-neutral-800 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X size={24} className={scrolled ? 'text-neutral-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={scrolled ? 'text-neutral-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container-custom mx-auto py-4 space-y-2">
              <Link 
                to="/" 
                className="block py-2 text-neutral-800 hover:text-primary-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <div>
                <button
                  onClick={() => toggleDropdown('mobileAbout')}
                  className="flex items-center justify-between w-full py-2 text-neutral-800 hover:text-primary-500"
                >
                  <span>About</span>
                  <ChevronDown size={16} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'mobileAbout' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-2 mt-1"
                    >
                      <Link 
                        to="/about" 
                        className="block py-1 text-neutral-600 hover:text-primary-500"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        About Us
                      </Link>
                      <Link 
                        to="/about#history" 
                        className="block py-1 text-neutral-600 hover:text-primary-500"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        History
                      </Link>
                      <Link 
                        to="/about#leadership" 
                        className="block py-1 text-neutral-600 hover:text-primary-500"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Leadership
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div>
                <button
                  onClick={() => toggleDropdown('mobileAcademics')}
                  className="flex items-center justify-between w-full py-2 text-neutral-800 hover:text-primary-500"
                >
                  <span>Academics</span>
                  <ChevronDown size={16} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'mobileAcademics' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-2 mt-1"
                    >
                      <Link 
                        to="/departments" 
                        className="block py-1 text-neutral-600 hover:text-primary-500"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Departments
                      </Link>
                      <Link 
                        to="/courses" 
                        className="block py-1 text-neutral-600 hover:text-primary-500"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Courses
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <Link 
                to="/admissions" 
                className="block py-2 text-neutral-800 hover:text-primary-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Admissions
              </Link>
              
              <Link 
                to="/news-events" 
                className="block py-2 text-neutral-800 hover:text-primary-500"
                onClick={() => setIsMenuOpen(false)}
              >
                News & Events
              </Link>
              
              <Link 
                to="/contact" 
                className="block py-2 text-neutral-800 hover:text-primary-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4 mt-4 border-t border-neutral-200">
                {isAuthenticated ? (
                  <>
                    <Link 
                      to={getDashboardLink()} 
                      className="block w-full py-2 px-4 mb-2 text-center rounded bg-primary-500 text-white hover:bg-primary-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="block w-full py-2 px-4 text-center rounded border border-primary-500 text-primary-500 hover:bg-primary-50"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/login" 
                      className="block w-full py-2 px-4 mb-2 text-center rounded border border-primary-500 text-primary-500 hover:bg-primary-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link 
                      to="/register" 
                      className="block w-full py-2 px-4 text-center rounded bg-primary-500 text-white hover:bg-primary-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;