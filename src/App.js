import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.css';

import MobileNavbar from './containers/Navbar/MobileNavbar';
import Navbar from './containers/Navbar/Navbar';
import Footer from './containers/Footer/Footer';

import Home from './containers/Home/Home';
import ErrorPage from './containers/ErrorPage/ErrorPage';

import Live from './containers/Live/Live';
import Standings from './containers/Standings/Standings';
import Rulebook from './containers/Rulebook/Rulebook';
import GolferStats from './containers/GolferStats/GolferStats';
import History from './containers/History/History';
import Tournament from './containers/Tournaments/Tournament';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import TickerContainer from './components/Ticker/TickerContainer';

function App() {
  return (
    <Router>
      <ScrollToTop />
      {window.innerWidth < 850 ? <><TickerContainer /><MobileNavbar /></> : <Navbar />}
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
      {window.innerWidth < 850 ? <div style={{ 'color': '#fff' }}>.</div> : <Footer />}
    </Router >
  );
}

export default App;
