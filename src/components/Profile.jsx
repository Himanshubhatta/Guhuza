import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import profileImage from '../assets/Guzuha-03.png'; // Replace with the correct image path
import "../styles/Profile.css"; // Import the CSS file
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import guhuzaLogo from "../assets/logo.png"; // Import your mascot image

const ProfilePage = () => {
  // State to store user info
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [username, setUsername] = useState("john_doe");
  const [phone, setPhone] = useState("123-456-7890");
  const [address, setAddress] = useState("123 Main St, City, Country");
  const [image, setImage] = useState(profileImage); // Profile image state
  const [points, setPoints] = useState(1000); // Points state

  // State to control edit mode
  const [editMode, setEditMode] = useState(false);

  // Handle profile update
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setEditMode(false); // Exit edit mode after saving
    alert("Profile Updated Successfully!");
  };

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle logout
  const handleLogout = () => {
    alert("Logged out successfully");
    window.location.href = '/signup'; // Redirect to /signup
  };  

  return (
    <div>
      {/* Navbar - manually included */}
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

      {/* Profile Page Content */}
      <div className="profile-container">
        <Card className="profile-card">
          <Card.Body>
            {/* Profile Header */}
            <div className="profile-header">
              <img className="profile-image" src={image} alt="Profile" />
              <h3 className="small-font">{name}</h3>
              <p className="small-font">Email: {email}</p>
              <p className="small-font">Username: {username}</p>
              <p className="small-font">Phone: {phone}</p>
              <p className="small-font">Address: {address}</p>
            </div>

            {/* Stats Section */}
            <div className="stats-section">
              <div className="stats-card">
                <h5 className="small-font">Referrals</h5>
                <p className="small-font">50</p>
              </div>
              <div className="stats-card">
                <h5 className="small-font">Points</h5>
                <p className="small-font">{points}</p>
              </div>
              <div className="stats-card">
                <h5 className="small-font">Rank</h5>
                <p className="small-font">#10</p>
              </div>
            </div>

            {/* Conditionally Render Edit Profile Form or View Profile */}
            {editMode ? (
              <div className="edit-profile-form">
                <h4 className="small-font">Edit Profile</h4>
                <Form onSubmit={handleUpdateProfile}>
                  <Form.Group>
                    <Form.Label className="small-font">Change Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="small-font"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="small-font">Change Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number"
                      className="small-font"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="small-font">Change Address</Form.Label>
                    <Form.Control
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter your address"
                      className="small-font"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="small-font">Change Profile Picture</Form.Label>
                    <Form.Control
                      type="file"
                      onChange={handleImageChange}
                      accept="image/*"
                      className="small-font"
                    />
                  </Form.Group>
                  <Button type="submit" variant="primary" className="mt-3">
                    Save Changes
                  </Button>
                </Form>
              </div>
            ) : (
              <div className="profile-buttons">
                <Button variant="outline-primary" onClick={() => setEditMode(true)} className="mt-3">
                  Edit Profile
                </Button>
              </div>
            )}

            {/* Logout Button */}
            <div className="profile-buttons mt-3">
              <Button variant="outline-primary" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>

      {/* Footer - manually included */}
      <footer className="footer bg-dark text-white text-center py-4">
        <p className="small-font">&copy; 2025 Guhuza Quiz Game. All rights reserved.</p>
        <p className="small-font">
          <a href="/terms" className="text-white">Terms of Service</a> |{" "}
          <a href="/privacy" className="text-white">Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
};

export default ProfilePage;
