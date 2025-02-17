import React from "react";
import { Container, Table, Image, Navbar, Nav } from "react-bootstrap";
import "../styles/Leaderboard.css"; // Import the CSS file
import mascotImage from "../assets/Guzuha-01.png"; // Add a mascot image
import guhuzaLogo from "../assets/logo.png"; // Import the logo image

// Sample leaderboard data
const leaderboardData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    score: 1500,
    rank: 1,
    badges: [
      { name: "Pro Player", emoji: "🏆" },
      { name: "Quiz Master", emoji: "🥇" },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    score: 1200,
    rank: 2,
    badges: [
      { name: "Job Seeker", emoji: "🧑‍💼" },
      { name: "Skill Master", emoji: "🧠" },
    ],
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    score: 1100,
    rank: 3,
    badges: [{ name: "Fast Learner", emoji: "⚡" }],
  },
];

// Total users (for display below the leaderboard)
const totalUsers = leaderboardData.length;

const Leaderboard = () => {
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

      {/* Leaderboard Content */}
      <Container className="leaderboard-container">
        <h2 className="text-center my-4">Leaderboard</h2>
        <Table striped bordered hover className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Email</th>
              <th>Score</th>
              <th>Badges Earned</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((user) => (
              <tr key={user.id}>
                <td>{user.rank}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.score}</td>
                <td>
                  {user.badges.map((badge, index) => (
                    <span key={index} className="badge-item">
                      {badge.emoji} {badge.name}
                      {index < user.badges.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Total Users Count */}
        <div className="total-users">
          <p>Total Users: {totalUsers}</p>
        </div>

        {/* Mascot Section */}
        <div className="mascot-container">
          <Image src={mascotImage} alt="Mascot" className="mascot-image" />
        </div>
      </Container>

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

export default Leaderboard;
