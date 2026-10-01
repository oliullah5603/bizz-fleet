import React, { useState } from 'react';
import { X, Send, CheckCircle2, PhoneCall, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES } from '../data/companyData';

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    serviceRequired: 'Construction Materials',
    projectType: 'Infrastructure / Heavy Civil',
    location: '',
    estimatedVolume: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF9F5] shadow-2xl border-t-4 border-[#C99832] my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#071D36] text-white px-6 py-5 flex items-center justify-between border-b border-[#C99832]/30">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#E2B84A] font-bold block">
              BIZZ FLEET CORPORATION | EST. 2026
            </span>
            <h3 className="text-xl font-bold tracking-tight text-white mt-0.5">
              Request a Corporate Quotation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#071D36] text-[#E2B84A] rounded-none flex items-center justify-center mx-auto border-2 border-[#E2B84A]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-[#071D36]">
              Quotation Request Received
            </h4>
            <p className="text-sm text-gray-700 max-w-md mx-auto">
              Thank you, <span className="font-semibold text-[#071D36]">{formData.name}</span>. Our procurement coordination team at BIZZ FLEET has received your inquiry for <span className="font-semibold text-[#071D36]">{formData.serviceRequired}</span>.
            </p>
            <div className="p-4 bg-[#F7F5EF] border border-[#C99832]/30 text-xs text-gray-700 max-w-md mx-auto space-y-1 text-left">
              <div><strong className="text-[#071D36]">Company:</strong> {formData.company || 'Direct Client'}</div>
              <div><strong className="text-[#071D36]">Phone:</strong> {formData.phone}</div>
              <div><strong className="text-[#071D36]">Expected Response:</strong> Within 4 business hours</div>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#071D36] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0B2545] transition-colors"
              >
                Done
              </button>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="px-6 py-2.5 border border-[#C99832] text-[#071D36] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#F7F5EF]"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#C99832]" />
                Direct Desk: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
            <p className="text-xs text-gray-600">
              Fill in your project requirements below. For emergency supply mobilizations or active tender BOQ pricing, call our direct desk at <strong className="text-[#071D36]">{COMPANY_INFO.phone}</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071D36] mb-1">
                  Full Name <span className="text-[#C99832]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Engr. Tanvir Ahmed"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#C99832] focus:ring-1 focus:ring-[#C99832]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071D36] mb-1">
                  Company / Organization <span className="text-[#C99832]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Construction Ltd."
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#C99832] focus:ring-1 focus:ring-[#C99832]"
                />
              </div>

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
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#C99832] focus:ring-1 focus:ring-[#C99832]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071D36] mb-1">
                  Official Email <span className="text-[#C99832]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="procurement@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#C99832] focus:ring-1 focus:ring-[#C99832]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071D36] mb-1">
                  Service Category <span className="text-[#C99832]">*</span>
                </label>
                <select
                  value={formData.serviceRequired}
                  onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#C99832] focus:ring-1 focus:ring-[#C99832]"
                >
                  {CORE_SERVICES.map((srv) => (
                    <option key={srv.id} value={srv.title}>
                      {srv.num} - {srv.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071D36] mb-1">
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#C99832] focus:ring-1 focus:ring-[#C99832]"
                >
                  <option value="Infrastructure / Heavy Civil">Infrastructure / Heavy Civil</option>
                  <option value="Government Tender Project">Government Tender Project</option>
                  <option value="Commercial / Real Estate Building">Commercial / Real Estate Building</option>
                  <option value="Roads, Bridges & Flyovers">Roads, Bridges & Flyovers</option>
                  <option value="Industrial Plant / Factory">Industrial Plant / Factory</option>
                  <option value="Corporate Facility Operations">Corporate Facility Operations</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071D36] mb-1">
                  Site Location / District
                </label>
                <input
                  type="text"
                  placeholder="e.g. Gazipur / Chattogram / Sylhet"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#C99832] focus:ring-1 focus:ring-[#C99832]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071D36] mb-1">
                  Estimated Quantity / Volume
                </label>
                <input
                  type="text"
                  placeholder="e.g. 50,000 CFT / 200 Tons / 30 Workforce"
                  value={formData.estimatedVolume}
                  onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#C99832] focus:ring-1 focus:ring-[#C99832]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#071D36] mb-1">
                Project Specifics / Requirements Note
              </label>
              <textarea
                rows={3}
                placeholder="Mention aggregate size (e.g. 3/4 inch), FM requirements, delivery schedules, or special equipment specs..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#C99832] focus:ring-1 focus:ring-[#C99832]"
              ></textarea>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-[11px] text-gray-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C99832]" />
                <span>Formal quotations are issued under official BIZZ FLEET letterhead.</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-5 py-2.5 border border-gray-300 text-gray-700 text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-1/2 sm:w-auto px-6 py-2.5 bg-gradient-to-r from-[#D6A63A] to-[#C99832] text-[#071D36] text-xs font-bold uppercase tracking-wider hover:from-[#E2B84A] hover:to-[#D6A63A] transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  {submitting ? 'Submitting...' : 'Submit Request'}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
