import React from 'react';

// import Leaderboard from './Leaderboard';
import './Home.css';

function Home() {
    return (
        <div className='home-nav-buttons'>
            <div className="home-nav-button standings-button rounded">
                <img src='https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/standingsIcon.png'></img>
            </div>
            <div className="home-nav-button leaderboard-button rounded">
                <img src='https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/leaderboardIcon.png'></img>
            </div>

        </div>
    )
}

export default Home
