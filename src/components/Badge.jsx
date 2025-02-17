import React, { useState } from "react";
import { Card, Button, Container, Row, Col, Navbar, Nav, Image, Modal } from "react-bootstrap";
import "../styles/Badge.css"; // Import the CSS for styling
import guhuzaLogo from "../assets/logo.png"; // Import the logo image

// Badge data (example badges with icons, descriptions, and benefits)
const allBadges = [
  { id: 1, name: "Job Seeker", description: "Complete your profile to begin your journey", emoji: "🧑‍💼", benefits: "Gain access to exclusive job listings.", tasks: "Complete your profile and submit it for review." },
  { id: 2, name: "Skill Master", description: "Answer skill-related questions correctly", emoji: "🧠", benefits: "Boost your job profile visibility.", tasks: "Answer at least 5 skill-related questions correctly." },
  { id: 3, name: "Pro Player", description: "Complete 10 quizzes", emoji: "🏆", benefits: "Showcase your expertise in the game.", tasks: "Complete 10 quizzes successfully." },
  { id: 4, name: "Fast Learner", description: "Answer 50 questions within a week", emoji: "⚡", benefits: "Increase your chances for job offers.", tasks: "Answer 50 questions within a 7-day period." },
  { id: 5, name: "Networking King", description: "Refer a friend to join the game", emoji: "🤝", benefits: "Earn bonus points for successful referrals.", tasks: "Refer at least 1 friend to the platform." },
  { id: 6, name: "Feedback Expert", description: "Provide feedback on 5 job postings", emoji: "💬", benefits: "Enhance your credibility with employers.", tasks: "Provide feedback on 5 job postings." },
  { id: 7, name: "Profile Perfectionist", description: "Complete all sections of your profile", emoji: "🔧", benefits: "Make your profile stand out to employers.", tasks: "Complete all profile sections and upload your resume." },
  { id: 8, name: "Quiz Master", description: "Achieve a score of 90% or higher in 3 quizzes", emoji: "🥇", benefits: "Gain trust from employers based on your expertise.", tasks: "Complete 3 quizzes with a score of 90% or higher." },
  { id: 9, name: "Leader of the Pack", description: "Reach the top 10 in the leaderboard", emoji: "🏅", benefits: "Employers will notice your skills.", tasks: "Reach the top 10 in the leaderboard." },
  { id: 10, name: "Top Referrer", description: "Refer 10 users to the platform", emoji: "📲", benefits: "Earn extra rewards and recognition.", tasks: "Refer 10 people to the platform." },
];

const Badge = () => {
  // Sample state: assume the user has earned these badges
  const [earnedBadges, setEarnedBadges] = useState([allBadges[0], allBadges[2], allBadges[7]]);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [selectedBadge, setSelectedBadge] = useState(null); // Store the selected badge details

  // Handle modal visibility
  const handleClose = () => setShowModal(false);
  const handleShow = (badge) => {
    setSelectedBadge(badge); // Set selected badge for modal
    setShowModal(true); // Show modal
  };

  return (
    <>
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

      {/* Badge Content */}
      <Container className="badges-page">
        <h2 className="text-center my-4">Badges</h2>
        <Row>
          {/* Earned Badges */}
          <Col md={6}>
            <h4>Your Earned Badges</h4>
            <div className="badges-list">
              {earnedBadges.map((badge) => (
                <Card key={badge.id} className="badge-card mb-3">
                  <Card.Body>
                    <span className="badge-emoji">{badge.emoji}</span> {/* Display the emoji */}
                    <h5>{badge.name}</h5>
                    <p>{badge.description}</p>
                    <small><strong>Benefits:</strong> {badge.benefits}</small>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>

          {/* Available Badges */}
          <Col md={6}>
            <h4>Available Badges</h4>
            <div className="badges-list">
              {allBadges.filter((badge) => !earnedBadges.includes(badge)).map((badge) => (
                <Card key={badge.id} className="badge-card mb-3">
                  <Card.Body>
                    <span className="badge-emoji">{badge.emoji}</span> {/* Display the emoji */}
                    <h5>{badge.name}</h5>
                    <p>{badge.description}</p>
                    <small><strong>Benefits:</strong> {badge.benefits}</small>
                    <Button variant="primary" className="mt-2" onClick={() => handleShow(badge)}>
                      Earn this Badge
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Modal to show tasks for earning badge */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How to Earn: {selectedBadge?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Task to Complete:</h5>
          <p>{selectedBadge?.tasks}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Got it!
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Footer */}
      <footer className="footer bg-dark text-white text-center py-4">
        <p>&copy; 2025 Guhuza Quiz Game. All rights reserved.</p>
        <p>
          <a href="/terms" className="text-white">Terms of Service</a> |{" "}
          <a href="/privacy" className="text-white">Privacy Policy</a>
        </p>
      </footer>
    </>
  );
};

export default Badge;
