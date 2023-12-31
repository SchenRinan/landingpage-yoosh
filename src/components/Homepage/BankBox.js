import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import solaris from '../../assets/Logo-Solaris.png'
import visa from '../../assets/visa-logo.png'
import text from '../webtext.json';

const BankBox = (props) => {
  return (
    <div>
      <Container fluid className="py-5">
        <Container className="rounded-5 text-white p-5 text-center" style={{backgroundColor:props.color.box}}>
          <Row className="">
            <Col className="">
              <h1>{text.bankbox.heading ? text.bankbox.heading : "No surprises, no gimmicks. Your money is kept safe with Mana's partners."}</h1>
              <p className="py-3">{text.bankbox.description ? text.bankbox.description : "No hidden fees. No game-playing. Your funds are FDIC insured through MVB Bank, N.A., Member FDIC."}</p>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md={4} sm={12}>
              <Container className="rounded-5 text-white p-3 text-center" style={{backgroundColor:props.color.tiny,minHeight:'300px'}}>
                <Row>
                  <Col>
                  <Stack gap={3} >
                    <div className="d-flex align-items-end"  style={{height:'150px'}}>
                      <Image src={solaris} className='col-5 mx-auto' fluid />
                    </div>
                    <p>{text.bankbox.mvbdes ? text.bankbox.mvbdes : "MVB Bank, N.A., Member FDIC is operating all the banking features and has your money insured"}</p>
                  </Stack>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md={4} sm={12} className="pt-4 pt-sm-0">
              <Container className="rounded-5 text-white p-3 text-center" style={{backgroundColor:props.color.tiny,minHeight:'300px'}}>
                <Row>
                  <Col>
                  <Stack gap={3} >
                    <div className="d-flex align-items-end" style={{height:'150px'}}>
                      <Image src={visa} className='col-7 mx-auto' fluid />
                    </div>
                    <p>{text.bankbox.visades ? text.bankbox.visades : "Visa provides the Mana debit card and all their perks."}</p>
                  </Stack>
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
 
export default BankBox;