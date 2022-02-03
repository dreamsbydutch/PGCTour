import React, { useState } from 'react';
import './GolferStatsItem.css'
import GolferStatsItemInfo from './Info/GolferStatsItemInfo';

function GolferStatsItem(props) {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <div className='golferstats-item-container' onClick={() => setShowInfo(!showInfo)}>
            <div className="golferstats-maininfo">
                <div className="golferstats-maininfo-rank">{props.data.Rank}</div>
                <div className="golferstats-maininfo-name">{props.data.GolferName}</div>
                <div className="golferstats-maininfo-rating">{props.data.PGCRtg}</div>
            </div>
            {showInfo ? <GolferStatsItemInfo data={props.data} /> : <></>}
        </div>
    )
}

export default GolferStatsItem
