import React from 'react';
import useFetch from 'react-fetch-hook';
import Spinner from 'react-bootstrap/Spinner';

import './TournamentHeader.css';

function TournamentHeader(props) {

    const { isLoading, error, data } = useFetch("https://opensheet.elk.sh/1yw27UrtfNwCHFjPM3nZASXsnxWdptmRhuqe9xKJsSh8/1")
    if (isLoading) return <div className='loading-spinner'><Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner></div>;
    if (error) return "Error!";

    const filter_data = data.filter(obj => obj.id === props.tourneyId)

    return (
        <div id="tournament-header">
            <div className="tournament-header-header">
                <div className="tournament-header-logo"><img alt="Tournament logo" src={filter_data[0].Logo}></img></div>
                <div className="tournament-header-tourneyname">{filter_data[0].Tourney}</div>
                <div className="tournament-header-tourneydate">{filter_data[0].Dates}</div>
                <div className="tournament-header-tourneycity">{filter_data[0].Location}</div>
                <div className="tournament-header-tourneycourse">{filter_data[0].Course}</div>
                <div className="tournament-header-tourneypar">{filter_data[0].ShowPar}</div>
            </div>
        </div>
    )
};

export default TournamentHeader;
