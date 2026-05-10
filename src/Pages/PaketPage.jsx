import { Container, Row, Col, Card } from 'react-bootstrap';
import { allCards} from '../data/index.js';
const PaketPage = () => {
  return (
    <div className="destination mt-5 mb-5">
            <h2 className='text-center'>Destination</h2>
            <p className='text-center'>Jelajahi beragam destinasi menakjubkan di seluruh dunia dan rasakan pesona setiap musim yang memikat di setiap langkah perjalanan Anda yang tak terlupakan dengan #BayuBuanaTravelServices!</p>
            <div className="cards">
              <Container>
                <Row className="g-4">
                  {allCards.map((cards) => (
                    <Col md={6} lg={3} key={cards.id}>
                      <Card className="h-100">
                         <div className="img-wrapper">
                           <Card.Img variant="top" src={cards.image} />
                            <span className="badge-loc">{cards.location}</span>
                         </div>
                       
                        <Card.Body>
                          <Card.Title>{cards.title}</Card.Title>
                          <h6 className='prices'>{cards.price}</h6>
                          <p className='times'>{cards.time}</p>
                          <p className='qts'>{cards.qt}</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </div>
  )
}

export default PaketPage
