import React from 'react';
import { Container } from 'react-bootstrap';

import CountdownLogic from '../main/CountdownLogic';
import './Home.css';

function Home() {

    return (
        <Container>
            <div className='home-nav-buttons'>
                <div className="home-nav-button standings-button rounded">
                    <a href="https://dreamsbydutch.github.io/pgctour/#/standings"><img alt='Standings Icon' src='https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/standingsIcon.png'></img></a>
                </div>
                <div className="home-nav-button leaderboard-button rounded">
                    <a href="https://dreamsbydutch.github.io/pgctour/#/leaderboard"><img alt='Leaderboard Icon' src='https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/leaderboardIcon.png'></img></a>
                </div>
                <div className="home-nav-button golferstats-button rounded">
                    <a href="https://dreamsbydutch.github.io/pgctour/#/golferstats"><img alt='Golfer Stats Icon' src='https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/golferstatsIcon.png'></img></a>
                </div>
            </div>
            <div className="countdown-timer">
                <CountdownLogic />
            </div>
        </Container>
    )
}

export default Home
