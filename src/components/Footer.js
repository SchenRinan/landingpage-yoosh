import { Button, Col, Container, Row } from "react-bootstrap";

const Footer = () => {
	return (
		<Container 
			className="text-white p-5" //bg-dark for dark gray background
			fluid
			style={{backgroundColor:'rgb(26,27,61)'}}
			>
			<Row>
				<Col sm={12} className="d-lg-none" //shows only when mobile version
				> 
					<Button className="rounded-circle me-2" variant="secondary"><i class="bi bi-facebook"></i></Button>
					<Button className="rounded-circle me-2" variant="secondary"><i class="bi bi-twitter-x"></i></Button>
					<Button className="rounded-circle me-2" variant="secondary"><i class="bi bi-instagram"></i></Button>
					<Button className="rounded-circle me-2" variant="secondary"><i class="bi bi-discord"></i></Button>
				</Col>
				<Col className="fs-3" sm={12} md={6}>Yoosh</Col>
				<Col sm={12} md={6} className="text-end d-none d-lg-block">
					<Button className="rounded-circle me-2" variant="secondary"><i class="bi bi-facebook"></i></Button>
					<Button className="rounded-circle me-2" variant="secondary"><i class="bi bi-twitter-x"></i></Button>
					<Button className="rounded-circle me-2" variant="secondary"><i class="bi bi-instagram"></i></Button>
					<Button className="rounded-circle me-2" variant="secondary"><i class="bi bi-discord"></i></Button>
				</Col>
			</Row>
			<Row>
				<Col style={{fontSize:12}}>
					Company Name Inc. <br />
					001 Address st. <br />
					01234 City, Country
				</Col>
			</Row>
			<Row className="pt-4">
				<Col style={{fontSize:10}}>
					Terms and Conditions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis hendrerit porta. Donec pretium ligula sit amet ipsum maximus, eget commodo massa interdum. Pellentesque eget ex ut elit pulvinar dapibus. Nullam porttitor imperdiet nisl, et imperdiet urna eleifend a. Fusce feugiat laoreet enim id suscipit. Aenean vestibulum augue nisl, id malesuada sem mattis vel. Suspendisse ultrices dapibus nulla eget tempus.
				</Col>
			</Row>
			<Row className="pt-2">
				<hr class="mt-2 mb-3"/>
			</Row>
			<Row className="pt-2 text-center">
				<Col className="pb-2" style={{fontSize:14}}>Company Name Inc.</Col>
			</Row>
			<Row className="pt-2 justify-content-md-center text-center">
				<Col md={1} style={{fontSize:10}}>About Us</Col>
				<Col md={1} style={{fontSize:10}}>Support</Col>
				<Col md={1} style={{fontSize:10}}>Privacy Policy</Col>
			</Row>
		</Container>	
	
		
			
	);
}
 
export default Footer;