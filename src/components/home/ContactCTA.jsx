import { ArrowUpRight, BrainCircuit } from "lucide-react";

function ContactCTA() {
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="contact-glow" />

      <div className="contact-content reveal">
        <span className="eyebrow">
          <span className="eyebrow-line" />
          LET'S BUILD WHAT'S NEXT
        </span>

        <h2>
          Have a challenge
          <br />
          worth <em>solving?</em>
        </h2>

        <p>
          Let's explore how applied AI can turn your next big idea into
          meaningful impact.
        </p>

        <a className="button button-light" href="mailto:info@coeai.example">
          Start a conversation <ArrowUpRight size={17} />
        </a>
      </div>

      <div className="contact-orbit">
        <div className="contact-orbit-inner">
          <BrainCircuit size={62} />
          <span>AI</span>
        </div>
      </div>

      <div className="contact-bottom">
        <span>COE-AI LAB · KOLKATA</span>
        <span>CURIOUS BY NATURE. IMPACTFUL BY DESIGN.</span>
      </div>
    </section>
  );
}

export default ContactCTA;
