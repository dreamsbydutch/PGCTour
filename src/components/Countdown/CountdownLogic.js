import React, { useEffect, useState } from 'react';
import CountdownTimer from './CountdownTimer';


function CountdownLogic(props) {

    const [count, setCount] = useState(0)

    useEffect(() => {
        const start_date = new Date(props.tourney.StartDate);
        const current_date = new Date();
        setCount(Math.round((start_date - current_date) / 1000))
    }, [props.tourney])

    return (
        <CountdownTimer count={count} tourneyName={props.tourney.Tourney} tourneyLogo={props.tourney.Logo} />
    )
}

export default CountdownLogic;