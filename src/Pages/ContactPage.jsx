import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactPage = () => {
  return (
     <div className="contact">
      <Container>
        
        {/* TITLE */}
        <div className="text-center mb-5">
          <h2>Contact Us</h2>
          <p>
            Hubungi kami untuk informasi lebih lanjut atau pemesanan layanan
            tour & travel Anda.
          </p>
        </div>

        <Row className="g-4">
          
          {/* FORM */}
          <Col md={6}>
            <div className="contact-form">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Nama Lengkap" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="No. WhatsApp" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={4} placeholder="Pesan Anda" />
                </Form.Group>

                <Button
                  className="btn-contact w-100"
                  href="https://wa.me/6281234567890"
                  target="_blank"
                >
                  Kirim via WhatsApp
                </Button>
              </Form>
            </div>
          </Col>

          {/* INFO */}
          <Col md={6}>
            <div className="contact-info">
              <h5>Informasi Kontak</h5>
              <p>📍 Bali, Indonesia</p>
              <p>📞 +62 812 3456 7890</p>
              <p>✉️ travelbali@gmail.com</p>

              {/* MAP */}
              <div className="map mt-3">
                <iframe
                  src="https://maps.google.com/maps?q=bali&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default ContactPage
