import { Carousel } from "react-bootstrap";
import './LogoCarousel.css'
import visa from '../../assets/visa-logo.png'
import mvb from '../../assets/mvb-logo.png'
import shop from '../../assets/shop-page.webp'
import mvbb from '../../assets/mvb-logo-blue.webp'

const logos = [visa,mvb,shop,mvbb];

const LogoCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel className="custom-carousel" controls={false} indicators={false} style={{ width: '200%' }}>
        <Carousel.Item>
          <div className="d-flex justify-content-around">
            {logos.map((logo, index) => (
              <img
                key={index}
                className="d-block logo"
                style={{ width: '5%', height: 'auto' }} // Set the width and allow the height to adjust accordingly
                src={logo}
                alt={`Logo ${index + 1}`}
              />
            ))}
            {logos.map((logo, index) => (
              <img
                key={index + logos.length}
                className="d-block logo"
                style={{ width: '5%', height: 'auto' }} // Set the width and allow the height to adjust accordingly
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
