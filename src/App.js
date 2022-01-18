import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.css';

import NavBar from './components/Navbar'
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import Standings from './components/Standings';
import ErrorPage from './components/ErrorPage';
import Rulebook from './components/Rulebook';
import GolferStats from './components/GolferStats';
import History from './components/History';
// import Footer from './components/Footer';
import Tournament from './components/Tournament';

function App() {
  return (
    <Router>
      <NavBar />
      <Container className='main-page-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/tournament/:id" element={<Tournament />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/golferstats" element={<GolferStats />} />
          <Route path="/rulebook" element={<Rulebook />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
