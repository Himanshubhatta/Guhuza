import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Refer from "./components/Refer";
import Profile from "./components/Profile";
import Badge from "./components/Badge";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="//refer-earn" element={<Refer />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Badges" element={<Badge />} />
        <Route path="/Leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
