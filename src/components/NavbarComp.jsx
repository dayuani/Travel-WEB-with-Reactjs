import { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { navLinks } from "../data/index.js";
import { NavLink } from "react-router-dom";

const NavbarComp = () => {
  const [scrolled, setScrolled] = useState(false);

  // Efek untuk mendeteksi scroll halaman
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <Navbar 
      expand="lg" 
      fixed="top" 
      className={`custom-navbar transition-all py-3 ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`}
    >
      <Container>
        {/* LOGO */}
        <Navbar.Brand href="/" className="fw-bold fs-4 text-[#143c5d] logo-brand">
          Travel<span className="text-primary-custom">Bali</span>
        </Navbar.Brand>

        {/* TOGGLE BUTTON (Mobile) */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0 shadow-none">
          <span className="navbar-toggler-icon custom-toggler"></span>
        </Navbar.Toggle>

        {/* MENU */}
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
          <Nav className="mx-auto text-center gap-2">
            {navLinks.map((link) => (
              <Nav.Link
                as={NavLink}
                to={link.path}
                key={link.id}
                className="nav-item-custom text-white position-relative px-3 fw-medium"
              >
                {link.text}
              </Nav.Link>
            ))}
          </Nav>

          {/* Tombol Call To Action (CTA) agar Layout Lebih Seimbang & Profesional */}
          <div className="text-center mt-3 mt-lg-0">
            <a href="#contact" className="btn-cta px-4 py-2 rounded-pill fw-semibold shadow-lg text-decoration-none border border-2 border-info">
              Book Now
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarComp
