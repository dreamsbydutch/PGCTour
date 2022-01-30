import React from 'react';
import './PGALeaderboard.css'
import PGALeaderboardItem from './Item/PGALeaderboardItem';

function PGALeaderboard(props) {
    return (
        <>
            <div id="pga-leaderboard-container">
                <div className="pga-leaderboard-item-labels">
                    <div className="pga-leaderboard-item-labels-rank">Rank</div>
                    <div className="pga-leaderboard-item-labels-teamname">Name</div>
                    <div className="pga-leaderboard-item-labels-totaltopar">Score</div>
                    <div className="pga-leaderboard-item-labels-todaythru">{props.live ? 'Thru' : 'Points'}</div>
                    <div className="pga-leaderboard-item-labels-usage">Usage</div>
                </div>
                {props.data.map(obj => <PGALeaderboardItem info={obj} key={obj.RawRk} live={props.live} />)}
            </div>
        </>
    )
}

export default PGALeaderboard
