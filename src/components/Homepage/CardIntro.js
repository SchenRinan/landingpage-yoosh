import { Container } from "react-bootstrap";
import text from '../webtext.json';

const CardIntro = () => {
  return (
    <div>
      <Container className="text-white text-center py-5">
        <h1 className="p-2 px-md-5 pt-md-5">{text.cardintro.heading}</h1>
        <h6 className="p-2 px-md-5 col-md-8 m-auto">{text.cardintro.description}</h6>
        <h6 className="p-2 px-md-5 mb-0">{text.cardintro.link}</h6>
      </Container>
    </div>
  );
}
 
export default CardIntro;