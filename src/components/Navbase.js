import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

const Navbase = () => {
	return (
		<Navbar
      expand="lg"
      // bg="dark" //remove if background color would be changed
      data-bs-theme="dark"
      style={{backgroundColor:'rgb(6,7,39)'}}
      >
      <Container>
        <Navbar.Brand href="#">Yoosh</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className=''>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#link">Card</Nav.Link>
						<Nav.Link href="#game">Game Benefits</Nav.Link>
						<Nav.Link href="#brands">Brands</Nav.Link>
						<Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#signin">Sign-up/Log-in</Nav.Link>
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
            <Button variant="outline-info" className="rounded-pill"><i className="bi bi-apple"></i> Get it on App Store</Button>
            <Button variant="outline-info" className="rounded-pill"><i className="bi bi-google-play"></i> Get it on Google Play</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
	);
}
 
export default Navbase;