import React, { useState } from 'react'
import './StandingsItem.css'
import StandingsItemInfo from './Info/StandingsItemInfo'
import { getRkChange } from '../../../utils/utils'

function StandingsItem(props) {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <div className="standings-slot" onClick={() => setShowInfo(!showInfo)}>
            <div className="standings-rank">{props.info.ShowRk}</div>
            {getRkChange(props.info.RkChange)}
            <div className="standings-teamname">{props.info.TeamName}</div>
            <div className="standings-points">{props.info.Points}</div>
            <div className="standings-earnings">{props.info.Earnings}</div>
            {showInfo ? <StandingsItemInfo info={props.info} /> : <></>}
        </div>
    )
}

export default StandingsItem
