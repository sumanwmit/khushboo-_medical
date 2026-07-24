import React, { useState } from 'react';
import { X, MessageSquare, Phone, FileText, CheckCircle2, Clock, Upload, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { OrderFormData } from '../types';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ''
}) => {
  const [formData, setFormData] = useState<OrderFormData>({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    medicineRequired: prefilledMedicine || '',
    hasPrescription: true,
    preferredTime: 'As Soon As Possible (Express)',
    notes: ''
  });

  const [prescriptionFileName, setPrescriptionFileName] = useState<string>('');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFileName(e.target.files[0].name);
      setFormData(prev => ({ ...prev, hasPrescription: true }));
    }
  };

  const generateWhatsAppMessage = () => {
    const message = `Hello ${BUSINESS_INFO.name},
*NEW MEDICINE ORDER*

*Customer Name:* ${formData.customerName || 'Not specified'}
*Phone:* ${formData.phone || 'Not specified'}
*Email:* ${formData.email || 'N/A'}
*Medicine Required:* ${formData.medicineRequired || 'Attached in prescription photo'}
*Prescription Attached/Available:* ${formData.hasPrescription ? 'YES (Will send photo in chat)' : 'NO (OTC Item)'}
${prescriptionFileName ? `*Selected File:* ${prescriptionFileName}` : ''}
*Delivery Address:* ${formData.address || 'Local Pickup'}
*Preferred Time:* ${formData.preferredTime}
*Special Notes:* ${formData.notes || 'None'}`;

    return encodeURIComponent(message);
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    const encodedMsg = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodedMsg}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 my-8 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Close modal"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
              <MessageSquare className="w-7 h-7 text-emerald-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Quick WhatsApp Order</h3>
              <p className="text-emerald-100 text-sm mt-0.5">
                Send prescription & medicine list directly to {BUSINESS_INFO.name}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body / Form */}
        <form onSubmit={handleSubmitWhatsApp} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                Customer Name *
              </label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                placeholder="e.g. Ramesh Kumar"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                Mobile Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 8083243380"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@gmail.com"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                Preferred Delivery Time
              </label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
              >
                <option value="As Soon As Possible (Express)">As Soon As Possible (Express)</option>
                <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                <option value="Self Store Pickup">Self Store Pickup on Fida Hussain Rd</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
              Delivery Address / Landmark (Jehanabad)
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="e.g. Near Station Road, Jehanabad"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
              Medicine Required / Quantity
            </label>
            <textarea
              name="medicineRequired"
              value={formData.medicineRequired}
              onChange={handleChange}
              rows={2}
              placeholder="e.g. Dolo 650mg (1 strip), Volini Spray (1 bottle), Telmikind 40mg (2 strips)"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Prescription Options */}
          <div className="p-4 bg-emerald-50 dark:bg-slate-800/80 rounded-2xl border border-emerald-200 dark:border-emerald-800/50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Do you have a Doctor's Prescription?
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="hasPrescription"
                  checked={formData.hasPrescription}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:peer-focus:ring-emerald-800 peer-checked:bg-emerald-600"></div>
              </label>
            </div>

            {formData.hasPrescription && (
              <div className="pt-2 border-t border-emerald-200/60 dark:border-slate-700">
                <label className="flex items-center justify-center w-full p-3 border-2 border-dashed border-emerald-400 dark:border-emerald-600 rounded-xl cursor-pointer bg-white dark:bg-slate-900 hover:bg-emerald-50/50 dark:hover:bg-slate-800 transition">
                  <div className="flex items-center space-x-2 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                    <Upload className="w-4 h-4" />
                    <span>{prescriptionFileName ? `Selected: ${prescriptionFileName}` : 'Select Prescription Photo (JPG/PNG)'}</span>
                  </div>
                  <input type="file" accept="image/*,.pdf" onChange={handleFileChange} className="hidden" />
                </label>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  *Note: You can also attach the prescription image directly inside WhatsApp chat after opening!
                </p>
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
              Special Instructions / Notes
            </label>
            <input
              type="text"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="e.g. Please check expiry date before packing"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Submit Action Buttons */}
          <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:flex-1 py-3 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition transform active:scale-95"
            >
              <Send className="w-5 h-5" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full sm:w-auto py-3 px-6 rounded-2xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold flex items-center justify-center gap-2 transition"
            >
              <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Call Now</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
