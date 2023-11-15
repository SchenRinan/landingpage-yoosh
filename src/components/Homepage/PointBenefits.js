import { Col, Container, Row } from "react-bootstrap";
import text from '../webtext.json';

const PointBenefits = () => {
  return (
    <div>
      {/* card1 */}
      <Container fluid className="py-2">
        <Container className="rounded-5 text-white p-4" style={{backgroundColor:'rgb(56,19,137)'}}>
          <Row className="d-flex align-items-center" style={{minHeight:'150px'}}>
            <Col className="" md={3} sm={12}>
              <h1 className="text-center">
                <span className='' style={{writingMode: 'vertical-rl',fontSize:25}}>UP TO</span>
                <span className='text-lg-start pb-3' style={{fontSize:100}}>{text.pointben.first ? text.pointben.first : '10x'}</span>
              </h1>
            </Col>
            <Col md={6}>
              <h2>{text.pointben.firsthead ? text.pointben.firsthead : 'Boosted rewards every month on your game purchase in Mana shop.'}</h2>
              <p>{text.pointben.firstdes ? text.pointben.firstdes : 'Get Mana points back on your first video game purchase every month'}</p>
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
                <span className='text-lg-start pb-3' style={{fontSize:100}}>{text.pointben.second ? text.pointben.second : "5x"}</span>
              </h1>
            </Col>
            <Col md={6}>
              <h2>{text.pointben.secondhead ? text.pointben.secondhead : 'Points for digital gaming purchases in the Mana shop'}</h2>
              <p>{text.pointben.seconddes ? text.pointben.seconddes :'Always get Mana points back on video games and gaming gift cards'}</p>
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
                <span className='text-lg-start pb-3' style={{fontSize:100}}>{text.pointben.third ? text.pointben.third : '3x'}</span>
              </h1>
            </Col>
            <Col md={6}>
              <h2>{text.pointben.thirdhead ? text.pointben.thirdhead : 'Points from select Gaming & Entertainment Subscriptions'}</h2>
              <p>{text.pointben.thirddes ? text.pointben.thirddes : 'Earn points for your gaming n’ chill kind of nights when linking your subscriptions'}</p>
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
                <span className='text-lg-start pb-3' style={{fontSize:100}}>{text.pointben.fourth ? text.pointben.fourth : '1x'}</span>
              </h1>
            </Col>
            <Col md={6}>
              <h2>{text.pointben.fourthhead ? text.pointben.fourthhead :'Points on everything else.'}</h2>
              <p>{text.pointben.fourthdes ? text.pointben.fourthdes : 'Up to 500 points per month, whether grabbing a coffee or seeing the latest movie, Mana has you covered.'}</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
 
export default PointBenefits;