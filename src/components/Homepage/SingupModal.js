import { Button, Form, Modal } from "react-bootstrap";

const SingupModal = (props) => {
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Signup for Early Access</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Reserve your slot by signing up with your email.</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleClose}>
            Subscribe!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
 
export default SingupModal;