import React from 'react';
import CountdownTimer from './CountdownTimer';


function CountdownLogic(props) {

    var nextTourney = props.tourney
    var start_date = new Date(nextTourney.StartDate);
    var current_date = new Date();
    const INITIAL_COUNT = Math.round((start_date - current_date) / 1000);

    return (
        <CountdownTimer count={INITIAL_COUNT} tourneyName={nextTourney.Tourney} tourneyLogo={nextTourney.Logo} />
    )
}

export default CountdownLogic
