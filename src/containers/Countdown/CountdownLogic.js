import React from 'react';
import { useQuery } from 'react-query'
import CountdownTimer from './CountdownTimer';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

import { fetchNextTournamentInfo } from "../../utils/fetchData";
import ErrorPage from '../ErrorPage/ErrorPage';


function CountdownLogic() {
    var countdownQuery = useQuery('Countdown', fetchNextTournamentInfo)

    if (countdownQuery.isError) { console.log(countdownQuery.error); <ErrorPage /> }
    if (countdownQuery.isLoading) return <LoadingSpinner />;

    var nextTourney = countdownQuery.data
    var start_date = new Date(nextTourney.StartDate);
    var current_date = new Date();
    const INITIAL_COUNT = Math.round((start_date - current_date) / 1000);

    return (
        <CountdownTimer count={INITIAL_COUNT} tourneyName={nextTourney.Tourney} tourneyLogo={nextTourney.Logo} />
    )
}

export default CountdownLogic
