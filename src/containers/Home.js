import React from 'react';
import CountdownLogic from '../components/CountdownLogic';
import Standings from './Standings';
import { usePGCTournaments } from '../utils/fetchData';
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorPage from './ErrorPage';
import ChampAlert from '../components/ChampAlert/ChampAlert'
import SignUpButton from '../components/SignUpButton'
// import SeasonSignUpButton from '../components/SeasonSignUpButton'
import Leaderboard from './Leaderboard';

function Home() {
    const tourneys = usePGCTournaments()

    if (tourneys.isLoading) { return <LoadingSpinner /> }
    if (tourneys.isError) { return <ErrorPage /> }
    return (
        <>
            {/* <SeasonSignUpButton url={"https://docs.google.com/forms/d/e/1FAIpQLSdkdLlEGI0QF1QiPrMBqzrOfFmyFSSfuzrTmAN9oXpJyiN4-A/viewform?usp=sf_link"} /> */}
            {tourneys.prevTourney && <ChampAlert tourney={tourneys.prevTourney} />}
            {tourneys.currentTourney &&
                <>
                    <a href="#/leaderboard">
                        <div className="my-8 py-4 px-1 rounded-2xl bg-gray-100">
                            <Leaderboard limit={10} link={false} />
                        </div>
                    </a>
                </>
            }
            {tourneys.nextTourney &&
                <>
                    <SignUpButton tourney={tourneys.nextTourney} />
                    <a href="#/leaderboard">
                        <CountdownLogic tourney={tourneys.nextTourney} />
                    </a>
                </>
            }
            <a href="#/standings">
                <div className="my-8 py-4 px-2 rounded-2xl bg-gray-100 shadow-md">
                    <Standings limit={10} />
                </div></a>
        </>
    )
}

export default Home
