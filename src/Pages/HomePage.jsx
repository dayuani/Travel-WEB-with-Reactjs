import { Container, Row, Col, Card } from 'react-bootstrap';
import { allCards, whyChoose, popularDestinations } from '../data/index.js';
import BackImage from '../assets/img/hero-bg.jpg';
import AirPlaneImage from '../assets/img/Airplane.png';
import img1 from "../assets/img/gallery/gall-1.jpg";
import img2 from "../assets/img/gallery/gall-2.jpg";
import img3 from "../assets/img/gallery/gall-3.jpg";
import img4 from "../assets/img/gallery/gall-4.jpg";
import img5 from "../assets/img/gallery/gall-5.jpg";
import img6 from "../assets/img/gallery/gall-6.jpg";

const images = [img1, img2, img3, img4, img5, img6];
const HomePage = () => {
  return (
    <div className="homepage">
      <header 
        className="hero" 
        style={{ 
          width: "100%",
          height: "100vh",
          backgroundImage: `linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0)), url(${BackImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative"
        }}>
    <div className="overlay"></div>

    <Container className="h-100 d-flex align-items-center justify-content-center">
      <Row className="justify-content-center text-center">
        {/* TEXT CENTERED (AIRPLANE IMAGE REMOVED FOR A CLEANER LOOK) */}
        <Col lg={8} className="text-white hero-text">
          <span className="text-uppercase tracking-wider mb-3 d-inline-block" style={{ letterSpacing: "2px", fontSize: "0.9rem", fontWeight: "600", color: "#38bdf8" }}>
            Explore Bali Like Never Before
          </span>
          <h1 className="display-4 fw-bold mb-4">
            Temukan Keajaiban Alam yang Tersembunyi
          </h1>
          <p className="lead mb-5" style={{ opacity: "0.9", fontSize: "1.2rem", lineHeight: "1.8" }}>
            Jelajahi destinasi terbaik di Bali dengan pengalaman tak terlupakan,
            pelayanan profesional, dan harga terbaik untuk liburan impian Anda.
          </p>

          <div className="hero-btns d-flex gap-3 justify-content-center">
            <a href="#destination" className="btn btn-primary btn-lg px-4 py-3 fw-semibold shadow">
              Explore Now
            </a>
            <a href="#contact" className="btn btn-outline-light btn-lg px-4 py-3 fw-semibold">
              Contact Us
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </header>
      
      <div className="destination mt-5 mb-5">
        <h2 className='text-center'>Destination</h2>
        <p className='text-center'>Jelajahi beragam destinasi menakjubkan di bali dan rasakan keindahan yang memikat di setiap langkah perjalanan Anda yang tak terlupakan.</p>
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


      <div className="WhyChooseUs">
        <h2 className='text-center'>Why Choose Us</h2>
        <p className='text-center'>Kami menawarkan pengalaman liburan yang nyaman, aman, dan berkesan dengan layanan profesional, harga transparan, dan pilihan destinasi terbaik.</p>
        <div className="boxs-wcu">
          <Container>
            <Row className="g-4 justify-content-between">
              {whyChoose.map((whychoose) => (
                <Col  md={4} className="box-wcu" key={whychoose.id}>
                  <div className="">
                  <img src={whychoose.icon} alt="" />
                  <h6>{whychoose.title}</h6>
                  <p>{whychoose.desc}</p>
                  </div>
                  
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>

      <div className="popular">
      <Container>
        
        {/* TITLE */}
        <div className="text-center mb-5">
          <h2>Popular Destinations</h2>
          <p>
            Temukan destinasi favorit yang paling banyak dikunjungi dan
            direkomendasikan untuk pengalaman liburan terbaik Anda.
          </p>
        </div>

        {/* GRID */}
        <Row className="g-4">
          {popularDestinations.map((item) => (
            <Col md={6} lg={4} key={item.id}>
              <div className="popular-card">
                
                <img src={item.image} alt="" />

                <div className="overlay">
                  <h5>{item.title}</h5>
                  <p>{item.location}</p>
                </div>

              </div>
            </Col>
          ))}
        </Row>

      </Container>
    </div>


      <div className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default HomePage
     