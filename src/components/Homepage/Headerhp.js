import { Col, Container, Row } from "react-bootstrap";

const Headerhp = () => {
    return (
        <Container fluid className="py-3" //bg-dark 
					style={{backgroundColor:'rgb(6,7,39)'}}
				>
            <Container className="rounded-5 text-white p-5"
							style={{backgroundColor:'rgb(56,19,137)'}}
            >
							<Row>
								<Col className="" sm={12} md={6}>
									<h1
										className="display-1 text-center text-lg-start"
										style={{fontFamily:'Fantasy'}}
										>
											FINANCE FOR GAMERS
									</h1>
									<p className="fst-italic" style={{color:'rgb(148,197,174)'}}>
										Debit Card & Checking Account
									</p>
									<p className="fw-light">
										You slay. You achieve. You win – so should your bank account. Earn Rewards for Paying and Playing your favorite games
									</p>
								</Col>
								<Col>
								<div className="text-center text-lg-start">
									{/* Content goes here */}
									<p>This content is left-aligned on normal screens and centered on big scsssssssssssssreens.</p>
								</div>
								</Col>
							</Row>
            </Container>
        </Container>
    );
}
 
export default Headerhp;