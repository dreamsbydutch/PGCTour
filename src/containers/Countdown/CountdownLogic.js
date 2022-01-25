import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import CountdownTimer from './CountdownTimer';
import { useNextTourney } from '../../context/TournamentContext';

function CountdownLogic() {
    const state = useNextTourney()

    if (state.isLoading) return <div className='loading-spinner'><Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner></div>;

    var currentTourney = state.state
    var start_date = new Date(currentTourney.StartDate);
    var current_date = new Date();
    const INITIAL_COUNT = Math.round((start_date - current_date) / 1000);

    return (
        <CountdownTimer count={INITIAL_COUNT} tourneyName={currentTourney.Tourney} tourneyLogo={currentTourney.Logo} />
    )
}

export default CountdownLogic
