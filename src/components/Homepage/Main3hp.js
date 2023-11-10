import { Button, Col, Container, Image, Row } from "react-bootstrap";


const Main3hp = () => {
  return (
    <div>
       <Container fluid className="py-5" //bg-dark 
        >
        <Container className="rounded-5 text-white py-5"
          style={{backgroundColor:'rgb(56,19,137)'}}
        >
          <Row className="d-flex align-items-center">
            <Col className="" md={3} sm={12}>
                <h1 className="display-1 text-center text-lg-start pb-3 ps-3"
                  style={{fontFamily:'Fantasy'}}
                  >
                    UP TO 10x
                </h1>
            </Col>
            <Col md={6}>
              <h2>Boosted rewards every month on your game purchase in Mana shop.</h2>
              <p>Get Mana points back on your first video game purchase every month</p>
            </Col>
          </Row>
        </Container>
    </Container>
    </div>
  );
}
 
export default Main3hp;