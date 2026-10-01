import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  CheckCircle2, 
  FileCheck, 
  ArrowRight,
  PhoneCall
} from 'lucide-react';
import { RESOURCES_DATA, COMPANY_INFO } from '../data/companyData';

export default function ResourcesPage({ navigate, onOpenQuote }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-[#FAF9F5] text-[#101C2C]">
      
      {/* Editorial Header */}
      <section className="bg-[#071D36] text-white py-16 lg:py-20 border-b border-[#C99832]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0B2545] border-l-2 border-[#D6A63A] text-xs font-bold uppercase tracking-widest text-[#E2B84A]">
              Technical Standards & Knowledge Desk
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              SPECIFICATIONS, GUIDELINES & FAQS.
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
              Reference documentation on construction aggregate grading, fineness modulus, cement standards, and procurement practices in Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* Material Specifications & Technical Data Sheets */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#D6A63A]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C99832]">
                Engineering Benchmarks
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#071D36]">
              MATERIAL SPECIFICATIONS & STANDARDS
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Verified criteria aligning with Bangladesh National Building Code (BNBC) and Roads & Highways Department (RHD) guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESOURCES_DATA.specifications.map((spec, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 hover:border-[#D6A63A] p-6 shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#071D36]">
                      <FileCheck className="w-4 h-4 text-[#C99832]" />
                      {spec.format}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-gray-500 uppercase">
                      {spec.size}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#071D36] mt-4">
                    {spec.title}
                  </h3>

                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    {spec.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] text-gray-500 font-medium">
                    Certified Lab Referenced
                  </span>
                  <button
                    onClick={onOpenQuote}
                    className="text-xs font-bold text-[#071D36] hover:text-[#C99832] flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>Request Test Sheet</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Procurement Guidelines for Bangladesh Projects */}
      <section className="py-20 bg-[#F7F5EF] border-y border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#D6A63A]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C99832]">
                Practical Field Guide
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#071D36]">
              SOURCING CHECKLIST FOR SITE ENGINEERS & BUYERS
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Key operational parameters to safeguard against weight shrinkage, poor gradation, and demurrage penalties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 border-t-4 border-[#071D36] shadow-sm">
              <div className="text-xs font-mono font-bold text-[#C99832] mb-1">CHECK 01</div>
              <h3 className="text-base font-bold text-[#071D36]">Sand Fineness Modulus (FM)</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Ensure structural concrete sand maintains FM 2.50 to 2.80 with less than 3% silt & clay content. Non-structural masonry mortar can use FM 1.50 to 2.00.
              </p>
            </div>

            <div className="bg-white p-6 border-t-4 border-[#D6A63A] shadow-sm">
              <div className="text-xs font-mono font-bold text-[#C99832] mb-1">CHECK 02</div>
              <h3 className="text-base font-bold text-[#071D36]">Stone Aggregate Flakiness</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Avoid high flakiness and elongation indices in 3/4 inch chips. Cubical crushed boulder chips produce superior compressive workability with lower cement paste demand.
              </p>
            </div>

            <div className="bg-white p-6 border-t-4 border-[#071D36] shadow-sm">
              <div className="text-xs font-mono font-bold text-[#C99832] mb-1">CHECK 03</div>
              <h3 className="text-base font-bold text-[#071D36]">Ghat & Weighbridge Verification</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Always verify volumetric measurement (CFT) against computerized weighbridge slips and water drainage allowances during river-dredged transport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#D6A63A]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C99832]">
                Frequently Asked Questions
              </span>
              <span className="w-6 h-[2px] bg-[#D6A63A]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071D36]">
              COMMON QUESTIONS & ANSWERS.
            </h2>
          </div>

          <div className="space-y-4">
            {RESOURCES_DATA.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-gray-300 transition-all overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-[#FAF9F5] transition-colors"
                  >
                    <span className="text-sm font-bold text-[#071D36]">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#C99832] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-gray-700 leading-relaxed border-t border-gray-100 bg-[#FAF9F5]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Need help banner */}
          <div className="mt-12 text-center p-6 bg-white border border-gray-300">
            <p className="text-xs text-gray-600">
              Have a technical requirement not listed here?
            </p>
            <div className="mt-3 flex items-center justify-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-2.5 bg-[#071D36] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0B2545] transition-colors"
              >
                Contact Technical Desk
              </button>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-xs font-bold text-[#071D36] hover:text-[#C99832] flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#C99832]" />
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
