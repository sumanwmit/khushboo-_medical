import React, { useState, useMemo } from 'react';
import { Search, CheckCircle, AlertTriangle, XCircle, Package, ShoppingBag, Filter, RefreshCw } from 'lucide-react';
import medicineStockData from '../data/medicineStock.json';
import { MedicineItem } from '../types';

interface MedicineStockCheckerProps {
  onOrderClick?: (medicineName: string) => void;
  compact?: boolean;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({ 
  onOrderClick,
  compact = false 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const set = new Set<string>();
    medicineStockData.forEach(item => set.add(item.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredMedicines = useMemo(() => {
    return (medicineStockData as MedicineItem[]).filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.composition.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const getStatusBadge = (status: MedicineItem['status'], quantity: number) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
            <CheckCircle className="w-3.5 h-3.5 mr-1 text-emerald-600 dark:text-emerald-400" />
            In Stock ({quantity} units)
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
            <AlertTriangle className="w-3.5 h-3.5 mr-1 text-amber-600 dark:text-amber-400" />
            Limited ({quantity} left)
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300 border border-rose-300 dark:border-rose-700">
            <XCircle className="w-3.5 h-3.5 mr-1 text-rose-600 dark:text-rose-400" />
            Out of Stock
          </span>
        );
    }
  };

  return (
    <div className={`w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden ${compact ? 'p-5' : 'p-6 sm:p-8'}`}>
      
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Package className="w-3.5 h-3.5" />
            <span>Live Inventory Tool</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Medicine Stock Availability Checker
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Instantly search real-time availability, MRP & dosage info at Khushboo Medical Hall.
          </p>
        </div>

        <div className="text-right hidden md:block">
          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-end gap-1">
            <RefreshCw className="w-3 h-3 text-emerald-500 animate-spin" />
            Inventory database updated daily
          </span>
        </div>
      </div>

      {/* Search & Filter bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        <div className="md:col-span-2 relative">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search medicine name, composition (e.g., Paracetamol, Dolo, Telmisartan)..."
            className="w-full pl-12 pr-10 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition text-sm"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3.5 top-3.5 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Clear
            </button>
          )}
        </div>

        <div className="relative">
          <Filter className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full pl-11 pr-8 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition text-sm appearance-none cursor-pointer"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results grid */}
      {filteredMedicines.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMedicines.map(item => (
            <div
              key={item.id}
              className="group p-5 rounded-2xl bg-gradient-to-b from-slate-50 to-white dark:from-slate-800/70 dark:to-slate-800 border border-slate-200 dark:border-slate-700/80 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 tracking-wider uppercase">
                      {item.brand}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  {getStatusBadge(item.status, item.availableQuantity)}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-3 bg-slate-100 dark:bg-slate-900/50 p-2 rounded-lg font-mono">
                  {item.composition}
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <div>
                    <span className="block text-[10px] text-slate-400 dark:text-slate-500 uppercase">MRP Price</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-emerald-300">₹{item.mrp.toFixed(2)}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 dark:text-slate-500 uppercase">Expiry Date</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">{item.expiry}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  {item.category}
                </span>

                <button
                  onClick={() => onOrderClick ? onOrderClick(item.name) : null}
                  disabled={item.status === 'Out of Stock'}
                  className={`py-1.5 px-3 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                    item.status === 'Out of Stock'
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed dark:bg-slate-800 dark:text-slate-600'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 active:scale-95'
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{item.status === 'Out of Stock' ? 'Unavailable' : 'Order via WhatsApp'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 px-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-dashed border-slate-300 dark:border-slate-700">
          <Package className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">No medicine found matching "{searchTerm}"</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-1 mb-4">
            We might still have this item in our physical store or can arrange it for you within 24 hours.
          </p>
          <button
            onClick={() => onOrderClick ? onOrderClick(searchTerm || 'Custom Medicine Query') : null}
            className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition shadow-md"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Ask Pharmacist on WhatsApp</span>
          </button>
        </div>
      )}
    </div>
  );
};
