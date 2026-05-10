import { Container, Row, Col } from "react-bootstrap";
import AboutImg from "../assets/img/about.jpg"; 

const AboutPage = () => {
  return (
    <div className="about">
      <Container>
        <Row className="align-items-center g-5">
          
          {/* IMAGE */}
          <Col md={6}>
            <div className="about-img">
              <img src={AboutImg} alt="About Us" />
            </div>
          </Col>

          {/* TEXT */}
          <Col md={6}>
            <h2>About Us</h2>
            <p className="desc">
              Kami adalah layanan tour & travel terpercaya di Bali yang siap
              memberikan pengalaman liburan terbaik untuk Anda. Dengan tim
              profesional dan berpengalaman, kami menghadirkan perjalanan yang
              nyaman, aman, dan penuh kenangan indah.
            </p>

            <div className="about-list">
              <p>✔ Pelayanan Profesional & Ramah</p>
              <p>✔ Harga Transparan & Terjangkau</p>
              <p>✔ Destinasi Terbaik & Fleksibel</p>
            </div>
            <a href="#contact" className="btn-about">Contact Us</a>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default AboutPage
