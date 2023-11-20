import { Button, Col, Container, Row } from "react-bootstrap";
import text from './webtext.json';

const Footer = (props) => {
	return (
		<Container 
			className="text-white p-5" //bg-dark for dark gray background
			fluid
		>
			<Row>
				<Col sm={12} className="d-lg-none" //shows only when mobile version
				> 
					<Button className="rounded-circle me-2" variant="secondary"><i className="bi bi-facebook"></i></Button>
					<Button className="rounded-circle me-2" variant="secondary"><i className="bi bi-twitter-x"></i></Button>
					<Button className="rounded-circle me-2" variant="secondary"><i className="bi bi-instagram"></i></Button>
					<Button className="rounded-circle me-2" variant="secondary"><i className="bi bi-discord"></i></Button>
				</Col>
				<Col className="fs-3" sm={12} md={6}>{text.footer.company ? text.footer.company : "Yoosh"}</Col>
				<Col sm={12} md={6} className="text-end d-none d-lg-block">
					<Button className="rounded-circle me-2" variant="secondary"><i className="bi bi-facebook"></i></Button>
					<Button className="rounded-circle me-2" variant="secondary"><i className="bi bi-twitter-x"></i></Button>
					<Button className="rounded-circle me-2" variant="secondary"><i className="bi bi-instagram"></i></Button>
					<Button className="rounded-circle me-2" variant="secondary"><i className="bi bi-discord"></i></Button>
				</Col>
			</Row>
			<Row>
				<Col style={{fontSize:12}}>
					{text.footer.companyname ? text.footer.companyname : "Company Name Inc."}<br />
					{text.footer.companyaddress ? text.footer.companyaddress : "001 Address st."}<br />
					{text.footer.companyplz ? text.footer.companyplz : "01234 City, Country"}
				</Col>
			</Row>
			<Row className="pt-4">
				<Col style={{fontSize:10}}>
<<<<<<< HEAD
					Terms and Conditions. Lrem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis hendrerit porta. Donec pretium ligula sit amet ipsum maximus, eget commodo massa interdum. Pellentesque eget ex ut elit pulvinar dapibus. Nullam porttitor imperdiet nisl, et imperdiet urna eleifend a. Fusce feugiat laoreet enim id suscipit. Aenean vestibulum augue nisl, id malesuada sem mattis vel. Suspendisse ultrices dapibus nulla eget tempus.
=======
					{text.footer.tandc ? text.footer.tandc : "Terms and Conditions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis hendrerit porta. Donec pretium ligula sit amet ipsum maximus, eget commodo massa interdum. Pellentesque eget ex ut elit pulvinar dapibus. Nullam porttitor imperdiet nisl, et imperdiet urna eleifend a. Fusce feugiat laoreet enim id suscipit. Aenean vestibulum augue nisl, id malesuada sem mattis vel. Suspendisse ultrices dapibus nulla eget tempus."}
>>>>>>> 561cea5afa6921f89b382cf8befabb0630ae2cd7
				</Col>
			</Row>
			<Row className="pt-2">
				<hr className="mt-2 mb-3"/>
			</Row>
			<Row className="pt-2 text-center">
				<Col className="pb-2" style={{fontSize:14}}>{text.footer.company ? text.footer.company : "Company Name Inc."}</Col>
			</Row>
			<Row className="pt-2 justify-content-md-center text-center">
				<Col md={1} style={{fontSize:10}}>{text.footer.aboutus ? text.footer.aboutus : "About Us"}</Col>
				<Col md={1} style={{fontSize:10}}>{text.footer.support ? text.footer.support : "Support"}</Col>
				<Col md={1} style={{fontSize:10}}>{text.footer.privacy ? text.footer.privacy : "Privacy Policy"}</Col>
			</Row>
		</Container>	
	
		
			
	);
}
 
export default Footer;