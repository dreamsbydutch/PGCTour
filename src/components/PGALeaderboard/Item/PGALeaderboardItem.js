import React, { useState } from 'react';
import './PGALeaderboardItem.css';
import PGALeaderboardItemInfo from './Info/PGALeaderboardItemInfo';

function PGALeaderboardItem(props) {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <div className='pga-leaderboard-item-container' onClick={() => setShowInfo(!showInfo)}>
            <div className='pga-leaderboard-item-maininfo'>
                <div className='pga-leaderboard-item-maininfo-rank'>{props.info.Pos}</div>
                <div className='pga-leaderboard-item-maininfo-teamname'>{props.info.Player}</div>
                <div className='pga-leaderboard-item-maininfo-totaltopar'>{props.info.Score}</div>
                <div className='pga-leaderboard-item-maininfo-todaythru'>{props.live ? props.info.Thru ? props.info.Today + " (" + props.info.Thru + ")" : props.info.Teetime : props.info.Earnings}</div>
                <div className='pga-leaderboard-item-maininfo-usage'>{props.info.Usage}</div>
            </div>
            {showInfo ? <PGALeaderboardItemInfo info={props.info} /> : <></>}
        </div>
    )
}

export default PGALeaderboardItem
