import React from 'react';
import useFetch from 'react-fetch-hook';

// import Leaderboard from './Leaderboard';
import CountdownTimer from './CountdownTimer';
import './Home.css';

function Home() {


    const { isLoading, error, data } = useFetch("https://opensheet.elk.sh/1ce6c0R9YggvfOxoilnZqqXfcAPxVKyaN0mly5_FOouk/3");
    if (isLoading) return "Loading....";
    if (error) return "Error!";

    const filter_data = data.filter(obj => Number(obj.id) === Number('19'));
    var start_date = new Date(filter_data[0].StartDate);
    var current_date = new Date();
    const INITIAL_COUNT = Math.round((start_date - current_date) / 1000);


    return (
        <>
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
                <CountdownTimer count={INITIAL_COUNT} tourneyName={filter_data[0].Tourney} tourneyLogo={filter_data[0].Logo} />
            </div>
        </>
    )
}

export default Home
