import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  Navigation, 
  ShieldCheck, 
  Clock, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  HeartPulse, 
  Pill, 
  Activity, 
  Baby, 
  Star, 
  HelpCircle, 
  BookOpen, 
  Send,
  MapPin,
  ChevronRight,
  Package
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { 
  BUSINESS_INFO, 
  SERVICES_LIST, 
  WHY_CHOOSE_US, 
  FAQ_LIST, 
  CUSTOMER_REVIEWS_SUMMARY, 
  HEALTH_TIPS 
} from '../data/pharmacyData';

interface HomeProps {
  onOpenOrderModal: (medicineName?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenOrderModal }) => {
  return (
    <>
      <SEOHead 
        title="Khushboo Medical Hall | Genuine Pharmacy & Medical Store in Jehanabad"
        description="Khushboo Medical Hall on Fida Hussain Road, Jehanabad, Bihar provides 100% genuine medicines, surgical supplies, health devices, baby care, and instant WhatsApp prescription ordering."
      />

      <div className="space-y-16 lg:space-y-24 pb-12">
        
        {/* =========================================
            HERO BANNER SECTION
           ========================================= */}
        <section className="relative min-h-[85vh] flex items-center bg-slate-900 text-white overflow-hidden pt-8 pb-16">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=2000&q=80"
              alt="Khushboo Medical Hall Pharmacy Shelves"
              className="w-full h-full object-cover opacity-25 scale-105 transform hover:scale-100 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Hero Left Content */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Licensed Chemist & Drug Store • Jehanabad, Bihar</span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                  Your Trusted Medical Store for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Genuine Medicines</span> & Healthcare
                </h1>

                {/* Description */}
                <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                  Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care, and daily medical essentials at affordable prices.
                </p>

                {/* 3 Main Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="py-3.5 px-6 rounded-2xl bg-slate-800 hover:bg-slate-700 active:bg-slate-900 text-white font-bold text-sm flex items-center gap-2.5 border border-slate-700/80 transition transform hover:-translate-y-0.5 shadow-lg"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>Call Now ({BUSINESS_INFO.formattedPhone})</span>
                  </a>

                  <button
                    onClick={() => onOpenOrderModal()}
                    className="py-3.5 px-7 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm flex items-center gap-2.5 shadow-xl shadow-emerald-600/30 transition transform hover:-translate-y-0.5 active:scale-95 border border-emerald-400/30"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>WhatsApp Order</span>
                  </button>

                  <a
                    href={BUSINESS_INFO.googleMapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-6 rounded-2xl bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold text-sm flex items-center gap-2 border border-slate-700 transition"
                  >
                    <Navigation className="w-4 h-4 text-emerald-400" />
                    <span>Get Directions</span>
                  </a>
                </div>

                {/* Quick Trust Signals */}
                <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>100% Authentic Products</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Open 8 AM - 10 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Serving Since 2012</span>
                  </div>
                </div>

              </div>

              {/* Hero Right Quick Order Card */}
              <div className="lg:col-span-5">
                <div className="p-6 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-2xl space-y-5">
                  <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
                    <div className="p-3 bg-emerald-500/20 rounded-2xl text-emerald-400 border border-emerald-500/30">
                      <Pill className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">Upload Prescription</h2>
                      <p className="text-xs text-slate-300">Fast 15-minute verification on WhatsApp</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-slate-200">
                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">1</span>
                      <span>Take a photo of your doctor's prescription</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">2</span>
                      <span>Click below to launch our WhatsApp order form</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">3</span>
                      <span>Get medicine prepared for store pickup or local home delivery</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenOrderModal()}
                    className="w-full py-3.5 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-500/30"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Upload & Order Now</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            SHORT ABOUT PREVIEW SECTION
           ========================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-50 via-teal-50/40 to-slate-50 dark:from-slate-900 dark:via-slate-800/80 dark:to-slate-900 rounded-3xl p-8 sm:p-12 border border-emerald-100 dark:border-slate-800 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                About Khushboo Medical Hall
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Serving Jehanabad Families with Integrity & Pure Care Since 2012
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Located on Fida Hussain Road, Khushboo Medical Hall has grown to become Jehanabad's premier community pharmacy. We specialize in stocking 100% genuine, batch-verified pharmaceuticals, cold-chain temperature biologicals, pediatric baby care, and hospital surgical equipment.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 font-medium">
                  <span className="block text-emerald-600 dark:text-emerald-400 font-extrabold text-lg">50,000+</span>
                  <span className="text-slate-600 dark:text-slate-400">Happy Patients</span>
                </div>
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 font-medium">
                  <span className="block text-emerald-600 dark:text-emerald-400 font-extrabold text-lg">100%</span>
                  <span className="text-slate-600 dark:text-slate-400">Genuine Guarantee</span>
                </div>
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 font-medium col-span-2 sm:col-span-1">
                  <span className="block text-emerald-600 dark:text-emerald-400 font-extrabold text-lg">24/7</span>
                  <span className="text-slate-600 dark:text-slate-400">WhatsApp Support</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm hover:underline"
                >
                  <span>Read Our Full Story & Store Overview</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63c3d5267b74?auto=format&fit=crop&w=800&q=80"
                  alt="Khushboo Medical Hall Store Front"
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-emerald-600 text-white p-4 rounded-2xl shadow-lg hidden sm:block">
                <p className="text-xs font-bold">Fida Hussain Road</p>
                <p className="text-[10px] text-emerald-100">Jehanabad, Bihar 804408</p>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================
            LIVE MEDICINE STOCK CHECKER PREVIEW
           ========================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicineStockChecker onOrderClick={(medName) => onOpenOrderModal(medName)} compact={true} />
        </section>

        {/* =========================================
            FEATURED SERVICES (MAX 6 PREVIEW)
           ========================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                What We Offer
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                Comprehensive Healthcare & Pharmacy Services
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 py-2.5 px-5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-sm transition"
            >
              <span>View All 8 Categories</span>
              <ArrowRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {service.iconName === 'Pill' && <Pill className="w-6 h-6" />}
                    {service.iconName === 'HeartPulse' && <HeartPulse className="w-6 h-6" />}
                    {service.iconName === 'Activity' && <Activity className="w-6 h-6" />}
                    {service.iconName === 'Baby' && <Baby className="w-6 h-6" />}
                    {service.iconName === 'ShieldCheck' && <ShieldCheck className="w-6 h-6" />}
                    {service.iconName === 'Stethoscope' && <HeartPulse className="w-6 h-6" />}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {service.popularItems[0]}
                  </span>
                  <Link
                    to="/services"
                    className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-600 flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================
            WHY CHOOSE US SECTION
           ========================================= */}
        <section className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Our Key Strengths
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                Why Khushboo Medical Hall is Jehanabad's #1 Choice
              </h2>
              <p className="text-sm text-slate-400">
                We combine authentic pharmaceuticals, genuine pricing, and modern instant ordering to give your family complete peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE_US.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-emerald-500/50 transition duration-300 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            CUSTOMER REVIEWS PREVIEW SECTION
           ========================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Customer Feedback
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Trusted by Local Residents & Doctors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CUSTOMER_REVIEWS_SUMMARY.map((review) => (
              <div
                key={review.id}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block">{review.author}</span>
                    <span className="text-slate-500 dark:text-slate-400">{review.location}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-medium text-[10px]">
                    Verified Buyer
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================
            FAQ PREVIEW SECTION
           ========================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Got Questions?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>
            <Link to="/contact" className="text-xs font-bold text-emerald-600 hover:underline hidden sm:inline-block">
              Ask Pharmacist →
            </Link>
          </div>

          <div className="space-y-4">
            {FAQ_LIST.slice(0, 4).map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2"
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================
            LATEST HEALTH TIPS PREVIEW
           ========================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Pharmacist Advice
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Health & Wellness Guidance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HEALTH_TIPS.map((tip) => (
              <article
                key={tip.id}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col justify-between"
              >
                <div>
                  <img
                    src={tip.imageUrl}
                    alt={tip.title}
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                      {tip.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-2">
                      {tip.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {tip.summary}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                  <span>{tip.readTime}</span>
                  <button 
                    onClick={() => alert(`Full article: ${tip.title}\n\n${tip.summary}`)}
                    className="text-emerald-600 font-bold hover:underline"
                  >
                    Read Article →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =========================================
            CALL TO ACTION & NEWSLETTER BANNER
           ========================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <h2 className="text-3xl font-extrabold tracking-tight">
                Need Urgent Medicine in Jehanabad?
              </h2>
              <p className="text-emerald-100 text-sm leading-relaxed">
                Send your prescription image to our WhatsApp helpline right now for quick price estimation, availability check, or store pickup reservation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => onOpenOrderModal()}
                className="w-full sm:w-auto py-3.5 px-8 rounded-2xl bg-white text-emerald-800 hover:bg-slate-100 font-black text-sm shadow-xl transition transform active:scale-95 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span>WhatsApp Order Now</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-emerald-900/60 hover:bg-emerald-950 text-white font-bold text-sm border border-emerald-400/40 flex items-center justify-center gap-2 transition"
              >
                <Phone className="w-4 h-4 text-emerald-300" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
