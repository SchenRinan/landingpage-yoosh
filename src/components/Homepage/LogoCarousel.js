import { Carousel } from "react-bootstrap";
import './LogoCarousel.css'
import adidas from '../../assets/adidas_logo.png'
import vodafone from '../../assets/vodafone-logo.png'
import liefernando from '../../assets/liefernand-logo.png'
import samsung from '../../assets/samsung-logo.png'
import hnm from '../../assets/h&m-logo.png'
import superdry from '../../assets/sd-logo-orange.png'
import mediamarkt from '../../assets/mediamarkt-logo.webp'
import saturn from '../../assets/saturn-logo.png'

const logos = [adidas, vodafone, liefernando, samsung, hnm, superdry, mediamarkt, saturn];

const LogoCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel className="custom-carousel" controls={false} indicators={false} style={{ width: '2500px' }}>
        <Carousel.Item>
          <div className="d-flex justify-content-around">
            {logos.map((logo, index) => (
              <img
                key={index}
                className="d-block logo"
                style={{ width: '100px', height: 'auto' }} // Set the width and allow the height to adjust accordingly
                src={logo}
                alt={`Logo ${index + 1}`}
              />
            ))}
            {logos.map((logo, index) => (
              <img
                key={index + logos.length}
                className="d-block logo"
                style={{ width: '100px', height: 'auto' }} // Set the width and allow the height to adjust accordingly
                src={logo}
                alt={`Logo ${index + 1}`}
              />
            ))}
          </div>
        </Carousel.Item>
        {/* Add more Carousel.Item components for additional slides */}
      </Carousel>
    </div>
  );
}

export default LogoCarousel;
