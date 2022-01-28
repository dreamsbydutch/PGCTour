import React, { useState } from 'react';
import './LeaderboardItem.css';
import LeaderboardItemInfo from './Info/LeaderboardItemInfo';
import { getRkChange } from '../../../utils/utils';

function LeaderboardItem(props) {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <div className='leaderboard-item-container' onClick={() => setShowInfo(!showInfo)}>
            <div className='leaderboard-item-maininfo'>
                <div className='leaderboard-item-maininfo-rank'>{props.info.ShowRk}  {getRkChange(props.info.RkChange)}</div>
                <div className='leaderboard-item-maininfo-teamname'>{props.info.Name}</div>
                <div className='leaderboard-item-maininfo-totaltopar'>{props.info.ScoreToPar}</div>
                <div className='leaderboard-item-maininfo-todaytopar'>{props.live ? props.info.LiveScore : props.info.Points}</div>
                <div className='leaderboard-item-maininfo-todaythru'>{props.live ? props.info.LiveHoles : props.info.Earnings}</div>
            </div>
            {showInfo ? <LeaderboardItemInfo info={props.info} /> : <></>}
        </div>
    )
}

export default LeaderboardItem
