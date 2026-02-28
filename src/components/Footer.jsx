import { BookOpen, Heart, Mail, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Practice', path: '/practice' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  const socialLinks = [
    { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
    { icon: <Github size={18} />, href: '#', label: 'GitHub' },
    { icon: <Mail size={18} />, href: '#', label: 'Email' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-2 rounded-xl">
                <BookOpen size={24} className="text-white" />
              </div>
              <span className="text-2xl font-black gradient-text tracking-tight ml-3">
                SpeakSphere
              </span>
            </Link>
            <p className="text-gray-600 leading-relaxed mb-6">
              Empowering global communication through AI-driven language learning. Master English with confidence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex flex-col items-center justify-center text-gray-600 hover:text-primary-600 hover:bg-primary-50 border border-gray-200 transition-all duration-300 hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex flex-col items-center justify-center text-gray-600 hover:text-blue-400 hover:bg-blue-50 border border-gray-200 transition-all duration-300 hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex flex-col items-center justify-center text-gray-600 hover:text-pink-600 hover:bg-pink-50 border border-gray-200 transition-all duration-300 hover:scale-110">
                <Mail size={20} /> {/* Assuming this was intended for the third social link */}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Have questions? We'd love to hear from you.
            </p>
            <a
              href="mailto:hello@speaksphare.com"
              className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-500 font-medium transition-colors"
            >
              <Mail size={16} />
              hello@speaksphare.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} SpeakSphere AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
