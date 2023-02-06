import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.css';

import MobileNavbar from './components/MobileNavbar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import TickerContainer from './components/Ticker/TickerContainer';
import ScrollToTop from './utils/ScrollToTop';

import Home from './containers/Home';
import ErrorPage from './containers/ErrorPage';
import Leaderboard from './containers/Leaderboard';
import Standings from './containers/Standings';
import Rulebook from './containers/Rulebook';
import GolferStats from './containers/GolferStats';
// import History from './containers/History/History';

function App() {
  return (
    <Router>
      <ScrollToTop />
      {window.innerWidth < 850 ? <><TickerContainer /><MobileNavbar /></> : <Navbar />}
      <Container className='main-page-container'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/tournament/:tourneyId" element={<Leaderboard />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/golferstats" element={<GolferStats />} />
          <Route path="/rulebook" element={<Rulebook />} />
          {/* <Route path="/history" element={<History />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
      {window.innerWidth < 850 ? <div style={{ 'color': '#fff' }}>.</div> : <Footer />}
    </Router >
  );
}

export default App;
