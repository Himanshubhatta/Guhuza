import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal, ProgressBar, Image, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import guhuzaLogo from "../assets/logo.png";
import "../styles/Quiz.css";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0); 
  const [incorrectAnswers, setIncorrectAnswers] = useState(0); 
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [level, setLevel] = useState(1); // Dynamically set the level
  const [showLevelIntro, setShowLevelIntro] = useState(true); // State to control level intro
  const [showEndOfLevelMessage, setShowEndOfLevelMessage] = useState(false); // To show end-of-level message
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  // Fetch questions for the current level
  useEffect(() => {
    fetch(`/api/v2/quiz?level=${level}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data); 

        if (data.test && data.test.question && Array.isArray(data.test.question) && data.test.question.length > 0) {
          setQuestions(data.test.question); 
        } else {
          setError("No questions available.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
        setError("Failed to fetch questions.");
        setLoading(false);
      });
  }, [level]);

  const handleAnswerSelection = (answer) => {
    if (submitted) return; // Prevent changing answer after submission
  
    setSelectedAnswer(answer);
    setSubmitted(true); // Lock in the answer
  
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.answers[currentQuestion.test_answer]) {
      setScore(score + 1);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }
  };  

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setSubmitted(false); // Allow new selection
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowEndOfLevelMessage(true);
    }
  };  

  const handleLevelAction = (action) => {
    switch (action) {
      case 'next':
        setLevel(level + 1); // Go to the next level
        setCurrentQuestionIndex(0); // Reset to the first question for the next level
        setScore(0); // Reset score for next level
        setCorrectAnswers(0);
        setIncorrectAnswers(0);
        setShowEndOfLevelMessage(false);
        break;
      case 'restart':
        setCurrentQuestionIndex(0); // Restart current level
        setScore(0); // Reset score for current level
        setCorrectAnswers(0);
        setIncorrectAnswers(0);
        setShowEndOfLevelMessage(false);
        break;
      case 'home':
        navigate("/home"); // Go to home
        break;
      default:
        break;
    }
  };

  const handleCloseQuiz = () => {
    setShowConfirmation(true);
  };

  const confirmCloseQuiz = () => {
    navigate("/home");
  };

  // After the intro, transition to the quiz
  const startQuiz = () => {
    setShowLevelIntro(false);
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

      {/* Show Level Intro Message */}
      {showLevelIntro && (
        <Container className="level-intro-container">
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <h3>Welcome to Level {level}!</h3>
              <p>Get ready to start the quiz!</p>
              <Button onClick={startQuiz} className="start-quiz-btn">
                Start Quiz
              </Button>
            </Col>
          </Row>
        </Container>
      )}

      {/* Quiz Content */}
      {!showLevelIntro && !showEndOfLevelMessage && (
        <Container className="quiz-container">
          <Row>
            <Col md={12} className="d-flex justify-content-end">
              <Button variant="danger" className="close-btn" onClick={handleCloseQuiz}>
                ✖
              </Button>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={6} className="quiz-box text-center">
              <h4>Level {level}</h4>
              <ProgressBar now={((currentQuestionIndex + 1) / questions.length) * 100} label={`${currentQuestionIndex + 1}/${questions.length}`} />

              {/* Display the score and correct/incorrect answers */}
              <div className="score-info">
                <p>Score: {score}</p>
                <p>Correct Answers: {correctAnswers}</p>
                <p>Incorrect Answers: {incorrectAnswers}</p>
              </div>

              {loading && <div>Loading questions...</div>}
              {error && <div>{error}</div>}
              {questions.length > 0 && !loading && (
                <div className="question-container">
                  <h5>{questions[currentQuestionIndex]?.question}</h5>
                  <div className="options">

                  {questions[currentQuestionIndex]?.answers.map((option, index) => (
                      <Button
                        key={index}
                        variant={
                          submitted
                            ? option === questions[currentQuestionIndex].answers[questions[currentQuestionIndex].test_answer]
                              ? "success" // ✅ Correct answer = green
                              : option === selectedAnswer
                              ? "danger" // ❌ Incorrect selected answer = red
                              : "outline-secondary" // Other options remain gray
                            : selectedAnswer === option
                            ? "primary" // Before submission, selected answer = blue
                            : "outline-secondary"
                        }
                        onClick={() => handleAnswerSelection(option)}
                        className="option-btn"
                        disabled={submitted} // Disable selection after submission
                      >
                        {option}
                      </Button>
                   ))}

                  </div>
                </div>
              )}
              <Button className="next-btn" onClick={handleNextQuestion} disabled={!selectedAnswer}>
                Next
              </Button>
            </Col>
          </Row>
        </Container>
      )}

      {/* End of Level Message */}
      {showEndOfLevelMessage && (
        <Container className="level-end-container">
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <h3>Level {level} Completed!</h3>
              <p>Your Score: {score}/{questions.length}</p>
              <div className="level-actions">
                <Button onClick={() => handleLevelAction('next')} className="next-level-btn">Next Level</Button>
                <Button onClick={() => handleLevelAction('restart')} className="restart-level-btn">Restart Level</Button>
                <Button onClick={() => handleLevelAction('home')} className="go-home-btn">Go to Home</Button>
              </div>
            </Col>
          </Row>
        </Container>
      )}

      {/* Footer */}
      <footer className="footer bg-dark text-white text-center py-4">
        <p>&copy; 2025 Guhuza Quiz Game. All rights reserved.</p>
        <p>
          <a href="/terms" className="text-white">Terms of Service</a> |{" "}
          <a href="/privacy" className="text-white">Privacy Policy</a>
        </p>
      </footer>

      {/* Confirmation Modal for Closing Quiz */}
      <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Exit Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to exit the quiz?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmation(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmCloseQuiz}>
            Exit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default QuizPage;
