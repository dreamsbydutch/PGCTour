import React from 'react';
import './Leaderboard.css'
import { Container } from 'react-bootstrap';

import LeaderboardItem from './Item/LeaderboardItem';
import LeaderboardHeader from './Header/LeaderboardHeader';

function Leaderboard(props) {
    return (
        <>
            <LeaderboardHeader tourney={props.tourney} />
            <div id="tournament-leaderboard">
                <div className="tournament-leaderboard-slot-labels">
                    <div className="tournament-leaderboard-rank-label">Rank</div>
                    <div className="tournament-leaderboard-teamname-label">Name</div>
                    <div className="tournament-leaderboard-totaltopar-label">Score</div>
                    <div className="tournament-leaderboard-todaytopar-label">{props.live ? 'Today' : 'Pts'}</div>
                    <div className="tournament-leaderboard-todaythru-label">{props.live ? 'Thru' : '$$'}</div>
                </div>
                {props.data.map(obj => <LeaderboardItem info={obj} key={obj.RawRk} live={props.live} />)}
            </div>
        </>
    )
}

export default Leaderboard
