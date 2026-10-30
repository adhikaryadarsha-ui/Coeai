import {
  BrainCircuit,
  Cpu,
  ChartNoAxesCombined,
  Network,
  ArrowUpRight,
} from "lucide-react";

import SectionKicker from "../common/SectionKicker";

const services = [
  {
    n: "01",
    icon: BrainCircuit,
    title: "AI / ML Model Development",
    desc: "Designing, training and validating models for complex real-world problems.",
  },
  {
    n: "02",
    icon: Cpu,
    title: "API Creation & Publishing",
    desc: "Turning intelligent capabilities into secure, reusable services.",
  },
  {
    n: "03",
    icon: ChartNoAxesCombined,
    title: "AI-driven Analytics",
    desc: "Finding patterns, forecasting outcomes and making data useful.",
  },
  {
    n: "04",
    icon: Network,
    title: "Capacity Building & Development",
    desc: "Growing skills, knowledge and the next generation of AI practitioners.",
  },
];

function ServicesPreview() {
  return (
    <section className="services-section section-pad" id="services">
      <SectionKicker number="02" label="WHAT WE DO" light />

      <div className="services-head reveal">
        <h2>
          From bold ideas
          <br />
          to <em>working systems.</em>
        </h2>

        <p>
          We connect advanced research with practical delivery — from early
          experimentation to production-ready applications.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <article
              className="service-card reveal"
              style={{ transitionDelay: `${index * 90}ms` }}
              key={service.n}
            >
              <div className="service-top">
                <Icon size={25} />
                <span>{service.n}</span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.desc}</p>

              <div className="service-arrow">
                <ArrowUpRight size={17} />
              </div>
            </article>
          );
        })}
      </div>

      <div className="services-footer">
        <span>RESEARCH → ENGINEERING → IMPACT</span>
        <div className="footer-dash" />
      </div>
    </section>
  );
}

export default ServicesPreview;