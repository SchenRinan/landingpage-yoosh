import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import text from './webtext.json';

const Navbase = props => {
	return (
		<Navbar
      expand="lg"
      // bg="dark" //remove if background color would be changed
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#" style={{color:props.color.text}}>{text.nav.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className=''>
          <Nav className="me-auto">
            <Nav.Link href="#">{text.nav.home}</Nav.Link>
            <Nav.Link href="#link">{text.nav.card}</Nav.Link>
						<Nav.Link href="#game">{text.nav.gbenifits}</Nav.Link>
						<Nav.Link href="#brands">{text.nav.brand}</Nav.Link>
						<Nav.Link href="#about">{text.nav.about}</Nav.Link>
						<Nav.Link href="#signin">{text.nav.signup}</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
					<div className=''>
            {/* <Button variant="outline-info" className="rounded-pill"><i className="bi bi-apple"></i> Get it on App Store</Button> */}
            {/* <Button variant="outline-info" className="rounded-pill"><i className="bi bi-google-play"></i> Get it on Google Play</Button> */}
            <Button variant="outline-info" className="rounded-pill">{text.nav.button}</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
	);
}
 
export default Navbase;