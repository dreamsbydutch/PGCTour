import React, { useState } from 'react'
import './StandingsItem.css'
import StandingsItemInfo from './Info/StandingsItemInfo'
import { getRkChange } from '../../../utils/utils'

function StandingsItem(props) {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <div className="standings-item-container" onClick={() => setShowInfo(!showInfo)}>
            <div className='standings-item-maininfo'>
                <div className="standings-item-maininfo-rank">{props.info.ShowRk}  {getRkChange(props.info.RkChange)}</div>
                <div className="standings-item-maininfo-name">{props.info.TeamName}</div>
                <div className="standings-item-maininfo-points">{props.info.Points}</div>
                <div className="standings-item-maininfo-earnings">{props.info.Earnings}</div>
            </div>
            {showInfo ? <StandingsItemInfo info={props.info} /> : <></>}
        </div>
    )
}

export default StandingsItem
