import {
  ArrowUpRight,
  BrainCircuit,
  Bot,
  FileCheck2,
  Database,
  ChartNoAxesCombined,
  Network,
  ScanFace,
  ShieldCheck,
  BookOpenCheck,
  Activity,
  Sparkles,
} from "lucide-react";
import "../../../public/assets/styles/Projects.css";

const projects = [
  {
    title: "AI in Environment",
    category: "Environmental AI",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    icon: ScanFace,
    description:
      "AI-driven solutions for monitoring and managing environmental parameters.",
  },
  {
    title: "Beneficiary Deduplication and AI-enabled Text / Metadata Search",
    category: "Search & Deduplication",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
    icon: Bot,
    description:
      "Accurate beneficiary identification using face, text, and metadata analysis.",
  },
  {
    title: "AI in Agriculture",
    category: "AgriTech AI",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    icon: ChartNoAxesCombined,
    description:
      "AI applications for crop health, yield optimization, and smart agriculture.",
  },
  {
    title:
      "AI-Driven / AI-enabled Information Extraction from ID Cards / Passbooks etc",
    category: "Document Intelligence",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
    icon: FileCheck2,
    description:
      "Automated OCR and information extraction from official identity and bank documents.",
  },
  {
    title: "AI-Enabled Similarity Search",
    category: "Vector Search",
    image:
      "https://images.unsplash.com/photo-1455390582262-044c376d9f5a?auto=format&fit=crop&w=900&q=80",
    icon: Network,
    description:
      "Discover closely related records and patterns through intelligent visual and text matching.",
  },
  {
    title: "NLP Services",
    category: "Language Technology",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    icon: BrainCircuit,
    description:
      "Natural Language Processing services for text interpretation, translation, and communication.",
  },
  {
    title: "AI in Smart Traffic Management",
    category: "Smart City & Mobility",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    icon: Database,
    description:
      "Intelligent real-time traffic flow analysis, congestion management, and monitoring.",
  },
  {
    title: "AI in Fisheries",
    category: "Aquaculture AI",
    image:
      "https://images.unsplash.com/photo-1568234928966-359c35dd8327?auto=format&fit=crop&w=900&q=80",
    icon: ShieldCheck,
    description:
      "Data-driven analytics for aquatic resource tracking, fishery management, and growth estimation.",
  },
  {
    title: "AI in Environment / Public Health Engineering",
    category: "Public Health AI",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80",
    icon: BookOpenCheck,
    description:
      "Predictive analytics and smart insights for public health infrastructure and environmental quality.",
  },
  {
    title: "AI in Animal Husbandry / Dairy",
    category: "Livestock Intelligence",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    icon: FileCheck2,
    description:
      "Smart monitoring, health tracking, and yield predictions for livestock and dairy management.",
  },
  {
    title: "AI in Data Analytics / PoC",
    category: "Data Analytics",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    icon: Activity,
    description:
      "Proof-of-concept solutions and advanced analytics to support data-driven governance decisions.",
  },
];

export default function ImpactPreview() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-eyebrow">
          <span className="projects-eyebrow-line" />
          PROJECTS & PoCs
        </div>

        <div className="projects-heading">
          <div>
            <h2>
              Ideas into <span>Impact.</span>
            </h2>
            <p>
              Exploring innovative AI solutions through research,
              experimentation and real-world applications.
            </p>
          </div>

          <div className="projects-total">
            <strong>{String(projects.length).padStart(2, "0")}</strong>
            <span>INITIATIVES</span>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                className="project-card"
                key={project.title}
                style={{ "--card-index": index }}
              >
                <div className="project-image-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />

                  <div className="project-image-overlay" />

                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="project-icon">
                    <Icon size={21} />
                  </span>

                  <span className="project-image-label">COE-AI / RESEARCH</span>
                </div>

                <div className="project-content">
                  <span className="project-category">{project.category}</span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <a
                    className="project-link"
                    href="#contact"
                    aria-label={`Enquire about ${project.title}`}
                  >
                    Explore project <ArrowUpRight size={16} />
                  </a>
                </div>

                <div className="project-bottom-accent" />
              </article>
            );
          })}
        </div>

        <div className="projects-footer">
          <span className="projects-footer-dot" />
          RESEARCH · INNOVATION · REAL-WORLD IMPACT
          <a href="#contact">
            Collaborate with us <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
