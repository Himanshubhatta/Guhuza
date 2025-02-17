import React from "react";
import { Container, Row, Col, Image, Form, Button, Card, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../assets/Guzuha-01.png"; // Replace with your image paths
import Image2 from "../assets/Guzuha-03.png"; // Replace with your image paths
import Image3 from "../assets/des1.png";
import Image4 from "../assets/des2.jpeg";
import Image5 from "../assets/des3.jpg";
import mascot from "../assets/welcome.png"; // Replace with your image paths
import guhuzaLogo from "../assets/logo.png";
import "../styles/Home.css"; // Import the CSS file

const Home = () => {
  return (
    <div>
        {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/Home">
                      <Image src={guhuzaLogo} alt="Guhuza Logo" width="150" />
                    </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/Quiz">Play Quiz</Nav.Link>
              <Nav.Link href="/Badges">Badge</Nav.Link>
              <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
              <Nav.Link href="/refer-earn">Refer & Earn</Nav.Link>
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            </Nav>
        </Container>
      </Navbar>

      {/* Section 1: Hero Section */}
      <Container fluid className="home-container">
        <Row className="home-section justify-content-center">
          <Col md={5} className="d-flex justify-content-center align-items-center card-container">
            <Image
              src={mascot}
              alt="Mascot"
              width="100%"
              className="fade-in-left"
            />
          </Col>
          <Col md={5} className="d-flex justify-content-center align-items-center">
            <div className="text-center">
              <h2 className="fw-bold mb-3">Welcome to Guhuza Quiz Game</h2>
              <p className="text-muted">
                A fun and engaging quiz platform that helps job seekers show their
                skills and allows employers to find the best talent in no time!
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Section 2: Why Play */}
      <Container fluid className="home-container">
      <Row className="home-section justify-content-center">
      <Col md={5} className="d-flex justify-content-center align-items-center card-container">
            <div className="text-center">
              <h3 className="fw-bold mb-3">Why Play?</h3>
              <p className="text-muted">
                Guhuza offers job seekers an opportunity to showcase their skills
                through an interactive quiz. Compete with others and rise through
                the ranks while demonstrating your knowledge.
              </p>
            </div>
          </Col>
          <Col md={5} className="d-flex justify-content-center">
            <Image
              src={Image1}
              alt="Why Play"
              width="100%"
              className="fade-in-right"
            />
          </Col>
        </Row>
      </Container>

      {/* Section 3: Why Choose Us */}
      <Container fluid className="home-container">
      <Row className="home-section justify-content-center">
      <Col md={5} className="d-flex justify-content-center align-items-center card-container">
            <Image
              src={Image2}
              alt="Why Choose Us"
              width="100%"
              className="fade-in-left"
            />
          </Col>
          <Col md={5} className="d-flex justify-content-center align-items-center">
            <div className="text-center">
              <h3 className="fw-bold mb-3">Why Choose Us?</h3>
              <p className="text-muted">
                With Guhuza, you bypass the traditional hiring processes. Our
                innovative quiz system helps employers find qualified candidates
                faster while giving job seekers a fair chance to showcase their
                abilities.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Section 4: Benefits of Playing */}
      <Container fluid className="home-container">
      <Row className="home-section justify-content-center">
      <Col md={5} className="d-flex justify-content-center align-items-center card-container">
            <div className="text-center">
              <h3 className="fw-bold mb-3">Benefits of Playing</h3>
              <ul className="text-muted">
                <li>Showcase your skills in a fun and engaging way</li>
                <li>Compete with others and climb the leaderboard</li>
                <li>Get noticed by employers seeking talented candidates</li>
                <li>Enhance your knowledge through quizzes</li>
              </ul>
            </div>
          </Col>
          <Col md={5} className="d-flex justify-content-center">
            <Image
              src={Image3}
              alt="Benefits of Playing"
              width="100%"
              className="fade-in-right"
            />
          </Col>
        </Row>
      </Container>

      {/* Section 5: Employer Benefits */}
      <Container fluid className="home-container">
      <Row className="home-section justify-content-center">
      <Col md={5} className="d-flex justify-content-center align-items-center card-container">
            <Image
              src={Image4}
              alt="Employer Benefits"
              width="100%"
              className="fade-in-left"
            />
          </Col>
          <Col md={5} className="d-flex justify-content-center align-items-center">
            <div className="text-center">
              <h3 className="fw-bold mb-3">Employer Benefits</h3>
              <p className="text-muted">
                As an employer, you can access a pool of talented individuals
                and quickly assess their skills through our quiz-based platform.
                Save time on interviews and find the right candidate faster!
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Section 6: Call to Action */}
      <Container fluid className="home-container">
        <Row className="home-section justify-content-center">
          <Col md={5} className="d-flex justify-content-center align-items-center card-container">
            <div className="text-center">
              <h3 className="fw-bold mb-3">Ready to Start?</h3>
              <p className="text-muted">
                Join Guhuza today and take your first quiz! Whether you're a job
                seeker or an employer, we’ve got something for you.
              </p>
              <Button variant="dark" href="/Quiz">Start Playing</Button>
            </div>
          </Col>
          <Col md={5} className="d-flex justify-content-center">
            <Image
              src={Image5}
              alt="Ready To Start"
              width="100%"
              className="fade-in-right"
            />
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="footer bg-dark text-white text-center py-4">
        <p>&copy; 2025 Guhuza Quiz Game. All rights reserved.</p>
        <p>
          <a href="/terms" className="text-white">Terms of Service</a> |{" "}
          <a href="/privacy" className="text-white">Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
