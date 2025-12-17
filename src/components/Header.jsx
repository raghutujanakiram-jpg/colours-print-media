import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <img src="/logo/logo.png" alt="Colours Print Media" />
        </Link>

        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <button className="theme-toggle" onClick={toggleTheme}>
          🌙
        </button>

        <nav className={`nav ${open ? "open" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/mission-vision" onClick={() => setOpen(false)}>Mission & Vision</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/clients" onClick={() => setOpen(false)}>Clients</Link>
          <Link to="/testimonials" onClick={() => setOpen(false)}>Testimonials</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}