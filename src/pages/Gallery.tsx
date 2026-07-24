import React, { useState } from 'react';
import { 
  Building2, 
  Layers, 
  Package, 
  Stethoscope, 
  Maximize2, 
  Filter, 
  MapPin, 
  MessageSquare 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Lightbox } from '../components/Lightbox';
import { GALLERY_IMAGES, BUSINESS_INFO } from '../data/pharmacyData';
import { GalleryItem } from '../types';

interface GalleryProps {
  onOpenOrderModal: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenOrderModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'exterior', label: 'Store Front View' },
    { id: 'shelves', label: 'Medicine Shelves' },
    { id: 'products', label: 'Healthcare Products' },
    { id: 'equipment', label: 'Medical Devices' },
  ];

  const filteredImages = selectedCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  const activeLightboxItem: GalleryItem | null = selectedImageIndex !== null
    ? filteredImages[selectedImageIndex] || null
    : null;

  const handleNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < filteredImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <>
      <SEOHead 
        title="Store Photo Gallery | Khushboo Medical Hall Jehanabad"
        description="View photos of Khushboo Medical Hall on Fida Hussain Road, Jehanabad: Store front, organized medicine shelves, cold storage, health devices, and surgical inventory."
      />

      <Breadcrumbs items={[{ label: 'Store Gallery' }]} />

      <div className="space-y-12 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner Header */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            Store Tour & Facilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Khushboo Medical Hall Photo Gallery
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Take a visual tour of our clean, well-stocked retail pharmacy located on Fida Hussain Road in Jehanabad, Bihar.
          </p>
        </section>

        {/* Filter Buttons */}
        <section className="flex flex-wrap items-center justify-center gap-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setSelectedImageIndex(null);
              }}
              className={`py-2.5 px-5 rounded-2xl text-xs font-bold transition ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </section>

        {/* Photo Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setSelectedImageIndex(idx)}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition duration-300 cursor-pointer"
            >
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800">
                  {img.category}
                </span>
                <h3 className="text-lg font-bold">{img.title}</h3>
                <p className="text-xs text-slate-300 line-clamp-2">{img.description}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Lightbox Modal */}
        <Lightbox
          item={activeLightboxItem}
          onClose={() => setSelectedImageIndex(null)}
          onNext={selectedImageIndex !== null && selectedImageIndex < filteredImages.length - 1 ? handleNext : undefined}
          onPrev={selectedImageIndex !== null && selectedImageIndex > 0 ? handlePrev : undefined}
        />

        {/* Store Location Footer Banner */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-2xl font-bold">Visit Khushboo Medical Hall Today</h2>
            <p className="text-xs text-slate-400 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{BUSINESS_INFO.address}</span>
            </p>
          </div>

          <button
            onClick={onOpenOrderModal}
            className="py-3 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center gap-2 shadow-lg"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Order Medicines on WhatsApp</span>
          </button>
        </section>

      </div>
    </>
  );
};
