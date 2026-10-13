
import { NavLink } from "react-router-dom";

function Header() {
  const linkClass = ({ isActive }) =>
    `nav-link ${isActive ? "nav-link-active" : ""}`;

  return (
    <header className="site-header">
      <nav className="nav-container">
        <NavLink to="/" end className="brand">
          <span className="brand-mark">R</span>
          <span className="brand-name">
            Route<span>Lab</span>
          </span>
        </NavLink>

        <div className="nav-links">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
