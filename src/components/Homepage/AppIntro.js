import { Col, Container, Image, Row } from "react-bootstrap";
import text from '../webtext.json';
import gamepage from '../../assets/games-page.webp';

const AppIntro = () => {
  return (
    <div>
      <Container className="text-white text-center py-5">
        <h1 className="p-2 px-md-5 pt-md-5">{text.appintro.heading ? text.appintro.heading : "The finance app that rewards you for playing video games."}</h1>
        <h6 className="p-2 px-md-5 col-md-8 m-auto">{text.appintro.description ? text.appintro.description : "Connect your game accounts to Mana and play your way towards more rewards."}</h6>
        <h6 className="p-2 px-md-5 mb-0">{text.appintro.link ? text.appintro.link : "Which games are currently supported?"}</h6>
      </Container>
      <Container style={{maxWidth:'500px'}}>
      <Row >
        <Col >
          <Image fluid src={gamepage} />
        </Col>
      </Row>
      
    </Container>
    </div>
  );
}
 
export default AppIntro;