import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { allCars } from "../data/index.js";
const RentalPage = () => {
  return (
    <div className="car-rental">
      <Container>
        
        {/* TITLE */}
        <div className="text-center mb-5">
          <h2>Car Rental</h2>
          <p>
            Pilih kendaraan terbaik untuk perjalanan Anda di Bali dengan nyaman,
            aman, dan harga terbaik.
          </p>
        </div>

        {/* CARD */}
        <Row className="g-4">
          {allCars.map((car) => (
            <Col md={6} lg={3} key={car.id}>
              <Card className="car-card h-100">
                <div className="img-wrapper">
                  <Card.Img variant="top" src={car.image} />
                </div>

                <Card.Body>
                  <Card.Title>{car.title}</Card.Title>
                  <h5 className="price">{car.price}</h5>

                  <Button
                    className="btn-book"
                    href={`https://wa.me/6281234567890?text=Saya ingin booking ${car.title}`}
                    target="_blank"
                  >
                    {car.btn}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </div>
  )
}

export default RentalPage
