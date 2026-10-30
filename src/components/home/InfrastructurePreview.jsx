import {
  Cpu,
  Database,
  ShieldCheck,
  Network,
  ArrowUpRight,
} from "lucide-react";

import SectionKicker from "../common/SectionKicker";
import ServerRackVisual from "../infrastructure/ServerRackVisual";

function InfrastructurePreview() {
  return (
    <section className="infra-section section-pad" id="infrastructure">
      <SectionKicker number="04" label="THE LAB" />

      <div className="infra-layout">
        <div className="infra-copy reveal">
          <span className="eyebrow">
            <span className="eyebrow-line" />
            COMPUTE FOR DISCOVERY
          </span>

          <h2>
           Infrastructure of CoE AI Lab,
            <br />
            <em>Kolkata</em>
          </h2>

          <p>
            Our lab infrastructure supports experimentation, model development
            and the computational workloads behind applied AI research.
          </p>

          <ul>
            <li>
              <span>
                <Cpu size={17} />
              </span>
              <div>
                <b>High-performance compute</b>
                <small>
                  Resources for demanding AI and machine learning workloads.
                </small>
              </div>
            </li>

            <li>
              <span>
                <Database size={17} />
              </span>
              <div>
                <b>Data & model workflows</b>
                <small>
                  Tools and systems to support the full development lifecycle.
                </small>
              </div>
            </li>

            <li>
              <span>
                <ShieldCheck size={17} />
              </span>
              <div>
                <b>Responsible deployment</b>
                <small>
                  A focus on reliability, security and real-world readiness.
                </small>
              </div>
            </li>
          </ul>
        </div>

        <div className="infra-visual reveal">
          <ServerRackVisual />

          <div className="infra-caption">
            <span>
              <span className="pulse-dot" />
              COMPUTE / SYSTEMS
            </span>

            <a href="/infrastructure">
              LAB INFRASTRUCTURE <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="infra-stamp">
            <Network size={23} />
            <span>
              POWERING
              <br />
              <b>DISCOVERY</b>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfrastructurePreview;
