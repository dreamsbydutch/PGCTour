import React from 'react';
import { Dropdown, Button, ButtonGroup } from 'react-bootstrap';

import './LeaderboardHeader.css';

function LeaderboardHeader(props) {

    return (
        <div id="tournament-header">
            <div className="tournament-header-header">
                <div className="tournament-header-logo"><img alt="Tournament logo" src={props.tourney.Logo}></img></div>
                <div className="tournament-header-tourneyname">{props.tourney.Tourney}</div>
                <div className='tournament-header-toggleswitch'>
                    <Dropdown as={ButtonGroup}>
                        <Button variant="Secondary" href="/pgctour#/leaderboard" className="live-button">Live</Button>
                        <Dropdown.Toggle split variant="Secondary" id="dropdown-split-basic" className="tournament-toggle" />
                        <Dropdown.Menu>
                            <Dropdown.Item href="/pgctour#/tournament/6">The Masters</Dropdown.Item>
                            <Dropdown.Item href="/pgctour#/tournament/9">PGA Championship</Dropdown.Item>
                            <Dropdown.Item href="/pgctour#/tournament/11">U.S. Open</Dropdown.Item>
                            <Dropdown.Item href="/pgctour#/tournament/14">The Open Championship</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="/pgctour#/tournament/2">Genesis Invitational</Dropdown.Item>
                            <Dropdown.Item href="/pgctour#/tournament/3">Arnold Palmer Invitational</Dropdown.Item>
                            <Dropdown.Item href="/pgctour#/tournament/4">The Players Championship</Dropdown.Item>
                            <Dropdown.Item href="/pgctour#/tournament/10">The Memorial Tournament</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="/pgctour#/tournament/1">Waste Management Open</Dropdown.Item>
                            <Dropdown.Item href="/pgctour#/tournament/5">Valero Texas Open</Dropdown.Item>
                            <Dropdown.Item href="/pgctour#/tournament/7">Zurich Classic</Dropdown.Item>
                            <Dropdown.Item href="/pgctour#/tournament/8">Wells Fargo Championship</Dropdown.Item>
                            <Dropdown.Item href="/pgctour#/tournament/12">Travelers Championship</Dropdown.Item>
                            <Dropdown.Item href="/pgctour#/tournament/13">Genesis Scottish Open</Dropdown.Item>
                            <Dropdown.Item href="/pgctour#/tournament/15">Rocket Mortgage Classic</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="/pgctour#/tournament/16">Playoffs</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="tournament-header-tourneydate">{props.tourney.Dates}</div>
                <div className="tournament-header-tourneycity">{props.tourney.Location}</div>
                <div className="tournament-header-tourneycourse">{props.tourney.Course}</div>
                <div className="tournament-header-tourneypar">{props.tourney.ShowPar}</div>
            </div>
        </div>
    )
};

export default LeaderboardHeader;
