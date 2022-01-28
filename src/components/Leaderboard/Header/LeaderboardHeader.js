import React from 'react';
import { Dropdown, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './LeaderboardHeader.css';

function LeaderboardHeader(props) {
    return (
        <div id="leaderboard-header">
            <div className="leaderboard-header-container">
                <div className="leaderboard-header-logo"><img alt="Tournament logo" src={props.tourney.Logo}></img></div>
                <div className="leaderboard-header-tourneyname">{props.tourney.Tourney}</div>
                <div className='leaderboard-header-toggleswitch'>
                    <Dropdown as={ButtonGroup}>
                        <Button as={Link} variant="Secondary" to="/leaderboard" className="leaderboard-header-live-button">Live</Button>
                        <Dropdown.Toggle split variant="Secondary" id="dropdown-split-basic" className="leaderboard-header-tournament-toggle" />
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/tournament/6">The Masters</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/tournament/9">PGA Championship</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/tournament/11">U.S. Open</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/tournament/14">The Open Championship</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item as={Link} to="/tournament/2">Genesis Invitational</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/tournament/3">Arnold Palmer Invitational</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/tournament/4">The Players Championship</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/tournament/10">The Memorial Tournament</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item as={Link} to="/tournament/1">Waste Management Open</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/tournament/5">Valero Texas Open</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/tournament/7">Zurich Classic</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/tournament/8">Wells Fargo Championship</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/tournament/12">Travelers Championship</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/tournament/13">Genesis Scottish Open</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/tournament/15">Rocket Mortgage Classic</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item as={Link} to="/tournament/16">Playoffs</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="leaderboard-header-tourneydate">{props.tourney.Dates}</div>
                <div className="leaderboard-header-tourneycity">{props.tourney.Location}</div>
                <div className="leaderboard-header-tourneycourse">{props.tourney.Course}</div>
                <div className="leaderboard-header-tourneypar">{props.tourney.ShowPar}</div>
            </div>
        </div>
    )
};

export default LeaderboardHeader;
