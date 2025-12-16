import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Colours Print Media</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/mission-vision">Mission & Vision</Link>
        <Link to="/services">Services</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}