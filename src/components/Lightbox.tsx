import React from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, onClose, onNext, onPrev }) => {
  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Top bar controls */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white transition backdrop-blur-md"
            title="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Previous & Next Buttons */}
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white transition backdrop-blur-md"
            title="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white transition backdrop-blur-md"
            title="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Main Image */}
        <div className="relative bg-black max-h-[70vh] flex items-center justify-center overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain max-h-[70vh]"
            loading="lazy"
          />
        </div>

        {/* Caption Info */}
        <div className="p-6 bg-slate-900 text-white border-t border-slate-800">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800 uppercase tracking-wider mb-2">
            {item.category}
          </span>
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-sm text-slate-400 mt-1">{item.description}</p>
        </div>
      </div>
    </div>
  );
};
