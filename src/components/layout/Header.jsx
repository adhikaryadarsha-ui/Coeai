import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  Menu,
  ChevronDown,
  Settings,
  Sprout,
  Scan,
  GraduationCap,
  Leaf,
  Bug,
  ScanSearch,
  Wheat,
  Microscope,
  PawPrint,
  Fingerprint,
  Stethoscope,
  Fish,
  ScanFace,
  BrainCircuit,
  Users,
  Video,
  ShieldCheck,
  UserSearch,
  UserCheck,
  Wind,
  Droplets,
  Contact,
  FileSearch,
  FileCheck,
  Code,
  ScanText,
  CopyCheck,
  TrafficCone,
  Search,
  MessageSquareText,
  CarFront,
  Activity,
  ScanLine,
  Images,
  Files,
  Copy,
  TextSearch,
  Tags,
  FileText,
  Languages,
  HeartPulse,
  X,
} from "lucide-react";

import "./header.css";

const projectGroups = [
  {
    title: "AI In Agriculture",
    icon: Sprout,
    items: [
      { title: "AI Enabled Crop Liveness Detection", icon: Scan },
      {
        title: "Cardamom Leaf Disease Classification Training Demo",
        icon: GraduationCap,
      },
      { title: "Cardamom Leaf Disease Identification", icon: Leaf },
      { title: "Farm Insect Detection", icon: Bug },
      { title: "Potato Leaf Disease Detection", icon: ScanSearch },
      { title: "Rice Leaf Disease Detection", icon: Wheat },
      { title: "Tea Disease Classification", icon: Microscope },
      { title: "Tomato Leaf Disease Detection", icon: Sprout },
      { title: "Wheat Leaf Disease Detection", icon: Wheat },
    ],
  },
  {
    title: "AI in Animal Resources Husbandry",
    icon: PawPrint,
    items: [
      { title: "AI-Enabled Cattle Identification System", icon: Scan },
      {
        title: "AI-Enabled Unique Horse Identification System",
        icon: Fingerprint,
      },
      { title: "Lumpy Skin Disease Classification", icon: Stethoscope },
    ],
  },
  {
    title: "AI In Fisheries",
    icon: Fish,
    items: [
      { title: "Fish Diseases Classification", icon: Microscope },
      { title: "Fish Species Classification", icon: Fish },
    ],
  },
  {
    title:
      "AI In Biometry / Face Recognition / Surveillance / Person Identification / Image-Video Analytics",
    icon: ScanFace,
    items: [
      { title: "AI Shirshank", icon: BrainCircuit },
      { title: "Crowd Count", icon: Users },
      { title: "Face-Based Attendance From Live Video", icon: Video },
      { title: "Face Antispoof", icon: ShieldCheck },
      { title: "Face Count", icon: ScanFace },
      { title: "Face Identification", icon: UserSearch },
      { title: "Face Verification System (1:1)", icon: UserCheck },
      { title: "Low Resolution Face Recognition", icon: Scan },
    ],
  },
  {
    title: "AI In Environment / Public Health Engineering",
    icon: Leaf,
    items: [
      { title: "Air Quality Index", icon: Wind },
      { title: "Water Quality Index", icon: Droplets },
    ],
  },
  {
    title:
      "AI Nibbrit / AI Enabled Information Extraction From ID Cards / Passbooks etc",
    icon: Contact,
    items: [
      { title: "AI-Anurup", icon: FileSearch },
      { title: "AI-Anurup V2", icon: FileCheck },
      { title: "AI Anurup V2 DEV", icon: Code },
      {
        title:
          "Document Image Classification And Information Fetching (Aadhaar, Passport, PAN Voter Id, Driving Licence)",
        icon: ScanText,
      },
      {
        title: "Marksheet Detection & Information Extraction",
        icon: GraduationCap,
      },
      { title: "Text Based Beneficiary De-Duplication", icon: CopyCheck },
    ],
  },
  {
    title: "AI In Smart Traffic Management",
    icon: TrafficCone,
    items: [
      { title: "Vehicle Detection", icon: CarFront },
      { title: "Traffic Flow Analysis", icon: Activity },
      { title: "Number Plate Recognition", icon: ScanLine },
    ],
  },
  {
    title: "AI Enabled Similarity Search",
    icon: Search,
    items: [
      { title: "Image Similarity Search", icon: Images },
      { title: "Document Similarity Search", icon: Files },
      { title: "Visual Duplicate Detection", icon: Copy },
    ],
  },
  {
    title: "NLP Services",
    icon: MessageSquareText,
    items: [
      { title: "Text Classification", icon: TextSearch },
      { title: "Named Entity Recognition", icon: Tags },
      { title: "Text Summarization", icon: FileText },
      { title: "Language Translation", icon: Languages },
      { title: "Sentiment Analysis", icon: HeartPulse },
    ],
  },
];

const topLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about", dropdown: false },
  { label: "AI Sanlaap", to: "/ai-sanlaap", dropdown: true },
  { label: "FRBAS", to: "/frbas" },
  { label: "Bill Data Extraction", to: "/bill-data-extraction" },
  {
    label: "Data Retention & Archival Policy",
    to: "/data-retention-policy",
  },
  { label: "KEA", to: "/kea" },
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      if (window.scrollY > 30) setProjectOpen(false);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setProjectOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const closeMenu = () => {
    setMobileOpen(false);
    setProjectOpen(false);
  };

  return (
    <header className={`coe-header ${scrolled ? "coe-scrolled" : ""}`}>
      <div className="coe-navbar">
        <Link to="/" className="coe-brand" onClick={closeMenu}>
          <img src="/assets/images/ailab_logo.png" alt="AI Lab" />
        </Link>

        <button
          className="coe-mobile-toggle"
          onClick={() => {
            setMobileOpen((value) => !value);
            setProjectOpen(false);
          }}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>

        <nav className={`coe-navigation ${mobileOpen ? "coe-nav-open" : ""}`}>
          <div className="coe-nav-links">
            {topLinks.slice(0, 2).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `coe-nav-link ${isActive ? "coe-active" : ""}`
                }
              >
                {item.label}
                {item.dropdown && <ChevronDown size={14} />}
              </NavLink>
            ))}

            {/* PROJECT & OPS MEGA MENU */}
            <div
              className={`coe-mega-wrapper ${projectOpen ? "coe-mega-open" : ""
                }`}
              onMouseEnter={() => {
                if (window.innerWidth > 900) {
                  setProjectOpen(true);
                }
              }}
              onMouseLeave={(event) => {
                if (
                  window.innerWidth > 900 &&
                  !event.currentTarget.contains(event.relatedTarget)
                ) {
                  setProjectOpen(false);
                }
              }}
            >
              <div className="coe-project-trigger">
                <Link
                  to="/projects"
                  onClick={closeMenu}
                  className="coe-nav-link coe-project-link"
                >
                  Project &amp; Pocs
                </Link>

                <button
                  className="coe-project-toggle"
                  onClick={() => setProjectOpen((value) => !value)}
                  aria-label="Toggle Project and Ops menu"
                  aria-expanded={projectOpen}>
                  <ChevronDown size={15} />
                </button>
              </div>

              <div className="coe-mega-panel" aria-hidden={!projectOpen}>
                <div className="coe-mega-grid">
                  {projectGroups.map((group) => {
                    const Icon = group.icon;

                    return (
                      <section className="coe-mega-category" key={group.title}>
                        <Link
                          to={`/projects/${slugify(group.title)}`}
                          className="coe-category-heading"
                          onClick={closeMenu} >
                          <group.icon
                            className="coe-category-icon"
                            size={25}
                            strokeWidth={1.8}/>

                          <span>{group.title}</span>
                        </Link>

                        {group.items.length > 0 && (
                          <div className="coe-category-items">
                            {group.items.map((item) => {
                              const ItemIcon = item.icon;
                              return (
                                <Link
                                  key={item.title}
                                  to={`/projects/${slugify(item.title)}`}
                                  className="coe-project-item"
                                  onClick={closeMenu}>
                                  {ItemIcon && (
                                    <ItemIcon
                                      className="coe-project-icon"
                                      size={16}
                                      strokeWidth={1.8}
                                    />
                                  )}

                                  <span>{item.title}</span>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </section>
                    );
                  })}
                </div>
              </div>
            </div>

            {topLinks.slice(2).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `coe-nav-link ${isActive ? "coe-active" : ""}`
                }
              >
                {item.label}
                {item.dropdown && <ChevronDown size={14} />}
              </NavLink>
            ))}
          </div>

          <Link
            to="/super-admin"
            className="coe-admin-button"
            onClick={closeMenu}>
            Super Admin
          </Link>

          <button
            className="coe-settings"
            aria-label="Settings"
            onClick={() => {
              closeMenu();
              window.location.href = "/settings";
            }}
          >
            <Settings size={22} />
          </button>
        </nav>
      </div>

      <button
        className={`coe-mobile-overlay ${mobileOpen ? "coe-overlay-visible" : "" }`}
        aria-label="Close navigation"
        onClick={closeMenu}/>
    </header>
  );
}

export default Header;
