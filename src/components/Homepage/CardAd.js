import { Col, Container, Image, Row } from "react-bootstrap";
import Manavisa from '../../assets/manavisa.webp';
import text from '../webtext.json';

const CardAd = (props) => {
  return (
    <div>
      <Container style={{color:'white'}} className="py-5">
        <Row className="d-flex align-items-center">
          <Col sm={12} md={{span:4,order:'first'}} className="text-center text-lg-start">
            <h4 className="fst-italic" style={{color:props.color.text}}>{text.cardad.perks}</h4>
            <p>{text.cardad.perksdes}</p>
          </Col>
          <Col md={{span:4, order:6}} xs={{span:12, order:'first'}} className="text-center text-lg-start">
            <Image fluid src={Manavisa}/>
          </Col>
          <Col sm={12} md={4} className="text-center text-lg-start">
            <h4 className="fst-italic" style={{color:props.color.text}}>{text.cardad.points}</h4>
            <p>{text.cardad.pointsdes}</p>
            <h4 className="fst-italic" style={{color:props.color.text}}>{text.cardad.rewards ? text.cardad.rewards : 'Rewards' }</h4>
            <p>{text.cardad.rewardsdes ? text.cardad.rewardsdes : 'in the shop that gamers care about'}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
 
export default CardAd;