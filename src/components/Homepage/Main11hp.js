import { Button, Col, Container, Row } from "react-bootstrap";

const Main11hp = () => {
  return (
    <div className="py-5">
      <Container fluid className="py-5">
        <Container className="rounded-5 text-white p-5 text-center" style={{backgroundColor:'rgb(56,19,137)'}}>
          <Row className="pt-5">
              <h1>Mana takes finance to the Manaverse</h1>
              <h5 className="py-3">Tap into the power of your finances and control your Mana checking account in a fully immersive environment with Mana VR.</h5>
              <div className="py-3"><Button size="lg" variant='light' className="rounded-4 p-3">Get it on Sidequest</Button></div>
              <h5 className="py-3">Learn more about Mana VR</h5>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
 
export default Main11hp;