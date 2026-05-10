import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const FooterComp = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="gy-4">
          
          {/* ABOUT */}
          <Col md={4}>
            <h5>Travel Bali</h5>
            <p>
              Kami menyediakan layanan tour terbaik di Bali dengan harga
              terjangkau, pelayanan profesional, dan pengalaman tak terlupakan.
            </p>
          </Col>

          {/* MENU */}
          <Col md={4}>
            <h5>Menu</h5>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/paket">Paket Tour</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>

          {/* CONTACT */}
          <Col md={4}>
            <h5>Contact</h5>
            <p>📍 Bali, Indonesia</p>
            <p>📞 +62 812 3456 7890</p>
            <p>✉️ travelbali@gmail.com</p>

            <div className="social-icons">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaWhatsapp /></a>
            </div>
          </Col>

        </Row>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p>© 2026 Travel Bali. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default FooterComp
