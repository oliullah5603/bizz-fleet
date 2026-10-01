import React from 'react';
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  HardHat, 
  ArrowUpRight,
  PhoneCall
} from 'lucide-react';
import { INDUSTRIES_SERVED, COMPANY_INFO } from '../data/companyData';

export default function IndustriesPage({ navigate, onOpenQuote }) {
  const industryDeepDives = [
    {
      id: "construction-infra",
      name: "Construction & Infrastructure",
      headline: "High-tonnage supply lines for national infrastructure projects.",
      desc: "From mega-projects and elevated corridors to heavy civil foundations, BIZZ FLEET provides uninterrupted stone ballast, coarse grading sand (Sylhet FM 2.5+), structural steel rebar, and certified heavy equipment mobilization.",
      requirements: ["Stone chips 3/4\" & 5/8\" with low ACV", "Continuous river barge & dump truck logistics", "Batching plant certified aggregate testing", "Round-the-clock site receiving support"],
      image: "/images/dhaka-elevated-expressway.jpg"
    },
    {
      id: "govt-projects",
      name: "Government Projects & Tenders",
      headline: "Rigorous compliance with Public Procurement Rules (PPR).",
      desc: "Fulfilling supply obligations for government ministries, engineering boards (LGED, RHD, PWD, BWDB), and municipal bodies. We provide complete tender documentation, quarry traceability, laboratory test certificates, and compliant tax invoices.",
      requirements: ["PPR-compliant delivery challans & BOQ fulfillment", "Laboratory verified tests from BUET / LGED labs", "Transparent billing and milestone reconciliation", "Multi-district regional site coordination"],
      image: "/images/jamuna-bridge.jpg"
    },
    {
      id: "roads-highways",
      name: "Road & Highway Projects",
      headline: "Sub-base aggregates and asphalt-grade materials at scale.",
      desc: "Highway expansions, bypasses, and feeder roads require millions of cubic feet of consistent gravel, crushed boulder aggregates, and road sub-base materials. Our logistics desk plans high-frequency tipper truck fleets to prevent paver stoppages.",
      requirements: ["High-durability crushed stone aggregates", "Coarse sand and subgrade filling materials", "Tandem rollers & soil compactor leasing", "Highway night convoy delivery clearance"],
      image: "/images/chittagong-flyover-construction.jpg"
    },
    {
      id: "bridges-flyovers",
      name: "Bridge & Flyover Projects",
      headline: "High-specification aggregates & heavy lifting mobilization.",
      desc: "Bridge piers, flyover girders, and precast segmental spans require stringent aggregate specifications. BIZZ FLEET coordinates prime quality boulder chips, rapid-hardening cement, heavy hydraulic cranes, and certified rigging crews.",
      requirements: ["High-strength concrete grade stone chips", "Hydraulic piling rigs & mobile cranes with certified operators", "Specialized rebar fabricator & welder crews", "Riverbank ghat barge-to-shore unloading"],
      image: "/images/under_construction_dhaka_metro_rail_besides_tsc__du.jpg"
    },
    {
      id: "industrial-plants",
      name: "Industrial & Manufacturing Plants",
      headline: "Heavy floor slabs, warehouse setup and industrial supplies.",
      desc: "Setting up industrial factories, export processing zone (EPZ) facilities, and power utilities requires tailored procurement: from high-strength flooring concrete materials to industrial power generators, PPE supplies, and electrical equipment.",
      requirements: ["Heavy-duty industrial slab concrete aggregates", "Industrial diesel generators (100kVA - 1000kVA)", "Comprehensive site PPE & safety consumable packages", "Factory perimeter civil subcontracting"],
      image: "/images/jaflong-stone-crushing.jpg"
    },
    {
      id: "real-estate",
      name: "Real Estate & Commercial Towers",
      headline: "Predictable material schedules for multi-story buildings.",
      desc: "Urban developers in Dhaka, Chattogram, and regional divisional cities count on BIZZ FLEET for automated machine-made bricks, Portland cement, Sylhet sand, and skilled masons to maintain strict casting deadlines without urban congestion penalties.",
      requirements: ["First-class automated machine-made bricks", "Daily scheduled ready-mix sand & cement delivery", "Urban night delivery routing & spotters", "Temporary site labor teams & scaffolding gear"],
      image: "/images/construction_in_dhaka.jpg"
    },
    {
      id: "corp-private",
      name: "Corporate & Private Projects",
      headline: "Turnkey administrative, facility & maintenance procurement.",
      desc: "We support corporate head offices, logistics hubs, and private institutional expansions with facility maintenance supplies, workspace furniture, site infrastructure, and tailored operational workforce support.",
      requirements: ["Centralized procurement desk for operational items", "Facility maintenance & hardware consumables", "Flexible outsourced maintenance personnel", "Transparent monthly consolidated invoicing"],
      image: "/images/dhaka-highrise-workers.jpg"
    },
    {
      id: "commercial-complexes",
      name: "Commercial & Retail Developments",
      headline: "Fast-track retail, logistics parks & commercial spaces.",
      desc: "Commercial development demands compressed lead times. BIZZ FLEET coordinates rapid-delivery precast components, external paving blocks, parking lot subgrade materials, and specialized civil teams for expeditious handover.",
      requirements: ["Paving blocks, curb stones & civil consumables", "Fast-turnaround site grading & excavation", "Dedicated site logistics coordinator", "Milestone-linked procurement fulfillment"],
      image: "/images/bangladesh-tata-truck.jpg"
    }
  ];

  return (
    <div className="bg-[#FAF9F5] text-[#101C2C]">
      
      {/* Editorial Header */}
      <section className="bg-[#071D36] text-white py-16 lg:py-20 border-b border-[#C99832]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0B2545] border-l-2 border-[#D6A63A] text-xs font-bold uppercase tracking-widest text-[#E2B84A]">
              Specialized Industry Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              ENGINEERED FOR BANGLADESH'S CRITICAL SECTORS.
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
              Tailored supply chains, procurement compliance, and site logistics designed for the unique engineering challenges of each sector.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Cards Deep-Dive List */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 gap-12">
            {industryDeepDives.map((ind, index) => (
              <div 
                key={ind.id}
                className="bg-white border border-gray-300 hover:border-[#D6A63A] p-6 lg:p-10 shadow-sm transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Visual */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative border-4 border-[#071D36] p-1.5 bg-white shadow-md overflow-hidden">
                    <img 
                      src={ind.image} 
                      alt={ind.name}
                      className="w-full h-72 sm:h-80 object-cover"
                    />
                    <div className="h-1.5 w-full bg-[#D6A63A] mt-1.5"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 space-y-4 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#C99832]">0{index + 1}</span>
                    <span className="w-4 h-[1px] bg-gray-300"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Industry Practice</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071D36]">
                    {ind.name}
                  </h2>

                  <p className="text-sm font-semibold text-[#A87D25]">
                    {ind.headline}
                  </p>

                  <p className="text-sm text-gray-700 leading-relaxed">
                    {ind.desc}
                  </p>

                  {/* Requirements & Capabilities */}
                  <div className="pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#071D36] mb-2">
                      Key Supply Capabilities:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {ind.requirements.map((req, rIdx) => (
                        <div key={rIdx} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C99832] shrink-0" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <button
                      onClick={onOpenQuote}
                      className="px-6 py-2.5 bg-[#071D36] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0B2545] transition-colors"
                    >
                      Inquire for this Sector
                    </button>
                    <button
                      onClick={() => navigate('/services')}
                      className="text-xs font-bold uppercase tracking-wider text-[#071D36] hover:text-[#C99832] transition-colors"
                    >
                      Related Services →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
