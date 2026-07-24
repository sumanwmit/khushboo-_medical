export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  category: string;
  composition: string;
  dosageForm?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  popularItems: string[];
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'exterior' | 'shelves' | 'products' | 'equipment';
  imageUrl: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  location: string;
  verified?: boolean;
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  summary: string;
  readTime: string;
  date: string;
  imageUrl: string;
}

export interface OrderFormData {
  customerName: string;
  phone: string;
  email: string;
  address: string;
  medicineRequired: string;
  hasPrescription: boolean;
  preferredTime: string;
  notes: string;
}
