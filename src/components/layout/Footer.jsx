import { Link } from "react-router-dom";
import Logo from "../../../public/assets/images/ailab_logo-footer.png";
function Footer() {
  return (
    <footer className="footer" id="footer">
      <Link className="brand brand-footer" to="/">
        <img src={Logo} alt="logo" style={{ width: "150px" }} />
      </Link>

      <p>
        Advancing applied AI through research, engineering and responsible
        innovation.
      </p>

      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/services">Capabilities</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/infrastructure">Infrastructure</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="footer-legal">
        <span>© 2026 CoE-AI Lab. All rights reserved.</span>
      </div>
      <div className="back-top">
      <Link to="/">Back to top ↑</Link>
      </div>
    </footer>
  );
}

export default Footer;
