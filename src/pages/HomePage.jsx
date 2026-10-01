import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Truck, 
  Users, 
  DollarSign, 
  Headphones, 
  Layers, 
  Boxes, 
  Hammer, 
  TrendingUp, 
  Compass, 
  Building, 
  Award, 
  PhoneCall, 
  ArrowUpRight,
  HardHat,
  Package,
  Wrench,
  Cpu,
  ChevronRight,
  FileCheck
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  TRUST_POINTS, 
  CORE_SERVICES, 
  WHY_CHOOSE_POINTS, 
  INDUSTRIES_SERVED, 
  MANPOWER_CATEGORIES, 
  MATERIAL_PRODUCTS, 
  WORK_PROCESS 
} from '../data/companyData';

export default function HomePage({ navigate, onOpenQuote }) {
  const [activeServiceHover, setActiveServiceHover] = useState(0);

  const trustIcons = {
    quality: <ShieldCheck className="w-5 h-5 text-[#D6A63A]" />,
    supply: <Boxes className="w-5 h-5 text-[#D6A63A]" />,
    delivery: <Clock className="w-5 h-5 text-[#D6A63A]" />,
    team: <Users className="w-5 h-5 text-[#D6A63A]" />,
    cost: <DollarSign className="w-5 h-5 text-[#D6A63A]" />,
    support: <Headphones className="w-5 h-5 text-[#D6A63A]" />
  };

  return (
    <div className="bg-[#FAF9F5] text-[#101C2C] overflow-hidden">
      
      {/* 05. ASYMMETRICAL EDITORIAL HERO SECTION */}
      <section className="relative bg-[#071D36] text-white pt-10 pb-16 lg:py-24 border-b border-[#C99832]/30 overflow-hidden">
        {/* Subtle architectural grid watermark */}
        <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none"></div>

        {/* Diagonal architectural accent lines */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
          <svg className="w-full h-full" viewBox="0 0 600 600" fill="none">
            <line x1="100" y1="0" x2="600" y2="500" stroke="#D6A63A" strokeWidth="1.5" />
            <line x1="200" y1="0" x2="700" y2="500" stroke="#D6A63A" strokeWidth="1" />
            <line x1="0" y1="200" x2="500" y2="700" stroke="#D6A63A" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Asymmetrical Typography */}
            <div className="lg:col-span-7 space-y-6 z-10">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0B2545] border-l-2 border-[#D6A63A] text-[11px] md:text-xs font-bold tracking-widest text-[#E2B84A] uppercase">
                <span>{COMPANY_INFO.eyebrow}</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
                ONE PARTNER.<br />
                <span className="text-[#E2B84A] relative inline-block">
                  MULTIPLE SOLUTIONS.
                  <span className="absolute bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#D6A63A] to-transparent"></span>
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed font-normal">
                Reliable supply, strategic procurement, manpower, logistics and project support for businesses, construction projects and organizations across Bangladesh.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => navigate('/services')}
                  className="px-8 py-4 bg-gradient-to-r from-[#D6A63A] to-[#C99832] text-[#071D36] text-xs font-extrabold uppercase tracking-widest shadow-xl hover:from-[#E2B84A] hover:to-[#D6A63A] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 text-center"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenQuote}
                  className="px-8 py-4 bg-transparent border-2 border-[#E2B84A]/70 text-white text-xs font-extrabold uppercase tracking-widest hover:bg-[#102B46] hover:border-[#E2B84A] transition-all flex items-center justify-center gap-3 text-center"
                >
                  <span>Request a Quote</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E2B84A]" />
                </button>
              </div>

              {/* Foundation Trust Tag */}
              <div className="pt-4 flex items-center gap-4 text-xs text-white/60">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E2B84A]" />
                  <span>Public & Private Sector Ready</span>
                </div>
                <span className="text-white/20">|</span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E2B84A]" />
                  <span>Direct-from-Quarry Sourcing</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Visual Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full max-w-lg mx-auto">
                
                {/* Gold geometric backplate */}
                <div className="absolute -top-3 -right-3 w-full h-full border-2 border-[#D6A63A]/40 z-0 hidden sm:block"></div>
                
                {/* Main Large Visual Card */}
                <div className="relative z-10 bg-[#0B2545] p-2 shadow-2xl border border-white/10">
                  <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                    <img 
                      src="/images/chittagong-port-terminal.jpg" 
                      alt="Chittagong Port logistics and cargo terminal operations in Bangladesh"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071D36] via-[#071D36]/25 to-transparent"></div>
                    
                    {/* Architectural single clean stamp */}
                    <div className="absolute top-4 left-4 bg-[#071D36]/95 backdrop-blur-md border-l-2 border-[#D6A63A] px-3.5 py-1.5 text-[10px] uppercase font-bold tracking-wider text-[#E2B84A] shadow-md">
                      Project Execution & Logistics Desk
                    </div>

                    {/* Integrated Legend Bar at Bottom - Clean and Unobstructed */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#071D36] via-[#071D36]/90 to-transparent p-4 sm:p-5 pt-10">
                      <div className="flex items-center justify-between border-t border-[#D6A63A]/30 pt-2.5">
                        <div>
                          <div className="text-[10px] uppercase tracking-widest text-[#E2B84A] font-bold">
                            Unified Corporate Operations
                          </div>
                          <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                            Materials • Manpower • Machinery • Haulage
                          </div>
                        </div>
                        <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#0B2545] border border-[#D6A63A]/40 text-[10px] uppercase font-bold text-[#E2B84A] shrink-0">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Quality Assured</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-Card positioned cleanly UNDER the image without overlapping */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs relative z-10">
                  <div className="bg-[#0B2545] border border-[#D6A63A]/30 p-2.5 flex items-center gap-2.5 text-white shadow-md">
                    <Truck className="w-4 h-4 text-[#E2B84A] shrink-0" />
                    <div>
                      <div className="text-[9px] uppercase tracking-wider text-white/60 font-semibold">Logistics Fleet</div>
                      <div className="text-xs font-bold leading-tight text-white">64 Districts Active</div>
                    </div>
                  </div>
                  <div className="bg-[#0B2545] border border-white/10 p-2.5 flex items-center gap-2.5 text-white shadow-md">
                    <HardHat className="w-4 h-4 text-[#E2B84A] shrink-0" />
                    <div>
                      <div className="text-[9px] uppercase tracking-wider text-white/60 font-semibold">Field Workforce</div>
                      <div className="text-xs font-bold leading-tight text-white">Trained & Vetted</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 06. TRUST STRIP */}
      <section className="bg-[#0B2545] border-b border-[#C99832]/30 py-6 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {TRUST_POINTS.map((item, index) => (
              <div 
                key={item.id} 
                className={`pt-3 md:pt-0 ${index > 0 ? 'md:pl-4 lg:pl-6' : ''} flex items-center gap-3`}
              >
                <div className="p-2 bg-[#071D36] border border-[#D6A63A]/30 shrink-0">
                  {trustIcons[item.id]}
                </div>
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-wider text-white">
                    {item.title}
                  </div>
                  <div className="text-[10px] text-white/60 line-clamp-1">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. ABOUT INTRODUCTION */}
      <section className="py-20 lg:py-28 relative bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#D6A63A]"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C99832]">
                  Corporate Introduction
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071D36] leading-tight">
                BUILDING STRONGER PROJECTS.<br />
                <span className="text-[#A87D25]">BUILDING STRONGER PARTNERSHIPS.</span>
              </h2>

              <p className="text-base text-gray-700 leading-relaxed">
                BIZZ FLEET Corporation began its journey in Bangladesh in 2026 with a focus on providing dependable supply, procurement, manpower, logistics and project support solutions.
              </p>

              <p className="text-base text-gray-700 leading-relaxed">
                The company connects clients with reliable products, suppliers, workforce and operational resources to simplify project execution and business requirements.
              </p>

              {/* Realistic Statistic-Style Elements */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-gray-300">
                <div className="p-3 bg-white border-l-2 border-[#D6A63A] shadow-sm">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#071D36] font-mono">
                    2026
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-600 mt-1">
                    Founded in Bangladesh
                  </div>
                </div>

                <div className="p-3 bg-white border-l-2 border-[#D6A63A] shadow-sm">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#071D36] font-mono">
                    Multiple
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-600 mt-1">
                    Solution Areas
                  </div>
                </div>

                <div className="p-3 bg-white border-l-2 border-[#D6A63A] shadow-sm">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#071D36] font-mono">
                    End-to-End
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-600 mt-1">
                    Project Support
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/about-us')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#071D36] hover:text-[#C99832] transition-colors group"
                >
                  <span>Learn more about our corporate vision & values</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right: Architectural Photographic Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative border-4 border-[#071D36] p-2 bg-white shadow-xl">
                <img 
                  src="/images/under_construction_dhaka_metro_rail_besides_tsc__du.jpg" 
                  alt="Dhaka Metro Rail infrastructure project execution in Bangladesh"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                
                {/* Thin gold bottom accent */}
                <div className="h-1.5 w-full bg-[#D6A63A] mt-2"></div>
              </div>

              {/* Small floating callout */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#071D36] text-white p-4 max-w-xs shadow-2xl border-l-4 border-[#D6A63A]">
                <div className="text-[10px] uppercase font-bold text-[#E2B84A] tracking-widest">
                  Strategic Scope
                </div>
                <div className="text-xs font-semibold mt-1">
                  Connecting primary quarries, production mills and project sites seamlessly.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 08. CORE SERVICES (WHAT WE DO) */}
      <section className="py-20 lg:py-28 bg-[#F7F5EF] border-y border-gray-300 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#D6A63A]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C99832]">
                Our Core Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071D36] tracking-tight">
              WHAT WE DO.
            </h2>
            <p className="text-base text-gray-700 mt-2 font-medium">
              From sourcing to delivery, we help simplify the supply chain.
            </p>
          </div>

          {/* 8 Service Modules: 2-Column Editorial Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CORE_SERVICES.map((service, index) => (
              <div
                key={service.id}
                onMouseEnter={() => setActiveServiceHover(index)}
                onClick={() => navigate(`/services/${service.id}`)}
                className="group relative bg-white border border-gray-300 hover:border-[#D6A63A] p-6 lg:p-8 transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Thin gold line that expands on hover */}
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[3px] bg-gradient-to-r from-[#D6A63A] to-[#C99832] transition-all duration-500"></div>

                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <span className="font-mono text-2xl font-bold text-[#C99832] group-hover:text-[#071D36] transition-colors">
                      {service.num}
                    </span>
                    <div className="w-9 h-9 rounded-none bg-[#FAF9F5] group-hover:bg-[#071D36] group-hover:text-[#E2B84A] text-[#071D36] flex items-center justify-center transition-colors">
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#071D36] mt-4 group-hover:text-[#A87D25] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#071D36]/80 group-hover:text-[#071D36]">
                    View Capabilities & Specs
                  </span>
                  <span className="text-[11px] text-[#C99832] font-semibold">
                    Explore →
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#071D36] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0B2545] transition-colors"
            >
              <span>Explore All 8 Service Frameworks</span>
              <ArrowRight className="w-4 h-4 text-[#E2B84A]" />
            </button>
          </div>

        </div>
      </section>

      {/* 09. "NEED IT? WE SOURCE IT." - MAJOR VISUAL SECTION */}
      <section className="py-20 lg:py-28 bg-[#071D36] text-white relative overflow-hidden border-b border-[#C99832]/30">
        <div className="absolute inset-0 bg-grid-blueprint opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block px-3 py-1 bg-[#0B2545] border border-[#D6A63A]/40 text-xs font-bold uppercase tracking-widest text-[#E2B84A]">
                Strategic Sourcing Engine
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
                NEED IT?<br />
                <span className="text-[#E2B84A]">WE SOURCE IT.</span>
              </h2>

              <p className="text-lg font-bold text-[#E2B84A] uppercase tracking-wide">
                You require. We procure. You succeed.
              </p>

              <p className="text-base text-white/80 leading-relaxed">
                From construction materials and equipment to manpower, logistics and general supplies, BIZZ FLEET provides coordinated procurement solutions designed around project requirements.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#D6A63A] text-[#071D36] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-white/90">
                    Direct access to Sylhet stone quarries, cement factories & authorized distributors.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#D6A63A] text-[#071D36] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-white/90">
                    Transparent quotation process aligned with project BOQ specifications.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#D6A63A] text-[#071D36] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-white/90">
                    Comprehensive logistics coordination to prevent job-site downtime.
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={onOpenQuote}
                  className="px-8 py-3.5 bg-gradient-to-r from-[#D6A63A] to-[#C99832] text-[#071D36] font-bold text-xs uppercase tracking-wider hover:from-[#E2B84A] hover:to-[#D6A63A] transition-all shadow-lg"
                >
                  Send Sourcing Requirement
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="px-6 py-3.5 border border-white/30 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#E2B84A]" />
                  Call Direct: {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            {/* Right: Layered Collage with Diagonal Divisions */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-3 p-3 bg-[#0B2545]/80 border-2 border-[#D6A63A]/40 shadow-2xl">
                
                {/* Collage Tile 1: Stone & Aggregates */}
                <div className="relative h-44 sm:h-52 overflow-hidden group">
                  <img 
                    src="/images/jaflong-stone-quarry.jpg" 
                    alt="Jaflong Sylhet stone quarry and aggregate extraction"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071D36] via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-2 left-2 text-[11px] font-bold uppercase tracking-wider text-[#E2B84A]">
                    Stone & Aggregates
                  </div>
                </div>

                {/* Collage Tile 2: Heavy Machinery */}
                <div className="relative h-44 sm:h-52 overflow-hidden group">
                  <img 
                    src="/images/chittagong-flyover-construction.jpg" 
                    alt="Heavy construction machinery and crane operation in Bangladesh"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071D36] via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-2 left-2 text-[11px] font-bold uppercase tracking-wider text-[#E2B84A]">
                    Equipment Sourcing
                  </div>
                </div>

                {/* Collage Tile 3: Logistics Trucks */}
                <div className="relative h-44 sm:h-52 overflow-hidden group">
                  <img 
                    src="/images/bangladesh-tata-truck.jpg" 
                    alt="Bangladeshi Tata heavy transport truck dispatch"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071D36] via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-2 left-2 text-[11px] font-bold uppercase tracking-wider text-[#E2B84A]">
                    Coordinated Delivery
                  </div>
                </div>

                {/* Collage Tile 4: Professional Workforce */}
                <div className="relative h-44 sm:h-52 overflow-hidden group">
                  <img 
                    src="/images/dhaka-highrise-workers.jpg" 
                    alt="Bangladeshi manpower and site workforce"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071D36] via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-2 left-2 text-[11px] font-bold uppercase tracking-wider text-[#E2B84A]">
                    Site Workforce
                  </div>
                </div>

              </div>

              {/* Diagonal Badge */}
              <div className="absolute -bottom-5 right-6 bg-[#D6A63A] text-[#071D36] font-extrabold px-5 py-2 text-xs uppercase tracking-widest shadow-xl">
                All 64 Districts Active
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. WHY BIZZ FLEET */}
      <section className="py-20 lg:py-28 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#D6A63A]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C99832]">
                Key Advantages
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071D36] tracking-tight">
              WHY CHOOSE BIZZ FLEET?
            </h2>
            <p className="text-base text-gray-700 mt-2 font-medium">
              A dependable partner for supply, procurement and project support.
            </p>
          </div>

          {/* Editorial 2-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {WHY_CHOOSE_POINTS.map((point, index) => (
              <div 
                key={point.title}
                className="flex items-start gap-4 p-6 bg-white border-l-4 border-[#071D36] hover:border-[#D6A63A] shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-8 h-8 bg-[#FAF9F5] border border-gray-300 group-hover:border-[#D6A63A] text-[#071D36] font-bold font-mono flex items-center justify-center shrink-0 text-xs">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-[#071D36] group-hover:text-[#A87D25] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. INDUSTRIES WE SERVE */}
      <section className="py-20 lg:py-28 bg-[#0B2545] text-white border-y border-[#C99832]/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#D6A63A]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E2B84A]">
                Target Sectors
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              SOLUTIONS FOR DIFFERENT PROJECTS.
            </h2>
            <p className="text-base text-white/70 mt-2">
              Engineered supplies and services tailored to specific project complexities across Bangladesh.
            </p>
          </div>

          {/* 8 Industry Panels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES_SERVED.map((ind) => (
              <div
                key={ind.id}
                onClick={() => navigate('/industries')}
                className="group relative h-72 overflow-hidden bg-[#071D36] border border-white/10 hover:border-[#D6A63A] cursor-pointer shadow-lg"
              >
                <img 
                  src={ind.image} 
                  alt={ind.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-40"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071D36] via-[#071D36]/40 to-transparent"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <div className="w-8 h-8 rounded-none bg-[#071D36]/80 text-[#E2B84A] border border-[#E2B84A]/40 flex items-center justify-center transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#E2B84A] transition-colors leading-tight">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-white/75 mt-2 line-clamp-2 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12. MANPOWER OUTSOURCING SECTION */}
      <section className="py-20 lg:py-28 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative border-4 border-[#071D36] p-2 bg-white shadow-2xl">
                <img 
                  src="/images/dhaka-highrise-workers.jpg" 
                  alt="Bangladeshi skilled and site manpower workforce"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#071D36]/90 p-3 text-white border-l-2 border-[#D6A63A]">
                  <div className="text-[10px] uppercase font-bold text-[#E2B84A] tracking-wider">
                    Workforce Compliance
                  </div>
                  <div className="text-xs text-white/90 mt-0.5">
                    Health, safety and operational vetting before field deployment.
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#D6A63A]"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C99832]">
                  Dedicated Workforce Solutions
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071D36] tracking-tight">
                THE RIGHT PEOPLE.<br />
                <span className="text-[#A87D25]">THE RIGHT TIME.</span>
              </h2>

              <p className="text-base text-gray-700 leading-relaxed">
                Reliable manpower outsourcing solutions designed around project and business requirements.
              </p>

              {/* 8 Categories Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {MANPOWER_CATEGORIES.map((cat) => (
                  <div key={cat.title} className="p-3 bg-white border border-gray-200 hover:border-[#D6A63A] transition-colors">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#071D36]">
                      {cat.title}
                    </div>
                    <div className="text-[11px] text-gray-600 mt-1">
                      {cat.desc}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="px-7 py-3.5 bg-[#071D36] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0B2545] transition-colors flex items-center gap-2"
                >
                  <span>Discuss Workforce Requirements</span>
                  <ArrowRight className="w-4 h-4 text-[#E2B84A]" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 13. CONSTRUCTION MATERIALS */}
      <section className="py-20 lg:py-28 bg-[#F7F5EF] border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#D6A63A]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C99832]">
                Heavy Structural Sourcing
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071D36] tracking-tight">
              QUALITY MATERIALS.<br />
              <span className="text-[#A87D25]">STRONGER PROJECTS.</span>
            </h2>
            <p className="text-base text-gray-700 mt-2">
              Certified aggregates, grading-tested sand, cement and bricks directly delivered to job sites.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MATERIAL_PRODUCTS.map((prod) => (
              <div 
                key={prod.name}
                className="bg-white border border-gray-300 hover:border-[#D6A63A] transition-all group overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={prod.image} 
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#071D36] text-[#E2B84A] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                      {prod.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-[#071D36] group-hover:text-[#A87D25] transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                      {prod.specs}
                    </p>
                    <div className="mt-3 text-[11px] text-gray-500 font-semibold">
                      Source: <span className="text-[#071D36]">{prod.source}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#FAF9F5] border-t border-gray-200 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#071D36] uppercase tracking-wider">
                    Lab Test Guaranteed
                  </span>
                  <button 
                    onClick={onOpenQuote}
                    className="text-xs font-bold text-[#C99832] hover:text-[#071D36] transition-colors"
                  >
                    Request Rate →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Material Quality Assurance Pillars */}
          <div className="mt-12 p-6 bg-white border border-gray-300 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#071D36]">Premium Quality</div>
              <div className="text-[11px] text-gray-500 mt-1">Laboratory standard tested</div>
            </div>
            <div className="p-3 border-l border-gray-200">
              <div className="text-xs font-bold uppercase tracking-wider text-[#071D36]">Consistent Supply</div>
              <div className="text-[11px] text-gray-500 mt-1">Multi-quarry allocation</div>
            </div>
            <div className="p-3 border-l border-gray-200">
              <div className="text-xs font-bold uppercase tracking-wider text-[#071D36]">Timely Delivery</div>
              <div className="text-[11px] text-gray-500 mt-1">24/7 site dispatch</div>
            </div>
            <div className="p-3 border-l border-gray-200">
              <div className="text-xs font-bold uppercase tracking-wider text-[#071D36]">Trusted Partner</div>
              <div className="text-[11px] text-gray-500 mt-1">Official invoice & challan</div>
            </div>
          </div>

        </div>
      </section>

      {/* 14. LOGISTICS SECTION */}
      <section className="py-20 lg:py-28 bg-[#071D36] text-white border-y border-[#C99832]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block px-3 py-1 bg-[#0B2545] border border-[#D6A63A]/40 text-xs font-bold uppercase tracking-widest text-[#E2B84A]">
                Fleet & Movement
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                FROM SOURCE<br />
                <span className="text-[#E2B84A]">TO DESTINATION.</span>
              </h2>

              <p className="text-base text-white/80 leading-relaxed">
                Coordinated logistics and delivery support for project materials, equipment and supplies.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Transportation Coordination across highway corridors',
                  'Delivery Planning to synchronize with site concrete pours',
                  'Project Logistics & river barge unloading coordination',
                  'Material Movement under urban night-delivery permits',
                  'Site Delivery Support with experienced spotters & operators'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#D6A63A]"></div>
                    <span className="text-sm text-white/90">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-8 py-3.5 bg-gradient-to-r from-[#D6A63A] to-[#C99832] text-[#071D36] font-bold text-xs uppercase tracking-wider hover:from-[#E2B84A] hover:to-[#D6A63A] transition-all shadow-lg flex items-center gap-2"
                >
                  <span>Talk to Our Logistics Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual: Truck Image with Gold Accents */}
            <div className="lg:col-span-6 relative">
              <div className="relative border-2 border-[#D6A63A] p-2 bg-[#0B2545] shadow-2xl">
                <img 
                  src="/images/bangladesh-tata-truck.jpg" 
                  alt="Bangladeshi Tata heavy transport logistics truck"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                
                {/* Thin gold decorative line overlay */}
                <div className="absolute top-6 left-6 right-6 border border-[#E2B84A]/30 h-12 pointer-events-none"></div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#071D36]/90 p-4 border-l-2 border-[#D6A63A]">
                  <div className="text-[10px] uppercase font-bold text-[#E2B84A] tracking-widest">
                    Coverage Capability
                  </div>
                  <div className="text-xs text-white/90 mt-0.5">
                    Port to Site • Quarry to Plant • River Ghat Transfers
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 16. PROCUREMENT PROCESS (HOW WE WORK) */}
      <section className="py-20 lg:py-28 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#D6A63A]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C99832]">
                Operational Workflow
              </span>
              <span className="w-6 h-[2px] bg-[#D6A63A]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071D36] tracking-tight">
              HOW WE WORK.
            </h2>
            <p className="text-base text-gray-700 mt-2">
              A transparent, 5-stage procurement and fulfillment methodology engineered for reliability.
            </p>
          </div>

          {/* 5-Step Process Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {WORK_PROCESS.map((step, idx) => (
              <div 
                key={step.num}
                className="relative bg-white border-t-4 border-[#071D36] hover:border-[#D6A63A] p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-extrabold text-[#C99832]">
                      {step.num}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#071D36]"></span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#071D36] mt-4">
                    {step.title}
                  </h3>

                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Stage 0{idx + 1}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 p-8 bg-[#0B2545] text-white border border-[#C99832]/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold">Have a Project Sourcing In Mind?</h4>
              <p className="text-xs text-white/70 mt-1">Our engineering and procurement desk can assess your BOQ today.</p>
            </div>
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 bg-[#D6A63A] text-[#071D36] font-bold text-xs uppercase tracking-wider hover:bg-[#E2B84A] transition-colors shrink-0"
            >
              Get a Fast Estimate
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
