import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Rocket,
  GitFork,
  CalendarDays,
  FileText,
  LayoutGrid,
  ArrowRight,
  X,
  ScanFace,
} from "lucide-react";

import "./FaceAntispoof.css";


const galleryImages = [
  {
    id: 1,
    src: "/assets/images/face1.jpg",
    alt: "Face Antispoof image 1",
  },
  {
    id: 2,
    src: "/assets/images/face2.jpg",
    alt: "Face Antispoof image 2",
  },
  {
    id: 3,
    src: "/assets/images/face3.jpg",
    alt: "Face Antispoof image 3",
  },
];

function Overview() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="fa-overview">
      <div className="fa-section-heading">
        <span className="fa-heading-line" />
        <h2>OVERVIEW</h2>
      </div>

      <p className="fa-description">
        Face anti-spoofing is essential to prevent face recognition systems
        from a security breach.
      </p>

      {expanded && (
        <div className="fa-expanded-description">
          <p>
            Face Antispoof technology helps determine whether a face presented
            to a recognition system belongs to a real person or is an attempt
            to deceive the system using a photograph, video, or other
            presentation attack.
          </p>

          <p>
            This module helps improve identity verification and the security
            of face recognition applications.
          </p>
        </div>
      )}

      <button
        className="fa-description-button"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {expanded ? (
          <ChevronUp size={16} />
        ) : (
          <ChevronDown size={16} />
        )}

        {expanded ? "Show Less" : "Read Full Description"}
      </button>
    </section>
  );
}

function ModuleGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="fa-gallery-section">
      <div className="fa-section-heading fa-gallery-heading">
        
        <LayoutGrid size={25} className="fa-gallery-icon" />
        <h2>MODULE GALLERY</h2>
      </div>

      <div className="fa-gallery-grid">
        {galleryImages.map((image) => (
          <button
            key={image.id}
            className="fa-gallery-card"
            onClick={() => setSelectedImage(image)}
            aria-label={`View ${image.alt}`}
          >
            <img src={image.src} alt={image.alt} />

            <span className="fa-gallery-overlay">
              View Image <ArrowRight size={17} />
            </span>
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fa-image-modal"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="fa-modal-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <X size={25} />
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

function ModuleSidebar() {
  const handleLaunch = () => {
    // Replace this with your actual module URL.
    window.open("/face-antispoof/", "_blank", "noopener, noreferrer");
  };

  return (
    <aside className="fa-sidebar">
      <button className="fa-launch-button" onClick={handleLaunch}>
        <Rocket size={20} fill="currentColor" />
        <span>Launch Module</span>
        <ArrowRight size={20} className="fa-launch-arrow" />
      </button>

      <div className="fa-info-card">
        <div className="fa-info-icon">
          <GitFork size={20} />
        </div>

        <div className="fa-info-content">
          <span>Version</span>
          <strong>v1</strong>
        </div>
      </div>

      <div className="fa-info-card">
        <div className="fa-info-icon">
          <CalendarDays size={20} />
        </div>

        <div className="fa-info-content">
          <span>Release Date</span>
          <strong>March 11, 2026</strong>
        </div>
      </div>

      <div className="fa-documents">
        <div className="fa-documents-heading">
          <span className="fa-documents-line" />
          <h3>SUPPORTING DOCUMENTS</h3>
        </div>

        <div className="fa-empty-documents">
          <FileText size={17} />
          <span>No documents available.</span>
        </div>
      </div>
    </aside>
  );
}

export default function FaceAntispoof() {
  return (
    <main className="fa-page">
      <div className="fa-container">
        <article className="fa-main-card">
          <div className="fa-title-row">
            <div className="fa-title-icon">
             <ScanFace size={25} className="fa-gallery-icon" />
            </div>
            <h1>Face Antispoof</h1>
          </div>
          <Overview />
          <ModuleGallery />
        </article>
        <ModuleSidebar />
      </div>
    </main>
  );
}