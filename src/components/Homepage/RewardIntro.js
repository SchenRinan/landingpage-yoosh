import { Col, Container, Image, Row } from "react-bootstrap";
import yooshphone from '../../assets/yooshphone.png';
import text from '../webtext.json';

const RewardIntro = (props) => {
  return (
    <div id='scroll-reward'>
      <Container className="text-white text-center py-5">
        <h1 className="p-2 px-md-5 pt-md-5">{text.rewardintro.heading ? text.rewardintro.heading :"Rewards you'll actually want. Get games, gift cards, hardware, and more in the Mana Shop."}</h1>
        <h6 className="p-2 px-md-5 col-md-8 m-auto">{text.rewardintro.description ? text.rewardintro.description : "Use your Mana points to redeem or lower the price of items in our shop. It's all the stuff we know you'll like."}</h6>
        <h6 className="p-2 px-md-5 mb-0" style={{color:props.color.text}}>{text.rewardintro.link ? text.rewardintro.link : "What can I get in the Mana Shop?"}</h6>
      </Container>
      <Container className="text-center" style={{maxWidth:'500px'}}>
        <Row >
          <Col >
            <Image fluid src={yooshphone} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
 
export default RewardIntro;