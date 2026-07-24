import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface FloatingControlsProps {
  onOpenOrderModal: () => void;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({ onOpenOrderModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-none">
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-slate-900/80 dark:bg-slate-800/90 hover:bg-slate-900 text-white shadow-xl backdrop-blur-md border border-slate-700/50 transition transform hover:scale-110 active:scale-95 group"
          title="Back to top"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Floating Call Store Button */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="pointer-events-auto p-3.5 rounded-full bg-slate-800 hover:bg-slate-900 text-white shadow-xl border border-slate-700/60 transition transform hover:scale-110 active:scale-95 flex items-center justify-center"
        title="Call Khushboo Medical Hall"
        aria-label="Call Khushboo Medical Hall"
      >
        <Phone className="w-5 h-5 text-emerald-400" />
      </a>

      {/* Floating WhatsApp Medicine Order Button */}
      <button
        onClick={onOpenOrderModal}
        className="pointer-events-auto relative py-3 px-5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-2xl shadow-emerald-600/40 transition transform hover:scale-105 active:scale-95 flex items-center gap-2.5 border border-emerald-400/40"
        title="Order Medicine on WhatsApp"
        aria-label="Order Medicine on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="w-5 h-5" />
        <span className="hidden sm:inline">WhatsApp Order</span>
      </button>

    </div>
  );
};
