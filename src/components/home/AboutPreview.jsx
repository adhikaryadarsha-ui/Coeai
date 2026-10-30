import { Sparkles, Activity } from "lucide-react";
import SectionKicker from "../common/SectionKicker";
import { focusAreas } from "../../data/projects";
import kolImage from "../../../public/assets/images/kolkata_bg.png";

function AboutPreview() {
  return (
    <section className="intro-section section-pad" id="about">
      <SectionKicker number="01" label="WHO WE ARE" />

      <div className="intro-layout">
        <div className="intro-heading reveal">
          <h2>
            AI with purpose.
            <br />
            <em>Innovation with impact.</em>
          </h2>

          <p>
            The Centre of Excellence in Artificial Intelligence (CoE-AI) Lab, Kolkata was established under the National Informatics Centre (NIC), West Bengal State Centre during 2021-22. Operating in coordination with CoE-AI at NIC Headquarters, New Delhi, the lab acts as a regional hub for advanced AI research and innovation to enhance governance and public service delivery.
          </p>

          <a className="under-link" href="/about">
            Read more
          </a>
        </div>

        <div className="intro-cards">
          <article className="info-card reveal">
            <div className="card-icon">
              <Sparkles size={20} />
            </div>

            <span className="card-number">A / 01</span>
            <h3>Our mission</h3>

            <p>
              Develop and deploy reliable AI solutions that improve services,
              enable better decisions and create measurable public value.
            </p>
            <div className="mission">
              <img src={kolImage} alt="image" />
            </div>
            <div className="card-accent" />
          </article>

          <article className="info-card reveal">
            <div className="card-icon">
              <Activity size={20} />
            </div>

            <span className="card-number">A / 02</span>
            <h3>Our vision</h3>

            <p>
             To drive innovation in e-Governance through AI/ML model development, API creation and publishing, AI driven analytics, and continuous capacity building for a smarter, data-informed government ecosystem.

            </p>
            <div className="vission">
              <img src={kolImage} alt="image" />
            </div>
            <div className="card-accent" />
          </article>
        </div>
      </div>

      <div className="focus-strip reveal">
        <div>
          <span className="focus-label">OUR FOCUS AREAS</span>
          <h3>
            Where intelligence
            <br />
            meets opportunity.
          </h3>
        </div>

        <div className="focus-tags">
          {focusAreas.map((focus, index) => (
            <span key={focus}>
              <i>0{index + 1}</i>
              {focus}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
