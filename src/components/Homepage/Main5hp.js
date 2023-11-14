import { Col, Container, Image, Row } from "react-bootstrap";
import shoppage from '../../assets/shop-page.webp';

const Main5hp = () => {
  return (
    <Container style={{maxWidth:'500px'}}>
      <Row >
        <Col >
          <Image fluid src={shoppage} />
        </Col>
      </Row>
      
    </Container>
  );
}
 
export default Main5hp;