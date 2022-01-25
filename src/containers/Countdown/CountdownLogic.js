import React from 'react';
import CountdownTimer from './CountdownTimer';
import { useNextTourney } from '../../context/TournamentContext';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

function CountdownLogic() {
    const state = useNextTourney()

    if (state.isLoading) return <LoadingSpinner />;

    var currentTourney = state.state
    var start_date = new Date(currentTourney.StartDate);
    var current_date = new Date();
    const INITIAL_COUNT = Math.round((start_date - current_date) / 1000);

    return (
        <CountdownTimer count={INITIAL_COUNT} tourneyName={currentTourney.Tourney} tourneyLogo={currentTourney.Logo} />
    )
}

export default CountdownLogic
