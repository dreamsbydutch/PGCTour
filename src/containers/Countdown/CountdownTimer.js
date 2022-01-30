import React, { useEffect, useState } from 'react';
import './CountdownTimer.css';
import { useInterval, twoDigits } from '../../utils/countdown';


export default function CountdownApp(props) {

    const [secondsRemaining, setSecondsRemaining] = useState(props.count < 0 ? 0 : props.count);
    const [status, setStatus] = useState('Started');

    useEffect(() => {
        setSecondsRemaining(props.count < 0 ? 0 : props.count)
    }, [props.count])

    useInterval(
        () => {
            if (secondsRemaining > 0) {
                setSecondsRemaining(secondsRemaining - 1)
            } else {
                setStatus('Stopped')
            }
        },
        status === 'Started' ? 1000 : null,
    )

    const secondsToDisplay = secondsRemaining % 60
    const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60
    const minutesToDisplay = minutesRemaining % 60
    const hoursRemaining = (minutesRemaining - minutesToDisplay) / 60
    const hoursToDisplay = hoursRemaining % 24
    const daysToDisplay = (hoursRemaining - hoursToDisplay) / 24

    return (
        <div className="countdown-timer-container">
            <h1>Countdown until {props.tourneyName}</h1>
            <div className="row-container">
                <div className="tourney_logo">
                    <img alt="Tourney Logo" src={props.tourneyLogo} />
                </div>
                <div className="countdown-timer-div" style={{ padding: 20 }}>
                    {twoDigits(daysToDisplay)}:{twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:
                    {twoDigits(secondsToDisplay)}
                    <div className="mini-timer-labels">Days : Hours : Minutes : Seconds</div>
                </div>
            </div>
        </div>
    )
}
