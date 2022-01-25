import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.css';

import NavBar from './containers/Navbar/Navbar'
import Footer from './containers/Footer/Footer';

import Home from './containers/Home/Home';
import ErrorPage from './containers/ErrorPage/ErrorPage';

import Live from './containers/Live/Live';
import Standings from './components/Standings/Standings';
import Rulebook from './containers/Rulebook/Rulebook';
import GolferStats from './containers/GolferStats/GolferStats';
import History from './containers/History/History';
import Tournament from './containers/Tournaments/Tournament';

import { TourneyContext } from './context/TournamentContext';

function App() {
  return (
    <TourneyContext>
      <Router>
        <NavBar />
        <Container className='main-page-container'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/leaderboard" element={<Live />} />
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
    </TourneyContext>
  );
}

export default App;
