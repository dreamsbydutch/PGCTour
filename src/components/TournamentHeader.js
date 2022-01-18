import React from 'react';
import useFetch from 'react-fetch-hook';

import './TournamentHeader.css';

function TournamentHeader(props) {

    const { isLoading, error, data } = useFetch("https://opensheet.elk.sh/1ce6c0R9YggvfOxoilnZqqXfcAPxVKyaN0mly5_FOouk/3")
    if (isLoading) return "Loading....";
    if (error) return "Error!";

    const filter_data = data.filter(obj => Number(obj.id) === Number(props.tourneyId))
    console.log(filter_data, data)
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
