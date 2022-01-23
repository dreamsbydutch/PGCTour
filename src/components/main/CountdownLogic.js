import React from 'react';
import useFetch from 'react-fetch-hook';
import Spinner from 'react-bootstrap/Spinner';
import CountdownTimer from './CountdownTimer';

function CountdownLogic() {

    const { isLoading, error, data } = useFetch("https://opensheet.elk.sh/1yw27UrtfNwCHFjPM3nZASXsnxWdptmRhuqe9xKJsSh8/1");
    if (isLoading) return <div className='loading-spinner'><Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner></div>;
    if (error) return "Error!";

    const filter_data = data.filter(obj => obj.id === 'C');
    var start_date = new Date(filter_data[0].StartDate);
    var current_date = new Date();
    const INITIAL_COUNT = Math.round((start_date - current_date) / 1000);

    return (
        <CountdownTimer count={INITIAL_COUNT} tourneyName={filter_data[0].Tourney} tourneyLogo={filter_data[0].Logo} />
    )
}

export default CountdownLogic
