import React, { useState } from 'react';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiArrowRight,
  FiSend,
  FiHeart,
  FiExternalLink,
  FiClock,
  FiGlobe
} from 'react-icons/fi';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
  FaYoutube,
  FaGithub,
  FaDribbble,
  FaBehance
} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    services: [
      { name: 'Web Development', href: '#' },
      { name: 'Mobile Apps', href: '#' },
      { name: 'UI/UX Design', href: '#' },
      { name: 'E-commerce', href: '#' },
      { name: 'SEO Services', href: '#' },
      { name: 'Digital Marketing', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Whitepapers', href: '#' },
      { name: 'Webinars', href: '#' },
      { name: 'API Reference', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR Compliance', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Accessibility', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: <FaFacebook className="w-5 h-5" />, href: '#', name: 'Facebook', color: 'hover:text-blue-600' },
    { icon: <FaTwitter className="w-5 h-5" />, href: '#', name: 'Twitter', color: 'hover:text-blue-400' },
    { icon: <FaInstagram className="w-5 h-5" />, href: '#', name: 'Instagram', color: 'hover:text-pink-600' },
    { icon: <FaLinkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: <FaYoutube className="w-5 h-5" />, href: '#', name: 'YouTube', color: 'hover:text-red-600' },
    { icon: <FaGithub className="w-5 h-5" />, href: '#', name: 'GitHub', color: 'hover:text-gray-900' },
    { icon: <FaDribbble className="w-5 h-5" />, href: '#', name: 'Dribbble', color: 'hover:text-pink-500' },
    { icon: <FaBehance className="w-5 h-5" />, href: '#', name: 'Behance', color: 'hover:text-blue-500' }
  ];

  const recentPosts = [
    {
      title: "10 Web Development Trends for 2024",
      date: "Dec 15, 2023",
      href: "#"
    },
    {
      title: "How to Choose the Right Mobile App Framework",
      date: "Dec 12, 2023",
      href: "#"
    },
    {
      title: "The Future of AI in Web Design",
      date: "Dec 10, 2023",
      href: "#"
    }
  ];

  const awards = [
    { name: "Best Digital Agency 2023", organization: "Tech Awards" },
    { name: "Top Web Developer", organization: "Industry Leaders" },
    { name: "Innovation Excellence", organization: "Digital Summit" }
  ];

  const footerStyles = `
    .gradient-bg {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .gradient-text {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .footer-link {
      transition: all 0.3s ease;
      position: relative;
    }
    .footer-link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background: linear-gradient(90deg, #667eea, #764ba2);
      transition: width 0.3s ease;
    }
    .footer-link:hover::after {
      width: 100%;
    }
    .social-icon {
      transition: all 0.3s ease;
    }
    .social-icon:hover {
      transform: translateY(-2px);
    }
    .newsletter-input:focus {
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
    .pulse-animation {
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
    .floating-animation {
      animation: float 3s ease-in-out infinite;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-5px); }
    }
  `;

  return (
    <>
      <style>{footerStyles}</style>
      
      <footer className="bg-gray-900 text-white">
        {/* Newsletter Section */}
        <div className="gradient-bg py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated with Our Latest Insights
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Get exclusive tips, industry news, and special offers delivered straight to your inbox.
              </p>
              
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="newsletter-input w-full px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                  >
                    <FiSend className="w-5 h-5" />
                    <span>Subscribe</span>
                  </button>
                </div>
                {isSubscribed && (
                  <p className="mt-4 text-green-200 font-medium">
                    ✓ Thank you for subscribing! Check your email for confirmation.
                  </p>
                )}
              </form>
              
              <p className="mt-4 text-sm opacity-75">
                Join 10,000+ professionals who trust our insights. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="gradient-bg text-white px-4 py-2 rounded-lg font-bold text-2xl inline-block mb-6">
                  Eddz
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We're a forward-thinking digital agency that combines creativity with technology 
                  to deliver exceptional results for businesses of all sizes.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <FiMapPin className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">123 Innovation Street, Tech City, NY 10001</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiPhone className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiMail className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">hello@eddz.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiClock className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM EST</span>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`social-icon p-3 bg-gray-800 rounded-lg text-gray-400 ${social.color} transition-all duration-300`}
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="font-semibold text-lg mb-6 gradient-text">Services</h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="footer-link text-gray-300 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-semibold text-lg mb-6 gradient-text">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="footer-link text-gray-300 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-semibold text-lg mb-6 gradient-text">Resources</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="footer-link text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
                      >
                        <span>{link.name}</span>
                        <FiExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts & Awards */}
              <div>
                <h3 className="font-semibold text-lg mb-6 gradient-text">Latest Posts</h3>
                <div className="space-y-4 mb-8">
                  {recentPosts.map((post, index) => (
                    <div key={index}>
                      <a
                        href={post.href}
                        className="footer-link text-gray-300 hover:text-white transition-colors block"
                      >
                        <div className="text-sm font-medium mb-1">{post.title}</div>
                        <div className="text-xs text-gray-500">{post.date}</div>
                      </a>
                    </div>
                  ))}
                </div>

                <h4 className="font-semibold mb-4 gradient-text">Awards & Recognition</h4>
                <div className="space-y-2">
                  {awards.map((award, index) => (
                    <div key={index} className="text-sm">
                      <div className="text-gray-300 font-medium">{award.name}</div>
                      <div className="text-gray-500 text-xs">{award.organization}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-wrap gap-6">
                {footerLinks.legal.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="footer-link text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <FiGlobe className="w-4 h-4 text-gray-400" />
                  <select className="bg-transparent border border-gray-700 rounded px-3 py-1 text-sm text-gray-300 focus:outline-none focus:border-blue-500">
                    <option value="en" className="text-black">English</option>
                    <option value="es" className="text-black">Español</option>
                    <option value="fr" className="text-black">Français</option>
                    <option value="de" className="text-black">Deutsch</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 Eddz. All rights reserved. Built with{' '}
                <FiHeart className="inline w-4 h-4 text-red-500 pulse-animation" />{' '}
                by the Eddz team.
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full pulse-animation"></div>
                  <span>All systems operational</span>
                </div>
                <a href="#" className="footer-link hover:text-white transition-colors">
                  Status Page
                </a>
                <a href="#" className="footer-link hover:text-white transition-colors">
                  API Status
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="floating-animation fixed bottom-8 right-8 gradient-bg text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          title="Back to top"
        >
          <FiArrowRight className="w-5 h-5 transform -rotate-90" />
        </button>
      </footer>
    </>
  );
};

export default Footer;