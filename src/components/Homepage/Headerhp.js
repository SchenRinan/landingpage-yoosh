import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Manacard from '../../assets/manacard.webp';
import text from '../webtext.json';

const Headerhp = (props) => {
    return (
        <Container fluid className="py-5" //bg-dark 
				>
            <Container className="rounded-5 text-white p-5"
							style={{backgroundColor:props.color.box}}
            >
							<Row>
								<Col className="d-flex align-items-center" sm={12} md={6}>
									<div>
										<h1
											className="display-1 text-center text-lg-start"
											style={{fontFamily:'Fantasy'}}
											>
											{text.header.title}
										</h1>
										<p className="fst-italic" style={{color:'rgb(148,197,174)'}}>
											{text.header.footnote}
										</p>
										<p className="fw-semibold">
											{text.header.description}
										</p>
										<div className="pb-5">
											{/* <Button variant="light" className="rounded-pill w-100 "><i className="bi bi-apple"></i> Get it on App Store</Button>
											<Button variant="success" className="rounded-pill w-100 mt-3"><i className="bi bi-google-play"></i> Get it on Google Play</Button> */}
											<Button variant="light" className="rounded-pill w-100 mt-5" onClick={props.handleShow}>{text.header.button}</Button>
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