import { Col, Container, Image, Row } from "react-bootstrap";
import Manavisa from '../../assets/manavisa.webp';

const Main2hp = () => {
  return (
    <div>
      <Container style={{color:'white'}} className="py-5">
        <Row className="d-flex align-items-center">
          <Col sm={12} md={{span:4,order:'first'}} className="text-center text-lg-start">
            <h4 className="fst-italic" style={{color:'rgb(154,106,255)'}}>Perks</h4>
            <p>Specifically selected for gamers</p>
          </Col>
          <Col md={{span:4, order:6}} xs={{span:12, order:'first'}} className="text-center text-lg-start">
            <Image fluid src={Manavisa}/>
          </Col>
          <Col sm={12} md={4} className="text-center text-lg-start">
            <h4 className="fst-italic" style={{color:'rgb(154,106,255)'}}>Points</h4>
            <p>for playing games & for all your purchases</p>
            <h4 className="fst-italic" style={{color:'rgb(154,106,255)'}}>Rewards</h4>
            <p>in the shop that gamers care about</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
 
export default Main2hp;