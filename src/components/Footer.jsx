import { BookOpen, Heart, Mail, Github, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Practice', path: '/practice' },
    { name: 'Dashboard', path: '/dashboard' },
  ];



  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>

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
            <p className="text-slate-400 leading-relaxed mb-6">
              Empowering global communication through AI-driven language learning. Master English with confidence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex flex-col items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 border border-white/5 transition-all duration-300 hover:scale-110 shadow-lg">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex flex-col items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 border border-white/5 transition-all duration-300 hover:scale-110 shadow-lg">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex flex-col items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 border border-white/5 transition-all duration-300 hover:scale-110 shadow-lg">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <p className="text-sm text-slate-400 mb-3">
              Have questions? We'd love to hear from you.
            </p>
            <a
              href="mailto:hello@speaksphare.com"
              className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
            >
              <Mail size={16} />
              hello@speaksphare.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} SpeakSphere AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
