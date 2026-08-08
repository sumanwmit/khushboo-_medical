import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
  ogType?: string;
  jsonLdSchema?: Record<string, any>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl = 'https://khushboo-medical.vercel.app',
  keywords = 'Khushboo Medical Hall, Pharmacy in Jehanabad, Medical store Jehanabad, Genuine medicines Bihar, Fida Hussain Road chemist, Buy medicine online WhatsApp Jehanabad, Surgical items, Insulin cold storage Jehanabad',
  ogType = 'website',
  jsonLdSchema
}) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper to update meta tag
    const updateMetaTag = (nameAttr: string, attrValue: string, contentValue: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);
    
    // Open Graph
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:type', ogType);
    updateMetaTag('property', 'og:url', canonicalUrl);
    updateMetaTag('property', 'og:site_name', 'Khushboo Medical Hall');
    updateMetaTag('property', 'og:locale', 'en_IN');

    // Twitter
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Schema JSON-LD
    const defaultLocalBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "name": "Khushboo Medical Hall",
      "image": "https://images.unsplash.com/photo-1586015555751-63c3d5267b74",
      "@id": "https://khushboo-medical.vercel.app",
      "url": "https://khushboo-medical.vercel.app",
      "telephone": "+918083243380",
      "priceRange": "₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Fida Hussain Rd, 6X8Q+6R6",
        "addressLocality": "Jehanabad",
        "addressRegion": "Bihar",
        "postalCode": "804408",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.21456,
        "longitude": 84.98234
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "22:00"
      },
      "sameAs": [
        "https://wa.me/918083243380"
      ]
    };

    const schemaToInject = jsonLdSchema || defaultLocalBusinessSchema;
    let scriptTag = document.getElementById('json-ld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaToInject);

  }, [title, description, canonicalUrl, keywords, ogType, jsonLdSchema]);

  return null;
};
