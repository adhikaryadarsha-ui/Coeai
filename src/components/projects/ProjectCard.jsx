import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project, index }) {
  const [active, setActive] = useState(false);
  const Icon = project.icon;

  return (
    <button
      className={`project-card reveal ${active ? "project-active" : ""}`}
      style={{ transitionDelay: `${(index % 4) * 55}ms` }}
      onClick={() => setActive(!active)}
      aria-expanded={active}
    >
      <div className="project-card-top">
        <span className="project-icon">
          <Icon size={21} />
        </span>

        {/* <span className="project-index">
          {String(index + 1).padStart(2, "0")}
        </span> */}
      </div>

      <span className="project-type">{project.type}</span>
      <h3>{project.title}</h3>
      <p>{project.desc}</p>

      <span className="project-more">
        {active ? "Selected project" : "Explore initiative"}
        <ArrowUpRight size={14} />
      </span>
    </button>
  );
}

export default ProjectCard;
