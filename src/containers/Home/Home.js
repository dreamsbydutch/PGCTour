import React from 'react';
import './Home.css';
import { useQuery } from 'react-query';
import CountdownLogic from '../Countdown/CountdownLogic';
import Standings from '../Standings/Standings';
import { fetchCurrentTournamentInfo, fetchNextTournamentInfo, fetchPrevTournamentInfo } from '../../utils/fetchData';
import Live from '../Live/Live';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ErrorPage from '../ErrorPage/ErrorPage';
import ChampAlert from '../../components/ChampAlert/ChampAlert'

function Home() {
    var currentTourney = useQuery('LiveCurrentTourney', fetchCurrentTournamentInfo)
    var nextTourney = useQuery('LiveNextTourney', fetchNextTournamentInfo)
    var prevTourney = useQuery('LivePrevTourney', fetchPrevTournamentInfo)
    if (currentTourney.isError || nextTourney.isError || prevTourney.isError) { console.log(currentTourney.error, nextTourney.error, prevTourney.error); <ErrorPage /> }
    if (currentTourney.isLoading || nextTourney.isLoading || prevTourney.isLoading) return <LoadingSpinner />;
    var date = new Date(prevTourney.data.EndDate)
    date.setDate(date.getDate() + 4)

    return (
        <>
            {new Date(Date.now()) < date && new Date(Date.now()) > new Date(prevTourney.data.EndDate) && <ChampAlert data={prevTourney.data} />}
            {
                currentTourney.data.id === "" ?
                    <div className="countdown-timer">
                        <CountdownLogic />
                    </div> :
                    <a href="#/leaderboard">
                        <div className="homescreen-liveleaderboard">
                            <Live limit={10} />
                        </div>
                    </a>
            }
            <a href="#/standings">
                <div className="homescreen-standings">
                    <Standings limit={10} />
                </div></a>
        </>
    )
}

export default Home
