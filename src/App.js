import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { useLeagueData } from './utils/fetchData';
import LoadingSpinner from './components/LoadingSpinner'
import MobileNavbar from './components/MobileNavbar';
// import Navbar from './components/Navbar/Navbar';
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
  const data = useLeagueData()

  if (data.isLoading) { return <LoadingSpinner /> }
  if (data.isError) { return <ErrorPage /> }
  if (!data.allTourneys || !data.standings || !data.golferStats) { return <ErrorPage /> }
  
  return (
    <Router>
      <ScrollToTop />
      {window.innerWidth < 850 ? <><TickerContainer data={data.currentTourney ? data.currentTourney : data.standings} /><MobileNavbar /></> : <MobileNavbar />}
      <div className='p-3 mx-auto max-w-3xl min-h-screen'>
        <Routes>
          <Route exact path="/" element={<Home data={data} />} />
          <Route path="/leaderboard" element={<Leaderboard data={data} />} />
          <Route path="/leaderboard/:tourneyId" element={<Leaderboard data={data} />} />
          <Route path="/standings" element={<Standings data={data} />} />
          <Route path="/golferstats" element={<GolferStats data={data.golferStats} />} />
          <Route path="/rulebook" element={<Rulebook />} />
          {/* <Route path="/history" element={<History />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      {window.innerWidth < 850 ? <div style={{ 'color': '#fff' }}>.</div> : <Footer />}
    </Router >
  );
}

export default App;
