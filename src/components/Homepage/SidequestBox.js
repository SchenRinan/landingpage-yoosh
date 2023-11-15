import { Button, Container, Row } from "react-bootstrap";
import text from '../webtext.json';

const SidequestBox = () => {
  return (
    <div className="py-5">
      <Container fluid className="py-5">
        <Container className="rounded-5 text-white p-5 text-center" style={{backgroundColor:'rgb(56,19,137)'}}>
          <Row className="pt-5">
              <h1>{text.sidequestbox.title ? text.sidequestbox.title : "Mana takes finance to the Manaverse"}</h1>
              <h5 className="py-3">{text.sidequestbox.description ? text.sidequestbox.description : "Tap into the power of your finances and control your Mana checking account in a fully immersive environment with Mana VR."}</h5>
              <div className="py-3"><Button size="lg" variant='light' className="rounded-4 p-3">{text.sidequestbox.button ? text.sidequestbox.button : "Get it on Sidequest"}</Button></div>
              <h5 className="py-3">{text.sidequestbox.link ? text.sidequestbox.link : "Learn more about Mana VR"}</h5>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
 
export default SidequestBox;