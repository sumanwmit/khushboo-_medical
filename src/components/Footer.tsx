import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cross, 

  
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  MessageSquare, 
  ExternalLink, 
  ShieldAlert, 
  ShieldCheck, 
  Navigation,
  Globe,
  Award
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';


export const Footer: React.FC = () => {
  const [showLegalModal, setShowLegalModal] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  // Global Tracking Hook Implementation
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid') || '');
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };

      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };

    sendInitPayload();

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pagehide', sendExitPayload);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pagehide', sendExitPayload);
      window.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Business Overview */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 p-2 flex items-center justify-center text-white shadow-md">
                <Cross className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  Khushboo <span className="text-emerald-400">Medical</span>
                </span>
                <span className="block text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                  Hall • Jehanabad
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {BUSINESS_INFO.tagline}. Dedicated to delivering 100% genuine medicines, surgical supplies, and health devices in Jehanabad, Bihar.
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Drug License No: <strong className="text-slate-200">{BUSINESS_INFO.drugLicenseNo}</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Trusted Since <strong className="text-slate-200">{BUSINESS_INFO.establishedYear}</strong></span>
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 border-l-4 border-emerald-500 pl-3">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span>›</span> Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span>›</span> About Our Store & Story
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span>›</span> Medicine Stock & Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span>›</span> Store Photos Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span>›</span> Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Business Hours & Contact */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 border-l-4 border-emerald-500 pl-3">
              Store Hours & Contact
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">Opening Hours:</span>
                  <span className="text-slate-400">{BUSINESS_INFO.workingHours}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">Phone Number:</span>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-emerald-400 hover:underline">
                    {BUSINESS_INFO.formattedPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">WhatsApp Helpline:</span>
                  <a 
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Khushboo%20Medical%20Hall`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline"
                  >
                    +91 {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">Email Address:</span>
                  <span className="text-slate-400">{BUSINESS_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Store Location Map & Address */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 border-l-4 border-emerald-500 pl-3">
              Store Location
            </h3>
            <p className="text-sm text-slate-300 mb-3 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
              <span>{BUSINESS_INFO.address}</span>
            </p>

            <a
              href={BUSINESS_INFO.googleMapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-xs font-semibold transition"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3 h-3 ml-auto" />
            </a>
          </div>

        </div>

        {/* Legal Links & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button 
              onClick={() => setShowLegalModal('privacy')} 
              className="hover:text-emerald-400 transition"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              onClick={() => setShowLegalModal('terms')} 
              className="hover:text-emerald-400 transition"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button 
              onClick={() => setShowLegalModal('disclaimer')} 
              className="hover:text-emerald-400 transition"
            >
              Medical Disclaimer
            </button>
          </div>

          {/* Mandatory WMIT Developer Credit */}
          <div className="flex items-center space-x-1 font-medium text-slate-400">
            <span></span>
            <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>
          </div>
        </div>

      </div>

      {/* Legal Modals */}
      {showLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-lg w-full text-slate-300 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h4 className="text-lg font-bold text-white capitalize">
                {showLegalModal === 'privacy' && 'Privacy Policy'}
                {showLegalModal === 'terms' && 'Terms & Conditions'}
                {showLegalModal === 'disclaimer' && 'Medical Disclaimer'}
              </h4>
              <button 
                onClick={() => setShowLegalModal(null)}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {showLegalModal === 'privacy' && (
              <p className="text-xs leading-relaxed space-y-2">
                Khushboo Medical Hall values your privacy. Any customer details, phone numbers, or prescription photos submitted via WhatsApp or online forms are strictly utilized to process your specific medicine orders and customer support queries. We do not sell or share customer data with third parties.
              </p>
            )}

            {showLegalModal === 'terms' && (
              <p className="text-xs leading-relaxed space-y-2">
                All prescription medicines sold by Khushboo Medical Hall require a valid doctor's prescription issued by a registered medical practitioner in India. Stock levels shown on our website are updated regularly but subject to store inventory changes.
              </p>
            )}

            {showLegalModal === 'disclaimer' && (
              <p className="text-xs leading-relaxed space-y-2">
                The information provided on this website is for general informational and educational purposes regarding pharmaceutical product availability. It is not intended as medical advice. Always consult a qualified physician or healthcare professional before consuming any prescription medication.
              </p>
            )}

            <button
              onClick={() => setShowLegalModal(null)}
              className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
