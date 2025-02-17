import React, { useState } from "react";
import { Form, Button, Container, Card, Image, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import mascot from "../assets/welcome.png"; 
import guhuzaLogo from "../assets/logo.png";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Logged In:", user);
    alert("Login successful! (This is just a demo, no backend)");
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/">
            <Image src={guhuzaLogo} alt="Guhuza Logo" width="150" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login" active>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Login Form */}
      <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
        <Card className="p-4 shadow" style={{ width: "100%", maxWidth: "450px" }}>
          <div className="text-center mb-3">
            <Image src={mascot} alt="Mascot" width="80" height="80" className="mb-2" />
            <h2 className="fw-bold">Welcome Back!</h2>
          </div>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={user.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={user.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>

          <div className="text-center text-muted mt-3" style={{ fontSize: "0.9rem" }}>
            Don't have an account? <a href="/signup">Sign Up</a>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
