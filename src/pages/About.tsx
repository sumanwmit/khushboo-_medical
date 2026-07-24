import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  MapPin, 
  Heart, 
  Target, 
  Eye, 
  Building2, 
  Users, 
  CheckCircle2, 
  MessageSquare,
  Sparkles,
  Pill,
  Thermometer
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BUSINESS_INFO, STORE_TIMELINE, WHY_CHOOSE_US } from '../data/pharmacyData';

interface AboutProps {
  onOpenOrderModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenOrderModal }) => {
  return (
    <>
      <SEOHead 
        title="About Us | Khushboo Medical Hall Jehanabad"
        description="Learn about Khushboo Medical Hall on Fida Hussain Road, Jehanabad, Bihar. Founded in 2012, offering 100% genuine medicines, cold chain storage, and patient-first care."
      />

      <Breadcrumbs items={[{ label: 'About Us' }]} />

      <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner Header */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            Our Business Story & History
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Dedicated to Pure Health & Authenticity Since 2012
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Khushboo Medical Hall was built on a simple promise: Every resident of Jehanabad deserves 100% genuine medicines at fair prices, served with professional pharmacist care.
          </p>
        </section>

        {/* Business Story & Store Overview Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              The Journey of Khushboo Medical Hall
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Established in 2012 at <strong>Fida Hussain Road, Jehanabad, Bihar</strong>, Khushboo Medical Hall started as a modest retail pharmacy with a steadfast commitment to zero compromises on drug quality. Over the last 14+ years, we have expanded our inventory to include over 10,000+ branded & generic pharmaceuticals, advanced diagnostic tools, baby care products, and specialized surgical supplies.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We operate under strict compliance with the Food and Drugs Administration (FDA) regulations of Bihar and hold valid Drug License No. <strong>{BUSINESS_INFO.drugLicenseNo}</strong>. Every batch received from pharmaceutical companies is verified for authentic holograms, batch numbers, and expiration dates before reaching our pharmacy counters.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700">
                <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-1" />
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">100% Genuine Guarantee</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Direct distributor sourcing with GST invoice</p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700">
                <Thermometer className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-1" />
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">Cold-Chain Storage</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Insulin & biologicals kept at 2°C - 8°C</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80"
                alt="Khushboo Medical Hall Organized Shelves"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 text-white text-xs flex items-center justify-between">
              <div>
                <span className="font-bold block text-emerald-400">Store Address</span>
                <span className="text-slate-300">{BUSINESS_INFO.address}</span>
              </div>
              <button
                onClick={onOpenOrderModal}
                className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition"
              >
                WhatsApp Us
              </button>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Core Values Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              To provide the residents of Jehanabad with immediate access to 100% genuine medicines, professional drug advice, and seamless digital prescription ordering at transparent prices.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Our Vision</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              To be Bihar's most trusted model medical store where patients receive not just pharmaceuticals, but empathetic healthcare support and cold-chain reliability.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Core Values</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Integrity in billing, absolute product purity, patient confidentiality, continuous learning in pharmacology, and rapid emergency response.
            </p>
          </div>
        </section>

        {/* Owner / Pharmacist Message */}
        <section className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Pharmacist Message
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              "Your Health & Trust Are Our Greatest Responsibility"
            </h2>
            <blockquote className="text-slate-300 text-sm leading-relaxed italic border-l-4 border-emerald-500 pl-4 py-1">
              "At Khushboo Medical Hall, we believe medicine is not just another retail product — it is a lifeline. Every pill dispensed at our store passes strict quality checks. Whether you need daily blood pressure medication, specialized insulin, or emergency surgical dressings, our team is committed to standing by your side in Jehanabad."
            </blockquote>
            <div className="pt-2 text-xs text-slate-400">
              <span className="font-bold text-white block">Chief Registered Pharmacist</span>
              <span>Khushboo Medical Hall, Fida Hussain Rd, Jehanabad</span>
            </div>
          </div>
        </section>

        {/* Business Timeline */}
        <section className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Our Milestones
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Khushboo Medical Hall Business Timeline
            </h2>
          </div>

          <div className="relative border-l-2 border-emerald-500/40 ml-4 md:ml-32 space-y-8">
            {STORE_TIMELINE.map((item, idx) => (
              <div key={idx} className="relative pl-8 group">
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center border-4 border-white dark:border-slate-900">
                  ✓
                </div>
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
                  <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                    YEAR {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Grid */}
        <section className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Why Jehanabad Trusts Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">{item.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="text-center bg-emerald-600 text-white rounded-3xl p-8 sm:p-12 space-y-4 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Have Questions for Our Pharmacists?</h2>
          <p className="text-emerald-100 text-sm max-w-xl mx-auto">
            Contact us directly on WhatsApp or call our store on Fida Hussain Road for dosage checks, stock confirmation, or emergency orders.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={onOpenOrderModal}
              className="py-3 px-6 rounded-2xl bg-white text-emerald-800 font-extrabold text-sm hover:bg-slate-100 transition shadow-lg"
            >
              Order on WhatsApp
            </button>
          </div>
        </section>

      </div>
    </>
  );
};
