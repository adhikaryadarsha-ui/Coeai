import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";
// import SectionKicker from "../components/common/SectionKicker";

function Projects() {
  return (
    <section className="projects-section section-pad" >
      {/* <SectionKicker number="03" label="SELECTED WORK" /> */}

      <div className="projects-heading reveal">
        <div>
           <h2>Deployed <span>Projects</span></h2>
          <p>
            A growing portfolio of applied AI initiatives built around real
            needs.
          </p>
        </div>

        <span className="project-count">
          {projects.length}
          <small>INITIATIVES</small>
        </span>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="project-note reveal">
        <span className="note-icon">
          <Sparkles size={18} />
        </span>

        <p>
          <strong>Built around real challenges.</strong> Each initiative is an
          opportunity to make technology more useful, accessible and
          accountable.
        </p>

        <Link to="/contact">
          Discuss a collaboration <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}

export default Projects;
