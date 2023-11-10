import { Card, Col, Container, Image, Row } from "react-bootstrap";
import manaprocard from '../../assets/mana-pro-card.webp'
import manalitecard from '../../assets/mana-lite-card.webp'

const Main10hp = () => {
  return (
    <div>
      <Container className="text-white">
        <Row>
          <Col md={6} sm={12}>


            <Card className="bg-dark text-white my-3" style={{maxHeight:'290px'}}>
              <Card.Img src={manaprocard} alt="Card image" />
              <Card.ImgOverlay className="d-flex align-items-end">
                <Card.Text>
                  <h3>
                    $134.95/yr
                  </h3>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>


            {/* <Image fluid src={manaprocard} className="py-3" style={{maxHeight:'350px'}}/> */}
            <Row>
              <Col xs={1}>
                <h2><i class="bi bi-cart"></i></h2>
              </Col>
              <Col xs={10}>
                <h2 className="m-0">5x points</h2>
                <p>Points from Digital Gaming Products in the Mana Shop</p>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>
                <h2><i class="bi bi-heart"></i></h2>
              </Col>
              <Col xs={10}>
                <h2 className="m-0">3x points</h2>
                <p>Points from select Gaming & Entertainment Subscriptions</p>
              </Col>
            </Row>
            <hr class="mt-2 mb-3"/>
            <Row>
              <Col xs={1}>
                <h2><i class="bi bi-star"></i></h2>
              </Col>
              <Col xs={10}>
                <h2 className="m-0">Welcome bonus</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>
                
              </Col>
              <Col xs={10}>
                <h2 className="m-0">1500 points</h2>
                <p>for setting up your Direct Deposit</p>
              </Col>
            </Row>
            <hr class="mt-2 mb-3"/>
            <h2>$134.95/yr</h2>
          </Col>
          <Col md={6} sm={12}>
            <Card className="bg-dark text-white my-3" style={{maxHeight:'290px'}}>
                <Card.Img src={manalitecard} alt="Card image" />
                <Card.ImgOverlay className="d-flex align-items-end">
                  <Card.Text>
                    <h3>
                      $34.95/yr
                    </h3>
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            {/* <Image fluid src={manalitecard} className="py-3" style={{maxHeight:'350px'}}/> */}
            <Row>
              <Col xs={1}>
                <h2><i class="bi bi-cart"></i></h2>
              </Col>
              <Col xs={10}>
                <h2 className="m-0">3x points</h2>
                <p>Points from Digital Gaming Products in the Mana Shop</p>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>
                <h2><i class="bi bi-heart"></i></h2>
              </Col>
              <Col xs={10}>
                <h2 className="m-0">2x points</h2>
                <p>Points from select Gaming & Entertainment Subscriptions</p>
              </Col>
            </Row>
            <hr class="mt-2 mb-3"/>
            <Row>
              <Col xs={1}>
                <h2><i class="bi bi-star"></i></h2>
              </Col>
              <Col xs={10}>
                <h2 className="m-0">Welcome bonus</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>
                
              </Col>
              <Col xs={10}>
                <h2 className="m-0">1500 points</h2>
                <p>for setting up your Direct Deposit</p>
              </Col>
            </Row>
            <hr class="mt-2 mb-3"/>
            <h2>$34.95/yr</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
 
export default Main10hp;