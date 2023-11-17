import { useState } from "react";
import { Button, Form } from "react-bootstrap";

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
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group> */}

        <Button variant="primary" type="submit">
          Subscribe
        </Button>
      </Form>
    </div>
  );
};

export default StoreEmail;
