import React, { useState } from 'react'
import './StandingsItem.css'
import StandingsItemInfo from './Info/StandingsItemInfo'

function StandingsItem(props) {
    const [showInfo, setShowInfo] = useState(false)
    const onClick = () => setShowInfo(!showInfo)

    return (
        <div className="standings-slot" onClick={onClick}>
            <div className="standings-rank">{props.info.ShowRk}</div>
            <div className="standings-rankchange">{props.info.RkChange}</div>
            <div className="standings-teamname">{props.info.TeamName}</div>
            <div className="standings-points">{props.info.Points}</div>
            <div className="standings-earnings">{props.info.Earnings}</div>
            {showInfo ? <StandingsItemInfo info={props.info} /> : <></>}
        </div>
    )
}

export default StandingsItem
