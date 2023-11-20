import { useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";

const StoreEmail = () => {
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
    <div id='scroll-signup'>
      <Container className="text-white text-center">
        <h1 className="p-2 px-md-5 pt-md-5">Ready?</h1>
        <h6 className="p-2 px-md-5 col-md-8 m-auto">Reserve your slot by signing up with your email.</h6>
      </Container>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Col sm={12} md={6} className="mx-auto">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" type="submit">
              Subscribe
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default StoreEmail;
