import { FAQItem, GalleryItem, HealthTip, ReviewItem, ServiceCategory } from '../types';

export const BUSINESS_INFO = {
  name: 'Khushboo Medical Hall',
  tagline: 'Your Trusted Medical Store for Genuine Medicines & Healthcare Needs',
  phone: '8083243380',
  formattedPhone: '+91 80832 43380',
  whatsappNumber: '918083243380',
  address: '6X8Q+6R6, Fida Hussain Rd, Jehanabad, Bihar 804408',
  plusCode: '6X8Q+6R6',
  landmark: 'Near Fida Hussain Road Main Market, Jehanabad',
  city: 'Jehanabad',
  state: 'Bihar',
  pincode: '804408',
  workingHours: 'Monday - Sunday: 8:00 AM - 10:00 PM',
  emergencyAvailability: 'Emergency Call Service Available 24/7',
  googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.123456789012!2d84.98234!3d25.21456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2cc8123456789%3A0x1234567890abcdef!2sFida%20Hussain%20Rd%2C%20Jehanabad%2C%20Bihar%20804408!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  googleMapDirectionsUrl: 'https://maps.google.com/?q=6X8Q%2B6R6,+Fida+Hussain+Rd,+Jehanabad,+Bihar+804408',
  email: 'contact@khushboomedical.in',
  establishedYear: '2012',
  drugLicenseNo: 'BR-JHN-DL-2012-98421',
};

export const SERVICES_LIST: ServiceCategory[] = [
  {
    id: 'rx-medicines',
    title: 'Prescription Medicines',
    description: '100% genuine & verified prescription drugs stored in temperature-controlled environments for maximum efficacy.',
    iconName: 'Pill',
    popularItems: ['Antibiotics', 'Cardiovascular Drugs', 'Diabetes Management', 'Hypertension Care'],
    badge: '100% Authentic'
  },
  {
    id: 'otc-medicines',
    title: 'OTC Medicines',
    description: 'Over-the-counter essentials for pain relief, fever, cold & cough, digestive care, and first-aid kits.',
    iconName: 'HeartPulse',
    popularItems: ['Pain Relief & Analgesics', 'Cold & Allergy Syrup', 'Antacids', 'Antiseptics'],
    badge: 'Instant Purchase'
  },
  {
    id: 'health-devices',
    title: 'Health & Diagnostic Devices',
    description: 'Reliable digital blood pressure monitors, glucometers, nebulizers, digital thermometers, and pulse oximeters.',
    iconName: 'Activity',
    popularItems: ['BP Monitors', 'Glucometers & Strips', 'Nebulizers', 'Pulse Oximeters'],
    badge: 'Warranty Included'
  },
  {
    id: 'surgical-supplies',
    title: 'Surgical & Bandages',
    description: 'Hospital-grade dressings, surgical gloves, cotton rolls, adhesive tapes, syringes, and wound dressing packs.',
    iconName: 'Stethoscope',
    popularItems: ['Sterile Gauze & Cotton', 'Surgical Tapes', 'Syringes & Needles', 'Bandages']
  },
  {
    id: 'baby-care',
    title: 'Baby Care Essentials',
    description: 'Pediatrician-recommended baby formulas, gentle lotions, anti-rash creams, diapers, and baby hygiene care.',
    iconName: 'Baby',
    popularItems: ['Baby Food & Formula', 'Diapers & Wipes', 'Baby Soaps & Shampoos', 'Teething Gels']
  },
  {
    id: 'supplements',
    title: 'Vitamins & Health Supplements',
    description: 'Multivitamins, calcium & vitamin D3, protein powders, immunity boosters, and herbal wellness formulations.',
    iconName: 'ShieldCheck',
    popularItems: ['Vitamin C & Zinc', 'Calcium & Bone Health', 'Fish Oil & Omega-3', 'Protein Drinks']
  },
  {
    id: 'personal-care',
    title: 'Personal Care & Hygiene',
    description: 'Dermatologist-approved skin care cleansers, anti-dandruff shampoos, oral hygiene, and intimate care products.',
    iconName: 'Sparkles',
    popularItems: ['Skin Hydration & Lotions', 'Oral Health', 'Soaps & Sanitizers', 'Hair Care']
  },
  {
    id: 'home-care',
    title: 'Elderly & Home Care',
    description: 'Adult diapers, walking sticks, hot water bags, heating pads, orthopedic supports, and bedridden patient care supplies.',
    iconName: 'UserCheck',
    popularItems: ['Adult Pull-Ups', 'Orthopedic Belts', 'Walking Sticks & Crutches', 'Hot Water Bags']
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'genuine',
    title: '100% Genuine Medicines',
    description: 'Directly sourced from authorized pharmaceutical distributors with batch verification.',
    icon: 'ShieldCheck'
  },
  {
    id: 'pricing',
    title: 'Fair & Affordable MRP Discounts',
    description: 'Transparent pricing with legitimate GST billing and maximum customer savings.',
    icon: 'Tag'
  },
  {
    id: 'whatsapp',
    title: 'Instant WhatsApp Order & Express Delivery',
    description: 'Send your prescription photo via WhatsApp for fast local pickup or home delivery in Jehanabad.',
    icon: 'MessageSquare'
  },
  {
    id: 'pharmacist',
    title: 'Experienced Pharmacists',
    description: 'Qualified staff offering guidance on dosage, storage, and drug interaction precautions.',
    icon: 'UserCheck'
  },
  {
    id: 'cold-chain',
    title: 'Cold Chain Storage',
    description: 'Dedicated refrigeration for insulin, vaccines, and heat-sensitive biological medicines.',
    icon: 'Thermometer'
  },
  {
    id: 'location',
    title: 'Prime Location in Jehanabad',
    description: 'Easily accessible on Fida Hussain Road with ample parking and quick service.',
    icon: 'MapPin'
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Khushboo Medical Hall Front View',
    category: 'exterior',
    imageUrl: 'https://images.unsplash.com/photo-1586015555751-63c3d5267b74?auto=format&fit=crop&w=1200&q=80',
    description: 'Modern, well-lit pharmacy storefront located on Fida Hussain Road, Jehanabad.'
  },
  {
    id: 'gal-2',
    title: 'Organized Prescription Medicine Shelves',
    category: 'shelves',
    imageUrl: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80',
    description: 'Systematically cataloged pharmaceutical racks ensuring fast dispensing.'
  },
  {
    id: 'gal-3',
    title: 'Health & Diagnostic Devices Counter',
    category: 'equipment',
    imageUrl: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1cdb?auto=format&fit=crop&w=1200&q=80',
    description: 'Digital blood pressure monitors, pulse oximeters, and glucometers on display.'
  },
  {
    id: 'gal-4',
    title: 'Baby Care & Wellness Products Shelf',
    category: 'products',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80',
    description: 'Wide variety of branded baby nutrition, lotions, and pediatric care essentials.'
  },
  {
    id: 'gal-5',
    title: 'Cold Chain Storage for Insulins',
    category: 'equipment',
    imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=1200&q=80',
    description: 'Strictly monitored temperature-controlled refrigerators for critical biologics.'
  },
  {
    id: 'gal-6',
    title: 'Surgical & Wound Care Supplies',
    category: 'products',
    imageUrl: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1200&q=80',
    description: 'Sterile surgical dressings, gloves, bandages, and orthopedic supports.'
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: 'How can I order medicines on WhatsApp from Khushboo Medical Hall?',
    answer: 'Simply click the "WhatsApp Order" button on our website, upload a clear photo of your prescription or write your required medicine names along with your address, and send it to 8083243380. Our team will verify and prepare your order promptly.'
  },
  {
    question: 'Are all medicines sold at Khushboo Medical Hall genuine?',
    answer: 'Yes, 100%. We source medicines exclusively from authorized C&F agents and licensed pharmaceutical distributors. Every strip comes with batch details and GST tax invoice.'
  },
  {
    question: 'Do you offer home delivery in Jehanabad?',
    answer: 'Yes! We offer express home delivery within Jehanabad city limits for orders placed via WhatsApp or phone call.'
  },
  {
    question: 'What are the working hours of Khushboo Medical Hall?',
    answer: 'Our store on Fida Hussain Road is open Monday to Sunday from 8:00 AM to 10:00 PM. For emergency medicine inquiries after hours, you can reach out via call at 8083243380.'
  },
  {
    question: 'Do you keep insulin and vaccines in cold storage?',
    answer: 'Yes, we maintain dedicated medical refrigeration units with 24/7 backup power to keep insulins, vaccines, and biological injectables strictly between 2°C and 8°C.'
  },
  {
    question: 'Can I check medicine availability before visiting the store?',
    answer: 'Yes! Use our live Medicine Stock Checker tool on the Services page of our website, or send a quick query on WhatsApp to confirm stock levels before visiting.'
  }
];

export const CUSTOMER_REVIEWS_SUMMARY: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Ramesh Kumar',
    rating: 5,
    date: 'Recent Customer',
    comment: 'Best medical shop in Jehanabad on Fida Hussain Road. Genuine medicines, quick WhatsApp ordering service, and very polite owner.',
    location: 'Jehanabad, Bihar',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Dr. A. K. Verma',
    rating: 5,
    date: 'Verified Buyer',
    comment: 'I routinely advise my patients to buy from Khushboo Medical Hall because their cold chain management for insulin and specialized drugs is top notch.',
    location: 'Jehanabad',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Sunita Devi',
    rating: 5,
    date: 'Regular Customer',
    comment: 'They always have all prescribed medicines available. The staff explains dosage clearly and gives genuine bill. Highly trusted store!',
    location: 'Fida Hussain Road, Jehanabad',
    verified: true
  }
];

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: 'tip-1',
    title: 'How to Properly Store Insulin and Sensitive Biological Medicines at Home',
    category: 'Medicine Care',
    summary: 'Learn the correct temperature ranges, refrigeration safety tips, and travel precautions for insulin pens and vials.',
    readTime: '3 min read',
    date: 'July 2026',
    imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tip-2',
    title: 'Understanding Prescription vs. OTC Antibiotics & Preventing Drug Resistance',
    category: 'Pharmacist Guide',
    summary: 'Why you should never take leftover antibiotics without a doctor\'s prescription and how to complete your full dosage cycle.',
    readTime: '4 min read',
    date: 'July 2026',
    imageUrl: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tip-3',
    title: 'Essential Home First Aid Kit Checklist for Every Household',
    category: 'Family Health',
    summary: 'A comprehensive list of bandages, antiseptics, digital thermometers, and basic pain relievers every home should keep ready.',
    readTime: '5 min read',
    date: 'June 2026',
    imageUrl: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=600&q=80'
  }
];

export const STORE_TIMELINE = [
  {
    year: '2012',
    title: 'Store Foundation',
    description: 'Khushboo Medical Hall was established on Fida Hussain Road with a core commitment to provide authentic pharmaceutical care in Jehanabad.'
  },
  {
    year: '2016',
    title: 'Cold-Chain & Health Device Expansion',
    description: 'Upgraded facilities with medical refrigeration and added a full range of home diagnostic tools like BP monitors and glucometers.'
  },
  {
    year: '2020',
    title: 'Emergency Pandemic Support',
    description: 'Served as an uninterrupted essential healthcare provider during COVID-19, supplying masks, sanitizers, oxygen meters, and vitals.'
  },
  {
    year: '2024',
    title: 'Digital & WhatsApp Ordering System',
    description: 'Introduced prescription-upload WhatsApp ordering for fast home deliveries and stock verification across Jehanabad.'
  },
  {
    year: '2026',
    title: 'Modernized Healthcare Center',
    description: 'Serving over 50,000 satisfied customers with digital inventory tracking and instant medicine stock availability checker.'
  }
];
