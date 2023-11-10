import { Col, Container, Image, Row } from "react-bootstrap";
import gamepage from '../../assets/games-page.webp';

const Main8hp = () => {
  return (
    <Container style={{maxWidth:'500px'}}>
      <Row >
        <Col >
          <Image fluid src={gamepage} />
        </Col>
      </Row>
      
    </Container>
  );
}
 
export default Main8hp;