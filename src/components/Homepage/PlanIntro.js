import { Col, Container, Image, Row } from "react-bootstrap";
import manaprocard from '../../assets/mana-pro-card.webp'
import manalitecard from '../../assets/mana-lite-card.webp'
import text from '../webtext.json';

const PlanIntro = (props) => {
  return (
    <div>
      <Container className="text-white text-center py-5">
        <h1 className="p-2 px-md-5 pt-md-5">{text.planintro.heading ? text.planintro.heading : "Choose your plan"}</h1>
        <h6 className="p-2 px-md-5 col-md-8 m-auto">{text.planintro.description ? text.planintro.description : "Exclusive perks, bonuses and the legendary Black Damascus steel card for only $134.95/yr. See the breakdowns of Mana Lite and Mana Pro and make your pick. Sign up here or straight from the app."}</h6>
        <h6 className="p-2 px-md-5 mb-0" style={{color:props.color.text}}>{text.planintro.link ? text.planintro.link : "Learn more about Mana Pro"}</h6>
      </Container>
      <Container className="text-white py-5">
        <Row>
          <Col md={6} sm={12}>


            {/* <Card className="bg-dark text-white my-3" >
              <Card.Img src={manaprocard} alt="Card image" />
              <Card.ImgOverlay className="d-flex align-items-end">
                <Card.Text>
                  <h3>
                    $134.95/yr
                  </h3>
                </Card.Text>
              </Card.ImgOverlay>
            </Card> */}


            <Image fluid src={manaprocard} className="py-3" style={{maxHeight:'350px'}}/>
            <h2>{text.planintro.pro.cost ? text.planintro.pro.cost : "$134.95/yr"}</h2>
            <hr className="mt-2 mb-3"/>
            <Row>
              <Col xs={1}>
                <h2><i className="bi bi-cart"></i></h2>
              </Col>
              <Col xs={10}>
                <h2 className="m-0">{text.planintro.pro.shop ? text.planintro.pro.shop : "5x points"}</h2>
                <p>{text.planintro.pro.shopdes ? text.planintro.pro.shopdes : "Points from Digital Gaming Products in the Mana Shop"}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>
                <h2><i className="bi bi-heart"></i></h2>
              </Col>
              <Col xs={10}>
                <h2 className="m-0">{text.planintro.pro.sub ? text.planintro.pro.sub : "3x points"}</h2>
                <p>{text.planintro.pro.subdes ? text.planintro.pro.subdes : "Points from select Gaming & Entertainment Subscriptions"}</p>
              </Col>
            </Row>
            <hr className="mt-2 mb-3"/>
            <Row>
              <Col xs={1}>
                <h2><i className="bi bi-star"></i></h2>
              </Col>
              <Col xs={10}>
                <h2 className="m-0">{text.planintro.pro.welcome ? text.planintro.pro.welcome : "Welcome bonus"}</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>
              </Col>
              <Col xs={10}>
                <h2 className="m-0">{text.planintro.pro.welcomepoints ? text.planintro.pro.welcomepoints : "1500 points"}</h2>
                <p>{text.planintro.pro.welcomedes ? text.planintro.pro.welcomedes : "for setting up your Direct Deposit"}</p>
              </Col>
            </Row>
            <hr className="mt-2 mb-3"/>
            <h2>{text.planintro.pro.cost ? text.planintro.pro.cost : "$134.95/yr"}</h2>
          </Col>
          
          <Col md={6} sm={12}>
            {/* <Card className="bg-dark text-white my-3" >
                <Card.Img src={manalitecard} alt="Card image" />
                <Card.ImgOverlay className="d-flex align-items-end">
                  <Card.Text>
                    <h3>
                      $34.95/yr
                    </h3>
                  </Card.Text>
                </Card.ImgOverlay>
              </Card> */}
            <Image fluid src={manalitecard} className="py-3" style={{maxHeight:'350px'}}/>
            <h2>{text.planintro.lite.cost ? text.planintro.lite.cost : "$34.95/yr"}</h2>
            <hr className="mt-2 mb-3"/>
            <Row>
              <Col xs={1}>
                <h2><i className="bi bi-cart"></i></h2>
              </Col>
              <Col xs={10}>
                <h2 className="m-0">{text.planintro.lite.shop ? text.planintro.lite.shop : "3x points"}</h2>
                <p>{text.planintro.lite.shopdes ? text.planintro.lite.shopdes : "Points from Digital Gaming Products in the Mana Shop"}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>
                <h2><i className="bi bi-heart"></i></h2>
              </Col>
              <Col xs={10}>
                <h2 className="m-0">{text.planintro.lite.sub ? text.planintro.lite.sub : "2x points"}</h2>
                <p>{text.planintro.lite.subdes ? text.planintro.lite.subdes : "Points from select Gaming & Entertainment Subscriptions"}</p>
              </Col>
            </Row>
            <hr className="mt-2 mb-3"/>
            <Row>
              <Col xs={1}>
                <h2><i className="bi bi-star"></i></h2>
              </Col>
              <Col xs={10}>
                <h2 className="m-0">{text.planintro.lite.welcome? text.planintro.lite.welcome : "Welcome bonus"}</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>
                
              </Col>
              <Col xs={10}>
                <h2 className="m-0">{text.planintro.lite.welcomepoints ? text.planintro.lite.welcomepoints : "1500 points"}</h2>
                <p>{text.planintro.lite.welcomedes ? text.planintro.lite.welcomedes : "for setting up your Direct Deposit"}</p>
              </Col>
            </Row>
            <hr className="mt-2 mb-3"/>
            <h2>$34.95/yr</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
 
export default PlanIntro;