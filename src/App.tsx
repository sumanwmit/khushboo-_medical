import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingControls } from './components/FloatingControls';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { ScrollToTop } from './components/ScrollToTop';

// Lazy loaded pages as required by prompt
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

// Loading spinner fallback for lazy loaded routes
const LoadingFallback = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 bg-slate-50 dark:bg-slate-900">
    <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin" />
    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase">
      Loading Khushboo Medical Hall...
    </span>
  </div>
);

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');

  const handleOpenOrderModal = (medicineName?: string) => {
    if (medicineName) {
      setPrefilledMedicine(medicineName);
    } else {
      setPrefilledMedicine('');
    }
    setIsOrderModalOpen(true);
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300 selection:bg-emerald-500 selection:text-white">
          
          {/* Header */}
          <Header onOpenOrderModal={() => handleOpenOrderModal()} />

          {/* Main Route Views */}
          <main className="flex-grow">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home onOpenOrderModal={handleOpenOrderModal} />} />
                <Route path="/about" element={<About onOpenOrderModal={() => handleOpenOrderModal()} />} />
                <Route path="/services" element={<Services onOpenOrderModal={handleOpenOrderModal} />} />
                <Route path="/gallery" element={<Gallery onOpenOrderModal={() => handleOpenOrderModal()} />} />
                <Route path="/contact" element={<Contact onOpenOrderModal={() => handleOpenOrderModal()} />} />
                <Route path="*" element={<Home onOpenOrderModal={handleOpenOrderModal} />} />
              </Routes>
            </Suspense>
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Floating Action Controls */}
          <FloatingControls onOpenOrderModal={() => handleOpenOrderModal()} />

          {/* WhatsApp Order Modal */}
          <WhatsAppOrderModal
            isOpen={isOrderModalOpen}
            onClose={() => setIsOrderModalOpen(false)}
            prefilledMedicine={prefilledMedicine}
          />

        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
