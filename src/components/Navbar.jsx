import { useState } from 'react';
import { Menu, X, Globe, User, LogOut, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout, openLoginModal } = useAuth();

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
            <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-2 rounded-xl animate-glow group-hover:scale-110 transition-transform">
              <Globe size={28} className="text-white" />
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

            {user?.isAdmin && (
              <Link
                to="/admin"
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold text-amber-400 hover:text-amber-300 hover:bg-amber-400/5 transition-all ${location.pathname === '/admin' ? 'bg-amber-400/10 text-amber-300' : ''}`}
              >
                <Shield size={16} />
                Admin
              </Link>
            )}

            <div className="h-6 w-px bg-white/10 mx-2"></div>

            {user ? (
              <div className="flex items-center gap-3">
                <Link
                  to="/profile"
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-5 py-2 rounded-xl font-semibold border border-white/10 transition-all group"
                >
                  <User size={18} className="text-indigo-400 group-hover:scale-110 transition-transform" />
                  <span>{user?.name || 'Account'}</span>
                </Link>
                <button
                  onClick={logout}
                  className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
                  title="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <button
                onClick={openLoginModal}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Started
              </button>
            )}
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
      <div className={`md:hidden glass-effect border-t border-white/10 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
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

          {user?.isAdmin && (
            <Link
              to="/admin"
              className="flex items-center gap-2 px-4 py-3 rounded-lg font-bold text-amber-400 hover:bg-amber-400/5 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <Shield size={18} />
              Admin Panel
            </Link>
          )}

          <div className="pt-4 mt-4 border-t border-white/10">
            {user ? (
              <div className="space-y-4">
                <Link
                  to="/profile"
                  className="flex items-center justify-center gap-2 bg-white/5 text-white px-6 py-3 rounded-full font-semibold border border-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={18} className="text-indigo-400" />
                  <span>{user?.name || 'My Account'}</span>
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 text-red-400 font-bold py-2 hover:bg-red-400/5 rounded-lg transition-all"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  openLoginModal();
                  setIsMenuOpen(false);
                }}
                className="flex items-center justify-center w-full bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg active:scale-95 transition-transform"
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
