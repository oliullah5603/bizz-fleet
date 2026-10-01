import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  PhoneCall, 
  Truck, 
  HardHat, 
  Building2, 
  Layers, 
  Wrench, 
  Boxes, 
  Compass, 
  ArrowUpRight,
  ChevronDown,
  ArrowLeft 
} from 'lucide-react';
import { CORE_SERVICES, COMPANY_INFO } from '../data/companyData';

export default function ServicesPage({ serviceId, navigate, onOpenQuote }) {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (serviceId) {
      // Find matching service
      const found = CORE_SERVICES.find(s => s.id === serviceId || serviceId.includes(s.id));
      if (found) {
        setSelectedService(found);
      } else {
        setSelectedService(null);
      }
    } else {
      setSelectedService(null);
    }
  }, [serviceId]);

  return (
    <div className="bg-[#FAF9F5] text-[#101C2C]">
      
      {/* Editorial Header */}
      <section className="bg-[#071D36] text-white py-16 lg:py-20 border-b border-[#C99832]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0B2545] border-l-2 border-[#D6A63A] text-xs font-bold uppercase tracking-widest text-[#E2B84A]">
              Corporate Service Capabilities
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {selectedService ? selectedService.title : "END-TO-END SUPPLY & PROJECT SOLUTIONS."}
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              {selectedService 
                ? selectedService.tagline 
                : "From strategic procurement and bulk civil materials to skilled manpower, logistics, and turnkey contracting in Bangladesh."}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Service Category Selector - 100% Non-Scrollable */}
      <section className="bg-[#0B2545] border-b border-white/10 sticky top-[72px] z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          
          {/* Mobile & Small Screen: Dropdown Switcher (Zero sideways scrolling) */}
          <div className="lg:hidden flex items-center justify-between gap-2">
            <button
              onClick={() => {
                setSelectedService(null);
                navigate('/services');
              }}
              className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors shrink-0 ${
                !selectedService 
                  ? 'bg-[#D6A63A] text-[#071D36]' 
                  : 'bg-[#071D36] text-white border border-white/20 hover:border-[#D6A63A]'
              }`}
            >
              All Services
            </button>

            <div className="relative flex-1">
              <select
                value={selectedService?.id || ''}
                onChange={(e) => {
                  const val = e.target.value;
                  if (!val) {
                    setSelectedService(null);
                    navigate('/services');
                  } else {
                    const found = CORE_SERVICES.find(s => s.id === val);
                    if (found) {
                      setSelectedService(found);
                      navigate(`/services/${found.id}`);
                    }
                  }
                }}
                className="w-full bg-[#071D36] border border-[#D6A63A] text-white text-xs font-bold uppercase tracking-wider px-3 py-2 pr-8 appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#D6A63A]"
              >
                <option value="">Select Service Division...</option>
                {CORE_SERVICES.map((srv) => (
                  <option key={srv.id} value={srv.id} className="bg-[#071D36] text-white">
                    {srv.num} • {srv.title}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-[#E2B84A]">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Desktop & Large Screen: Multi-Line Wrapped Pill Grid (Never scrolls horizontally, all 8 divisions fully visible) */}
          <div className="hidden lg:flex flex-wrap items-center gap-1.5 xl:gap-2">
            <button
              onClick={() => {
                setSelectedService(null);
                navigate('/services');
              }}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all border ${
                !selectedService 
                  ? 'bg-[#D6A63A] text-[#071D36] border-[#D6A63A] shadow' 
                  : 'text-white/80 border-white/10 hover:text-white hover:bg-white/10 hover:border-white/30'
              }`}
            >
              All Services Directory
            </button>
            {CORE_SERVICES.map((srv) => {
              const isCurrent = selectedService?.id === srv.id;
              return (
                <button
                  key={srv.id}
                  onClick={() => {
                    setSelectedService(srv);
                    navigate(`/services/${srv.id}`);
                  }}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 border ${
                    isCurrent
                      ? 'bg-[#D6A63A] text-[#071D36] border-[#D6A63A] shadow-md font-extrabold'
                      : 'text-white/80 border-white/10 hover:text-white hover:bg-white/10 hover:border-white/30'
                  }`}
                >
                  <span className={`font-mono text-[10px] ${isCurrent ? 'text-[#071D36] font-black' : 'text-[#E2B84A]'}`}>
                    {srv.num}
                  </span>
                  <span>{srv.title}</span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {selectedService ? (
            /* Deep-Dive View for Selected Service */
            <div className="space-y-16">
              
              {/* Top Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Left Description & Scope */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-extrabold font-mono text-[#C99832]">
                      {selectedService.num}
                    </span>
                    <span className="h-6 w-[1px] bg-gray-300"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#071D36]">
                      Specialized Division
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071D36] leading-tight">
                    {selectedService.title}
                  </h2>

                  <p className="text-lg font-semibold text-[#A87D25]">
                    {selectedService.tagline}
                  </p>

                  <p className="text-base text-gray-700 leading-relaxed">
                    {selectedService.fullDesc}
                  </p>

                  {/* Key Capabilities List */}
                  <div className="pt-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#071D36] border-b border-gray-200 pb-2 mb-4">
                      Key Capabilities & Deliverables
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedService.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-3 bg-white border border-gray-200">
                          <CheckCircle2 className="w-4 h-4 text-[#C99832] shrink-0 mt-0.5" />
                          <span className="text-xs font-medium text-gray-800 leading-snug">
                            {cap}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industries Served by this service */}
                  <div className="pt-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#071D36] mb-3">
                      Key Target Industries
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.industries.map((ind, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1.5 bg-[#FAF9F5] border border-[#071D36]/20 text-xs font-semibold text-[#071D36]"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 flex flex-wrap items-center gap-4">
                    <button
                      onClick={onOpenQuote}
                      className="px-8 py-3.5 bg-[#071D36] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0B2545] transition-colors shadow-lg flex items-center gap-2"
                    >
                      <span>Request Quote for {selectedService.title}</span>
                      <ArrowRight className="w-4 h-4 text-[#E2B84A]" />
                    </button>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="px-6 py-3.5 border border-[#C99832] text-[#071D36] text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2"
                    >
                      <PhoneCall className="w-4 h-4 text-[#C99832]" />
                      Direct Desk: {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Right Visual & Highlights */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="relative border-4 border-[#071D36] p-2 bg-white shadow-xl">
                    <img 
                      src={selectedService.image} 
                      alt={selectedService.title}
                      className="w-full h-80 sm:h-96 object-cover"
                    />
                    <div className="h-2 w-full bg-[#D6A63A] mt-2"></div>
                  </div>

                  {/* Service Assurance Box */}
                  <div className="p-6 bg-[#0B2545] text-white border border-[#C99832]/30 space-y-3">
                    <div className="text-xs uppercase font-bold text-[#E2B84A] tracking-wider">
                      BIZZ FLEET Assurance Guarantee
                    </div>
                    <ul className="text-xs text-white/80 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#E2B84A]"></span>
                        Strict testing and lab certificate verification
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#E2B84A]"></span>
                        Transparent VAT/Tax invoice and delivery challan
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#E2B84A]"></span>
                        Direct coordinator assigned to your job site
                      </li>
                    </ul>
                  </div>
                </div>

              </div>

            </div>
          ) : (
            /* Master Overview View */
            <div className="space-y-16">
              
              <div className="max-w-2xl mb-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071D36]">
                  8 COMPREHENSIVE SERVICE FRAMEWORKS
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  Each service module operates with dedicated sourcing partners, technical verification, and logistical transport across Bangladesh.
                </p>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {CORE_SERVICES.map((srv) => (
                  <div 
                    key={srv.id}
                    className="bg-white border border-gray-300 hover:border-[#D6A63A] transition-all p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl group"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                        <span className="font-mono text-2xl font-bold text-[#C99832]">
                          {srv.num}
                        </span>
                        <button
                          onClick={() => {
                            setSelectedService(srv);
                            navigate(`/services/${srv.id}`);
                          }}
                          className="text-xs font-bold text-[#071D36] group-hover:text-[#C99832] flex items-center gap-1 uppercase tracking-wider"
                        >
                          Deep Dive <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="mt-4">
                        <h3 className="text-xl font-bold text-[#071D36] group-hover:text-[#A87D25] transition-colors">
                          {srv.title}
                        </h3>
                        <p className="text-xs font-semibold text-[#A87D25] mt-1">
                          {srv.tagline}
                        </p>
                        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                          {srv.shortDesc}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                          Core Capabilities:
                        </div>
                        <ul className="space-y-1.5">
                          {srv.capabilities.slice(0, 3).map((c, idx) => (
                            <li key={idx} className="text-xs text-gray-700 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-[#D6A63A]"></span>
                              <span className="truncate">{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <button
                        onClick={() => {
                          setSelectedService(srv);
                          navigate(`/services/${srv.id}`);
                        }}
                        className="text-xs font-bold uppercase tracking-wider text-[#071D36] hover:text-[#C99832] transition-colors"
                      >
                        Read Full Specifications →
                      </button>
                      <button
                        onClick={onOpenQuote}
                        className="px-3.5 py-1.5 bg-[#FAF9F5] border border-[#071D36]/20 hover:bg-[#071D36] hover:text-[#E2B84A] text-xs font-bold uppercase tracking-wider text-[#071D36] transition-colors"
                      >
                        Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>
      </section>

    </div>
  );
}
