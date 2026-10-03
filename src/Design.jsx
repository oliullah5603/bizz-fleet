import { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  Plus,
  Minus,
  Check,
  Download,
  HardHat,
  ClipboardList,
  Users,
  Truck,
  Wrench,
  Package,
  BriefcaseBusiness,
  Building2,
  ShieldCheck,
  PencilRuler,
  Armchair,
  ChevronDown,
} from "lucide-react";
import "./Preview.css";
import "./Refinements.css";
import { services, photos, industries } from "./Content";
const COPYRIGHT_YEAR = new Date().getFullYear();
const PHONE = "01410934205",
  EMAIL = "hello.bizzfleet@gmail.com";
const aliases = {
  "general-goods": "general-goods-supplies",
  "general-supplies": "general-goods-supplies",
  "consultancy-support": "consultancy-project-support",
  "contracting-services": "contracting-project-services",
};
function Link({ to, navigate, children, className = "", ...rest }) {
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
          e.preventDefault();
          navigate(to);
        }
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
function Eyebrow({ children }) {
  return (
    <p className="eyebrow">
      <span />
      {children}
    </p>
  );
}
function Photo({ name, alt, className = "", eager = false }) {
  return (
    <img
      className={"site-photo " + className}
      src={"/images/" + name}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
function QuoteForm({ service }) {
  const [draft, setDraft] = useState(null),
    [copied, setCopied] = useState(false);
  function prepare(e) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    setDraft(
      `Hello Bizz Fleet,\n\nI would like to discuss the following requirement.\n\nName: ${d.name}\nCompany: ${d.company || "Not specified"}\nPhone: ${d.phone}\nService: ${d.service}\nProject / delivery location: ${d.location}\nRequirement:\n${d.requirement}\n\nPlease contact me to discuss availability and a quotation.`,
    );
    setCopied(false);
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }
  function download() {
    const url = URL.createObjectURL(
      new Blob([draft], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "bizz-fleet-requirement.txt";
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <div className="quote-form">
      <form onSubmit={prepare}>
        <div className="form-grid">
          <label>
            Your name
            <input
              name="name"
              autoComplete="name"
              required
              maxLength={100}
              placeholder="Full name"
            />
          </label>
          <label>
            Phone number
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              maxLength={30}
              placeholder="01XXXXXXXXX"
            />
          </label>
          <label>
            Company <span className="optional">(optional)</span>
            <input
              name="company"
              autoComplete="organization"
              maxLength={160}
              placeholder="Company or organisation"
            />
          </label>
          <label>
            Service
            <select
              name="service"
              defaultValue={service || "Multiple services / Other"}
            >
              {services.map((s) => (
                <option key={s.id}>{s.title}</option>
              ))}
              <option>Multiple services / Other</option>
            </select>
          </label>
        </div>
        <label>
          Project or delivery location
          <input
            name="location"
            required
            maxLength={200}
            placeholder="Area, district"
          />
        </label>
        <label>
          What do you need?
          <textarea
            name="requirement"
            required
            maxLength={4000}
            rows={4}
            placeholder="Items or roles, specifications, quantity and preferred date. Share whatever you know so far."
          />
        </label>
        <button className="button button-navy" type="submit">
          Prepare my enquiry
          <ArrowRight size={18} />
        </button>
        <p className="form-note">
          This prepares an email draft. Your enquiry is sent only when you send
          it from your email app.
        </p>
      </form>
      {draft && (
        <div className="draft-panel" role="status">
          <h3>Your enquiry is ready to send.</h3>
          <p>
            Review the details, then open your email app. You can also copy or
            download the text.
          </p>
          <pre>{draft}</pre>
          <div className="draft-actions">
            <a
              className="button button-gold"
              href={`mailto:${EMAIL}?subject=${encodeURIComponent("Project requirement — Bizz Fleet")}&body=${encodeURIComponent(draft)}`}
            >
              Open email draft
              <Mail size={17} />
            </a>
            <button className="text-link" onClick={copy}>
              {copied ? "Copied" : "Copy text"}
            </button>
            <button className="text-link" onClick={download}>
              <Download size={16} />
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
function QuoteModal({ close, service }) {
  const ref = useRef(null);
  useEffect(() => {
    const previous = document.activeElement,
      overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ref.current?.querySelector("button")?.focus();
    function key(e) {
      if (e.key === "Escape") close();
      if (e.key === "Tab") {
        const nodes = ref.current.querySelectorAll(
            "a[href],button,input,select,textarea",
          ),
          first = nodes[0],
          last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", key);
      previous?.focus();
    };
  }, [close]);
  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <section
        className="quote-modal"
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
      >
        <button
          className="modal-close icon-button"
          onClick={close}
          aria-label="Close enquiry"
        >
          <X />
        </button>
        <Eyebrow>Let’s talk about your requirement</Eyebrow>
        <h2 id="quote-title">Tell us what you need.</h2>
        <p>
          Start with a few details. We’ll help you work through the requirement.
        </p>
        <QuoteForm service={service} />
      </section>
    </div>
  );
}
function FAQ() {
  const [active, setActive] = useState(null);
  const questions = [
    [
      "What should I send for a quotation?",
      "Share the item or service, specification, quantity, project location and preferred date. If you have a BOQ or item list, send it by email.",
    ],
    [
      "Can I discuss more than one service?",
      "Yes. You can combine materials, manpower, equipment, delivery and project support in one enquiry. We’ll discuss the scope and arrangements with you.",
    ],
    [
      "Do you support government and private projects?",
      "Our services are intended for government, private and corporate project requirements. Any project-specific documentation or conditions should be discussed before confirming a scope.",
    ],
    [
      "How are prices and delivery dates confirmed?",
      "Pricing and timing depend on the requirement, availability, quantity and delivery location. These details are discussed and confirmed in the quotation.",
    ],
  ];
  return (
    <div className="faq">
      {questions.map(([q, a], i) => (
        <div key={q} className="faq-item">
          <h3>
            <button
              aria-expanded={active === i}
              aria-controls={`faq-${i}`}
              onClick={() => setActive(active === i ? null : i)}
            >
              {q}
              {active === i ? <Minus size={19} /> : <Plus size={19} />}
            </button>
          </h3>
          <div id={`faq-${i}`} hidden={active !== i}>
            <p>{a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const officeCategories = [
  [
    "Stationery & office essentials",
    "Paper, files, writing supplies and the everyday items your team uses.",
    PencilRuler,
  ],
  [
    "Furniture & office equipment",
    "Desks, chairs, storage and equipment matched to your specification.",
    Armchair,
    ChevronDown,
  ],
  [
    "Consumables & facility supplies",
    "Cleaning supplies, pantry essentials and goods for daily operations.",
    Package,
  ],
  [
    "Other goods on request",
    "Have a specific item list? Share the details and we will discuss sourcing options.",
    ClipboardList,
  ],
];

function Header({ path, navigate, quote }) {
  const [open, setOpen] = useState(false),
    [submenu, setSubmenu] = useState(false),
    [mobileServices, setMobileServices] = useState(false);
  const drawer = useRef(null),
    drop = useRef(null),
    toggle = useRef(null);
  const links = [
    ["Home", "/"],
    ["About", "/about-us"],
    ["Services", "/services"],
    ["Industries", "/industries"],
    ["Projects", "/projects"],
    ["Resources", "/resources"],
    ["Contact", "/contact"],
  ];
  const isActive = (to) => (to === "/" ? path === "/" : path.startsWith(to));
  useEffect(() => {
    const key = (e) => {
      if (e.key === "Escape") setSubmenu(false);
    };
    const outside = (e) => {
      if (!drop.current?.contains(e.target)) setSubmenu(false);
    };
    document.addEventListener("keydown", key);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", key);
      document.removeEventListener("pointerdown", outside);
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const dialog = drawer.current,
      trigger = toggle.current,
      overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      trigger?.focus();
    };
  }, [open]);
  function go(to) {
    setOpen(false);
    setSubmenu(false);
    navigate(to);
  }
  return (
    <>
      <div className="topline">
        <div className="wrap">
          <span>Supply · Consultancy · Contracting</span>
          <a href={`tel:${PHONE}`}>
            <Phone size={14} />
            {PHONE}
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="wrap header-inner">
          <Link
            to="/"
            navigate={go}
            className="brand"
            aria-label="Bizz Fleet Corporation home"
          >
            <img
              src="/images/bizz-fleet-logo.png"
              alt="Bizz Fleet Corporation"
            />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map(([title, to]) =>
              title === "Services" ? (
                <div
                  key={to}
                  className="nav-services"
                  ref={drop}
                  onMouseEnter={() => setSubmenu(true)}
                  onMouseLeave={() => setSubmenu(false)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget))
                      setSubmenu(false);
                  }}
                >
                  <div className="nav-service-trigger">
                    <Link
                      to={to}
                      navigate={go}
                      aria-current={isActive(to) ? "page" : undefined}
                    >
                      Services
                    </Link>
                    <button
                      aria-label="Show service submenu"
                      aria-expanded={submenu}
                      aria-controls="service-dropdown"
                      onClick={() => setSubmenu(!submenu)}
                    >
                      <ChevronDown size={16} />
                    </button>
                  </div>
                  {submenu && (
                    <div id="service-dropdown" className="service-dropdown">
                      <p>Explore our services</p>
                      <div>
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.id}`}
                            navigate={go}
                          >
                            {service.title}
                            <ArrowUpRight size={16} />
                          </Link>
                        ))}
                      </div>
                      <Link
                        className="dropdown-all"
                        to="/services"
                        navigate={go}
                      >
                        View all services
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={to}
                  to={to}
                  navigate={go}
                  aria-current={isActive(to) ? "page" : undefined}
                >
                  {title}
                </Link>
              ),
            )}
          </nav>
          <button className="button button-gold header-quote" onClick={quote}>
            Request a quote
            <ArrowUpRight size={18} />
          </button>
          <button
            ref={toggle}
            className="menu-toggle icon-button"
            aria-label="Open navigation"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </header>
      <dialog
        id="mobile-drawer"
        className="mobile-drawer"
        ref={drawer}
        aria-labelledby="drawer-title"
        onCancel={(e) => {
          e.preventDefault();
          setOpen(false);
        }}
        onClick={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          if (
            e.target === e.currentTarget &&
            (e.clientX < r.left ||
              e.clientX > r.right ||
              e.clientY < r.top ||
              e.clientY > r.bottom)
          )
            setOpen(false);
        }}
      >
        <div className="drawer-heading">
          <span id="drawer-title">Explore Bizz Fleet</span>
          <button
            className="icon-button"
            onClick={() => setOpen(false)}
            aria-label="Close navigation"
          >
            <X />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {links.map(([title, to]) =>
            title === "Services" ? (
              <div className="drawer-services" key={to}>
                <button
                  aria-expanded={mobileServices}
                  aria-controls="drawer-service-list"
                  onClick={() => setMobileServices(!mobileServices)}
                >
                  Services
                  <ChevronDown size={20} />
                </button>
                {mobileServices && (
                  <div id="drawer-service-list">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.id}`}
                        navigate={go}
                        aria-current={
                          path === `/services/${service.id}`
                            ? "page"
                            : undefined
                        }
                      >
                        {service.title}
                      </Link>
                    ))}
                    <Link to="/services" navigate={go}>
                      View all services
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={to}
                to={to}
                navigate={go}
                aria-current={isActive(to) ? "page" : undefined}
              >
                {title}
                <ArrowRight size={18} />
              </Link>
            ),
          )}
        </nav>
        <div className="drawer-contact">
          <button
            className="button button-gold"
            onClick={() => {
              setOpen(false);
              quote();
            }}
          >
            Request a quote
            <ArrowUpRight size={18} />
          </button>
          <a href={`tel:${PHONE}`}>
            <Phone size={18} />
            {PHONE}
          </a>
          <span>Bangladesh · Established 2026</span>
        </div>
      </dialog>
    </>
  );
}

function Footer({ navigate, quote }) {
  return (
    <footer>
      <div className="wrap footer-main">
        <div className="footer-brand">
          <img
            src="/images/bizz-fleet-logo-light.png"
            alt="Bizz Fleet Corporation"
          />
          <p>
            A Bangladesh-based supply, consultancy and contracting company.
            Established in 2026.
          </p>
          <strong>Supplying trust. Delivering value.</strong>
        </div>
        <div>
          <h3>Explore</h3>
          {[
            ["About Bizz Fleet", "/about-us"],
            ["Our services", "/services"],
            ["Industries", "/industries"],
            ["Projects", "/projects"],
            ["Resources", "/resources"],
          ].map(([label, to]) => (
            <Link key={to} to={to} navigate={navigate}>
              {label}
            </Link>
          ))}
        </div>
        <div className="footer-services">
          <h3>Services</h3>
          {[
            ["Supply & procurement", "/services/strategic-procurement"],
            ["Manpower outsourcing", "/services/manpower-outsourcing"],
            ["Consultancy & project support", "/services/consultancy-project-support"],
            ["Contracting & project services", "/services/contracting-project-services"],
          ].map(([label, to]) => (
            <Link key={to} to={to} navigate={navigate}>{label}</Link>
          ))}
        </div>
        <div>
          <h3>Let’s talk</h3>
          <a href={`tel:${PHONE}`}>
            <Phone size={18} />
            {PHONE}
          </a>
          <a href={`mailto:${EMAIL}`}>
            <Mail size={18} />
            {EMAIL}
          </a>
          <button className="button button-gold" onClick={quote}>
            Request a quote
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {COPYRIGHT_YEAR} Bizz Fleet Corporation</span>
        <span>Designed and maintained by <a href="https://www.infinicoinnovations.com/" target="_blank" rel="noopener noreferrer">Infinico Innovations</a></span>
      </div>
    </footer>
  );
}
function ServiceList({ navigate, withImages = false }) {
  return (
    <div className={`service-grid ${withImages ? "service-image-grid" : ""}`}>
      {services.map((s) => {
        const Icon = {
          "general-goods-supplies": Package,
          "construction-materials": HardHat,
          "strategic-procurement": ClipboardList,
          "manpower-outsourcing": Users,
          "equipment-machinery": Wrench,
          "logistics-delivery": Truck,
          "consultancy-project-support": BriefcaseBusiness,
          "contracting-project-services": Building2,
        }[s.id];
        return (
          <Link
            to={`/services/${s.id}`}
            navigate={navigate}
            className="service-card"
            key={s.id}
          >
            {withImages ? (
              <img className="service-card-photo" src={`/images/${photos[s.photo].file}`} alt={photos[s.photo].alt} loading="lazy" />
            ) : <Icon size={28} strokeWidth={1.7} />}
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <span>
              Explore service
              <ArrowUpRight size={18} />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
function Process() {
  return (
    <div className="process-grid">
      {[
        [
          "Tell us what you need",
          "Send your item list, specifications, quantities or scope of work.",
        ],
        [
          "Review the options",
          "We discuss sourcing, availability, pricing and the arrangements with you.",
        ],
        [
          "Agree the next steps",
          "Confirm the scope, quotation and delivery or deployment plan.",
        ],
      ].map(([title, desc], i) => (
        <article key={title}>
          <span className="step-number">0{i + 1}</span>
          <h3>{title}</h3>
          <p>{desc}</p>
        </article>
      ))}
    </div>
  );
}
function Cta({ quote }) {
  return (
    <section className="cta-section">
      <div className="wrap cta">
      <div className="cta-copy">
        <p className="eyebrow">Ready for the next step?</p>
        <h2>
          Bring the requirement.
          <br />
          Let’s move it forward.
        </h2>
        <p>
          Share your item list, staffing needs or project brief. We’ll discuss
          the options and next steps.
        </p>
        <div className="cta-services">
          <span>Supply & procurement</span>
          <span>Consultancy & contracting</span>
        </div>
      </div>
      <div className="cta-actions">
        <h3>Talk to Bizz Fleet</h3>
        <button className="button button-gold" onClick={quote}>
          Request a quote
          <ArrowUpRight size={18} />
        </button>
        <a href={`tel:${PHONE}`} className="cta-call">
          <Phone size={21} />
          <span><small>Call us</small><strong>{PHONE}</strong></span>
        </a>
        <a href={`mailto:${EMAIL}`} className="cta-email">
          <Mail size={21} />
          <span><small>Email your requirement</small><span>{EMAIL}</span></span>
        </a>
      </div>
      </div>
    </section>
  );
}
function Home({ navigate, quote }) {
  return (
    <>
      <section className="hero home-hero-refresh home-background-hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <Eyebrow>For your business &amp; project needs</Eyebrow>
            <h1>
              The right support.
              <br />
              <span>For the work ahead.</span>
            </h1>
            <p>
              Supply, procurement, consultancy and contracting — brought
              together around your requirements. Tell us what your business
              or project needs. We’ll work through the next steps with you.
            </p>
            <div className="hero-actions">
              <button className="button button-gold" onClick={quote}>
                Tell us what you need
                <ArrowUpRight size={19} />
              </button>
              <Link
                className="button button-outline"
                to="/services"
                navigate={navigate}
              >
                Explore our services
                <ArrowRight size={19} />
              </Link>
            </div>
          </div>
            <nav className="home-hero-service-links" aria-label="Featured services">
              <Link to="/services/strategic-procurement" navigate={navigate}>Supply & procurement <ArrowUpRight size={17} /></Link>
              <Link to="/services/consultancy-project-support" navigate={navigate}>Consultancy <ArrowUpRight size={17} /></Link>
              <Link to="/services/contracting-project-services" navigate={navigate}>Contracting <ArrowUpRight size={17} /></Link>
            </nav>
        </div>
      </section>
      <div className="principles">
        <div className="wrap">
          {[
            [ShieldCheck, "Quality-focused sourcing"],
            [ClipboardList, "Clear scope & pricing"],
            [Truck, "Coordinated delivery"],
            [Users, "One point of contact"],
          ].map(([Icon, label]) => (
            <div key={label}>
              <Icon size={22} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <section className="section light">
        <div className="wrap">
          <div className="section-intro">
            <div>
              <Eyebrow>More ways we can help</Eyebrow>
              <h2>
                One partner.
                <br />
                Multiple services.
              </h2>
            </div>
            <p>
              Supply is one part of the work. Our services also cover sourcing,
              people, equipment, delivery, consultancy and contracting.
            </p>
          </div>
          <ServiceList navigate={navigate} withImages />
        </div>
      </section>
      <section className="section wrap about-home">
        <div className="about-statement">
          <Eyebrow>Introducing Bizz Fleet</Eyebrow>
          <h2>
            A new company.
            <br />A practical approach.
          </h2>
          <p>
            Established in Bangladesh in 2026, Bizz Fleet Corporation works
            across supply, consultancy and contracting.
          </p>
          <p>
            We focus on understanding what you need, keeping the discussion
            clear and coordinating the agreed scope — whether it is for an
            office, an institution or a project site.
          </p>
          <Link className="text-link" to="/about-us" navigate={navigate}>
            Get to know Bizz Fleet
            <ArrowRight size={19} />
          </Link>
        </div>
        <div className="approach-panel">
          <h3>What you can expect</h3>
          {[
            [
              "A conversation before a quotation",
              "Your specification, quantity, location and timeline shape the sourcing options.",
            ],
            [
              "Practical, requirement-based solutions",
              "Discuss one service or combine several in the same enquiry.",
            ],
            [
              "Clear next steps",
              "Availability, commercial terms and responsibilities are agreed before proceeding.",
            ],
          ].map(([title, desc]) => (
            <div key={title}>
              <Check size={21} />
              <div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section light">
        <div className="wrap">
          <div className="section-intro">
            <div>
              <Eyebrow>Who our services are for</Eyebrow>
              <h2>
                Offices. Institutions.
                <br />
                Projects of different scales.
              </h2>
            </div>
            <Link className="text-link" to="/industries" navigate={navigate}>
              Explore industries
              <ArrowRight size={19} />
            </Link>
          </div>
          <div className="industry-grid">
            {[
              [Building2, "Corporate & office operations"],
              [BriefcaseBusiness, "Government & private institutions"],
              [HardHat, "Construction & infrastructure"],
              [Wrench, "Industrial & commercial facilities"],
            ].map(([Icon, label]) => (
              <article key={label}>
                <Icon size={25} />
                <h3>{label}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap">
        <Eyebrow>How to get started</Eyebrow>
        <h2>A straightforward way to work together.</h2>
        <Process />
      </section>
      <section className="section light">
        <div className="wrap faq-layout">
          <div>
            <Eyebrow>A few useful answers</Eyebrow>
            <h2>
              Before you
              <br />
              get in touch.
            </h2>
            <p>
              Not sure how to put your requirement together? Start with what you
              know.
            </p>
            <Link className="text-link" to="/resources" navigate={navigate}>
              Read the enquiry guide
              <ArrowRight size={19} />
            </Link>
          </div>
          <FAQ />
        </div>
      </section>
      <Cta quote={quote} />
    </>
  );
}

function ContextPhoto({ photo, eager = false, className = "" }) {
  const p = photos[photo];
  return (
    <figure className={`context-photo ${className}`}>
      <Photo name={p.file} alt={p.alt} eager={eager} />
    </figure>
  );
}
function PageTitle({ label, title, emphasis, description, photo, quote, enquiryHref = "/contact" }) {
  return (
    <section className={`intro-hero ${photo ? "photo-title" : ""}`}>
      <div className="wrap">
        <div>
          <Eyebrow>{label}</Eyebrow>
          <h2>
            {title} {emphasis}
          </h2>
          <p>{description}</p>
          <div className="hero-actions">
            {quote ? (
              <button className="button button-gold" onClick={quote}>
                Discuss your requirement <ArrowUpRight size={19} />
              </button>
            ) : (
              <a className="button button-gold" href={enquiryHref}>
                Discuss your requirement <ArrowUpRight size={19} />
              </a>
            )}
            <a className="button button-outline" href={`tel:${PHONE}`}>
              <Phone size={18} /> Speak to us
            </a>
          </div>
        </div>
        {photo && <ContextPhoto photo={photo} eager />}
      </div>
    </section>
  );
}

const serviceHeroTitles = {
  "general-goods-supplies": "Equip your workplace.\nKeep business moving.",
  "construction-materials": "Materials matched to\nthe work ahead.",
  "strategic-procurement": "Find the right goods.\nCoordinate the purchase.",
  "manpower-outsourcing": "The right people for\nthe work you need.",
  "equipment-machinery": "Equipment for the job.\nSupport for the project.",
  "logistics-delivery": "From source to site.\nDelivery, coordinated.",
  "consultancy-project-support": "Bring the brief.\nLet’s work through it.",
  "contracting-project-services": "A clear scope.\nA coordinated approach.",
};

function PageHeader({ path, navigate }) {
  const slug = aliases[path.split("/")[2]] || path.split("/")[2];
  const service = services.find((s) => s.id === slug);
  const pages = {
    "/": ["Bizz Fleet Corporation", "Bangladesh · Established 2026", "Supply, procurement, consultancy and contracting for business and project requirements.", "city"],
    "/services": ["Our services", "One partner. Multiple solutions.", "Explore supply, sourcing, people, equipment, delivery and project support.", "procurement"],
    "/about-us": ["About Bizz Fleet", "Our company", "A supply, consultancy and contracting company established in Bangladesh in 2026.", "city"],
    "/industries": ["Industries we serve", "Business & project requirements", "Practical support for offices, institutions, construction and commercial facilities.", "procurement"],
    "/projects": ["Project services", "Planning & execution", "Bring supply, procurement, personnel and contracting into one coordinated scope.", "construction"],
    "/resources": ["Resources & enquiry guide", "Prepare your requirement", "Useful starting points for a clearer brief and a productive conversation.", "office"],
    "/contact": ["Contact Bizz Fleet", "Let’s start a conversation", "Call, email or prepare an enquiry to discuss your requirements with us.", "city"],
  };
  const key = path === "/about" ? "/about-us" : path;
  const [title, label, description, photo] = service
    ? [service.title, service.label, service.desc, service.photo]
    : pages[key] || ["Page not found", "Bizz Fleet Corporation", "Explore our services or return to the homepage.", "city"];
  return (
    <section className="page-header" style={{ backgroundImage: `linear-gradient(100deg, rgba(7,29,54,.94), rgba(7,29,54,.82)), url('/images/${photos[photo].file}')` }}>
      <div className="wrap">
        <nav className="title-breadcrumbs" aria-label="Breadcrumb">
          {path === "/" ? <span aria-current="page">Home</span> : <>
            <Link to="/" navigate={navigate}>Home</Link>
            <span aria-hidden="true">/</span>
            {service && <><Link to="/services" navigate={navigate}>Services</Link><span aria-hidden="true">/</span></>}
            <span aria-current="page">{title}</span>
          </>}
        </nav>
        <Eyebrow>{label}</Eyebrow>
        <h1>{title}</h1>
        <p className="title-description">{description}</p>
      </div>
    </section>
  );
}

function Services({ path, navigate, quote }) {
  const slug = aliases[path.split("/")[2]] || path.split("/")[2],
    service = services.find((s) => s.id === slug);
  if (!service)
    return (
      <>
        <PageTitle
          label="What we do"
          quote={quote}
          title="One partner. Multiple services."
          description="Supplies, sourcing, people and practical project support. Choose the service you need, or bring several requirements into one conversation."
          photo="procurement"
        />
        <section className="section wrap">
          <div className="section-intro">
            <div>
              <Eyebrow>Explore the full scope</Eyebrow>
              <h2>
                For your business.
                <br />
                For the work ahead.
              </h2>
            </div>
            <p>
              Every enquiry starts with your requirement. Scope, availability,
              responsibilities and commercial terms are discussed before
              confirmation.
            </p>
          </div>
          <ServiceList navigate={navigate} withImages />
        </section>
        <section className="section light">
          <div className="wrap faq-layout">
            <div>
              <Eyebrow>Not sure where to start?</Eyebrow>
              <h2>
                Share the brief.
                <br />
                We can discuss the services.
              </h2>
              <p>
                An item list, a staffing requirement or a project overview is
                enough to begin a conversation.
              </p>
              <button className="button button-navy" onClick={quote}>
                Discuss a requirement
                <ArrowUpRight size={18} />
              </button>
            </div>
            <FAQ />
          </div>
        </section>
        <Cta quote={quote} />
      </>
    );
  const office = service.id === "general-goods-supplies";
  return (
    <>
      <section className={`service-hero ${office ? "office-service" : ""}`}>
        <div className="wrap">
          <div className="service-hero-grid">
            <div>
              <Eyebrow>{service.label}</Eyebrow>
              <h2>{serviceHeroTitles[service.id]}</h2>
              <p>{service.intro}</p>
              <div className="hero-actions">
                <button className="button button-gold" onClick={quote}>
                  {service.cta}
                  <ArrowUpRight size={19} />
                </button>
                <a href={`tel:${PHONE}`} className="button button-outline">
                  <Phone size={18} />
                  Speak to us
                </a>
              </div>
            </div>
            <ContextPhoto photo={service.photo} eager />
          </div>
        </div>
      </section>
      <section className="section wrap">
        <div className="section-intro">
          <div>
            <Eyebrow>
              {office || service.id === "construction-materials"
                ? "What we can source"
                : "Service scope"}
            </Eyebrow>
            <h2>{service.heading}</h2>
          </div>
          <p>
            These are starting points for a discussion. The final scope is
            shaped around your specifications, location and timeline.
          </p>
        </div>
        <div className="category-grid">
          {service.scope.map(([title, desc], i) => {
            const Icon = office
              ? officeCategories[i][2]
              : [ClipboardList, Package, Users, ShieldCheck][i];
            return (
              <article key={title}>
                <Icon size={30} strokeWidth={1.7} />
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section light">
        <div className="wrap service-requirements">
          <div>
            <Eyebrow>Planning the requirement</Eyebrow>
            <h2>{service.storyTitle}</h2>
            <p>{service.story}</p>
            <div className="use-cases">
              {service.uses.map((x) => (
                <span key={x}>
                  <Check size={17} />
                  {x}
                </span>
              ))}
            </div>
          </div>
          <aside className="brief-card">
            <h3>For a useful conversation, share:</h3>
            <ol>
              {service.brief.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ol>
            <p>Send the brief and any supporting documents.</p>
            <a href={`mailto:${EMAIL}`} className="text-link">
              <Mail size={18} />
              {EMAIL}
            </a>
          </aside>
        </div>
      </section>
      <section className="section wrap">
        <Eyebrow>How we get started</Eyebrow>
        <h2>From the brief to the next step.</h2>
        <Process />
      </section>
      <section className="section light">
        <div className="wrap faq-layout">
          <div>
            <Eyebrow>{service.title}</Eyebrow>
            <h2>
              Your questions,
              <br />
              answered.
            </h2>
            <p>Have a different question? Call or email us with the details.</p>
          </div>
          <div className="faq">
            {service.faq.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <Plus size={18} />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap">
        <div className="section-intro">
          <div>
            <Eyebrow>Related services</Eyebrow>
            <h2>Bring the other pieces together.</h2>
          </div>
          <Link to="/services" navigate={navigate} className="text-link">
            View all services
            <ArrowRight size={18} />
          </Link>
        </div>
        <div className="related-grid">
          {service.related
            .map((id) => services.find((s) => s.id === id))
            .map((s) => (
              <Link
                key={s.id}
                to={`/services/${s.id}`}
                navigate={navigate}
                className="related-card"
              >
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span>
                  Explore service
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            ))}
        </div>
      </section>
      <Cta quote={quote} />
    </>
  );
}

function About({ navigate, quote }) {
  return (
    <>
      <PageTitle
        label="About Bizz Fleet · Established 2026"
        title="A new journey. A practical purpose."
        description="Bizz Fleet Corporation began its journey in Bangladesh in 2026 as a supply, consultancy and contracting company."
        photo="city"
      />
      <section className="section wrap about-home">
        <div>
          <Eyebrow>Why we are here</Eyebrow>
          <h2>
            Different needs.
            <br />
            One place to start.
          </h2>
          <p className="intro-paragraph">
            An office needs goods. A project needs materials, people and
            coordination. A procurement requirement needs a clear specification
            and suitable sourcing options.
          </p>
          <p>
            We bring these conversations together. Our work covers general and
            office supplies, construction materials, procurement, manpower,
            equipment, delivery, consultancy and contracting.
          </p>
          <p>
            Each requirement is discussed on its own terms: what is needed,
            where it is needed, when it is needed and who is responsible for
            each part of the work.
          </p>
          <Link className="text-link" to="/services" navigate={navigate}>
            Explore our services
            <ArrowRight size={18} />
          </Link>
        </div>
        <div className="company-facts">
          <span className="established">
            2026<small>Our journey begins</small>
          </span>
          <dl>
            <div>
              <dt>Based in</dt>
              <dd>Bangladesh</dd>
            </div>
            <div>
              <dt>Business scope</dt>
              <dd>Supply, consultancy & contracting</dd>
            </div>
            <div>
              <dt>Our commitment</dt>
              <dd>Supplying trust. Delivering value.</dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="section light">
        <div className="wrap">
          <div className="section-intro">
            <div>
              <Eyebrow>What guides the work</Eyebrow>
              <h2>
                Values with a<br />
                practical meaning.
              </h2>
            </div>
            <p>
              Integrity, reliability, teamwork, quality and commitment guide how
              we approach a requirement.
            </p>
          </div>
          <div className="values-grid">
            {[
              [
                "Integrity",
                "Keep the discussion honest about scope, availability and responsibilities.",
              ],
              [
                "Reliability",
                "Plan around the agreed requirement and communicate changes clearly.",
              ],
              [
                "Teamwork",
                "Coordinate with the client, suppliers and people involved in the work.",
              ],
              [
                "Quality",
                "Use the specification to guide sourcing and clarify inspection needs.",
              ],
              [
                "Commitment",
                "Follow through on the agreed scope and the next steps.",
              ],
            ].map(([title, desc], i) => (
              <article key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap">
        <div className="section-intro">
          <div>
            <Eyebrow>Working together</Eyebrow>
            <h2>
              Listen first.
              <br />
              Keep the next steps clear.
            </h2>
          </div>
          <p>
            We begin with a brief, discuss the options and agree the
            responsibilities. No requirement is treated as identical to the
            last.
          </p>
        </div>
        <Process />
      </section>
      <Cta quote={quote} />
    </>
  );
}

function Industries({ navigate, quote }) {
  return (
    <>
      <PageTitle
        label="Industries & organisations"
        title="Different workplaces. Different requirements."
        description="Our services can support business operations, institutional purchasing, construction work and commercial facilities. The scope depends on the requirement you bring."
        photo="procurement"
      />
      <section className="section wrap industry-sections">
        {industries.map((industry, i) => (
          <article
            className={`industry-row ${i % 2 ? "reverse" : ""}`}
            key={industry.title}
          >
            <ContextPhoto photo={industry.photo} />
            <div>
              <Eyebrow>Where our services fit</Eyebrow>
              <h2>{industry.title}</h2>
              <p>{industry.desc}</p>
              <ul className="check-list">
                {industry.needs.map((x) => (
                  <li key={x}>
                    <Check size={17} />
                    {x}
                  </li>
                ))}
              </ul>
              <div className="industry-services">
                {industry.related
                  .map((id) => services.find((s) => s.id === id))
                  .map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.id}`}
                      navigate={navigate}
                    >
                      {s.title}
                      <ArrowUpRight size={16} />
                    </Link>
                  ))}
              </div>
            </div>
          </article>
        ))}
      </section>
      <Cta quote={quote} />
    </>
  );
}
function Projects({ navigate, quote }) {
  return (
    <>
      <PageTitle
        label="Project services"
        title="Bring the work into one clear scope."
        description="Supply, people, equipment and coordination for government, private and corporate project requirements. Start with the work you need to carry out."
        photo="construction"
      />
      <section className="section wrap">
        <div className="section-intro">
          <div>
            <Eyebrow>Ways we can support a project</Eyebrow>
            <h2>
              Resources and coordination,
              <br />
              planned together.
            </h2>
          </div>
          <p>
            The examples below describe service applications. Specific
            capabilities and responsibilities are confirmed through the project
            brief.
          </p>
        </div>
        <div className="project-scenarios">
          {[
            [
              "Business & facility requirements",
              "An office setup, operational purchasing or a defined facility-work scope.",
              "office",
              ["general-goods-supplies", "strategic-procurement"],
            ],
            [
              "Construction & infrastructure requirements",
              "Material schedules, equipment, workforce and delivery needs for site activities.",
              "equipment",
              ["construction-materials", "contracting-project-services"],
            ],
            [
              "Procurement & coordination requirements",
              "Multiple items, suppliers or project stages that need a clear sourcing and coordination plan.",
              "procurement",
              ["strategic-procurement", "consultancy-project-support"],
            ],
          ].map(([title, desc, photo, ids]) => (
            <article key={title}>
              <ContextPhoto photo={photo} />
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
                {ids
                  .map((id) => services.find((s) => s.id === id))
                  .map((s) => (
                    <Link
                      className="text-link"
                      key={s.id}
                      to={`/services/${s.id}`}
                      navigate={navigate}
                    >
                      {s.title}
                      <ArrowUpRight size={16} />
                    </Link>
                  ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section light">
        <div className="wrap service-requirements">
          <div>
            <Eyebrow>Start with the brief</Eyebrow>
            <h2>
              A useful project discussion
              <br />
              starts with the details.
            </h2>
            <p>
              Share the current stage, location and target timeline. We can
              discuss the services needed and how the work might be organised.
            </p>
            <button className="button button-navy" onClick={quote}>
              Discuss your project
              <ArrowUpRight size={18} />
            </button>
          </div>
          <aside className="brief-card">
            <h3>Include what you have:</h3>
            <ul className="check-list">
              {[
                "Scope of work and expected deliverables",
                "Drawings, specifications or BOQ",
                "Location, access and schedule",
                "Quality, supervision and documentation requirements",
              ].map((x) => (
                <li key={x}>
                  <Check size={17} />
                  {x}
                </li>
              ))}
            </ul>
            <Link className="text-link" to="/resources" navigate={navigate}>
              Read the enquiry guide
              <ArrowRight size={18} />
            </Link>
          </aside>
        </div>
      </section>
      <Cta quote={quote} />
    </>
  );
}

function Resources({ navigate, quote }) {
  return (
    <>
      <PageTitle
        label="Resources · Enquiry guide"
        title="A better brief. A more useful conversation."
        description="Use these checklists to explain what you need. Start with the details you know; the remaining points can be discussed."
        photo="office"
      />
      <section className="section wrap">
        <div className="resources-grid">
          {[
            [
              "Goods & materials",
              [
                "Item names, specifications and preferred brands",
                "Quantities and units of measurement",
                "Delivery location and preferred dates",
                "Item list or BOQ, if available",
              ],
            ],
            [
              "Manpower",
              [
                "Roles, responsibilities and skills needed",
                "Number of personnel and duration",
                "Work location, hours and supervision",
                "Safety and documentation requirements",
              ],
            ],
            [
              "Equipment & delivery",
              [
                "Equipment type, capacity or consignment details",
                "Dimensions, weight and handling needs",
                "Purchase, duration or transport requirement",
                "Pickup, destination and access details",
              ],
            ],
            [
              "Consultancy & contracting",
              [
                "Project overview and current stage",
                "Scope and expected deliverables",
                "Questions, responsibilities and documentation",
                "Location, timeline and supporting drawings",
              ],
            ],
          ].map(([title, items], i) => (
            <article key={title}>
              <span className="step-number">0{i + 1}</span>
              <h2>{title}</h2>
              <ul className="check-list">
                {items.map((x) => (
                  <li key={x}>
                    <Check size={17} />
                    {x}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="section light">
        <div className="wrap service-requirements">
          <div>
            <Eyebrow>A simple starting point</Eyebrow>
            <h2>
              Not everything needs
              <br />
              to be final yet.
            </h2>
            <p>
              If the quantities, brands or scope are still being decided, say so
              in the enquiry. Clear assumptions make it easier to discuss
              appropriate options.
            </p>
            <Link to="/services" navigate={navigate} className="text-link">
              Find the relevant service
              <ArrowRight size={18} />
            </Link>
          </div>
          <aside className="brief-card">
            <h3>Send an item list or BOQ</h3>
            <p>
              Email the document with your name, phone number, company, location
              and the date you need the goods or services.
            </p>
            <a className="text-link" href={`mailto:${EMAIL}`}>
              <Mail size={18} />
              {EMAIL}
            </a>
            <p className="brief-footnote">
              Include any essential brands, specifications or approval
              requirements.
            </p>
          </aside>
        </div>
      </section>
      <section className="section wrap faq-layout">
        <div>
          <Eyebrow>Before you get in touch</Eyebrow>
          <h2>
            Useful answers
            <br />
            for your enquiry.
          </h2>
        </div>
        <FAQ />
      </section>
      <Cta quote={quote} />
    </>
  );
}

function Contact({ quote }) {
  return (
    <>
      <PageTitle
        label="Contact Bizz Fleet"
        enquiryHref="#prepare-enquiry"
        title="Tell us what you need."
        description="An item list, a staffing requirement, equipment to source or a project to discuss — start with a call, an email or a prepared enquiry."
        photo="city"
      />
      <section className="section wrap contact-layout">
        <div className="contact-details">
          <Eyebrow>Talk to us directly</Eyebrow>
          <a href={`tel:${PHONE}`}>
            <Phone size={22} />
            <span>
              <small>Call Bizz Fleet</small>
              <strong>{PHONE}</strong>
            </span>
            <ArrowUpRight size={20} />
          </a>
          <a href={`mailto:${EMAIL}`}>
            <Mail size={22} />
            <span>
              <small>Email your requirement</small>
              <strong>{EMAIL}</strong>
            </span>
            <ArrowUpRight size={20} />
          </a>
          <div className="contact-note">
            <h3>Start with what you know.</h3>
            <p>
              Include the requirement, quantity or scope, location and preferred
              date. We can work through the remaining details together.
            </p>
            <span>Bangladesh · Established 2026</span>
          </div>
        </div>
        <div className="contact-form-card" id="prepare-enquiry">
          <Eyebrow>Prepare your enquiry</Eyebrow>
          <h2>A few details to begin.</h2>
          <p>
            Complete the brief, then review and send the email draft from your
            own email app.
          </p>
          <QuoteForm />
        </div>
      </section>
      <Cta quote={quote} />
    </>
  );
}
function NotFound({ navigate }) {
  return (
    <>
      <PageTitle
        label="Page not found"
        title="Let’s get you to the right place."
        description="This page does not exist. Explore our services or return to the homepage."
        photo="city"
      />
      <section className="section wrap">
        <Link to="/" navigate={navigate} className="button button-navy">
          Back to home
          <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}
function usePageMotion(path) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const nodes = [
      ...document.querySelectorAll("main section, main > .principles, main .industry-row"),
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -25px 0px" },
    );
    nodes.forEach((node) => {
      node.classList.add("reveal-ready");
      node
        .querySelectorAll(
          ".service-card,.supply-card,.category-grid > article,.industry-grid > article,.values-grid > article,.related-card,.resources-grid > article,.process-grid > article,.project-scenarios > article",
        )
        .forEach((card, i) => {
          card.classList.add("reveal-item");
          card.style.setProperty("--stagger", `${Math.min(i, 5) * 65}ms`);
        });
      observer.observe(node);
    });
    return () => {
      observer.disconnect();
      nodes.forEach((node) =>
        node.classList.remove("reveal-ready", "revealed"),
      );
    };
  }, [path]);
}
export default function Design() {
  const [path, setPath] = useState(window.location.pathname),
    [quoteOpen, setQuoteOpen] = useState(false);
  usePageMotion(path);
  const closeQuote = useCallback(() => setQuoteOpen(false), []);
  function navigate(to) {
    if (to !== path) window.history.pushState({}, "", to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: "instant" });
  }
  useEffect(() => {
    const pop = () => {
      setPath(window.location.pathname);
      window.scrollTo(0, 0);
    };
    window.addEventListener("popstate", pop);
    return () => window.removeEventListener("popstate", pop);
  }, []);

  useEffect(() => {
    const slug = aliases[path.split("/")[2]] || path.split("/")[2];
    const service = services.find((s) => s.id === slug);
    const titles = {
      "/": "Supply, Consultancy & Contracting",
      "/services": "Our services",
      "/about-us": "About Bizz Fleet",
      "/about": "About Bizz Fleet",
      "/industries": "Industries",
      "/projects": "Project services",
      "/resources": "Enquiry guide",
      "/contact": "Contact",
    };
    document.title = `${service?.title || titles[path] || "Page not found"} | Bizz Fleet Corporation`;
    const description = document.querySelector('meta[name="description"]');
    if (description)
      description.content =
        service?.intro ||
        "Bizz Fleet Corporation is a supply, procurement, consultancy and contracting company established in Bangladesh in 2026. Discuss business goods, materials, manpower, equipment and project services.";
  }, [path]);
  let content;
  if (path.startsWith("/services"))
    content = (
      <Services
        key={path}
        path={path}
        navigate={navigate}
        quote={() => setQuoteOpen(true)}
      />
    );
  else if (path.startsWith("/about"))
    content = <About navigate={navigate} quote={() => setQuoteOpen(true)} />;
  else if (path === "/industries")
    content = (
      <Industries navigate={navigate} quote={() => setQuoteOpen(true)} />
    );
  else if (path.startsWith("/projects"))
    content = <Projects navigate={navigate} quote={() => setQuoteOpen(true)} />;
  else if (path.startsWith("/resources"))
    content = (
      <Resources navigate={navigate} quote={() => setQuoteOpen(true)} />
    );
  else if (path.startsWith("/contact")) content = <Contact quote={() => setQuoteOpen(true)} />;
  else if (path === "/")
    content = <Home navigate={navigate} quote={() => setQuoteOpen(true)} />;
  else content = <NotFound navigate={navigate} />;
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header
        key={path}
        path={path}
        navigate={navigate}
        quote={() => setQuoteOpen(true)}
      />
      <main id="main">
        {path !== "/" && <PageHeader path={path} navigate={navigate} />}
        {content}
      </main>
      <Footer navigate={navigate} quote={() => setQuoteOpen(true)} />
      {quoteOpen && (
        <QuoteModal
          close={closeQuote}
          service={
            services.find(
              (s) =>
                s.id === (aliases[path.split("/")[2]] || path.split("/")[2]),
            )?.title
          }
        />
      )}
    </>
  );
}
