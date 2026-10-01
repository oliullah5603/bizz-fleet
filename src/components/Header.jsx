import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  PhoneCall, 
  ArrowRight, 
  ShieldCheck, 
  HardHat, 
  Truck, 
  Wrench, 
  FileText, 
  Users, 
  Layers, 
  Building2, 
  CheckCircle2 
} from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES } from '../data/companyData';

export default function Header({ currentPath, navigate, onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Industries', path: '/industries' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top corporate notice bar */}
      <div className="bg-[#071D36] text-[#FAF9F5]/80 text-xs border-b border-[#0B2545] py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[#E2B84A] font-semibold tracking-wider text-[11px] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#E2B84A] animate-pulse"></span>
              EST. 2026 | BANGLADESH
            </span>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:inline text-white/70">Strategic Procurement, Logistics & Industrial Supply Solutions</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center gap-1.5 text-white/90 hover:text-[#E2B84A] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#E2B84A]" />
              <span className="font-semibold">{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="hidden sm:inline text-[#E2B84A]/90 font-medium">Nationwide Coverage (64 Districts)</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0B2545]/95 backdrop-blur-md py-3 shadow-xl border-b border-[#C99832]/20' 
            : 'bg-[#0B2545] py-4 md:py-5 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Official Logo */}
          <button 
            onClick={() => handleNav('/')}
            className="flex items-center text-left focus:outline-none group"
            aria-label="BIZZ FLEET Corporation Home"
          >
            <img 
              src="/images/bizz-fleet-logo-light.png" 
              alt="BIZZ FLEET Corporation" 
              className="h-10 sm:h-12 w-auto object-contain group-hover:brightness-110 transition-all duration-200"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
              
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNav(link.path)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold tracking-wide transition-all uppercase ${
                        isActive || servicesDropdownOpen
                          ? 'text-[#E2B84A]'
                          : 'text-white/90 hover:text-[#E2B84A]'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#E2B84A]' : ''}`} />
                    </button>

                    {/* Services Dropdown Panel */}
                    {servicesDropdownOpen && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[580px] transition-all duration-200">
                        <div className="bg-[#071D36] border border-[#C99832]/30 shadow-2xl p-4 grid grid-cols-2 gap-2 relative before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-[#071D36]">
                          <div className="col-span-2 pb-2 mb-1 border-b border-white/10 flex justify-between items-center">
                            <span className="text-xs uppercase tracking-widest text-[#E2B84A] font-bold">
                              Core Corporate Divisions
                            </span>
                            <button 
                              onClick={() => handleNav('/services')}
                              className="text-xs text-white/70 hover:text-white flex items-center gap-1 group"
                            >
                              All Services Overview <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                          </div>
                          
                          {CORE_SERVICES.map((srv) => (
                            <button
                              key={srv.id}
                              onClick={() => handleNav(`/services/${srv.id}`)}
                              className="flex items-start gap-2.5 p-2.5 hover:bg-[#102B46] text-left transition-colors group/item border-l-2 border-transparent hover:border-[#E2B84A]"
                            >
                              <div className="text-xs font-mono text-[#E2B84A] font-bold pt-0.5">
                                {srv.num}
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-white group-hover/item:text-[#E2B84A] transition-colors leading-tight">
                                  {srv.title}
                                </div>
                                <div className="text-[11px] text-white/60 line-clamp-1 mt-0.5">
                                  {srv.shortDesc}
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.path)}
                  className={`relative px-3.5 py-2 text-sm font-semibold tracking-wide transition-all uppercase ${
                    isActive ? 'text-[#E2B84A]' : 'text-white/90 hover:text-[#E2B84A]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#E2B84A]"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#D6A63A] to-[#C99832] text-[#071D36] text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-xl hover:from-[#E2B84A] hover:to-[#D6A63A] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 bg-[#D6A63A] text-[#071D36] text-xs font-bold uppercase tracking-wider"
            >
              Quote
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-[#E2B84A] transition-colors"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#071D36] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-[#C99832]/30">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <button 
                  onClick={() => handleNav('/')}
                  className="flex items-center text-left focus:outline-none"
                >
                  <img 
                    src="/images/bizz-fleet-logo-light.png" 
                    alt="BIZZ FLEET Corporation" 
                    className="h-8 sm:h-9 w-auto object-contain"
                  />
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 text-white/70 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-6 flex flex-col space-y-1">
                <button
                  onClick={() => handleNav('/')}
                  className={`text-left px-3 py-2.5 font-bold uppercase tracking-wider text-sm ${
                    currentPath === '/' ? 'text-[#E2B84A] bg-[#102B46]' : 'text-white hover:text-[#E2B84A]'
                  }`}
                >
                  Home
                </button>

                <button
                  onClick={() => handleNav('/about-us')}
                  className={`text-left px-3 py-2.5 font-bold uppercase tracking-wider text-sm ${
                    currentPath === '/about-us' ? 'text-[#E2B84A] bg-[#102B46]' : 'text-white hover:text-[#E2B84A]'
                  }`}
                >
                  About Us
                </button>

                {/* Mobile Services Accordion */}
                <div className="border-y border-white/5 my-1">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 font-bold uppercase tracking-wider text-sm text-white hover:text-[#E2B84A]"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180 text-[#E2B84A]' : ''}`} />
                  </button>

                  {mobileServicesOpen && (
                    <div className="pl-4 pr-2 pb-2 space-y-1">
                      <button
                        onClick={() => handleNav('/services')}
                        className="w-full text-left py-1.5 text-xs text-[#E2B84A] font-semibold uppercase tracking-wider border-b border-white/10"
                      >
                        → All Services Overview
                      </button>
                      {CORE_SERVICES.map((srv) => (
                        <button
                          key={srv.id}
                          onClick={() => handleNav(`/services/${srv.id}`)}
                          className="w-full text-left py-1.5 text-xs text-white/80 hover:text-[#E2B84A] flex items-center gap-2"
                        >
                          <span className="text-[10px] text-[#E2B84A] font-mono">{srv.num}</span>
                          <span>{srv.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleNav('/industries')}
                  className={`text-left px-3 py-2.5 font-bold uppercase tracking-wider text-sm ${
                    currentPath === '/industries' ? 'text-[#E2B84A] bg-[#102B46]' : 'text-white hover:text-[#E2B84A]'
                  }`}
                >
                  Industries
                </button>

                <button
                  onClick={() => handleNav('/projects')}
                  className={`text-left px-3 py-2.5 font-bold uppercase tracking-wider text-sm ${
                    currentPath === '/projects' ? 'text-[#E2B84A] bg-[#102B46]' : 'text-white hover:text-[#E2B84A]'
                  }`}
                >
                  Projects
                </button>

                <button
                  onClick={() => handleNav('/resources')}
                  className={`text-left px-3 py-2.5 font-bold uppercase tracking-wider text-sm ${
                    currentPath === '/resources' ? 'text-[#E2B84A] bg-[#102B46]' : 'text-white hover:text-[#E2B84A]'
                  }`}
                >
                  Resources
                </button>

                <button
                  onClick={() => handleNav('/contact')}
                  className={`text-left px-3 py-2.5 font-bold uppercase tracking-wider text-sm ${
                    currentPath === '/contact' ? 'text-[#E2B84A] bg-[#102B46]' : 'text-white hover:text-[#E2B84A]'
                  }`}
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 bg-[#D6A63A] text-[#071D36] font-bold text-center uppercase tracking-wider text-xs shadow-lg"
              >
                Request a Quote
              </button>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full py-2.5 border border-white/20 text-white font-semibold text-center uppercase tracking-wider text-xs flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#E2B84A]" />
                Call {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
