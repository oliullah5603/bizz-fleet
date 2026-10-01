import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  Users, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Building2,
  PhoneCall
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function AboutPage({ navigate, onOpenQuote }) {
  const values = [
    {
      title: "Integrity",
      desc: "Complete transparency in grading, weighing, commercial pricing, and delivery challans. We honor our commitments without exception."
    },
    {
      title: "Reliability",
      desc: "Unwavering commitment to deliver contracted volumes on time, every time, even during peak market demand or logistical disruptions."
    },
    {
      title: "Quality",
      desc: "Rigid laboratory testing and factory-direct inspection protocols ensuring every batch complies with Bangladesh engineering codes."
    },
    {
      title: "Commitment",
      desc: "Dedicated account management from initial BOQ analysis to final site sign-off, protecting our clients from operational friction."
    },
    {
      title: "Professionalism",
      desc: "Structured corporate processes, formal documentation, transparent billing, and respectful collaboration with all project stakeholders."
    },
    {
      title: "Teamwork",
      desc: "Close coordination between site engineers, procurement officers, logistics drivers, and field workers to achieve shared objectives."
    }
  ];

  return (
    <div className="bg-[#FAF9F5] text-[#101C2C]">
      
      {/* Editorial Header / Hero */}
      <section className="bg-[#071D36] text-white py-16 lg:py-24 border-b border-[#C99832]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0B2545] border-l-2 border-[#D6A63A] text-xs font-bold uppercase tracking-widest text-[#E2B84A]">
              About BIZZ FLEET Corporation
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              COMMITTED TO EXCELLENCE IN SOURCING & PROJECT SUPPORT.
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
              A dependable partner bridging primary quarries, manufacturers, and skilled labor with public and private development projects across Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview & Our Story */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#D6A63A]"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C99832]">
                  Our Story
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071D36] leading-tight">
                FOUNDED IN 2026 TO BRING STRUCTURE TO SUPPLY & PROCUREMENT.
              </h2>

              <p className="text-base text-gray-700 leading-relaxed">
                BIZZ FLEET Corporation began its journey in Bangladesh in 2026. The company was founded on the fundamental principle that modern infrastructure, industrial plants, and commercial developments deserve an accountable, professional supply partner.
              </p>

              <p className="text-base text-gray-700 leading-relaxed">
                In a market frequently challenged by unverified quality, opaque middleman markups, and delayed transport, BIZZ FLEET provides a transparent alternative: a unified corporate desk managing verified quarry sourcing, automated factory relationships, vetted manpower deployment, and end-to-end transport coordination.
              </p>

              <p className="text-base text-gray-700 leading-relaxed">
                We connect clients with reliable products, suppliers, workforce and operational resources to simplify project execution and business requirements.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <div className="px-4 py-3 bg-white border-l-4 border-[#071D36] shadow-sm">
                  <div className="text-xs font-bold text-[#071D36] uppercase">Incorporation</div>
                  <div className="text-sm font-semibold text-gray-700 mt-0.5">2026 | Bangladesh</div>
                </div>
                <div className="px-4 py-3 bg-white border-l-4 border-[#D6A63A] shadow-sm">
                  <div className="text-xs font-bold text-[#071D36] uppercase">Operational Reach</div>
                  <div className="text-sm font-semibold text-gray-700 mt-0.5">All 64 Districts</div>
                </div>
                <div className="px-4 py-3 bg-white border-l-4 border-[#071D36] shadow-sm">
                  <div className="text-xs font-bold text-[#071D36] uppercase">Core Model</div>
                  <div className="text-sm font-semibold text-gray-700 mt-0.5">Multi-Solution Corporate Desk</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative border-4 border-[#071D36] p-2 bg-white shadow-xl">
                <img 
                  src="/images/chittagong-port-terminal.jpg" 
                  alt="Chittagong Port Container Terminal - Bangladesh Logistics & Maritime Gateway"
                  className="w-full h-96 object-cover"
                />
                <div className="h-2 w-full bg-[#D6A63A] mt-2"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-[#F7F5EF] border-y border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Mission */}
            <div className="bg-white border-t-4 border-[#071D36] p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#071D36] text-[#E2B84A] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#071D36]">
                Our Mission
              </h3>
              <p className="text-base text-gray-700 mt-4 leading-relaxed font-medium">
                To simplify supply, procurement and project support through dependable service, responsible sourcing and professional coordination.
              </p>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                We exist to eliminate the risks of substandard materials, uncoordinated dispatching, and labor downtime for contractors, developers, and corporate entities.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white border-t-4 border-[#D6A63A] p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#0B2545] text-[#E2B84A] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#071D36]">
                Our Vision
              </h3>
              <p className="text-base text-gray-700 mt-4 leading-relaxed font-medium">
                To build long-term business relationships by becoming a dependable partner for supply, procurement and project solutions.
              </p>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                We aspire to be recognized across Bangladesh as the most trustworthy, operationally resilient, and service-oriented procurement corporation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-28 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#D6A63A]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C99832]">
                Guiding Principles
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071D36]">
              OUR VALUES.
            </h2>
            <p className="text-base text-gray-700 mt-2">
              The operational cornerstones guiding every consignment, contract, and partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div 
                key={v.title}
                className="p-6 bg-white border border-gray-300 hover:border-[#D6A63A] transition-all shadow-sm"
              >
                <div className="text-xs font-mono font-bold text-[#C99832]">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-[#071D36] mt-2">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Timeline: Grounded & Realistic */}
      <section className="py-20 bg-[#071D36] text-white border-y border-[#C99832]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-[#E2B84A] mb-2">
              Historical Foundation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              OUR MILESTONE.
            </h2>
            <p className="text-sm text-white/70 mt-2">
              Focused on executing real project value from day one.
            </p>
          </div>

          <div className="border-l-2 border-[#D6A63A] pl-8 py-4 max-w-2xl relative space-y-4">
            <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-[#D6A63A] border-4 border-[#071D36]"></div>
            
            <div className="inline-block px-3 py-1 bg-[#0B2545] border border-[#D6A63A] text-xs font-bold font-mono text-[#E2B84A]">
              ESTABLISHED 2026
            </div>
            <h3 className="text-2xl font-bold text-white">
              BIZZ FLEET Begins Its Journey in Bangladesh
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Formally initiated operations in Bangladesh to provide multi-category procurement, stone & sand supply lines, skilled manpower deployment, and heavy logistics coordination for construction, corporate and government projects.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#E2B84A]">
                Direct Corporate Inquiries
              </div>
              <div className="text-sm text-white/80 mt-1">
                Reach out to our leadership desk at <strong className="text-white">hello.bizzfleet@gmail.com</strong>
              </div>
            </div>
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 bg-[#D6A63A] text-[#071D36] font-bold text-xs uppercase tracking-wider hover:bg-[#E2B84A] transition-colors"
            >
              Request Corporate Profile
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
