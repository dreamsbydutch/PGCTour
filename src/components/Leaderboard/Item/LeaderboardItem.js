import React, { useState } from 'react';
import './LeaderboardItem.css';
import LeaderboardItemInfo from './Info/LeaderboardItemInfo';

function LeaderboardItem(props) {
    const [showInfo, setShowInfo] = useState(false)
    const onClick = () => setShowInfo(!showInfo)

    return (
        <div className='tournament-leaderboard-container' onClick={onClick}>
            <div className='tournament-leaderboard-slot'>
                <div className='tournament-leaderboard-rank'>{props.info.ShowRk}</div>
                <div xs={5} className='tournament-leaderboard-teamname'>{props.info.Name}</div>
                <div className='tournament-leaderboard-totaltopar'>{props.info.ScoreToPar}</div>
                <div className='tournament-leaderboard-cuppoints'>{props.info.LiveScore}</div>
                <div className='tournament-leaderboard-earnings'>{props.info.LiveHoles}</div>
            </div>
            {showInfo ? <LeaderboardItemInfo info={props.info} /> : <></>}
        </div>
    )
}

export default LeaderboardItem
