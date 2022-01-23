import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.css';

import NavBar from './components/main/Navbar'
import Home from './components/pages/Home';
import Leaderboard from './components/pages/Leaderboard';
import Standings from './components/pages/Standings';
import ErrorPage from './components/pages/ErrorPage';
import Rulebook from './components/pages/Rulebook';
import GolferStats from './components/pages/GolferStats';
import History from './components/pages/History';
import Footer from './components/main/Footer';
import Tournament from './components/pages/Tournament';

function App() {
  return (
    <Router>
      <NavBar />
      <Container className='main-page-container'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/tournament/:tourneyId" element={<Tournament />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/golferstats" element={<GolferStats />} />
          <Route path="/rulebook" element={<Rulebook />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
