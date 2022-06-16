import React, { useState } from 'react';
import './LeaderboardItem.css';
import LeaderboardItemInfo from './Info/LeaderboardItemInfo';
import { getRkChange } from '../../../utils/utils';

function LeaderboardItem(props) {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <div className='leaderboard-item-container' onClick={() => setShowInfo(!showInfo)}>
            <div className='leaderboard-item-maininfo'>
                <div className='leaderboard-item-maininfo-rank'>{props.data.ShowRk}  {props.live ? getRkChange(props.data.RkChange) : <></>}</div>
                <div className='leaderboard-item-maininfo-teamname'>{props.data.Name}</div>
                <div className='leaderboard-item-maininfo-totaltopar'>{props.data.ScoreToPar}</div>
                <div className='leaderboard-item-maininfo-todaytopar'>{props.live ? props.data.LiveScore : props.data.CupPoints}</div>
                <div className='leaderboard-item-maininfo-todaythru'>{props.live ? props.data.LiveHoles : props.data.Earnings}</div>
            </div>
            {showInfo ? <LeaderboardItemInfo info={props.data} PGCstdg={props.PGCstdg} live={props.live} /> : <></>}
        </div >
    )
}

export default LeaderboardItem
