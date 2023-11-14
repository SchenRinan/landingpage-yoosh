import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Manacard from '../../assets/manacard.webp';

const Headerhp = () => {
    return (
        <Container fluid className="py-5" //bg-dark 
					
				>
            <Container className="rounded-5 text-white p-5"
							style={{backgroundColor:'rgb(56,19,137)'}}
            >
							<Row>
								<Col className="d-flex align-items-center" sm={12} md={6}>
									<div>
										<h1
											className="display-1 text-center text-lg-start"
											style={{fontFamily:'Fantasy'}}
											>
												FINANCE FOR GAMERS
										</h1>
										<p className="fst-italic" style={{color:'rgb(148,197,174)'}}>
											Debit Card & Checking Account
										</p>
										<p className="fw-semibold">
											You slay. You achieve. You win – so should your bank account. Earn Rewards for Paying and Playing your favorite games
										</p>
										<div className="pb-5">
											<Button variant="light" className="rounded-pill w-100 "><i className="bi bi-apple"></i> Get it on App Store</Button>
											<Button variant="success" className="rounded-pill w-100 mt-3"><i className="bi bi-google-play"></i> Get it on Google Play</Button>
										</div>
									</div>
								</Col>
								<Col>
									<Image fluid src={Manacard} alt="" />
								</Col>
							</Row>
            </Container>
        </Container>
    );
}
 
export default Headerhp;