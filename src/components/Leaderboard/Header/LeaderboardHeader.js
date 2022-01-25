import React from 'react';

import './LeaderboardHeader.css';

function LeaderboardHeader(props) {

    return (
        <div id="tournament-header">
            <div className="tournament-header-header">
                <div className="tournament-header-logo"><img alt="Tournament logo" src={props.tourney.Logo}></img></div>
                <div className="tournament-header-tourneyname">{props.tourney.Tourney}</div>
                <div className="tournament-header-tourneydate">{props.tourney.Dates}</div>
                <div className="tournament-header-tourneycity">{props.tourney.Location}</div>
                <div className="tournament-header-tourneycourse">{props.tourney.Course}</div>
                <div className="tournament-header-tourneypar">{props.tourney.ShowPar}</div>
            </div>
        </div>
    )
};

export default LeaderboardHeader;
