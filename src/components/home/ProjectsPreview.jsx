import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SectionKicker from "../common/SectionKicker";
import ProjectCard from "../projects/ProjectCard";
import { projects } from "../../data/projects";

function ProjectsPreview() {
  // set project
  const featuredProjects = projects.slice(0, 12);
  
  return (
    <section className="projects-section section-pad" id="projects">
      <SectionKicker number="03" label="SELECTED WORK" />
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
        {featuredProjects.map((project, index) => (
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

        <Link to="/projects">
          View all projects <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}

export default ProjectsPreview;
