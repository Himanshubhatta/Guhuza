import React, { useState } from 'react';
import { Button, Form, Row, Col, Modal, Navbar, Nav, Container, Image, Card } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import "../styles/Refer.css"; // Import the CSS file
import guhuzaLogo from "../assets/logo.png"; // Import the logo image
import mascot from "../assets/welcome.png"; // Import the mascot image

const Refer = () => {
  const [referralLink] = useState('https://quizgame.com?ref=USER1234');
  const [referrals] = useState(5);
  const pointsPerReferral = 100;
  const totalPoints = referrals * pointsPerReferral;

  const [showModal, setShowModal] = useState(false);
  const [selectedApp, setSelectedApp] = useState("");

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      alert('Referral link copied!');
    });
  };

  const shareOnSocialMedia = (platform) => {
    const appDescription = "Join me on QuizGame, where you can test your skills and earn rewards! Here's my referral link:";
    const message = `${appDescription} ${referralLink}`;

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`, '_blank');
        break;
      case 'instagram':
        window.open(`https://www.instagram.com/?url=${encodeURIComponent(referralLink)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
        break;
      case 'tiktok':
        window.open(`https://www.tiktok.com/share?url=${encodeURIComponent(referralLink)}`, '_blank');
        break;
      default:
        break;
    }
  };

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

      {/* Refer & Earn Container */}
      <div className="refer-and-earn-container">
        <Card className="refer-card">
          <Card.Body>
            <Card.Title className="text-center mb-4">Refer & Earn</Card.Title>
            <Card.Text className="text-center mb-4">
              Share your unique referral link with friends and earn 100 points for every successful referral!
            </Card.Text>

            {/* 3D Mascot Image */}
            <div className="mascot-container text-center mb-4">
              <Image src={mascot} alt="Mascot" className="mascot-3d" />
            </div>

            <Row className="justify-content-center">
              <Col md={8}>
                <Form.Control
                  type="text"
                  value={referralLink}
                  readOnly
                  className="mb-3 form-control"
                  placeholder="Your referral link"
                />
              </Col>
              <Col md={4}>
                <Button onClick={copyToClipboard} variant="primary" className="w-100 button-copy">Copy Link</Button>
              </Col>
            </Row>

            <div className="social-media-buttons text-center mt-4">
              <Button variant="outline-primary" onClick={() => shareOnSocialMedia('facebook')} className="m-2">
                <FaFacebook /> Facebook
              </Button>
              <Button variant="outline-danger" onClick={() => shareOnSocialMedia('instagram')} className="m-2">
                <FaInstagram /> Instagram
              </Button>
              <Button variant="outline-success" onClick={() => shareOnSocialMedia('whatsapp')} className="m-2">
                <FaWhatsapp /> WhatsApp
              </Button>
              <Button variant="outline-dark" onClick={() => shareOnSocialMedia('tiktok')} className="m-2">
                <i className="fab fa-tiktok"></i> TikTok
              </Button>
            </div>

            <div className="app-description mt-4">
              <h5 className="text-center">About QuizGame</h5>
              <p className="text-center">
                QuizGame is an exciting platform that allows you to test your skills and challenge others through fun and engaging quizzes. By referring friends to join, you earn exclusive rewards. The more you refer, the more you earn!
              </p>
              <p className="text-center">
                To join QuizGame and start playing, click the link below:
              </p>
              <div className="text-center">
                <Button variant="success" onClick={() => window.open('/signup')}>
                  Join QuizGame
                </Button>
              </div>
            </div>

            <div className="rewards-summary mt-4 text-center">
              <h5>Your Referrals: {referrals}</h5>
              <p>You’ve earned {totalPoints} points from successful referrals!</p>
            </div>

            <div className="text-center">
              <Button variant="success" className="mt-4" onClick={handleShowModal}>Start Earning</Button>
            </div>
          </Card.Body>
        </Card>

        {/* Modal for Start Earning */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Start Earning</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Share your referral link with friends and earn rewards!</h5>
            <p>Your unique referral link:</p>
            <Form.Control
              type="text"
              value={referralLink}
              readOnly
              className="mb-3"
              placeholder="Your referral link"
            />

            <h6>Choose where to share your referral link:</h6>
            <div className="wallet-info">
              <p>In your wallet, you will earn points for every successful referral. You can share the link via:</p>
              <Button variant="outline-primary" onClick={() => setSelectedApp("facebook")}>
                Facebook
              </Button>
              <Button variant="outline-danger" onClick={() => setSelectedApp("instagram")}>
                Instagram
              </Button>
              <Button variant="outline-success" onClick={() => setSelectedApp("whatsapp")}>
                WhatsApp
              </Button>
              <Button variant="outline-dark" onClick={() => setSelectedApp("tiktok")}>
                TikTok
              </Button>
            </div>
            <p>Selected App: {selectedApp ? selectedApp : "None"}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
            <Button variant="primary" onClick={() => { shareOnSocialMedia(selectedApp); handleCloseModal(); }}>
              Share
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

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

export default Refer;
