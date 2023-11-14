import { Col, Container, Row } from "react-bootstrap";


const Main3hp = () => {
  return (
    <div>
      {/* card1 */}
      <Container fluid className="py-2">
        <Container className="rounded-5 text-white p-4" style={{backgroundColor:'rgb(56,19,137)'}}>
          <Row className="d-flex align-items-center" style={{minHeight:'150px'}}>
            <Col className="" md={3} sm={12}>
              <h1 className="text-center">
                <span className='' style={{writingMode: 'vertical-rl',fontSize:25}}>UP TO</span>
                <span className='text-lg-start pb-3' style={{fontSize:100}}>10x</span>
              </h1>
            </Col>
            <Col md={6}>
              <h2>Boosted rewards every month on your game purchase in Mana shop.</h2>
              <p>Get Mana points back on your first video game purchase every month</p>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* card2 */}
      <Container fluid className="py-2">
        <Container className="rounded-5 text-white p-4" style={{backgroundColor:'rgb(56,19,137)'}}>
          <Row className="d-flex align-items-center" style={{minHeight:'150px'}}>
            <Col className="" md={3} sm={12}>
              <h1 className="text-center">
                <span className='' style={{writingMode: 'vertical-rl',fontSize:25}}>UP TO</span>
                <span className='text-lg-start pb-3' style={{fontSize:100}}>5x</span>
              </h1>
            </Col>
            <Col md={6}>
              <h2>Points for digital gaming purchases in the Mana shop</h2>
              <p>Always get Mana points back on video games and gaming gift cards</p>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* card3 */}
      <Container fluid className="py-2">
        <Container className="rounded-5 text-white p-4" style={{backgroundColor:'rgb(56,19,137)'}}>
          <Row className="d-flex align-items-center" style={{minHeight:'150px'}}>
            <Col className="" md={3} sm={12}>
              <h1 className="text-center">
                <span className='' style={{writingMode: 'vertical-rl',fontSize:25}}>UP TO</span>
                <span className='text-lg-start pb-3' style={{fontSize:100}}>3x</span>
              </h1>
            </Col>
            <Col md={6}>
              <h2>Points from select Gaming & Entertainment Subscriptions</h2>
              <p>Earn points for your gaming n’ chill kind of nights when linking your subscriptions</p>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* card4 */}
      <Container fluid className="py-2">
        <Container className="rounded-5 text-white p-4" style={{backgroundColor:'rgb(56,19,137)'}}>
          <Row className="d-flex align-items-center" style={{minHeight:'150px'}}>
            <Col className="" md={3} sm={12}>
              <h1 className="text-center">
                <span className='' style={{writingMode: 'vertical-rl',fontSize:25}}>UP TO</span>
                <span className='text-lg-start pb-3' style={{fontSize:100}}>1x</span>
              </h1>
            </Col>
            <Col md={6}>
              <h2>Points on everything else.</h2>
              <p>Up to 500 points per month, whether grabbing a coffee or seeing the latest movie, Mana has you covered.</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
 
export default Main3hp;