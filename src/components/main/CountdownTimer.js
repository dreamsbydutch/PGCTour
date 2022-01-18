import React, { useState, useEffect, useRef } from 'react';
import './CountdownTimer.css';


export default function CountdownApp(props) {

    const [secondsRemaining, setSecondsRemaining] = useState(props.count < 0 ? 0 : props.count);
    const [status, setStatus] = useState('Started');

    useInterval(
        () => {
            if (secondsRemaining > 0) {
                setSecondsRemaining(secondsRemaining - 1)
            } else {
                setStatus('Stopped')
            }
        },
        status === 'Started' ? 1000 : null,
        // passing null stops the interval
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

// source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
    const savedCallback = useRef()

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current()
        }
        if (delay !== null) {
            let id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}

// https://stackoverflow.com/a/2998874/1673761
const twoDigits = (num) => String(num).padStart(2, '0')