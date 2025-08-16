import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  FiMenu, 
  FiX, 
  FiChevronDown, 
  FiSearch, 
  FiUser, 
  FiShoppingCart, 
  FiHeart,
  FiGlobe,
  FiPhone,
  FiMail,
  FiMapPin,
  FiLogOut
} from 'react-icons/fi';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
  FaYoutube
} from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);

  // Check for user authentication
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        localStorage.removeItem('user');
      }
    }
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const navigationItems = [
    {
      name: 'Services',
      hasDropdown: true,
      items: [
        {
          category: 'Digital Solutions',
          items: [
            { name: 'Web Development', href: '#', description: 'Custom web applications' },
            { name: 'Mobile Apps', href: '#', description: 'iOS & Android development' },
            { name: 'E-commerce', href: '#', description: 'Online store solutions' },
            { name: 'UI/UX Design', href: '#', description: 'User experience design' }
          ]
        },
        {
          category: 'Marketing',
          items: [
            { name: 'SEO Services', href: '#', description: 'Search optimization' },
            { name: 'Social Media', href: '#', description: 'Social media management' },
            { name: 'Content Marketing', href: '#', description: 'Content strategy' },
            { name: 'PPC Advertising', href: '#', description: 'Paid advertising campaigns' }
          ]
        }
      ]
    },
    {
      name: 'Solutions',
      hasDropdown: true,
      items: [
        { name: 'Enterprise', href: '#', description: 'Large-scale solutions' },
        { name: 'Small Business', href: '#', description: 'SMB focused tools' },
        { name: 'Startups', href: '#', description: 'Startup packages' },
        { name: 'Non-Profit', href: '#', description: 'NGO solutions' }
      ]
    },
    {
      name: 'Industries',
      hasDropdown: true,
      items: [
        { name: 'Healthcare', href: '#', description: 'Medical & health tech' },
        { name: 'Finance', href: '#', description: 'Financial services' },
        { name: 'Education', href: '#', description: 'EdTech solutions' },
        { name: 'Retail', href: '#', description: 'Retail & commerce' },
        { name: 'Real Estate', href: '#', description: 'Property management' },
        { name: 'Technology', href: '#', description: 'Tech companies' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '#' }
  ];

  const headerStyles = `
    .dropdown-enter {
      opacity: 0;
      transform: translateY(-10px);
    }
    .dropdown-enter-active {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.3s ease;
    }
    .dropdown-exit {
      opacity: 1;
      transform: translateY(0);
    }
    .dropdown-exit-active {
      opacity: 0;
      transform: translateY(-10px);
      transition: all 0.3s ease;
    }
    .mobile-menu-slide {
      transform: translateX(-100%);
      transition: transform 0.3s ease-in-out;
    }
    .mobile-menu-slide.open {
      transform: translateX(0);
    }
    .search-input:focus {
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    .nav-link {
      position: relative;
      transition: all 0.3s ease;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
      transition: width 0.3s ease;
    }
    .nav-link:hover::after {
      width: 100%;
    }
    .gradient-bg {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .glass-effect {
      backdrop-filter: blur(10px);
      background: rgba(255, 255, 255, 0.95);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  `;

  return (
    <>
      <style>{headerStyles}</style>
      
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FiPhone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiMail className="w-4 h-4" />
              <span>info@eddz.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiMapPin className="w-4 h-4" />
              <span>New York, NY</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <FaFacebook className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-colors" />
              <FaTwitter className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-colors" />
              <FaInstagram className="w-4 h-4 hover:text-pink-400 cursor-pointer transition-colors" />
              <FaLinkedin className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-colors" />
              <FaYoutube className="w-4 h-4 hover:text-red-400 cursor-pointer transition-colors" />
            </div>
            <div className="flex items-center space-x-2">
              <FiGlobe className="w-4 h-4" />
              <select className="bg-transparent border-none text-white text-sm focus:outline-none">
                <option value="en" className="text-black">English</option>
                <option value="es" className="text-black">Español</option>
                <option value="fr" className="text-black">Français</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-effect shadow-lg' 
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="gradient-bg text-white px-4 py-2 rounded-lg font-bold text-xl lg:text-2xl hover:opacity-90 transition-opacity">
                Eddz
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" ref={dropdownRef}>
              {navigationItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="nav-link flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium py-2"
                    >
                      <span>{item.name}</span>
                      <FiChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="nav-link text-gray-700 hover:text-blue-600 font-medium py-2"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-100 py-4 z-50">
                      {item.name === 'Services' ? (
                        <div className="grid grid-cols-2 gap-4 px-4">
                          {item.items.map((category, catIndex) => (
                            <div key={catIndex}>
                              <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                                {category.category}
                              </h3>
                              <ul className="space-y-2">
                                {category.items.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <a
                                      href={subItem.href}
                                      className="block p-2 rounded-md hover:bg-gray-50 transition-colors"
                                    >
                                      <div className="font-medium text-gray-900 text-sm">
                                        {subItem.name}
                                      </div>
                                      <div className="text-gray-500 text-xs mt-1">
                                        {subItem.description}
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="px-4">
                          {item.items.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.href}
                              className="block p-3 rounded-md hover:bg-gray-50 transition-colors"
                            >
                              <div className="font-medium text-gray-900">
                                {subItem.name}
                              </div>
                              <div className="text-gray-500 text-sm mt-1">
                                {subItem.description}
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search & Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <FiHeart className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <FiShoppingCart className="w-5 h-5" />
                </button>
                
                {user ? (
                  /* Authenticated User Menu */
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => toggleDropdown('user')}
                      className="flex items-center space-x-2 p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <FiUser className="w-5 h-5" />
                      <span className="hidden md:block text-sm font-medium">
                        {user.firstName || user.name?.split(' ')[0] || 'User'}
                      </span>
                      <FiChevronDown className={`w-4 h-4 transition-transform ${
                        activeDropdown === 'user' ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === 'user' && (
                      <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                        <Link
                          to="/dashboard"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Dashboard
                        </Link>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Profile
                        </Link>
                        <Link
                          to="/settings"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Settings
                        </Link>
                        <hr className="my-2" />
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center space-x-2"
                        >
                          <FiLogOut className="w-4 h-4" />
                          <span>Logout</span>
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Guest User Buttons */
                  <div className="flex items-center space-x-3">
                    <Link
                      to="/login"
                      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center space-x-1"
                    >
                      <FiUser className="w-5 h-5" />
                      <span className="hidden md:block text-sm font-medium">Login</span>
                    </Link>
                    <Link
                      to="/register"
                      className="gradient-bg text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden mobile-menu-slide ${isMobileMenuOpen ? 'open' : ''} fixed inset-y-0 left-0 w-80 bg-white shadow-xl z-50`}>
          <div className="p-6">
            {/* Mobile Logo */}
            <div className="flex items-center justify-between mb-8">
              <div className="gradient-bg text-white px-4 py-2 rounded-lg font-bold text-xl">
                Eddz
              </div>
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(`mobile-${item.name}`)}
                        className="w-full flex items-center justify-between p-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                      >
                        <span>{item.name}</span>
                        <FiChevronDown 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === `mobile-${item.name}` ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      {activeDropdown === `mobile-${item.name}` && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.name === 'Services' ? (
                            item.items.map((category, catIndex) => (
                              <div key={catIndex} className="mb-4">
                                <h4 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide px-3">
                                  {category.category}
                                </h4>
                                {category.items.map((subItem, subIndex) => (
                                  <a
                                    key={subIndex}
                                    href={subItem.href}
                                    className="block p-3 text-gray-600 hover:bg-gray-50 rounded-lg"
                                  >
                                    {subItem.name}
                                  </a>
                                ))}
                              </div>
                            ))
                          ) : (
                            item.items.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href={subItem.href}
                                className="block p-3 text-gray-600 hover:bg-gray-50 rounded-lg"
                              >
                                {subItem.name}
                              </a>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block p-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-around mb-6">
                <button className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                  <FiHeart className="w-6 h-6" />
                </button>
                <button className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                  <FiShoppingCart className="w-6 h-6" />
                </button>
              </div>
              
              {user ? (
                <div className="space-y-3">
                  <div className="text-center mb-4">
                    <p className="text-sm text-gray-600">Welcome back,</p>
                    <p className="font-semibold text-gray-900">
                      {user.firstName || user.name?.split(' ')[0] || 'User'}
                    </p>
                  </div>
                  <Link
                    to="/dashboard"
                    className="w-full gradient-bg text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity block text-center"
                    onClick={toggleMobileMenu}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <FiLogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <Link
                    to="/login"
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-medium transition-colors block text-center"
                    onClick={toggleMobileMenu}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="w-full gradient-bg text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity block text-center"
                    onClick={toggleMobileMenu}
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Contact Info */}
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <FiPhone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <FiMail className="w-4 h-4" />
                <span className="text-sm">info@eddz.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMobileMenu}
          />
        )}
      </header>
    </>
  );
};

export default Header;