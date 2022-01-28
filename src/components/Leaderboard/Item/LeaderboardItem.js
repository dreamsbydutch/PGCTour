import React, { useState } from 'react';
import './LeaderboardItem.css';
import LeaderboardItemInfo from './Info/LeaderboardItemInfo';

function LeaderboardItem(props) {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <div className='tournament-leaderboard-slot-container' onClick={() => setShowInfo(!showInfo)}>
            <div className='tournament-leaderboard-slot'>
                <div className='tournament-leaderboard-rank'>{props.info.ShowRk}</div>
                <div xs={5} className='tournament-leaderboard-teamname'>{props.info.Name}</div>
                <div className='tournament-leaderboard-totaltopar'>{props.info.ScoreToPar}</div>
                <div className='tournament-leaderboard-todaytopar'>{props.live ? props.info.LiveScore : props.info.Points}</div>
                <div className='tournament-leaderboard-todaythru'>{props.live ? props.info.LiveHoles : props.info.Earnings}</div>
            </div>
            {showInfo ? <LeaderboardItemInfo info={props.info} /> : <></>}
        </div>
    )
}

export default LeaderboardItem
