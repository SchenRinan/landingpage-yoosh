import { Col, Container, Row } from "react-bootstrap";

const Main6hp = () => {
  return (
    <div>
      <Container fluid className="py-5">
        <Container className="rounded-5 text-white p-5 text-center" style={{backgroundColor:'rgb(56,19,137)'}}>
          <Row className="">
            <Col className="">
              <h1>No surprises, no gimmicks. Your money is kept safe with Mana's partners.</h1>
              <p className="py-3">No hidden fees. No game-playing. Your funds are FDIC insured through MVB Bank, N.A., Member FDIC.</p>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md={3} sm={12}>
              <Container className="rounded-5 text-white p-5 text-center" style={{backgroundColor:'rgb(104,55,208)',minHeight:'300px'}}>
                <Row>
                  <Col>
                  <p>MVB Bank, N.A., Member FDIC is operating all the banking features and has your money insured</p>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md={3} sm={12}>
              <Container className="rounded-5 text-white p-5 text-center" style={{backgroundColor:'rgb(104,55,208)',minHeight:'300px'}}>
                <Row>
                  <Col>
                  <p>Visa provides the Mana debit card and all their perks.d</p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
 
export default Main6hp;