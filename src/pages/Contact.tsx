import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Mail, 
  Navigation, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BUSINESS_INFO, FAQ_LIST } from '../data/pharmacyData';

interface ContactProps {
  onOpenOrderModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenOrderModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Medicine Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your name and phone number.');
      return;
    }

    // Prepare WhatsApp Message as well
    const waText = encodeURIComponent(`Hello ${BUSINESS_INFO.name},
*NEW INQUIRY FROM WEBSITE*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'N/A'}
*Subject:* ${formData.subject}
*Message:* ${formData.message}`);

    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${waText}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead 
        title="Contact Us & Store Location | Khushboo Medical Hall Jehanabad"
        description="Contact Khushboo Medical Hall at Fida Hussain Rd, Jehanabad, Bihar 804408. Call 8083243380 or WhatsApp for medicine stock inquiry, directions, and working hours."
      />

      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner Header */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            Store Location & Contact
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Get in Touch with Our Pharmacists
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Have questions about medicine availability, prescription fulfillment, or store directions on Fida Hussain Road? Reach out via call, WhatsApp, or visit us in person.
          </p>
        </section>

        {/* 3 Main Contact Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Phone Support</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Call us directly for store availability or emergency orders.
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="text-lg font-black text-emerald-600 dark:text-emerald-400 block hover:underline"
              >
                {BUSINESS_INFO.formattedPhone}
              </a>
            </div>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Now</span>
            </a>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">WhatsApp Line</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Send prescription photos or inquire about prices instantly.
              </p>
              <span className="text-lg font-black text-emerald-600 dark:text-emerald-400 block">
                +91 {BUSINESS_INFO.phone}
              </span>
            </div>

            <button
              onClick={onOpenOrderModal}
              className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:bg-emerald-700 transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Open WhatsApp Chat</span>
            </button>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Working Hours</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Open 7 days a week for all your healthcare needs.
              </p>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200 block">
                {BUSINESS_INFO.workingHours}
              </span>
            </div>

            <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-[11px] font-semibold text-center border border-emerald-200 dark:border-emerald-800">
              {BUSINESS_INFO.emergencyAvailability}
            </div>
          </div>
        </section>

        {/* Form & Map Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Quick Inquiry Form */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Send Us a Message
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Fill in your details below and we will respond on WhatsApp immediately.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-slate-800 border border-emerald-300 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Inquiry Sent to WhatsApp!</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Thank you for reaching out to Khushboo Medical Hall. Our pharmacist will review your message shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="py-2 px-4 rounded-xl bg-slate-200 dark:bg-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 8083243380"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Subject / Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
                  >
                    <option value="General Medicine Inquiry">General Medicine Inquiry</option>
                    <option value="Check Stock & Price">Check Stock & Price</option>
                    <option value="Prescription Delivery">Prescription Delivery</option>
                    <option value="Surgical / Bulk Order">Surgical / Bulk Order</option>
                    <option value="Store Feedback">Store Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Message / Medicine Names
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your medicine requirement or questions here..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition transform active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry via WhatsApp</span>
                </button>
              </form>
            )}
          </div>

          {/* Interactive Google Maps & Address Box */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Store Address & Map
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {BUSINESS_INFO.address}
                  </p>
                </div>

                <a
                  href={BUSINESS_INFO.googleMapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center gap-1 border border-emerald-300 dark:border-emerald-800"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Directions</span>
                </a>
              </div>

              {/* Map Embed Container */}
              <div className="w-full h-72 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 relative bg-slate-100 dark:bg-slate-800">
                <iframe
                  title="Khushboo Medical Hall Location Map"
                  src={BUSINESS_INFO.googleMapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Emergency Notice Box */}
            <div className="p-6 rounded-3xl bg-amber-50 dark:bg-slate-900 border border-amber-200 dark:border-amber-800/60 flex items-start space-x-4">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-1" />
              <div className="space-y-1 text-xs text-amber-900 dark:text-amber-200">
                <h3 className="font-bold text-sm">Emergency Medical Need?</h3>
                <p>
                  For urgent biologicals or emergency hospital prescriptions required outside normal operating hours, call our store helpline directly at <strong>{BUSINESS_INFO.formattedPhone}</strong>.
                </p>
              </div>
            </div>
          </div>

        </section>

      </div>
    </>
  );
};
