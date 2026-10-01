import React from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Globe, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES } from '../data/companyData';

export default function Footer({ navigate, onOpenQuote }) {
  const handleNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071D36] text-white border-t-2 border-[#C99832]/30 relative overflow-hidden">
      {/* Background blueprint grid watermark */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-30 pointer-events-none"></div>

      {/* Top Banner Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#0B2545] via-[#D6A63A] to-[#071D36]"></div>

      {/* Callout Pre-Footer */}
      <div className="relative border-b border-white/10 bg-[#0B2545]/70 backdrop-blur-sm py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#E2B84A] font-bold mb-1.5">
              Ready to Simplify Your Project Sourcing?
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              One Partner for Procurement, Logistics & Materials in Bangladesh.
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 bg-gradient-to-r from-[#D6A63A] to-[#C99832] text-[#071D36] font-bold text-xs uppercase tracking-wider shadow-lg hover:from-[#E2B84A] hover:to-[#D6A63A] transition-all transform hover:-translate-y-0.5"
            >
              Request a Formal Quote
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-6 py-3.5 border border-[#E2B84A]/60 text-white font-bold text-xs uppercase tracking-wider hover:bg-[#102B46] transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#E2B84A]" />
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center">
              <button 
                onClick={() => handleNav('/')}
                className="text-left focus:outline-none"
                aria-label="BIZZ FLEET Corporation Home"
              >
                <img 
                  src="/images/bizz-fleet-logo-light.png" 
                  alt="BIZZ FLEET Corporation" 
                  className="h-11 sm:h-12 w-auto object-contain hover:brightness-110 transition-all duration-200"
                />
              </button>
            </div>

            <div className="text-sm font-semibold tracking-wider uppercase text-[#E2B84A]">
              {COMPANY_INFO.tagline}
            </div>

            <p className="text-white/70 text-sm leading-relaxed pr-4">
              BIZZ FLEET Corporation began its journey in Bangladesh in 2026. We connect clients with reliable products, suppliers, workforce and operational logistics to simplify project execution across Bangladesh.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-[#102B46] border border-white/10 flex items-center justify-center text-white/80 hover:text-[#E2B84A] hover:border-[#E2B84A] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-[#102B46] border border-white/10 flex items-center justify-center text-white/80 hover:text-[#E2B84A] hover:border-[#E2B84A] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href={`https://${COMPANY_INFO.website}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-[#102B46] border border-white/10 flex items-center justify-center text-white/80 hover:text-[#E2B84A] hover:border-[#E2B84A] transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E2B84A] border-b border-white/10 pb-2">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('/')}
                  className="text-white/75 hover:text-[#E2B84A] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#E2B84A] opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/about-us')}
                  className="text-white/75 hover:text-[#E2B84A] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#E2B84A] opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/services')}
                  className="text-white/75 hover:text-[#E2B84A] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#E2B84A] opacity-0 group-hover:opacity-100 transition-opacity" />
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/industries')}
                  className="text-white/75 hover:text-[#E2B84A] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#E2B84A] opacity-0 group-hover:opacity-100 transition-opacity" />
                  Industries
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/projects')}
                  className="text-white/75 hover:text-[#E2B84A] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#E2B84A] opacity-0 group-hover:opacity-100 transition-opacity" />
                  Projects & Capabilities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/resources')}
                  className="text-white/75 hover:text-[#E2B84A] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#E2B84A] opacity-0 group-hover:opacity-100 transition-opacity" />
                  Resources & Specs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/contact')}
                  className="text-white/75 hover:text-[#E2B84A] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#E2B84A] opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E2B84A] border-b border-white/10 pb-2">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('/services/construction-materials')}
                  className="text-white/75 hover:text-[#E2B84A] transition-colors text-left"
                >
                  Construction Materials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/services/strategic-procurement')}
                  className="text-white/75 hover:text-[#E2B84A] transition-colors text-left"
                >
                  Strategic Procurement
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/services/manpower-outsourcing')}
                  className="text-white/75 hover:text-[#E2B84A] transition-colors text-left"
                >
                  Manpower Outsourcing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/services/logistics-delivery')}
                  className="text-white/75 hover:text-[#E2B84A] transition-colors text-left"
                >
                  Logistics & Delivery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/services/equipment-machinery')}
                  className="text-white/75 hover:text-[#E2B84A] transition-colors text-left"
                >
                  Equipment & Machinery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/services/consultancy')}
                  className="text-white/75 hover:text-[#E2B84A] transition-colors text-left"
                >
                  Consultancy & Project Support
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/services/contracting')}
                  className="text-white/75 hover:text-[#E2B84A] transition-colors text-left"
                >
                  Contracting & Project Services
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E2B84A] border-b border-white/10 pb-2">
              Contact Desk
            </h4>
            <div className="space-y-3.5 text-sm">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-white/50 block">Phone Inquiries:</span>
                <a 
                  href={`tel:${COMPANY_INFO.phone}`} 
                  className="text-[#E2B84A] font-bold text-base hover:underline flex items-center gap-1.5 mt-0.5"
                >
                  <PhoneCall className="w-4 h-4" />
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-white/50 block">General Contact:</span>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="text-white/90 hover:text-[#E2B84A] flex items-center gap-1.5 mt-0.5"
                >
                  <Mail className="w-4 h-4 text-[#E2B84A]" />
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-white/50 block">Corporate Web:</span>
                <a 
                  href={`https://${COMPANY_INFO.website}`} 
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/90 hover:text-[#E2B84A] flex items-center gap-1.5 mt-0.5"
                >
                  <Globe className="w-4 h-4 text-[#E2B84A]" />
                  {COMPANY_INFO.website}
                </a>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-white/50 block">Headquarters:</span>
                <div className="text-white/80 flex items-start gap-1.5 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#E2B84A] shrink-0 mt-0.5" />
                  <span>Dhaka, Bangladesh<br /><span className="text-xs text-white/50">(Serving all 64 districts)</span></span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © 2026 <span className="text-white font-medium">BIZZ FLEET Corporation</span>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Procurement & Logistics Solutions</span>
            <span>•</span>
            <span>Established 2026 in Bangladesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
