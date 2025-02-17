import React, { useState } from "react";
import { Form, Button, Container, Card, Image, Navbar, Nav, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import mascot from "../assets/welcome.png"; // Ensure mascot file is inside src/assets/
import guhuzaLogo from "../assets/logo.png"; // Your Guhuza logo file path
import jobImage from "../assets/job.jpg"; // Image for the right side section

const Signup = () => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Signed Up:", user);
    alert("Signup successful! (This is just a demo)");
    navigate("/login");
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={guhuzaLogo} alt="Guhuza Logo" width="150" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="#signup" active>
              Signup
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Signup Form Container */}
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
    <Row className="w-100">
          {/* Left Column: Signup Form */}
          <Col md={6} className="d-flex justify-content-center">
      <Card className="p-4 shadow" style={{ width: "100%", maxWidth: "450px" }}>
        
        {/* Header with Mascot */}
        <div className="text-center mb-3">
          <Image src={mascot} alt="Mascot" width="80" height="80" className="mb-2" />
          <h2 className="fw-bold">Welcome to Guhuza Quiz Game!</h2>
        </div>

        {/* Game Description */}
        <p className="text-center text-muted">
          A fun and engaging quiz platform inspired by Guhuza.com. Test your knowledge and compete with others!
        </p>

        {/* Signup Form */}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter username"
              value={user.username}
              onChange={handleChange}
              required
            />
          </Form.Group>

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
            Sign Up
          </Button>
        </Form>

        {/* Footer */}
        <div className="text-center text-muted mt-3" style={{ fontSize: "0.9rem" }}>
          Join now and start the challenge! 🎯
        </div>
        <div className="text-center text-muted mt-3" style={{ fontSize: "0.9rem" }}>
  Already have an account? <a href="/login">Login</a>
</div>

      </Card>
      </Col>
      <Col md={6} className="d-flex flex-column justify-content-center align-items-center p-4">
            <div className="text-center mb-4">
              <h3 className="fw-bold">
              Are you ready to rise through the ranks and become a quiz champion?
              </h3>
              <p className="text-muted">
              Join Guhuza’s quiz platform and put your knowledge to the test. 
              Compete in exciting quizzes, climb the leaderboard, and show off your skills.
              </p>
              <p className="text-muted">
              The more you play, the better you get. Are you up for the challenge?
              </p>
            </div>
            <Image src={jobImage} alt="Job Opportunities" width="80%" className="mt-3" />
          </Col>
        </Row>
    </Container>
    <footer className="bg-dark text-white py-3 mt-4">
        <Container className="text-center">
          <p>© 2025 Guhuza Quiz Game - All rights reserved</p>
        </Container>
      </footer>
    </div>
  );
};

export default Signup;
