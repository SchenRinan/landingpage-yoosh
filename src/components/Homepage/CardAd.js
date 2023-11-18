import { Col, Container, Image, Row } from "react-bootstrap";
import cardtemplate from '../../assets/card-template.png';
import text from '../webtext.json';

const CardAd = (props) => {
  return (
    <div id=''>
      <Container className="text-white text-center py-5">
        <h1 className="p-2 px-md-5 pt-md-5">{text.cardintro.heading}</h1>
        <h6 className="p-2 px-md-5 col-md-8 m-auto">{text.cardintro.description}</h6>
        <h6 className="p-2 px-md-5 mb-0" style={{color:props.color.text}}>{text.cardintro.link}</h6>
      </Container>
      <Container style={{color:'white'}} className="py-5">
        <Row className="d-flex align-items-center">
          <Col sm={12} md={{span:4,order:'first'}} className="text-center text-lg-start">
            <h4 className="fst-italic" style={{color:props.color.text}}>{text.cardad.perks}</h4>
            <p>{text.cardad.perksdes}</p>
          </Col>
          <Col md={{span:4, order:6}} xs={{span:12, order:'first'}} className="text-center text-lg-start">
            <Image fluid src={cardtemplate}/>
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