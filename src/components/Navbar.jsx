import { Link, useLocation } from 'react-router-dom';
import { BookOpen, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Practice', path: '/practice' },
    { name: 'My Learning', path: '/dashboard' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 glass-effect shadow-lg z-50 animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-2 rounded-xl animate-glow group-hover:scale-110 transition-transform">
              <BookOpen size={28} className="text-white" />
            </div>
            <span className="text-xl font-bold gradient-text block">SpeakSphere</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive(link.path)
                  ? 'text-white bg-white/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/profile"
              className="ml-4 flex items-center gap-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <User size={18} strokeWidth={2.5} />
              <span>Profile</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden glass-effect border-t border-white/10 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-lg font-medium transition-all ${isActive(link.path)
                ? 'bg-white/10 text-white'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/profile"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg mt-4 active:scale-95 transition-transform"
            onClick={() => setIsMenuOpen(false)}
          >
            <User size={18} strokeWidth={2.5} />
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
