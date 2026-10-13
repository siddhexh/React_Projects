import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <NavLink to="/" className="footer-brand">
          Route<span>Lab</span>
        </NavLink>

        <p>Built to learn. Designed to explore.</p>

        <span className="footer-credit">
          © {new Date().getFullYear()} RouteLab
        </span>
      </div>
    </footer>
  );
}

export default Footer;
