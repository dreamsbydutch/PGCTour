import React from 'react';
import './Home.css';
import { useQuery } from 'react-query';
import CountdownLogic from '../../components/Countdown/CountdownLogic';
import Standings from '../Standings/Standings';
import { fetchCurrentTournamentInfo, fetchNextTournamentInfo, fetchPrevTournamentInfo } from '../../utils/fetchData';
import Live from '../Live/Live';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ErrorPage from '../ErrorPage/ErrorPage';
import ChampAlert from '../../components/ChampAlert/ChampAlert'
import SignUpButton from '../../components/SignUpButton/SignUpButton'
import StudioVideoDisplay from '../../components/StudioVideoDisplay/StudioVideoDisplay';

function Home() {
    var currentTourney = useQuery('LiveCurrentTourney', fetchCurrentTournamentInfo)
    var nextTourney = useQuery('LiveNextTourney', fetchNextTournamentInfo)
    var prevTourney = useQuery('LivePrevTourney', fetchPrevTournamentInfo)
    if (currentTourney.isError || nextTourney.isError || prevTourney.isError) { console.log(currentTourney.error, nextTourney.error, prevTourney.error); <ErrorPage /> }
    if (currentTourney.isLoading || nextTourney.isLoading || prevTourney.isLoading) return <LoadingSpinner />;
    var date = prevTourney.data ? new Date(prevTourney.data.EndDate) : new Date(2022, 0, 1)
    var datePlus = new Date(date)
    datePlus.setDate(date.getDate() + 4)
    return (
        <>
            <StudioVideoDisplay embedId="" />
            {new Date() < datePlus &&
                new Date() > date &&
                <ChampAlert tourney={prevTourney.data} />
            }
            {currentTourney.data ?
                <a href="#/leaderboard">
                    <div className="homescreen-liveleaderboard">
                        <Live limit={10} link={false} />
                    </div>
                </a> :
                <>
                    <SignUpButton data={nextTourney.data} />
                    <a href="#/leaderboard">
                        <CountdownLogic tourney={nextTourney.data} />
                    </a>
                </>
            }
            <a href="#/standings">
                <div className="homescreen-standings">
                    <Standings limit={10} />
                </div></a>
        </>
    )
}

export default Home
