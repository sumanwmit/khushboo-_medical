import React, { useState } from 'react';
import { 
  Pill, 
  HeartPulse, 
  Activity, 
  Stethoscope, 
  Baby, 
  ShieldCheck, 
  Sparkles, 
  UserCheck, 
  ShoppingBag, 
  CheckCircle2, 
  MessageSquare,
  Search,
  ChevronRight,
  Phone
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/pharmacyData';

interface ServicesProps {
  onOpenOrderModal: (medicineName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenOrderModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = activeCategory === 'all' 
    ? SERVICES_LIST 
    : SERVICES_LIST.filter(s => s.id === activeCategory);

  return (
    <>
      <SEOHead 
        title="Pharmacy Services & Stock Checker | Khushboo Medical Hall Jehanabad"
        description="Explore complete pharmacy services at Khushboo Medical Hall Jehanabad: Prescription drugs, OTC, health devices, baby care, surgical items, and live medicine stock availability checker."
      />

      <Breadcrumbs items={[{ label: 'Services & Stock' }]} />

      <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner Header */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            Complete Healthcare Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Our Pharmacy Categories & Services
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            From emergency life-saving prescription drugs to daily health supplements and diagnostic equipment, explore our full range of genuine medical products in Jehanabad.
          </p>
        </section>

        {/* EXCLUSIVE FEATURE: Live Medicine Stock Availability Checker */}
        <section id="stock-checker" className="scroll-mt-24">
          <MedicineStockChecker onOrderClick={(medName) => onOpenOrderModal(medName)} />
        </section>

        {/* Service Category Filter Buttons */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Browse Product Categories
            </h2>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Showing {filteredServices.length} categories
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`py-2 px-4 rounded-xl text-xs font-bold transition ${
                activeCategory === 'all'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              All Categories
            </button>
            {SERVICES_LIST.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`py-2 px-4 rounded-xl text-xs font-bold transition ${
                  activeCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Detailed Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map(service => (
              <div
                key={service.id}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      {service.iconName === 'Pill' && <Pill className="w-7 h-7" />}
                      {service.iconName === 'HeartPulse' && <HeartPulse className="w-7 h-7" />}
                      {service.iconName === 'Activity' && <Activity className="w-7 h-7" />}
                      {service.iconName === 'Stethoscope' && <Stethoscope className="w-7 h-7" />}
                      {service.iconName === 'Baby' && <Baby className="w-7 h-7" />}
                      {service.iconName === 'ShieldCheck' && <ShieldCheck className="w-7 h-7" />}
                      {service.iconName === 'Sparkles' && <Sparkles className="w-7 h-7" />}
                      {service.iconName === 'UserCheck' && <UserCheck className="w-7 h-7" />}
                    </div>

                    {service.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Popular Products in Stock:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.popularItems.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700"
                        >
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    GST Invoice Available
                  </span>

                  <button
                    onClick={() => onOpenOrderModal(service.title)}
                    className="py-2.5 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-md transition"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire on WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Special Bulk & Surgical Supplies Callout */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Clinics & Doctors Portal
            </span>
            <h2 className="text-3xl font-extrabold">
              Bulk Surgical & Medical Equipment Supplies
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We supply medical equipment, surgical dressings, and diagnostic kits in bulk to local nursing homes, doctors' clinics, and diagnostic labs in Jehanabad with special wholesale pricing.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="py-3 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Bulk Orders ({BUSINESS_INFO.phone})</span>
            </a>
            <button
              onClick={() => onOpenOrderModal('Bulk Surgical Enquiry')}
              className="py-3 px-6 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700"
            >
              WhatsApp Bulk Enquiry
            </button>
          </div>
        </section>

      </div>
    </>
  );
};
