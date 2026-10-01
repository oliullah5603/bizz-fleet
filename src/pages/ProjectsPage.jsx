import React from 'react';
import { 
  Building2, 
  CheckCircle2, 
  MapPin, 
  Truck, 
  ArrowRight, 
  HardHat, 
  Boxes, 
  PhoneCall,
  ChevronDown 
} from 'lucide-react';
import { PROJECT_CAPABILITIES, COMPANY_INFO } from '../data/companyData';

export default function ProjectsPage({ navigate, onOpenQuote }) {
  const capabilityCategories = [
    "All Categories",
    "Construction Projects",
    "Infrastructure Development",
    "Government Requirements",
    "Corporate Projects",
    "Material Supply",
    "Manpower Deployment",
    "Logistics Support",
    "Procurement Assignments"
  ];

  const [activeCategory, setActiveCategory] = React.useState("All Categories");

  const filteredCapabilities = activeCategory === "All Categories"
    ? PROJECT_CAPABILITIES
    : PROJECT_CAPABILITIES.filter(item => item.category === activeCategory);

  return (
    <div className="bg-[#FAF9F5] text-[#101C2C]">
      
      {/* Editorial Header */}
      <section className="bg-[#071D36] text-white py-16 lg:py-20 border-b border-[#C99832]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0B2545] border-l-2 border-[#D6A63A] text-xs font-bold uppercase tracking-widest text-[#E2B84A]">
              Operational Project Readiness
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              PROJECT CAPABILITIES & SUPPORT FRAMEWORK.
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
              Structured supply readiness, heavy logistics, and specialized workforce mobilization across all key civil, infrastructure, and corporate categories in Bangladesh.
            </p>
          </div>
        </div>
      </section>


      {/* Filter Tabs - 100% Non-Scrollable */}
      <section className="bg-white border-b border-gray-200 sticky top-[72px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          {/* Mobile Dropdown */}
          <div className="md:hidden relative">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full bg-[#FAF9F5] border border-[#071D36] text-[#071D36] text-xs font-bold uppercase tracking-wider px-3 py-2 pr-8 appearance-none cursor-pointer focus:outline-none"
            >
              {capabilityCategories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-[#071D36]">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          {/* Desktop Wrapped Pills (Zero sideways scrollbar) */}
          <div className="hidden md:flex flex-wrap items-center gap-1.5 lg:gap-2">
            {capabilityCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all border ${
                  activeCategory === cat
                    ? 'bg-[#071D36] text-[#E2B84A] border-[#071D36] shadow-sm'
                    : 'text-gray-700 bg-white border-gray-200 hover:text-[#071D36] hover:border-[#071D36]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCapabilities.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 hover:border-[#D6A63A] p-6 lg:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <span className="inline-block px-2.5 py-1 bg-[#FAF9F5] border border-gray-200 text-[10px] font-bold uppercase tracking-wider text-[#071D36]">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#C99832] uppercase">
                      Project Capability
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#071D36] mt-4 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-700 mt-2.5 leading-relaxed">
                    {item.scope}
                  </p>

                  <div className="mt-5 space-y-2 pt-3 border-t border-gray-100 text-xs">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C99832] shrink-0" />
                      <span className="font-semibold text-gray-800">Operational Readiness:</span>
                      <span className="text-gray-600">{item.readiness}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#C99832] shrink-0" />
                      <span className="font-semibold text-gray-800">Geographical Scope:</span>
                      <span className="text-gray-600">{item.districts}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Framework Ready
                  </span>
                  <button
                    onClick={onOpenQuote}
                    className="text-xs font-bold text-[#071D36] hover:text-[#C99832] transition-colors flex items-center gap-1 uppercase tracking-wider"
                  >
                    Mobilize Capability →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sourcing Methodology callout */}
          <div className="mt-16 bg-[#071D36] text-white p-8 lg:p-12 border-l-4 border-[#D6A63A] shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="text-xs font-bold uppercase tracking-widest text-[#E2B84A]">
                  Tailored Project Support Agreement
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  Need a Dedicated Supply & Logistics Framework for Your Upcoming Tender or Site?
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  We formulate custom Service Level Agreements (SLAs) including guaranteed daily CFT volume delivery, dedicated equipment standby, and on-site workforce muster management.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <button
                  onClick={onOpenQuote}
                  className="w-full py-3.5 bg-[#D6A63A] text-[#071D36] font-bold text-xs uppercase tracking-wider hover:bg-[#E2B84A] transition-colors text-center"
                >
                  Request Framework Discussion
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="w-full py-3.5 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors text-center flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#E2B84A]" />
                  Call: {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
