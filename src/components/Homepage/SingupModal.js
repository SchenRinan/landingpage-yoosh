import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const SingupModal = (props) => {
  const [email, setEmail] = useState("");
  // const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("Email", email);
    // formData.append("Name", name);

    fetch("https://script.google.com/macros/s/AKfycbw8GLHVLrLBO7oDyqEAh4thvYOiqXlb1zQVuB5u_em6lgHqL1sK-86X7rqYUAwJNmgp/exec", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        console.log("Form data sent successfully!", response);
        // You can perform further actions upon successful submission
      })
      .catch((error) => {
        console.error("Error while submitting form data:", error);
      });
  };

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
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Subscribe!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
 
export default SingupModal;