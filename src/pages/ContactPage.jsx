import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  Globe, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck,
  Building2,
  FileText
} from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES } from '../data/companyData';

export default function ContactPage({ onOpenQuote }) {
  const [formType, setFormType] = useState('inquiry'); // 'inquiry' or 'quote'
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    serviceRequired: 'Construction Materials',
    projectType: 'Infrastructure / Heavy Civil',
    message: '',
    quantity: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-[#FAF9F5] text-[#101C2C]">
      
      {/* Editorial Hero */}
      <section className="bg-[#071D36] text-white py-16 lg:py-24 border-b border-[#C99832]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0B2545] border-l-2 border-[#D6A63A] text-xs font-bold uppercase tracking-widest text-[#E2B84A]">
              Corporate Communications & Procurement Desk
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              LET'S BUILD SOMETHING<br />
              <span className="text-[#E2B84A]">THAT WORKS.</span>
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
              Connect with our strategic sourcing specialists, logistics coordinators, and project managers today.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Info + Inquiry Form */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-[2px] bg-[#D6A63A]"></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C99832]">
                    Direct Lines
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071D36]">
                  CORPORATE HEADQUARTERS
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  Our central desk handles inquiries from contractors, developers, government authorities, and corporate facilities.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                
                {/* Phone */}
                <div className="p-5 bg-white border-l-4 border-[#071D36] shadow-sm flex items-start gap-4">
                  <div className="p-2.5 bg-[#FAF9F5] border border-gray-200 text-[#071D36] shrink-0">
                    <PhoneCall className="w-5 h-5 text-[#C99832]" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-bold text-gray-400">
                      Direct Telephone / Mobile
                    </div>
                    <a 
                      href={`tel:${COMPANY_INFO.phone}`} 
                      className="text-lg font-bold text-[#071D36] hover:text-[#C99832] transition-colors block mt-0.5"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <div className="text-[11px] text-gray-500 mt-0.5">
                      Fast response for material tenders & site requirements
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-5 bg-white border-l-4 border-[#D6A63A] shadow-sm flex items-start gap-4">
                  <div className="p-2.5 bg-[#FAF9F5] border border-gray-200 text-[#071D36] shrink-0">
                    <Mail className="w-5 h-5 text-[#C99832]" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-bold text-gray-400">
                      General & Tender Inquiries
                    </div>
                    <a 
                      href={`mailto:${COMPANY_INFO.email}`} 
                      className="text-base font-bold text-[#071D36] hover:text-[#C99832] transition-colors block mt-0.5"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <div className="text-[11px] text-gray-500 mt-0.5">
                      Send your BOQ documents or official RFP letters
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div className="p-5 bg-white border-l-4 border-[#071D36] shadow-sm flex items-start gap-4">
                  <div className="p-2.5 bg-[#FAF9F5] border border-gray-200 text-[#071D36] shrink-0">
                    <Globe className="w-5 h-5 text-[#C99832]" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-bold text-gray-400">
                      Official Web Portal
                    </div>
                    <a 
                      href={`https://${COMPANY_INFO.website}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-base font-bold text-[#071D36] hover:text-[#C99832] transition-colors block mt-0.5"
                    >
                      {COMPANY_INFO.website}
                    </a>
                    <div className="text-[11px] text-gray-500 mt-0.5">
                      24/7 Corporate Information & Specifications
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="p-5 bg-white border-l-4 border-[#D6A63A] shadow-sm flex items-start gap-4">
                  <div className="p-2.5 bg-[#FAF9F5] border border-gray-200 text-[#071D36] shrink-0">
                    <MapPin className="w-5 h-5 text-[#C99832]" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-bold text-gray-400">
                      Head Office & Coverage
                    </div>
                    <div className="text-base font-bold text-[#071D36] mt-0.5">
                      Dhaka, Bangladesh
                    </div>
                    <div className="text-[11px] text-gray-500 mt-0.5">
                      Coordinated logistics coverage across all 64 districts
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="p-5 bg-[#071D36] text-white shadow-sm flex items-start gap-4">
                  <div className="p-2.5 bg-[#0B2545] border border-[#C99832]/30 text-[#E2B84A] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider font-bold text-[#E2B84A]">
                      Operations Hours
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      {COMPANY_INFO.workingHours}
                    </div>
                    <div className="text-[11px] text-white/60 mt-0.5">
                      24/7 emergency site dispatch support available
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Professional Inquiry & Quote Forms */}
            <div className="lg:col-span-7">
              <div className="bg-white border-2 border-gray-300 shadow-xl overflow-hidden">
                
                {/* Form Tabs */}
                <div className="grid grid-cols-2 bg-[#071D36] text-white">
                  <button
                    onClick={() => { setFormType('inquiry'); setSubmitted(false); }}
                    className={`py-4 text-xs font-extrabold uppercase tracking-wider transition-colors border-b-2 ${
                      formType === 'inquiry' 
                        ? 'border-[#E2B84A] bg-[#0B2545] text-[#E2B84A]' 
                        : 'border-transparent text-white/70 hover:text-white'
                    }`}
                  >
                    Send General Inquiry
                  </button>
                  <button
                    onClick={() => { setFormType('quote'); setSubmitted(false); }}
                    className={`py-4 text-xs font-extrabold uppercase tracking-wider transition-colors border-b-2 ${
                      formType === 'quote' 
                        ? 'border-[#E2B84A] bg-[#0B2545] text-[#E2B84A]' 
                        : 'border-transparent text-white/70 hover:text-white'
                    }`}
                  >
                    Request a Quote
                  </button>
                </div>

                {submitted ? (
                  <div className="p-10 text-center space-y-4">
                    <div className="w-16 h-16 bg-[#071D36] text-[#E2B84A] flex items-center justify-center mx-auto border-2 border-[#E2B84A]">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#071D36]">
                      {formType === 'inquiry' ? 'Inquiry Transmitted' : 'Quotation Request Logged'}
                    </h3>
                    <p className="text-sm text-gray-700 max-w-md mx-auto">
                      Thank you, <strong className="text-[#071D36]">{formData.name}</strong>. Your requirement regarding <strong className="text-[#071D36]">{formData.serviceRequired}</strong> has been assigned to our desk.
                    </p>
                    <div className="p-4 bg-[#FAF9F5] border border-gray-200 text-xs text-gray-700 max-w-md mx-auto text-left space-y-1">
                      <div><strong>Company:</strong> {formData.company || 'Direct Client'}</div>
                      <div><strong>Phone:</strong> {formData.phone}</div>
                      <div><strong>Direct Desk Follow-up:</strong> Within 4 business hours</div>
                    </div>
                    <div className="pt-2">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-2.5 bg-[#071D36] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0B2545] transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
                    <div className="text-xs text-gray-600 mb-2">
                      {formType === 'inquiry' 
                        ? 'Submit your project details or service questions below.' 
                        : 'Provide your volume estimates and site location for a customized formal rate sheet.'}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#071D36] mb-1">
                          Full Name <span className="text-[#C99832]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-gray-300 text-sm focus:outline-none focus:border-[#C99832] focus:bg-white"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#071D36] mb-1">
                          Company / Organization <span className="text-[#C99832]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Apex Construction"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-gray-300 text-sm focus:outline-none focus:border-[#C99832] focus:bg-white"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#071D36] mb-1">
                          Phone Number <span className="text-[#C99832]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="01XXXXXXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-gray-300 text-sm focus:outline-none focus:border-[#C99832] focus:bg-white"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#071D36] mb-1">
                          Official E-mail <span className="text-[#C99832]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-gray-300 text-sm focus:outline-none focus:border-[#C99832] focus:bg-white"
                        />
                      </div>

                      {/* Service Required */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#071D36] mb-1">
                          Service Required <span className="text-[#C99832]">*</span>
                        </label>
                        <select
                          value={formData.serviceRequired}
                          onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-gray-300 text-sm focus:outline-none focus:border-[#C99832] focus:bg-white"
                        >
                          {CORE_SERVICES.map((srv) => (
                            <option key={srv.id} value={srv.title}>
                              {srv.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Project Type */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#071D36] mb-1">
                          Project Type <span className="text-[#C99832]">*</span>
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-gray-300 text-sm focus:outline-none focus:border-[#C99832] focus:bg-white"
                        >
                          <option value="Infrastructure / Heavy Civil">Infrastructure / Heavy Civil</option>
                          <option value="Government Tender Project">Government Tender Project</option>
                          <option value="Roads, Bridges & Flyovers">Roads, Bridges & Flyovers</option>
                          <option value="Real Estate & Building Construction">Real Estate & Building Construction</option>
                          <option value="Industrial Factory / EPZ">Industrial Factory / EPZ</option>
                          <option value="Corporate Facility Support">Corporate Facility Support</option>
                        </select>
                      </div>

                    </div>

                    {formType === 'quote' && (
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#071D36] mb-1">
                          Estimated Quantity / Delivery Location
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 80,000 CFT Stone Chips delivered to Gazipur site"
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-gray-300 text-sm focus:outline-none focus:border-[#C99832] focus:bg-white"
                        />
                      </div>
                    )}

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#071D36] mb-1">
                        Message / Project Scope <span className="text-[#C99832]">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Detail your requirements, project timelines, specifications, or request an introductory meeting..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-gray-300 text-sm focus:outline-none focus:border-[#C99832] focus:bg-white"
                      ></textarea>
                    </div>

                    {/* Submit CTA */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-[11px] text-gray-500 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#C99832]" />
                        <span>All project information is treated with corporate confidentiality.</span>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#D6A63A] to-[#C99832] text-[#071D36] font-extrabold text-xs uppercase tracking-widest hover:from-[#E2B84A] hover:to-[#D6A63A] transition-all flex items-center justify-center gap-2 shadow-lg"
                      >
                        <span>{loading ? 'Processing...' : formType === 'inquiry' ? 'SEND INQUIRY' : 'SUBMIT QUOTE REQUEST'}</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bangladesh 64 Districts Operational Map & Logistics Note */}
      <section className="py-16 bg-[#0B2545] text-white border-t border-[#C99832]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="text-xs font-bold uppercase tracking-widest text-[#E2B84A] mb-1">
              National Supply Network
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              SERVING ALL 64 DISTRICTS OF BANGLADESH
            </h3>
            <p className="text-xs text-white/70 mt-2">
              From Sylhet quarries, Chattogram port, and Dhaka central dispatch to northern & southern corridors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
            {['Dhaka Division', 'Chattogram Division', 'Sylhet Division', 'Rajshahi Division', 'Khulna Division', 'Barishal Division', 'Rangpur Division', 'Mymensingh Division'].map((div, i) => (
              <div key={i} className="p-3 bg-[#071D36] border border-white/10 hover:border-[#D6A63A] transition-colors">
                <div className="text-[11px] font-bold text-white uppercase">{div}</div>
                <div className="text-[10px] text-[#E2B84A] mt-1">Active Logistics</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
