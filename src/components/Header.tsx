import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Cross, 
  Pill, 
  Clock, 
  MapPin, 
  ShieldCheck 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onOpenOrderModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrderModal }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services & Stock', path: '/services' },
    { name: 'Store Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Top Banner Bar for Trust & Quick Contacts */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Genuine Medicines
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              Fida Hussain Rd, Jehanabad, Bihar
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              Open Daily: 8:00 AM - 10:00 PM
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="hover:text-emerald-400 flex items-center gap-1 transition"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span className="font-bold text-white">{BUSINESS_INFO.formattedPhone}</span>
            </a>
            <span className="text-slate-700">|</span>
            <button
              onClick={onOpenOrderModal}
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-bold transition"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Prescription Order</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg shadow-slate-200/50 dark:shadow-none border-b border-slate-200 dark:border-slate-800' 
          : 'bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-emerald-200 dark:shadow-emerald-950 group-hover:scale-105 transition-transform">
              K
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-none block">
                Khushboo Medical Hall
              </span>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-semibold block mt-0.5">
                Trusted Pharmacy • Jehanabad
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition-all py-1 ${
                    isActive
                      ? 'text-emerald-600 dark:text-emerald-400 font-bold border-b-2 border-emerald-600 dark:border-emerald-400'
                      : 'hover:text-emerald-600 dark:hover:text-emerald-400'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action Tools & Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Call Button */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hidden lg:flex items-center gap-2 py-2 px-4 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-bold text-xs transition"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Call Store</span>
            </a>

            {/* WhatsApp Order CTA */}
            <button
              onClick={onOpenOrderModal}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-emerald-100 dark:shadow-none transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu & Dark Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-emerald-50 dark:bg-slate-800 text-emerald-700 dark:text-emerald-400"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3 animate-fade-in">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      isActive
                        ? 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center gap-2 shadow-md"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Medicine Order</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Call Store ({BUSINESS_INFO.formattedPhone})</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
