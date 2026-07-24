import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-slate-100/70 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700/50">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-300">
        <Link 
          to="/" 
          className="flex items-center hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          title="Back to Home"
        >
          <Home className="w-4 h-4 mr-1 text-emerald-600 dark:text-emerald-400" />
          <span>Home</span>
        </Link>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              {item.path && !isLast ? (
                <Link
                  to={item.path}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-slate-900 dark:text-white" aria-current="page">
                  {item.label}
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
