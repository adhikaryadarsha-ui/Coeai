import {
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  BrainCircuit,
  Activity,
} from "lucide-react";
import { Link } from "react-router-dom";

import NeuralScene from "../common/NeuralScene";
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" />
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          INTELLIGENCE, ENGINEERED
        </div>
        <h1>
          Building a smarter
          <br />
          world with <em>COE-AI.</em>
        </h1>
        <p className="hero-lead">
          From research to real-world impact, we turn emerging AI into useful,
          human-centred solutions.
        </p>

        <div className="hero-actions">
          <Link className="button button-primary" to="/projects">
            Explore projects <ArrowUpRight size={17} />
          </Link>

          <Link className="text-link" to="/about">
            Discover the lab <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      <div className="hero-art">
        <div className="art-orbit orbit-a" />
        <div className="art-orbit orbit-b" />
        <NeuralScene />
        {/* <div className="art-label label-bottom">
          <span className="signal-bars">
            <i />
            <i />
            <i />
            <i />
          </span>
          LEARNING IN MOTION <b>AI / ML</b>
        </div> */}

        <div className="float-card float-card-one">
          <BrainCircuit size={18} />
          <span>
            <b>FRaaS Platform</b>
            <small>Built to learn</small>
          </span>
        </div>

        <div className="float-card float-card-two">
          <span className="float-ring">
            <Activity size={16} />
          </span>
          <span>
            <b>Kanyashree Chatbot</b>
            <small>Insights that matter</small>
          </span>
        </div>
      </div>
      <div className="float-card float-card-three">
        <BrainCircuit size={18} />
        <span>
          <b>AI Abhigyan</b>
          <small>Built to learn</small>
        </span>
      </div>
      <div className="float-card float-card-four">
        <BrainCircuit size={18} />
        <span>
          <b>AI ANURUP</b>
          <small>Built to learn</small>
        </span>
      </div>
      <div className="float-card float-card-five">
        <BrainCircuit size={18} />
        <span>
          <b>AI SANLAAP</b>
          <small>Built to learn</small>
        </span>
      </div>
      <div className="float-card float-card-six">
        <BrainCircuit size={18} />
        <span>
          <b>AI SAMADHAN</b>
          <small>Built to learn</small>
        </span>
      </div>
      <div className="float-card float-card-seven">
        <BrainCircuit size={18} />
        <span>
          <b>Image and Text Based Beneficiary Deduplication</b>
          <small>Built to learn</small>
        </span>
      </div>
      <div className="float-card float-card-eight">
        <BrainCircuit size={18} />
        <span>
          <b>AI Nibhrut</b>
          <small>Built to learn</small>
        </span>
      </div>
      {/* <a className="scroll-cue" href="#about">
        <span>SCROLL TO EXPLORE</span>
        <ChevronDown size={16} />
      </a> */}

      {/* <div className="hero-bottomline">
        <span>COE-AI LAB · KOLKATA</span>
        <span>01 — APPLIED INTELLIGENCE</span>
      </div> */}
    </section>
  );
}

export default Hero;
