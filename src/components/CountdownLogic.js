import React, { useEffect, useState } from 'react';
import { useInterval, twoDigits } from '../utils/countdown'
import { useWindowDimensions } from '../utils/utils';


export default function CountdownLogic(props) {

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



function CountdownTimer(props) {
    var { width } = useWindowDimensions()

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
        <div className="my-8 py-4 px-2 rounded-2xl bg-gray-100 shadow-md">
            <div className="py-4 text-center">
                <h1 className="font-bold text-2xl font-varela">Countdown until {props.tourneyName}</h1>
                <div className="w-full flex items-center justify-center py-3">
                    <div className="">
                        <img className="w-full max-h-28" alt="Tourney Logo" src={props.tourneyLogo} />
                    </div>
                    <div className="text-2xl font-bold font-varela" style={{ padding: 20 }}>
                        {twoDigits(daysToDisplay)}:{twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:
                        {twoDigits(secondsToDisplay)}
                        <div className="text-2xs">{width < 420 ? 'Days : Hrs : Mins : Secs' : 'Days : Hours : Minutes : Seconds'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}