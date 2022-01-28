import React from 'react';
import { useQuery } from 'react-query'
import CountdownTimer from './CountdownTimer';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

import { fetchCurrentTournamentInfo } from "../../utils/fetchData";


function CountdownLogic() {
    var countdownQuery = useQuery('Countdown', fetchCurrentTournamentInfo)

    if (countdownQuery.isError) { console.log(countdownQuery.error); }
    if (countdownQuery.isLoading) return <LoadingSpinner />;

    var currentTourney = countdownQuery.data
    var start_date = new Date(currentTourney.StartDate);
    var current_date = new Date();
    const INITIAL_COUNT = Math.round((start_date - current_date) / 1000);

    return (
        <CountdownTimer count={INITIAL_COUNT} tourneyName={currentTourney.Tourney} tourneyLogo={currentTourney.Logo} />
    )
}

export default CountdownLogic
