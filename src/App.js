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
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Container className='main-page-container'>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/leaderboard" exact element={<Leaderboard />} />
          <Route path="/tournament/:id" exact element={<Tournament />} />
          <Route path="/standings" exact element={<Standings />} />
          <Route path="/pgctour/golferstats" exact element={<GolferStats />} />
          <Route path="/pgctour/rulebook" exact element={<Rulebook />} />
          <Route path="/pgctour/history" exact element={<History />} />
          <Route path="*" exact element={<ErrorPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
